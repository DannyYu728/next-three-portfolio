import { Canvas } from '@react-three/fiber'
import { Stars, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import {
  Planet,
  Sun,
  AsteroidBelt,
  SaturnRing,
  House,
  CustomOrbitControls
} from '../components/CelestialObject'
import Spaceship from '../components/Ship'
import SpeechBubble from '../components/SpeechBubble'
import { CelestialsObject } from '../components/celestialObjectsArray'

function Home() {

  return (
    <Canvas style={{ width: '100vw', height: '85vh' }} gl={{ antialias: true }}>
      <PerspectiveCamera makeDefault fov={90} position={[15, 15, 15]} />
      <Stars radius={250} depth={500} count={5000} factor={20} fade speed={1} />
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
          />
        ))}
        <Sun />
        <AsteroidBelt count={3000} />
        <SaturnRing />
        <House />
        <Spaceship />
        <SpeechBubble msg="Hi, Click me to see more!" />
      </Suspense>
    </Canvas>
  )
}

export default Home
