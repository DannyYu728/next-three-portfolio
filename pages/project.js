import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import MyOrthographicCamera from '../components/MyCamera'
import Landscape from '../components/Landscape'
import MyBox from '../components/Box.js'


function Project() {
  return (
    <Canvas style={{ width:'100%', height: '85vh' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <MyOrthographicCamera />
      <Suspense fallback={null}>
        <Landscape />
        <MyBox />
      </Suspense>
    </Canvas>
  )
}

export default Project
