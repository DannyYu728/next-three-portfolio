import { Line, Box, Text, Plane } from '@react-three/drei'
import { useState, useEffect, useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { MeshBasicMaterial } from 'three'

const Key = ({ letter, position, updateField }) => {
  const [hovered, setHovered] = useState(false)

  const onMouseEnter = () => {
    setHovered(true)
  }

  const onMouseLeave = () => {
    setHovered(false)
  }

  const onClick = () => {
    updateField(letter)
  }

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  return (
    <Text
      fontSize={5}
      color={hovered ? '#149902' : '#FFFFFF'}
      anchorX="center"
      anchorY="middle"
      position={position}
      onPointerEnter={onMouseEnter}
      onPointerLeave={onMouseLeave}
      onPointerDown={onClick}
    >
      {letter}
    </Text>
  )
}

export const VirtualKeyboard = ({ position, rotation, scale }) => {
  const [activeField, setActiveField] = useState('message')
  const [message, setMessage] = useState('')
  const [sender, setSender] = useState('')
  const [shiftPressed, setShiftPressed] = useState(false)
  const messageBackgroundRef = useRef();
  const senderBackgroundRef = useRef();


  const inputMaterial = new MeshBasicMaterial({ color: 'rgba(87,140,183,1)' })

  const gradientTexture = useLoader(
    THREE.TextureLoader,
    '/assets/bluegradient.jpg'
  )

  const CustomGradientMaterial = new THREE.MeshBasicMaterial({
    map: gradientTexture,
    transparent: true,
    side: THREE.DoubleSide,
    opacity: 0.4
  })

  const keysLayout = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']
  ]

  const [hovered, setHovered] = useState(false);
  const enableHover = (hover) => {
    setHovered(hover);
  };


  const updateField = key => {
    if (key === 'Shift') {
      setShiftPressed(!shiftPressed)
      return
    }

    if (shiftPressed) {
      key = key.toUpperCase()
      setShiftPressed(false)
    }

    if (key === 'Enter') {
      console.log('Sending message:', message, 'from sender:', sender)
      setMessage('')
      setSender('')
      return
    }

    if (activeField === 'message' && message.length < 100) {
      setMessage(prevMessage => prevMessage + key)
    } else if (activeField === 'sender' && sender.length < 20) {
      setSender(prevSender => prevSender + key)
    }
  }

  const lineRef = useRef()
  useFrame(({ clock }) => {
    if (lineRef.current) {
      lineRef.current.material.opacity =
        Math.sin(clock.getElapsedTime() * 4) > 0 ? 1 : 0
      const linePosition = activeField === 'message' ? [0, 25, 2] : [0, 15, 2]
      lineRef.current.position.set(...linePosition)
    }
  })

  useFrame(() => {
    if (messageBackgroundRef.current) {
      messageBackgroundRef.current.scale.x = Math.max(1, message.length * 0.1);
    }
    if (senderBackgroundRef.current) {
      senderBackgroundRef.current.scale.x = Math.max(1, sender.length * 0.1);
    }
  });

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
    const handleKeyDown = e => {
      if (e.key === 'Tab') {
        e.preventDefault()
        setActiveField(prevActiveField =>
          prevActiveField === 'message' ? 'sender' : 'message'
        )
      } else if (e.key === 'Enter') {
        console.log('Sending message:', message, 'from sender:', sender)
        setMessage('')
        setSender('')
      } else if (e.key === 'CapsLock') {
        setShiftPressed(prevShiftPressed => !prevShiftPressed)
      } else if (activeField === 'message' && message.length < 100) {
        setMessage(prevMessage => prevMessage + e.key)
      } else if (activeField === 'sender' && sender.length < 20) {
        setSender(prevSender => prevSender + e.key)
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [message, sender, activeField, hovered])

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <Plane
        args={[100, 40]}
        material={CustomGradientMaterial}
        position={[2, -10, 0]}
      />
      <Box ref={messageBackgroundRef} args={[31, 5, 1]} position={[0, 25, 0]} material={inputMaterial} transparent />
      <Box ref={senderBackgroundRef} args={[31, 5, 1]} position={[0, 15, 0]} material={inputMaterial} transparent/>
      <Line
        ref={lineRef}
        points={[new THREE.Vector3(0, 2.5, 0), new THREE.Vector3(0, -2.5, 0)]}
        color="#000"
      />
      <Text
        fontSize={5}
        color="white"
        anchorX="center"
        anchorY="middle"
        position={[0, 25, 1]}
        background="rgba(0, 128, 255, 0.1)"
        padding={0.5}
        onPointerDown={() => setActiveField('message')}
        onPointerOver={() => enableHover(true)}
        onPointerOut={() => enableHover(false)}
      >
        {message}
      </Text>
      <Text
        fontSize={5}
        color="white"
        anchorX="center"
        anchorY="middle"
        position={[0, 15, 1]}
        background="rgba(0, 128, 255, 0.1)"
        padding={0.5}
        onPointerDown={() => setActiveField('sender')}
        onPointerOver={() => enableHover(true)}
        onPointerOut={() => enableHover(false)}
      >
        {sender}
      </Text>
      {keysLayout.map((row, rowIndex) =>
        row.map((letter, index) => (
          <Key
            key={letter}
            letter={shiftPressed ? letter.toUpperCase() : letter}
            position={[index * 7 - 40, -rowIndex * 9, 2]}
            updateField={updateField}
          />
        ))
      )}
    </group>
  )
}
