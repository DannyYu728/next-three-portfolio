import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Preload } from '@react-three/drei'
import { Suspense, useEffect, useState } from 'react'
import { useColorModeValue } from '@chakra-ui/react'
import { BasicModel } from '../lib/Models/Models'
import { CustomOrbitControls } from '../components/MyCamera'
import { TextBubble } from '../components/TextBubble'
import { VirtualKeyboard } from '../components/VirtualKeyboard'
import db from "../lib/firebase";
import { collection, getDocs, query, orderBy, limit, addDoc } from 'firebase/firestore'; 

const Contact = () => {
  const dayNight = useColorModeValue('sun', 'moon')
  const [messages, setMessages] = useState([]);

  const storeMessage = async (message, sender) => {
    try {
      const createdAt = new Date();
      const docRef = await addDoc(collection(db, 'messages'), {
        message: message,
        sender: sender,
        createdAt: createdAt
      });
      console.log("Message stored successfully");
    } catch (error) {
      console.error("Error storing message: ", error);
    }
  };

  const fetchMessages = async () => {
    try {
      const messagesRef = collection(db, 'messages');
      const messagesQuery = query(messagesRef, orderBy('createdAt', 'desc'), limit(10));
      const messageSnapshot = await getDocs(messagesQuery);
      const messages = messageSnapshot.docs.map((doc) => doc.data());
      messages.reverse()
      setMessages(messages);
    } catch (error) {
      console.error('Error fetching messages: ', error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <Canvas
      key={dayNight}
      style={{ width: '100vw', height: '100vh' }}
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
        <VirtualKeyboard position={[0, -100, 0]} rotation={[0, 1.55, 0]} scale={[2.5, 2.2, 1]} storeMessage={storeMessage} />
        {messages.map((message, index) => (
          <TextBubble
            key={index}
            message={message}
            position={[10, -index * 13.5, 110]}
            color={index % 2 === 0 ? '#3171a9' : '#149902'}
          />
        ))}
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default Contact
