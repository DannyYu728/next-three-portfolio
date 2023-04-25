import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Preload } from '@react-three/drei'
import { Suspense, useState } from 'react'
import { useColorModeValue } from '@chakra-ui/react'
import { Popup } from '../components/PopUp'
import { LandscapeModel } from '../lib/Models/Landscape'
import { CustomOrbitControls } from '../components/MyCamera'
const Inside = () => {
  const dayNight = useColorModeValue('sun', 'moon')
  const [showPopup, setShowPopup] = useState(false)

  function handlePopupAction() {
    setShowPopup(!showPopup)
  }
  return (
    <>
    {showPopup && <Popup handlePopupAction={handlePopupAction} href="/" />}
    <Canvas
      key={dayNight}
      style={{ width: '100vw', height: '100vh' }}
      gl={{ antialias: true }}
    >
      <PerspectiveCamera
        makeDefault
        near={20}
        fov={90}
        position={[-500, 1000, 1000]}
        far={5000}
      />
      <CustomOrbitControls min={100} max={900} />
      <Suspense fallback={null}>
        <LandscapeModel
          url="/models/cyberpunk_micro-apartments/scene.gltf"
          position={[0, 0, 0]}
          scale={100}
        />
        <Preload all />
      </Suspense>
    </Canvas>
  </>

  )
}

export default Inside