import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  Stars,
  PerspectiveCamera,
  useGLTF
} from '@react-three/drei'
import { Suspense, useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useLoader, useThree } from '@react-three/fiber'
import Spaceship from '../components/Ship'
import SpeechBubble from '../components/SpeechBubble'

function Globe() {
  const planetTexture = useLoader(THREE.TextureLoader, '/assets/planet.png')
  planetTexture.wrapS = planetTexture.wrapT = THREE.RepeatWrapping
  planetTexture.repeat.set(1, 1)
  planetTexture.anisotropy = 16
  const planetMaterial = new THREE.MeshPhongMaterial({ map: planetTexture })
  return (
    <mesh material={planetMaterial}>
      <sphereBufferGeometry args={[5, 64, 64]} />
    </mesh>
  )
}

function House() {
  const houseRef = useRef()
  const gltf = useGLTF('/models/cartoon_house/scene.gltf')

  return (
    <primitive
      ref={houseRef}
      object={gltf.scene}
      scale={0.5}
      position={[-0.5, 4.85, 0]}
      rotation={[0, Math.PI / 0.9, 0]}
    />
  )
}

function CustomOrbitControls() {
  const { camera, gl } = useThree()
  const controls = useRef()

  useEffect(() => {
    if (controls.current) {
      controls.current.target.set(-0.5, 4.85, 0)
      controls.current.update()
    }
  }, [controls, camera, gl.domElement])

  return <OrbitControls ref={controls} args={[camera, gl.domElement]} />
}

function Home() {
  return (
    <Canvas style={{ width: '100%', height: '85vh' }} gl={{ antialias: true }}>
      <PerspectiveCamera makeDefault fov={75} position={[15, 15, 15]} />
      <Stars />
      <CustomOrbitControls />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={2} position={[5, 6, 20]} />
      <Suspense fallback={null}>
        <Globe />
        <House />
        <Spaceship />
        <SpeechBubble msg="Hi, Click me to see more!" />
      </Suspense>
    </Canvas>
  )
}

export default Home
