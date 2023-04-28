import { Line, Text, Cone, Box } from '@react-three/drei'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useColorModeValue } from '@chakra-ui/react'

const useKeyPress = targetKey => {
  const [keyPressed, setKeyPressed] = useState(false)

  const handleKeyDown = useCallback(
    ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(true)
      }
    },
    [targetKey]
  )

  const handleKeyUp = useCallback(
    ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false)
      }
    },
    [targetKey]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyUp, handleKeyDown])

  return keyPressed
}

const Key = ({ letter, position, updateField }) => {
  const [hovered, setHovered] = useState(false)
  const active = useKeyPress(letter);

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
      color={hovered || active ? '#149902' : '#FFFFFF'}
      anchorX="center"
      anchorY="middle"
      position={position}
      onPointerEnter={onMouseEnter}
      onPointerLeave={onMouseLeave}
      onPointerDown={onClick}
      outlineWidth={0.1}
      outlineColor={'green'}
      outlineBlur={1}
    >
      {letter}
    </Text>
  )
}

export const VirtualKeyboard = ({
  position,
  rotation,
  scale,
  storeMessage,
  setErrorMessage
}) => {
  const [activeField, setActiveField] = useState('message')
  const [message, setMessage] = useState('')
  const [sender, setSender] = useState('')
  const [shiftPressed, setShiftPressed] = useState(false)
  const messageBackgroundRef = useRef()
  const senderBackgroundRef = useRef()

  const gradientTexture = useLoader(
    THREE.TextureLoader,
    '/assets/bluegradient.jpg'
  )
  const inputMaterial = new THREE.MeshBasicMaterial({
    color: 'rgb(108, 122, 137)',
    transparent: true,
    side: THREE.DoubleSide,
    opacity: 0.4
  })

  const CustomGradientMaterial = new THREE.MeshBasicMaterial({
    map: gradientTexture,
    transparent: true,
    side: THREE.DoubleSide,
    opacity: 0.1
  })
  const bgColor = useColorModeValue(inputMaterial, CustomGradientMaterial)
  const textColor = useColorModeValue('black', 'white')

  const keysLayout = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BKSP'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']
  ]

  const shiftLayout = [
    ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'BKSP'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?']
  ]

  const [hovered, setHovered] = useState(false)
  const enableHover = hover => {
    setHovered(hover)
  }

  const updateField = useCallback(
    key => {
      if (key === 'BKSP') {
        if (activeField === 'message') {
          setMessage(prevMessage => prevMessage.slice(0, -1))
        } else if (activeField === 'sender') {
          setSender(prevSender => prevSender.slice(0, -1))
        }
        return
      }
      if (key === 'Shift') {
        setShiftPressed(!shiftPressed)
        return
      }

      if (shiftPressed) {
        key = key.toUpperCase()
        setShiftPressed(false)
      }

      if (key === 'Enter') {
        if (!message.trim() || !sender.trim()) {
          setErrorMessage('Both message and sender fields are required.')
        } else {
          setErrorMessage(null)
          storeMessage(message, sender)
          setMessage('')
        }
      }

      if (activeField === 'message' && message.length < 100) {
        setMessage(prevMessage => prevMessage + key)
      } else if (activeField === 'sender' && sender.length < 20) {
        setSender(prevSender => prevSender + key)
      }
    },
    [
      activeField,
      message,
      setMessage,
      sender,
      setSender,
      shiftPressed,
      setShiftPressed,
      storeMessage,
      setErrorMessage
    ]
  )

  const lineRef = useRef()
  useFrame(({ clock }) => {
    if (lineRef.current) {
      lineRef.current.material.opacity =
        Math.sin(clock.getElapsedTime() * 4) > 0 ? 1 : 0
      const offsetX =
        activeField === 'message' ? message.length * 1.2 : sender.length * 1.2
      const linePosition =
        activeField === 'message' ? [offsetX + 2, 23, 6] : [offsetX + 2, 15, 8]
      lineRef.current.position.set(...linePosition)
    }
  })

  useFrame(() => {
    if (messageBackgroundRef.current) {
      messageBackgroundRef.current.scale.x = Math.max(1, message.length * 0.1)
    }
    if (senderBackgroundRef.current) {
      senderBackgroundRef.current.scale.x = Math.max(1, sender.length * 0.1)
    }
  })
  const [capsLockActive, setCapsLockActive] = useState(false)
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
    const handleKeyDown = e => {
      const specialKeys = [
        'Backspace',
        'Shift',
        'Tab',
        'CapsLock',
        'Enter',
        'Escape',
        'Alt',
        'Meta',
        'Control',
        'ArrowUp',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight'
      ]

      if (specialKeys.includes(e.key)) {
        if (e.key === 'Backspace') {
          updateField('BKSP')
        } else if (e.key === 'Tab') {
          e.preventDefault()
          setActiveField(prevActiveField =>
            prevActiveField === 'message' ? 'sender' : 'message'
          )
        } else if (e.key === 'Enter') {
          if (!message.trim() || !sender.trim()) {
            setErrorMessage('Both message and sender fields are required.')
          } else {
            setErrorMessage(null)
            storeMessage(message, sender)
            setMessage('')
            setSender('')
          }
        } else if (e.key === 'Shift') {
          setShiftPressed(true)
        } else if (e.key === 'CapsLock') {
          setCapsLockActive(!capsLockActive)
        }
      } else {
        if (shiftPressed) {
          setShiftPressed(false)
        }
        const keyToInsert =
          shiftPressed || e.getModifierState('CapsLock')
            ? e.key.toUpperCase()
            : e.key
        if (activeField === 'message' && message.length < 100) {
          setMessage(prevMessage => prevMessage + keyToInsert)
        } else if (activeField === 'sender' && sender.length < 20) {
          setSender(prevSender => prevSender + keyToInsert)
        }
      }
      setCapsLockActive(e.getModifierState('CapsLock'))
    }

    const handleKeyUp = e => {
      if (e.key === 'Shift') {
        setShiftPressed(false)
      } else {
        setCapsLockActive(e.getModifierState('CapsLock'))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [
    message,
    sender,
    activeField,
    hovered,
    shiftPressed,
    capsLockActive,
    storeMessage,
    setErrorMessage,
    updateField
  ])
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <Cone
        args={[5, 5]}
        scale={[3, 1.2, 0.5]}
        material={bgColor}
        position={[2, 32, 0]}
      />
      <Box args={[125, 40]} material={bgColor} position={[2, -10, 7]} />
      <Box
        ref={messageBackgroundRef}
        args={[31, 5, 1]}
        position={[2.5, 23, 2.5]}
        material={bgColor}
      />
      <Box
        ref={senderBackgroundRef}
        args={[31, 5, 1]}
        position={[2.5, 15, 4.5]}
        material={bgColor}
      />
      <Line
        ref={lineRef}
        points={[new THREE.Vector3(0, 2.5, 0), new THREE.Vector3(0, -2.5, 0)]}
        color="green"
      />
      <Text
        fontSize={5}
        color="white"
        anchorX="center"
        anchorY="middle"
        position={[2.5, 23, 6.5]}
        background="rgba(0, 128, 255, 0.1)"
        padding={0.5}
        onPointerDown={() => setActiveField('message')}
        onPointerOver={() => enableHover(true)}
        onPointerOut={() => enableHover(false)}
      >
        {message}
      </Text>
      <Text position={[-8, 27, 5.5]} fontSize={2} color={textColor}>
        Message:
      </Text>
      <Text position={[-9.4, 19, 5.5]} fontSize={2} color={textColor}>
        Name:
      </Text>
      <Text
        fontSize={5}
        color="white"
        anchorX="center"
        anchorY="middle"
        position={[2.5, 15, 8.5]}
        background="rgba(0, 128, 255, 0.1)"
        padding={0.5}
        onPointerDown={() => setActiveField('sender')}
        onPointerOver={() => enableHover(true)}
        onPointerOut={() => enableHover(false)}
      >
        {sender}
      </Text>
      {keysLayout.map((row, rowIndex) =>
        row.map((letter, index) => {
          const letterToDisplay =
            shiftPressed || capsLockActive
              ? shiftLayout[rowIndex][index]
              : letter
          return (
            <Key
              key={letter}
              letter={letterToDisplay}
              position={[index * 8.1 - 47, -rowIndex * 9 + 3.5, 12]}
              updateField={updateField}
            />
          )
        })
      )}
    </group>
  )
}
