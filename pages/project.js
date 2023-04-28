import { Canvas } from '@react-three/fiber'
import {
  PerspectiveCamera,
  Preload,
  Cone,
  Image,
  Text
} from '@react-three/drei'
import { Suspense, useState } from 'react'
import { BasicModel } from '../lib/Models/Models'
import { CustomOrbitControls } from '../components/MyCamera'
import { MeshBasicMaterial } from 'three'
import { slideData } from '../lib/Slides'

const Project = () => {
  const [count, setCount] = useState(0)
  const inputMaterial = new MeshBasicMaterial({
    color: '#5a86de',
    transparent: true,
    opacity: 0.3
  })

  const ThreeDButton = ({ text, position, onClick, rotation }) => {
    return (
      <Text
        onClick={onClick}
        position={position}
        fontSize={20}
        color="white"
        anchorX="center"
        anchorY="middle"
        rotation={rotation}
        outlineColor='#2879ff'
        outlineWidth={1.2}
        outlineBlur={3}
        fillOpacity={0.7}
        curveRadius={-85}
      >
        {text}
      </Text>
    )
  }

  return (
    <Canvas
      style={{ width: '100vw', height: 'calc(100vh - 80px)' }}
      gl={{ antialias: true }}
    >
      <ambientLight intensity={1} />
      <PerspectiveCamera
        makeDefault
        near={20}
        fov={50}
        position={[2000, 100, 1000]}
        far={5000}
      />
      <CustomOrbitControls min={100} max={1000} />
      <Suspense fallback={null}>
        <Cone
          args={[220, 270]}
          position={[471, 20, 205]}
          rotation={[0, Math.PI / 1, 3.15]}
          material={inputMaterial}
        />
        <BasicModel
          scene="/models/holoconsole/scene.gltf"
          scale={[300, 300, 300]}
          position={[500, 200, -2860]}
        />
        <Image
          url={slideData[count].src}
          scale={[200, 140]}
          position={[471, 80, 205]}
          rotation={[0, 1.15, 0]}
          alt="image"
          opacity={0.85}
          zoom={0.85}
        />
        <Preload all />
        <ThreeDButton
          text="Previous"
          position={[630, -19, 390]}
          rotation={[0, 1.10, 0]}
          onClick={() => {
            setCount((prevCount) => (prevCount - 1 + slideData.length) % slideData.length);
          }}
        />
        <ThreeDButton
          text="Next"
          position={[690, -20, 255]}
          rotation={[0, 1.15, 0]}
          onClick={() => {
            setCount((prevCount) => (prevCount + 1) % slideData.length);
          }}
        />
        <ThreeDButton
          text="Website"
          position={[630, -44, 385]}
          rotation={[0, 1.10, 0]}
          onClick={() => {
            window.open(slideData[count].link, '_blank')
          }}
        />
        <ThreeDButton
          text="Github"
          position={[690, -45, 255]}
          rotation={[0, 1.15, 0]}
          onClick={() => {
            window.open(slideData[count].link2, '_blank')
          }}
        />
      </Suspense>
    </Canvas>
  )
}

export default Project
