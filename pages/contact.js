import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Preload } from '@react-three/drei'
import { Suspense, useRef, useState, useEffect } from 'react'
import { useColorModeValue } from '@chakra-ui/react'
import { BasicModel } from '../lib/Models/Models'
import { CustomOrbitControls } from '../components/MyCamera'
import { TextBubble } from '../components/TextBubble'

const Contact = () => {
  const dayNight = useColorModeValue('sun', 'moon')
  const messages = [
    { message: 'Hello!', date: '2023-04-26', sender: 'Alice' },
    { message: 'How are you?', date: '2023-04-26', sender: 'Bob' },
    { message: 'Nice to Nice to meet you! My name is Blah Blah. I work for Blah. Please cavmeet you! My name is Blah Blah. I work for Blah. Please cav ds vsdvlkdsvlksd vl ll1111 me At 333-333-3333 NOMORE', date: '2023-04-26', sender: 'Charlie' },
    { message: 'Nice to meet you!', date: '2023-04-26', sender: 'Charlie' },
    { message: 'Nice to meet you!', date: '2023-04-26', sender: 'Charlie' },
    { message: 'Nice to meet you!', date: '2023-04-26', sender: 'Charlie' },
    { message: 'Nice to meet you!', date: '2023-04-26', sender: 'Charlie' },
    { message: 'Nice to meet you!', date: '2023-04-26', sender: 'Charlie' },
    { message: 'Nice to meet you!', date: '2023-04-26', sender: 'Charlie' },
    { message: 'Nice to meet you!', date: '2023-04-26', sender: 'Charlie' },
  ];

  const heights = useRef([]);
  const [totalHeights, setTotalHeights] = useState([]);

  useEffect(() => {
    let accumulatedHeight = -15;
    const newTotalHeights = messages.map((message, index) => {
      accumulatedHeight += heights.current[index] || 12;
      return accumulatedHeight;
    });
    setTotalHeights(newTotalHeights);
  }, [messages]);


  return (
    <Canvas
      key={dayNight}
      style={{ width: '100vw', height: '100vh' }}
      gl={{ antialias: true }}
    >
       <ambientLight intensity={1.2} />
      <PerspectiveCamera
        makeDefault
        near={20}
        fov={90}
        position={[2000, 100, 0]}
        far={5000}
      />
      <CustomOrbitControls min={50} max={200} />
      <Suspense fallback={null}>
      <BasicModel
          scene="/models/scifi_display/scene.gltf"
          scale={[550, 550, 300]}
          position={[0, -50, 0]}
          rotation={[0, 1.55, 0]}
        />
        {messages.map((message, index) => (
          <TextBubble
            key={index}
            message={message}
            position={[10, -totalHeights[index], 110]}
            color={index % 2 === 0 ? 'blue' : 'green'}
            onHeightUpdate={(height) => {
              heights.current[index] = height;
            }}
          />
        ))}
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default Contact