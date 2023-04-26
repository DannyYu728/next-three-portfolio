import { useGLTF } from '@react-three/drei'
import { useMemo } from 'react'
import { usePlane } from '@react-three/cannon'

export const LandscapeModel = ({ url, position, scale = 1 }) => {
  const { scene } = useGLTF(url, true)

  const clonedScene = useMemo(() => scene.clone(), [scene])

  return (
    <primitive
      object={clonedScene}
      position={position}
      dispose={null}
      scale={scale}
    />
  )
}

export const InvisibleGround = () => {
  const [ref] = usePlane(() => ({
    type: 'Static',
    position: [0, 0, 0],
    rotation: [-Math.PI / 2, 0, 0]
  }))

  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[3000, 3000]} />
      <meshBasicMaterial
        attach="material"
        color="white"
        transparent
        opacity={0}
      />
    </mesh>
  )
}
