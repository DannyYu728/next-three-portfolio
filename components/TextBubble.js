import { Text, RoundedBox } from '@react-three/drei'
import { useState } from 'react'

export const TextBubble = ({ message, position, color }) => {
  const [boxSize, setBoxSize] = useState([50, 8, 5])

  return (
    <group position={position} rotation={[0, 1.55, 0]}>
      <Text
        fontSize={5}
        color="white"
        lineHeight={1.2}
        maxWidth={255}
        textAlign="left"
        anchorX="left"
        anchorY="middle"
        position={[-15, 130, -10]}
        onSync={text => {
          const width =
            text.geometry.boundingBox.max.x - text.geometry.boundingBox.min.x
          const height =
            text.geometry.boundingBox.max.y - text.geometry.boundingBox.min.y
          setBoxSize([width + 5, height + 4, 5])
        }}
      >
        {message.message}
        <RoundedBox
          args={boxSize}
          radius={3}
          smoothness={5}
          creaseAngle={5}
          position={[boxSize[0] / 2 + -3, 0, -3]}
        >
          <meshBasicMaterial color={color} opacity={0.35} transparent />
        </RoundedBox>
      </Text>
      <Text
        fontSize={2.5}
        color="white"
        anchorX="left"
        anchorY="bottom"
        position={[-14.5, 122.5, -9]}
      >
        {message.sender} - {message.date}
      </Text>
    </group>
  )
}
