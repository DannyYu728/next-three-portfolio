import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { Suspense, useState } from 'react'
import { Vector3 } from 'three'
import { useColorModeValue, Box } from '@chakra-ui/react'
import {
  Planet,
  Sun,
  AsteroidBelt,
  SaturnRing
} from '../lib/Models/SpaceModels'
import SpeechBubble from '../components/SpeechBubble'
import { SpaceShip, Building } from '../lib/Models/Models'
import { CelestialsObject } from '../lib/celestialObjectsArray'
import { CustomStars } from '../lib/Models/CustomStars'
import { CustomOrbitControls } from '../components/MyCamera'
import { Popup } from '../components/PopUp'
import { useRouter } from 'next/router'

function Home() {
  const earthPosition = new Vector3(0, 0, 0)
  const bgColor = useColorModeValue('#202023', '#202023')
  const [showPopup, setShowPopup] = useState(false)
  const router = useRouter()

  function handlePopupAction(action) {
    if (action === 'confirm') {
      router.push('/project')
    }
    setShowPopup(false)
  }
  return (
    <Box bg={bgColor}>
      {showPopup && (
        <Popup onConfirm={handlePopupAction} onCancel={handlePopupAction} />
      )}
      <Canvas
        style={{ width: '100vw', height: '100vh' }}
        gl={{ antialias: true }}
      >
        <PerspectiveCamera
          near={1}
          makeDefault
          fov={90}
          position={[15, 15, 15]}
          far={10000}
        />
        <CustomStars
          radius={300}
          depth={600}
          count={6000}
          factor={20}
          fade
          speed={1}
        />
        <CustomOrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={2} position={[5, 6, 20]} />
        <Suspense fallback={null}>
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
          <AsteroidBelt count={5000} />
          <SaturnRing />
          <Building
            scene="/models/chinese_house/scene.gltf"
            scale={[0.5, 0.5, 0.5]}
            position={[-0.5, 4.85, 0]}
            rotation={[0, Math.PI / 5, 0]}
            handleClick={() => setShowPopup(true)}
          />
          <Building
            scene="/models/guest_house/scene.gltf"
            scale={[0.2, 0.2, 0.2]}
            position={[-10.5, 7.5, 2.5]}
            rotation={[0, Math.PI / 5, 0]}
            handleClick={() => setShowPopup(true)}
          />
          <SpaceShip position={[0, 0, 0]} size={0.5} orbit />
          <SpeechBubble msg="Hi, Click me to see more!" />
        </Suspense>
      </Canvas>
    </Box>
  )
}

export default Home
