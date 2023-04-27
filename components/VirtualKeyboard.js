import { Text, Plane } from '@react-three/drei'
import { useState } from 'react'
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three'

const Key = ({ letter, position, setActiveKey, removeActiveKey }) => {
  const [color, setColor] = useState('#FFFFFF')

  const onMouseEnter = () => {
    setColor('#149902')
    setActiveKey(letter)
  }

  const onMouseLeave = () => {
    setColor('#FFFFFF')
    removeActiveKey()
  }

  return (
    <Text
      font="/fonts/mplus1rounded1c-regular.json"
      fontSize={5}
      color={color}
      anchorX="center"
      anchorY="middle"
      position={position}
      onPointerEnter={onMouseEnter}
      onPointerLeave={onMouseLeave}
      onSync={text => {}}
    >
      {letter}
    </Text>
  )
}

export const VirtualKeyboard = ({ position, rotation }) => {
  const [activeKey, setActiveKey] = useState(null)

  const gradientTexture = useLoader(THREE.TextureLoader, '/assets/bluegradient.jpg');

  const CustomGradientMaterial = new THREE.MeshBasicMaterial({
    map: gradientTexture,
    transparent: true,
    side: THREE.DoubleSide,
    opacity: 0.4
  });

  const keysLayout = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']
  ]

  const removeActiveKey = () => {
    setActiveKey(null)
  }

  return (
    <group position={position} rotation={rotation}>
      <Plane args={[100, 40]} material={CustomGradientMaterial} position={[2,-10,0]} />
      {keysLayout.map((row, rowIndex) =>
        row.map((letter, index) => (
          <Key
            key={letter}
            letter={letter}
            position={[index * 7 - 40, -rowIndex * 9, 2]}
            setActiveKey={setActiveKey}
            removeActiveKey={removeActiveKey}
          />
        ))
      )}
    </group>
  );
};
