import { Line, Box, Text, Plane } from '@react-three/drei'
import { useState, useEffect, useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { MeshBasicMaterial } from 'three'

const Key = ({
  letter,
  position,
  setActiveKey,
  removeActiveKey,
  updateField
}) => {
  const [color, setColor] = useState('#FFFFFF')
  const [hovered, setHovered] = useState(false)

  const onMouseEnter = () => {
    setColor('#149902')
    setHovered(true)
    setActiveKey(letter)
  }

  const onMouseLeave = () => {
    setColor('#FFFFFF')
    setHovered(false)
    removeActiveKey()
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
      color={color}
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
  const [activeKey, setActiveKey] = useState(null)
  const [activeField, setActiveField] = useState('message')
  const [message, setMessage] = useState('')
  const [sender, setSender] = useState('')
  const [shiftPressed, setShiftPressed] = useState(false)
  const [activeLine, setActiveLine] = useState([0, 0, 0])

  // Add this inside the VirtualKeyboard component
  const inputMaterial = new MeshBasicMaterial({ color: '#b3d0f5' })
  const messageRef = useRef()
  const senderRef = useRef()

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

  const removeActiveKey = () => {
    setActiveKey(null)
  }

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
      // Send a post request to the backend
      console.log('Sending message:', message, 'from sender:', sender)
      return
    }

    if (activeField === 'message' && message.length < 100) {
      setMessage(prevMessage => prevMessage + key)
    } else if (activeField === 'sender' && sender.length < 20) {
      setSender(prevSender => prevSender + key)
    }
  }

  const handleTab = e => {
    if (e.key === 'Tab') {
      e.preventDefault()
      setActiveField(prevActiveField =>
        prevActiveField === 'message' ? 'sender' : 'message'
      )
    }
  }
  const handleKeyClick = (key) => {
    if (key === "Enter") {
      // Send the message by making a POST request to the backend
      console.log("Sending message:", message, "from sender:", sender);
  
      // Clear the input fields
      setMessage("");
      setSender("");
    } else {
      if (activeField === "message" && message.length < 100) {
        setMessage((prevMessage) => prevMessage + key);
      } else if (activeField === "sender" && sender.length < 20) {
        setSender((prevSender) => prevSender + key);
      }
    }
  };

  
  const lineRef = useRef()
  useFrame(({ clock }) => {
    if (lineRef.current) {
      lineRef.current.material.opacity =
        Math.sin(clock.getElapsedTime() * 4) > 0 ? 1 : 0
      const linePosition = activeField === 'message' ? [23, 10, 2] : [9, -10, 2]
      lineRef.current.position.set(...linePosition)
    }
  })

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Tab') {
        e.preventDefault()
        setActiveField(prevActiveField =>
          prevActiveField === 'message' ? 'sender' : 'message'
        )
      } else if (e.key === 'Enter') {
        // Send the message by making a POST request to the backend
        console.log('Sending message:', message, 'from sender:', sender)

        // Clear the input fields
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
  }, [message, sender, activeField])

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <Plane
        args={[100, 40]}
        material={CustomGradientMaterial}
        position={[2, -10, 0]}
      />
      <Box args={[50, 5, 1]} position={[0, 10, -1]} material={inputMaterial} />
      <Box args={[20, 5, 1]} position={[0, -10, -1]} material={inputMaterial} />
      <Line
        ref={lineRef}
        points={[new THREE.Vector3(0, 2.5, 0), new THREE.Vector3(0, -2.5, 0)]}
        color="#000"
      />
      <Text
        ref={messageRef}
        fontSize={5}
        color="white"
        anchorX="center"
        anchorY="middle"
        position={[-35, 20, 0]}
        background="rgba(0, 128, 255, 0.1)"
        padding={0.5}
        onPointerDown={() => setActiveField('message')}
      >
        {message}
      </Text>
      <Text
        ref={senderRef}
        fontSize={5}
        color="white"
        anchorX="center"
        anchorY="middle"
        position={[-35, 10, 0]}
        background="rgba(0, 128, 255, 0.1)"
        padding={0.5}
        onPointerDown={() => setActiveField('sender')}
      >
        {sender}
      </Text>
      {keysLayout.map((row, rowIndex) =>
        row.map((letter, index) => (
          <Key
            key={letter}
            letter={shiftPressed ? letter.toUpperCase() : letter}
            position={[index * 7 - 40, -rowIndex * 9, 2]}
            setActiveKey={setActiveKey}
            removeActiveKey={removeActiveKey}
            updateField={updateField}
          />
        ))
      )}
    </group>
  )
}
