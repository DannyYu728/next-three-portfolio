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
import {Planet, Sun, House, CustomOrbitControls} from '../components/CelestialObject'
import Spaceship from '../components/Ship'
import SpeechBubble from '../components/SpeechBubble'
import {CelestialsObject} from '../components/celestialObjectsArray'

// function House() {
//   const houseRef = useRef()
//   const gltf = useGLTF('/models/cartoon_house/scene.gltf')

//   return (
//     <primitive
//       ref={houseRef}
//       object={gltf.scene}
//       scale={0.5}
//       position={[-0.5, 4.85, 0]}
//       rotation={[0, Math.PI / 0.9, 0]}
//     />
//   )
// }

// function CustomOrbitControls() {
//   const { camera, gl } = useThree()
//   const controls = useRef()

//   useEffect(() => {
//     if (controls.current) {
//       controls.current.target.set(-0.5, 4.85, 0)
//       controls.current.update()

//       controls.current.minDistance = 8
//       controls.current.maxDistance = 400
//     }
//   }, [controls, camera, gl.domElement])

//   return <OrbitControls ref={controls} args={[camera, gl.domElement]} />
// }

function Home() {

  return (
    <Canvas style={{ width: '100vw', height: '85vh' }} gl={{ antialias: true }}>
      <PerspectiveCamera makeDefault fov={90} position={[15, 15, 15]} />
      <Stars  radius={250} depth={500} count={5000} factor={20} fade speed={1}/>
      <CustomOrbitControls />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={2} position={[5, 6, 20]} />
      <Suspense fallback={null}>
        {CelestialsObject.map((item, idx) => (
          <Planet textureUrl={item.textureUrl} position={item.position} size={item.size} key={idx}/>
        ))}
        <Sun />
        <House />
        <Spaceship />
        <SpeechBubble msg="Hi, Click me to see more!"/>
      </Suspense>
    </Canvas>
  )
}

export default Home


