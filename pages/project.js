import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'
import { Suspense, useRef, useEffect } from 'react'
import Landscape from '../components/Landscape'
import MyBox from '../components/Box.js'

function CustomOrbitControls() {
  const { camera, gl } = useThree()
  const controls = useRef()

  useEffect(() => {
    if (controls.current) {
      controls.current.target.set(-0.5, 4.85, 0)
      controls.current.update()

      controls.current.minDistance = 120
      controls.current.maxDistance = 1600
    }
  }, [controls, camera, gl.domElement])

  return <OrbitControls ref={controls} args={[camera, gl.domElement]} />
}

function Project() {
  return (
    <Canvas style={{ width: '100vw', height: '85vh' }} gl={{ antialias: true }}>
      <ambientLight intensity={0.1} />
      <directionalLight intensity={1.5} position={[2.5, 10, 20]} />
      <PerspectiveCamera makeDefault fov={50} position={[360, 500, 500]} />
      <CustomOrbitControls />
      <Suspense fallback={null}>
        <Stars radius={100} depth={500} count={5000} factor={20} fade speed={1}/>
        <MyBox />
        <Landscape />
      </Suspense>
    </Canvas>
  )
}

export default Project
