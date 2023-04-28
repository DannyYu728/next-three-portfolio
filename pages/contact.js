import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Preload, Text } from '@react-three/drei'
import { Suspense, useEffect, useState } from 'react'
import { BasicModel } from '../lib/Models/Models'
import { CustomOrbitControls } from '../components/MyCamera'
import { TextBubble } from '../components/TextBubble'
import { VirtualKeyboard } from '../components/VirtualKeyboard'
import db from '../lib/firebase'
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  addDoc
} from 'firebase/firestore'

const Contact = () => {
  const [messages, setMessages] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  const storeMessage = async (message, sender) => {
    try {
      const createdAt = new Date()
      const data = {
        message: message,
        sender: sender,
        createdAt: createdAt.toLocaleString()
      }
      const docRef = await addDoc(collection(db, 'messages'), data)
      setMessages(prev => [...prev, data])
      console.log('Message stored successfully', docRef)
    } catch (error) {
      console.error('Error storing message: ', error)
    }
  }

  const fetchMessages = async () => {
    try {
      const messagesRef = collection(db, 'messages')
      const messagesQuery = query(
        messagesRef,
        orderBy('createdAt', 'desc'),
        limit(10)
      )
      const messageSnapshot = await getDocs(messagesQuery)
      const messages = messageSnapshot.docs.map(doc => doc.data())
      messages.reverse()
      setMessages(messages)
    } catch (error) {
      console.error('Error fetching messages: ', error)
    }
  }

  useEffect(() => {
    fetchMessages()
  }, [])
  return (
    <Canvas
      style={{ width: '100vw', height: 'calc(100vh - 80px)' }}
      gl={{ antialias: true }}
    >
      <ambientLight intensity={5} />
      <PerspectiveCamera
        makeDefault
        near={20}
        fov={90}
        position={[3000, 100, 50]}
        far={5000}
      />
      <CustomOrbitControls min={50} max={250} />
      <Suspense fallback={null}>
        <BasicModel
          scene="/models/scifi_display/scene.gltf"
          scale={[550, 550, 1000]}
          position={[0, -20, 0]}
          rotation={[0, 1.55, 0]}
        />
        <VirtualKeyboard
          position={[0, -100, 0]}
          rotation={[0, 1.55, 0]}
          scale={[2.5, 2.2, 1]}
          storeMessage={storeMessage}
          setErrorMessage={setErrorMessage}
        />
        {messages.map((message, index) => (
          <TextBubble
            key={index}
            message={message}
            position={[10, -index * 13.5, 110]}
            color={index % 2 === 0 ? '#3171a9' : '#149902'}
          />
        ))}
        {errorMessage && (
          <Text
            position={[20, 20, 0]}
            rotation={[0, 1.55, 0]}
            fontSize={10}
            color="red"
          >
            {errorMessage}
          </Text>
        )}
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default Contact
