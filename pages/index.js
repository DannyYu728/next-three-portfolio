import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

function Globe() {
  return (
    <mesh>
      <sphereBufferGeometry args={[5, 64, 64]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

function House() {
  const houseRef = useRef();
  const gltf = useGLTF('/models/cartoon_house/scene.gltf');

  return (
    <primitive
      ref={houseRef}
      object={gltf.scene}
      scale={0.3}
      position={[0, 4.75, -0.5]}
      rotation={[0, Math.PI / 4, 0]}
    />
  );
}

function Home() {
  return (
    <Canvas
    style={{ width: '100%', height: '85vh' }}
    gl={{ antialias: true }}>
      <PerspectiveCamera makeDefault position={[15, 15, 15]} />
      <Stars />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={1} position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <Globe />
        <House />
      </Suspense>
    </Canvas>
  );
}

export default Home;