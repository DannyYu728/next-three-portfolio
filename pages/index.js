import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Box as BoxModel } from '@react-three/drei'
import { Suspense, useState, useCallback, memo } from 'react'
import { Vector3, MeshBasicMaterial } from 'three'
import { useColorModeValue, Box } from '@chakra-ui/react'
import {
  Planet,
  Sun,
  AsteroidBelt,
  SaturnRing
} from '../lib/Models/SpaceModels'
import SpeechBubble from '../components/SpeechBubble'
import { SpaceShip, BasicModel } from '../lib/Models/Models'
import { CelestialsObject } from '../lib/celestialObjectsArray'
import { CustomStars } from '../lib/Models/CustomStars'
import { CustomOrbitControls } from '../components/MyCamera'
import { Popup } from '../components/PopUp'
import { CustomLoader } from '../components/CustomLoader'

const Home = memo(({ handlePopupAction }) => {
  const earthPosition = new Vector3(0, 0, 0)
  const bgColor = useColorModeValue('#202023', '#202023')

  const inputMaterial = new MeshBasicMaterial({
    color: 'rgb(108, 122, 137)',
    transparent: true,
    opacity: 0.0
  })

  return (
    <Box bg={bgColor}>
      <Canvas
        style={{ width: '100vw', height: 'calc(100vh - 80px)' }}
        gl={{ antialias: true }}
      >
        <PerspectiveCamera
          near={1}
          makeDefault
          fov={90}
          position={[15, 15, 15]}
          far={8000}
        />
        <CustomOrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={2} position={[5, 6, 20]} />
        <Suspense fallback={null}>
          <CustomStars
            radius={300}
            depth={600}
            count={3000}
            factor={30}
            fade
            speed={1}
          />
          {CelestialsObject.map((item, idx) => (
            <Planet
              textureUrl={item.textureUrl}
              position={item.position}
              size={item.size}
              key={idx}
              orbitTarget={item.name === 'Moon' ? earthPosition : undefined}
              orbitSpeed={item.name === 'Moon' ? 0.002 : undefined}
            />
          ))}
          <Sun />
          <AsteroidBelt count={3000} />
          <SaturnRing />
          <BasicModel
            scene="/models/chinese_house/scene.gltf"
            scale={[0.5, 0.5, 0.5]}
            position={[-0.5, 4.85, 0]}
            rotation={[0, Math.PI / 5, 0]}
            hoverEnabled={true}
          />
          <BasicModel
            scene="/models/guest_house/scene.gltf"
            scale={[0.2, 0.2, 0.2]}
            position={[-10.5, 7.5, 2.5]}
            rotation={[0, Math.PI / 5, 0]}
          />
          <SpaceShip position={[0, 0, 0]} size={0.5} orbit />
          <SpeechBubble msg="Hi, Click the house to Land!" />
          <BoxModel
            args={[2, 5, 2.5]}
            material={inputMaterial}
            position={[-0.28, 4.85, 0.3]}
            rotation={[0, Math.PI / 5, 0]}
            onClick={handlePopupAction}
          />
        </Suspense>
        <CustomLoader />
      </Canvas>
    </Box>
  )
})

function HomePageWrapper() {
  const [showPopup, setShowPopup] = useState(false)
  const handlePopupAction = useCallback(() => setShowPopup(prev => !prev), [])

  return (
    <>
      {showPopup && (
        <Popup
          handlePopupAction={handlePopupAction}
          href="/town"
          text={'Enter the Town?'}
        />
      )}
      <Home handlePopupAction={handlePopupAction} />
    </>
  )
}
Home.displayName = 'Home'
export default HomePageWrapper
