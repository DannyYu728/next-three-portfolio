import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Stars, Preload } from '@react-three/drei'
import { Suspense } from 'react'
import { useColorModeValue } from '@chakra-ui/react'
import { LandscapeModel } from '../lib/Models/Landscape'
import { Character, SpaceShip, Building } from '../lib/Models/Models.js'
import { CustomOrbitControls } from '../components/MyCamera'
import { Planet, Sun } from '../lib/Models/SpaceModels'
import { CelestialsObject } from '../lib/celestialObjectsArray'

function Project() {
  const dayNight = useColorModeValue('sun', 'moon')

  return (
    <Canvas
      key={dayNight}
      style={{ width: '100vw', height: '100vh' }}
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
  )
}

export default Project
