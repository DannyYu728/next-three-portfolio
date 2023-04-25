import { useState } from 'react'
import { Sphere, Text } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useRouter } from 'next/router'
const FloatingSphere = ({
  link,
  message,
  position,
  size,
  color = 'rgba(50, 50, 50, 0.5)',
  text = 'white'
}) => {
  const [hover, setHover] = useState(false)
  const { camera } = useThree()
  const router = useRouter()

  const handleClick = () => {
    router.push(link)
  }

  return (
    <group
      position={position}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onClick={handleClick}
    >
      <Sphere args={[size, 32, 32]}>
        <meshBasicMaterial color={color} transparent={true} opacity={0.75} />
      </Sphere>
      {hover && (
        <Text
          color={text}
          fontSize={50}
          anchorX="center"
          anchorY="middle"
          position={[0, 80, 0]}
          outlineWidth={1.2}
          outlineColor="black"
          onUpdate={self => self.lookAt(camera.position)}
        >
          {message}
        </Text>
      )}
    </group>
  )
}

export default FloatingSphere
