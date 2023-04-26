import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Preload } from '@react-three/drei'
import { Suspense } from 'react'
import { useColorModeValue } from '@chakra-ui/react'
import { LandscapeModel } from '../lib/Models/Landscape'
import { BasicModel } from '../lib/Models/Models'
import { CustomOrbitControls } from '../components/MyCamera'
import FloatingSphere from '../components/FloatBubble'

const Room = () => {
  const dayNight = useColorModeValue('sun', 'moon')

  return (
    <Canvas
      key={dayNight}
      style={{ width: '100vw', height: '100vh' }}
      gl={{ antialias: true }}
    >
      <ambientLight intensity={1} />
      <PerspectiveCamera
        makeDefault
        near={20}
        fov={90}
        position={[-500, 1000, 1000]}
        far={5000}
      />
      <CustomOrbitControls min={100} max={900} />
      <Suspense fallback={null}>
        <FloatingSphere
          link="/project"
          message="My Projects"
          position={[185, 110, 218]}
          size={20}
          color="yellow"
        />
        <FloatingSphere
          link="/about"
          message="Learn more about me!"
          position={[80, 100, -140]}
          size={20}
          color="blue"
        />
        <FloatingSphere
          link="/contact"
          message="Leave a message!"
          position={[-45, 275, -200]}
          size={20}
          color="green"
        />
        <FloatingSphere
          link="/"
          message="Exit"
          position={[-205, 250, -350]}
          size={20}
          color="red"
        />
        <LandscapeModel
          url="/models/cyberpunk_micro-apartments/scene.gltf"
          position={[0, 0, 0]}
          scale={100}
        />
        <BasicModel
          scene="/models/holoconsole/scene.gltf"
          scale={[50, 50, 50]}
          position={[-4, 0, 0]}
          rotation={[0, Math.PI / 5000, 0]}
        />
        <BasicModel
          scene="/models/holotable/scene.gltf"
          scale={[50, 50, 50]}
          position={[-4, 0, 0]}
          rotation={[0, Math.PI / 5000, 0]}
        />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default Room
