import { useRef, useEffect, useMemo } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { useRouter } from 'next/router'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Vector2, Raycaster } from 'three'
import * as THREE from 'three'
import * as YUKA from 'yuka'

export const Character = () => {
  const router = useRouter()
  const modelRef = useRef()
  const { camera, scene } = useThree()
  const raycaster = new Raycaster()
  const pointer = new Vector2()
  const { scene: model, animations } = useGLTF('/models/moon_walk/scene.gltf')
  const { actions } = useAnimations(animations, modelRef)

  const vehicle = new YUKA.Vehicle()
  vehicle.position.set(-0, 0, 350)
  vehicle.maxSpeed = 90

  const target = new YUKA.GameEntity()
  target.position.copy(vehicle.position)

  const arriveBehavior = new YUKA.ArriveBehavior(target.position, 3, 0.5)
  vehicle.steering.add(arriveBehavior)

  const meshRef = useRef(null)

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.PI * 180
    }

    function onMouseDown(event) {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1

      raycaster.setFromCamera(pointer, camera)
      const intersects = raycaster.intersectObjects(scene.children, true)

      if (intersects.length > 0) {
        target.position.set(intersects[0].point.x, 0, intersects[0].point.z)
        actions?.Walk.play()
      } else {
        actions?.Walk.stop()
      }
    }
    window.addEventListener('mousedown', onMouseDown)

    return () => {
      window.removeEventListener('mousedown', onMouseDown)
    }
  }, [camera, scene, router, modelRef, actions])

  useFrame(() => {
    if (meshRef.current) {
      const mesh = meshRef.current
      const delta = 1 / 60
      vehicle.update(delta)
      mesh.position.copy(vehicle.position)

      const direction = target.position.clone().sub(vehicle.position)
      direction.y = 0
      direction.normalize()
      mesh.lookAt(mesh.position.clone().add(direction))
    }
  })

  return (
    <group ref={meshRef}>
      <primitive ref={modelRef} object={model} scale={25} />
    </group>
  )
}

export const Building = ({
  scene,
  scale,
  position,
  rotation,
  handleClick = undefined
}) => {
  const houseRef = useRef()
  const gltf = useGLTF(scene)

  return (
    <primitive
      ref={houseRef}
      object={gltf.scene}
      scale={scale}
      position={position}
      rotation={rotation}
      onClick={handleClick}
    />
  )
}

export const SpaceShip = ({
  position = [0, 0, 0],
  size = 1,
  orbit = false,
  rotation
}) => {
  const groupRef = useRef()
  const { scene } = useGLTF('/models/toon_spaceship/scene.gltf')

  useFrame(({ clock }) => {
    if (groupRef.current) {
      if (orbit) {
        const elapsedTime = clock.getElapsedTime()
        const radius = 10
        const angle = elapsedTime * 0.45
        const x = Math.sin(angle) * radius + position[0]
        const z = Math.cos(angle) * radius + position[2]

        groupRef.current.position.set(x, 5 + position[1], z)

        const tangent = new THREE.Vector3(Math.cos(angle), 0, -Math.sin(angle))
        const target = new THREE.Vector3().addVectors(
          groupRef.current.position,
          tangent
        )

        groupRef.current.lookAt(target)
      } else {
        groupRef.current.position.set(...position)
      }
      if (rotation) {
        groupRef.current.rotation.set(...rotation)
      }
    }
  })

  const scale = useMemo(() => [size * 0.01, size * 0.01, size * 0.01], [size])

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={scale} />
    </group>
  )
}
