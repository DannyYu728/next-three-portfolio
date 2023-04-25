import { BoxGeometry, MeshPhongMaterial } from 'three'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { useMemo } from 'react'

export const Landscape = () => {
  const grassTexture = useLoader(THREE.TextureLoader, '/assets/grass.jpg')
  const dirtTexture = useLoader(THREE.TextureLoader, '/assets/dirt.png')

  grassTexture.wrapS = grassTexture.wrapT = THREE.RepeatWrapping
  grassTexture.repeat.set(1, 1)
  grassTexture.anisotropy = 16

  dirtTexture.wrapS = dirtTexture.wrapT = THREE.RepeatWrapping
  dirtTexture.repeat.set(1, 1)
  dirtTexture.anisotropy = 16

  const grassMaterial = new MeshPhongMaterial({ map: grassTexture })
  const dirtMaterial = new MeshPhongMaterial({ map: dirtTexture })

  const materials = [
    dirtMaterial,
    dirtMaterial,
    grassMaterial,
    dirtMaterial,
    dirtMaterial,
    dirtMaterial
  ]
  window.innerWidth / window.innerHeight
  const geometry = new BoxGeometry(5000, 25, 5000)

  return (
      <mesh
        name="landscapeMesh"
        geometry={geometry}
        material={materials}
        position={[0, -12.5, 0]}
        receiveShadow
      />
  )
}

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
