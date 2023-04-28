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
      style={{ width: '100vw', height: 'calc(100vh - 80px)' }}
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
          color="rgba(93, 220, 249, 1)"
        />
        <FloatingSphere
          link="/about"
          message="Learn more about me!"
          position={[-170, 120, 200]}
          size={15}
          color="#d5dcda"
        />
        <FloatingSphere
          link="/contact"
          message="Leave a message!"
          position={[335, 120, 80]}
          size={15}
          color="#2d5c28"
        />
        <FloatingSphere
          link="/"
          message="Exit"
          position={[-205, 250, -350]}
          size={20}
          color="#9d4d44"
        />
        <LandscapeModel
          url="/models/cyberpunk_micro-apartments/scene.gltf"
          position={[0, 0, 0]}
          scale={100}
        />
        <BasicModel
          scene="/models/asus/scene.gltf"
          scale={[30, 30, 30]}
          position={[-170, 90, 200]}
          rotation={[0, Math.PI / -10, 0]}
          animation={'Animation'}
          hoverEnabled={true}
        />
        <BasicModel
          scene="/models/holoconsole/scene.gltf"
          scale={[50, 50, 50]}
          position={[180, 130, 730]}
          rotation={[0, Math.PI / 1, 0]}
          hoverEnabled={true}
        />
        <BasicModel
          scene="/models/scifi_display/scene.gltf"
          scale={[200, 200, 200]}
          position={[310, 96, 90]}
          rotation={[Math.PI / 2, Math.PI / 1, Math.PI / 1.4]}
          hoverEnabled={true}
        />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default Room
