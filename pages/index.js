import { Canvas } from '@react-three/fiber'
import { Stars, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import { Vector3 } from 'three'
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
  const earthPosition = new Vector3(0, 0, 0)

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
            orbitTarget={item.name === 'Moon' ? earthPosition : undefined}
            orbitSpeed={item.name === 'Moon' ? 0.002 : undefined}
          />
        ))}
        <Sun />
        <AsteroidBelt count={4000} />
        <SaturnRing />
        <House
          scene="/models/chinese_house/scene.gltf"
          scale={0.5}
          position={[-0.5, 4.85, 0]}
          rotation={[0, Math.PI / 5, 0]}
        />
        <House
          scene="/models/guest_house/scene.gltf"
          scale={0.2}
          position={[-10.5, 7.5, 2.5]}
          rotation={[0, Math.PI / 5, 0]}
        />
        <Spaceship />
        <SpeechBubble msg="Hi, Click me to see more!" />
      </Suspense>
    </Canvas>
  )
}

export default Home
