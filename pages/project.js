import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Stars, Preload } from '@react-three/drei'
import { Suspense } from 'react'
import { useColorModeValue, Box } from '@chakra-ui/react'
import { LandscapeModel } from '../lib/Models/Landscape'
import { Character, SpaceShip, Building } from '../lib/Models/Models.js'
import { CustomOrbitControls } from '../components/MyCamera'

function Project() {
  const bgColor = useColorModeValue('#86b8e8', '#202023')

  return (
    <Box bg={bgColor}>
      <Canvas
        style={{ width: '100vw', height: '100vh' }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight intensity={1} position={[2.5, 10, 20]} />
        <PerspectiveCamera
          makeDefault
          near={20}
          fov={90}
          position={[380, 350, 500]}
          far={10000}
        />
        <CustomOrbitControls min={120} max={1600} />
        <Suspense fallback={null}>
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
            position={[0, 120, 600]}
            size={120}
            rotation={[0, Math.PI / 1, 0]}
          />
          <Building
            scene="/models/chinese_house/scene.gltf"
            scale={60}
            position={[-4, 0, 0]}
            rotation={[0, Math.PI / 5000, 0]}
          />
          <LandscapeModel
            url="/models/little_game_town/scene.gltf"
            position={[0, 3, 0]}
            scale={10}
          />
          <Preload all />
        </Suspense>
      </Canvas>
    </Box>
  )
}

export default Project
