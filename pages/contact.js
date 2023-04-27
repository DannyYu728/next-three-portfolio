import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Preload, Plane } from '@react-three/drei'
import { Suspense } from 'react'
import { useColorModeValue } from '@chakra-ui/react'
import { BasicModel } from '../lib/Models/Models'
import { CustomOrbitControls } from '../components/MyCamera'
import { TextBubble } from '../components/TextBubble'
import { VirtualKeyboard } from '../components/VirtualKeyboard'

const Contact = () => {
  const dayNight = useColorModeValue('sun', 'moon')
  const messages = [
    { message: 'Hello!', date: '2023-04-26', sender: 'Alice' },
    { message: 'How are you?', date: '2023-04-26', sender: 'Bob' },
    {
      message:
        'Nice to Nice to mah. I work for Blah. Plr Bl23h. Please cav ds vsdvlkdsvlksd vl ll1111 me At 333-333-3333 NOMORE',
      date: '2023-04-26',
      sender: 'Charlie'
    },
    {
      message:
        'Nice to Nlah Blah. I work for Blah. Please cav ds vsdvlkdsvlksd vl ll1111 me At 333-333-3333 NOMORE',
      date: '2023-04-26',
      sender: 'Charlie'
    },
    { message: 'Nice to meet you!', date: '2023-04-26', sender: 'Charlie' },
    { message: 'Nice to meet you!', date: '2023-04-26', sender: 'Charlie' },
    { message: 'Nice to meet you!', date: '2023-04-22', sender: 'Charlie' },
    { message: 'Nice to meet you!', date: '2023-04-26', sender: 'Charlie' },
    { message: 'Nice to meet you!', date: '2023-04-25', sender: 'Charlie' },
    { message: 'Nice to meet you!', date: '2023-04-27', sender: 'Charlie' },
    { message: 'Nice to meet you!', date: '2023-04-20', sender: 'SUnny' }
  ]
  const sortedMessages = messages.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )
  const latestMessages = sortedMessages.slice(0, 10).reverse()

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
        <VirtualKeyboard position={[10, -100, -20]} rotation={[0, 1.55, 0]} />
        {latestMessages.map((message, index) => (
          <TextBubble
            key={index}
            message={message}
            position={[10, -index * 13.5, 110]}
            color={index % 2 === 0 ? 'blue' : 'green'}
          />
        ))}
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default Contact
