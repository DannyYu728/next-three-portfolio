import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Preload, Image } from '@react-three/drei'
import { Suspense, useEffect, useState } from 'react'
import { BasicModel } from '../lib/Models/Models'
import { CustomOrbitControls } from '../components/MyCamera'
import { CustomLoader } from '../components/CustomLoader'

const About = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let delayTimeout
    const handleStart = () => {
      delayTimeout = setTimeout(() => {
        setShow(true)
      }, 2000)
    }
    handleStart()

    return () => {
      clearTimeout(delayTimeout)
      setShow(false)
    }
  }, [])

  return (
    <Canvas
      style={{ width: '100vw', height: '100vh' }}
      gl={{ antialias: true }}
    >
      <ambientLight intensity={5} />
      <PerspectiveCamera
        makeDefault
        near={20}
        fov={50}
        position={[0, 150, 150]}
        far={5000}
      />
      <CustomOrbitControls min={50} max={400} />
      <Suspense fallback={null}>
        <BasicModel
          scene="/models/asus/scene.gltf"
          scale={[50, 50, 50]}
          position={[0, -50, 80]}
          animation={'Animation'}
          freeze={true}
          rotation={[0, 0, 0]}
        />
        {show && (
          <Image
            url="/assets/about.png"
            scale={[210, 110]}
            position={[0, 20, 1.8]}
            rotation={[-0.18, 0, 0]}
            alt='aboutMe'
          />
        )}
        <Preload all />
      </Suspense>
      <CustomLoader />
    </Canvas>
  )
}

export default About
