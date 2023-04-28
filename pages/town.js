import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Stars, Preload, Box } from '@react-three/drei'
import { Suspense, useState, memo, useCallback } from 'react'
import { useColorModeValue } from '@chakra-ui/react'
import { MeshBasicMaterial, DoubleSide } from 'three'
import { Popup } from '../components/PopUp'
import { LandscapeModel } from '../lib/Models/Landscape'
import { Character, SpaceShip, BasicModel } from '../lib/Models/Models.js'
import { CustomOrbitControls } from '../components/MyCamera'
import { Planet, Sun } from '../lib/Models/SpaceModels'
import { CelestialsObject } from '../lib/celestialObjectsArray'
import SpeechBubble from '../components/SpeechBubble'

const Town = memo(({ handlePopupAction }) => {
  const dayNight = useColorModeValue('sun', 'moon')

  const inputMaterial = new MeshBasicMaterial({
    color: 'rgb(108, 122, 137)',
    transparent: true,
    side: DoubleSide,
    opacity: 0.2
  })

  return (
    <Canvas
      key={dayNight}
      style={{ width: '100vw', height: 'calc(100vh - 80px)' }}
      gl={{ antialias: true }}
    >
      <ambientLight intensity={0.15} />
      <directionalLight intensity={1.5} position={[-2500, 800, -1000]} />
      <PerspectiveCamera
        makeDefault
        near={20}
        fov={90}
        position={[380, 350, 500]}
        far={10000}
      />
      <CustomOrbitControls min={120} max={1600} />
      <Suspense fallback={null}>
        {dayNight === 'sun' ? (
          <Sun position={[-3000, 800, -1000]} sunSize={200} />
        ) : (
          <Planet
            textureUrl={CelestialsObject[3].textureUrl}
            position={[-3000, 800, -1000]}
            size={200}
            orbitTarget={undefined}
            orbitSpeed={undefined}
          />
        )}
        <Stars
          radius={1300}
          depth={550}
          count={8000}
          factor={40}
          fade
          speed={1}
        />
        <Character />
        <SpaceShip
          position={[0, 120, 2000]}
          size={120}
          rotation={[0, Math.PI / 1, 0]}
        />
        <BasicModel
          scene="/models/chinese_house/scene.gltf"
          scale={[50, 50, 50]}
          position={[-4, 0, 0]}
          rotation={[0, Math.PI / 5000, 0]}
          hoverEnabled={true}
        />
        <SpeechBubble
          msg="Hi, Click the house to Enter!"
          scale={[160, 40, 20]}
          height={300}
        />
        <LandscapeModel
          url="/models/little_game_town/scene.gltf"
          position={[0, -2, 0]}
          scale={10}
        />
        <Box
          args={[200, 200, 300]}
          material={inputMaterial}
          position={[-4, 100, 0]}
          // rotation={[0, Math.PI / 5, 0]}
          onClick={handlePopupAction}
        />
        <Preload all />
      </Suspense>
    </Canvas>
  )
})

function TownPageWrapper() {
  const [showPopup, setShowPopup] = useState(false)
  const handlePopupAction = useCallback(() => setShowPopup(prev => !prev), [])

  return (
    <>
      {showPopup && (
        <Popup
          handlePopupAction={handlePopupAction}
          href="/room"
          text={'Enter Building?'}
        />
      )}
      <Town handlePopupAction={handlePopupAction} />
    </>
  )
}
Town.displayName = 'TownPage'

export default TownPageWrapper
