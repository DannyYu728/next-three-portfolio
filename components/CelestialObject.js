import { OrbitControls, useGLTF } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useLoader, useThree } from '@react-three/fiber'

export const Planet = ({ textureUrl, size, position }) => {
  const texture = useLoader(THREE.TextureLoader, textureUrl)
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(1, 1)
  texture.anisotropy = 16
  const planetMaterial = new THREE.MeshPhongMaterial({ map: texture })

  return (
    <mesh position={position} material={planetMaterial}>
      <sphereGeometry args={[size, 64, 64]} />
    </mesh>
  )
}

export const Sun = () => {
  const sunSize = 5 * 109.2
  const texture = useLoader(THREE.TextureLoader, '/assets/sun.jpeg')
  const glowTexture = useLoader(THREE.TextureLoader, '/assets/glow.png')
  const glowMaterial = new THREE.SpriteMaterial({
    map: glowTexture,
    transparent: true,
    blending: THREE.AdditiveBlending
  })
  const glowSprite = new THREE.Sprite(glowMaterial)
  const glowSizeMultiplier = 2.8
  glowSprite.scale.set(
    sunSize * glowSizeMultiplier,
    sunSize * glowSizeMultiplier,
    0
  )

  return (
    <mesh position={[5 * 50, 6 * 50, 20 * 50]}>
      <sphereGeometry args={[sunSize, 32, 32]} />
      <meshBasicMaterial map={texture} />
      <primitive object={glowSprite} />
    </mesh>
  )
}

export const House = () => {
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

export const CustomOrbitControls = () => {
  const { camera, gl } = useThree()
  const controls = useRef()

  useEffect(() => {
    if (controls.current) {
      controls.current.target.set(-0.5, 4.85, 0)
      controls.current.update()

      controls.current.minDistance = 8
      controls.current.maxDistance = 400
    }
  }, [controls, camera, gl.domElement])

  return <OrbitControls ref={controls} args={[camera, gl.domElement]} />
}
