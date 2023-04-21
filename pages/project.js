import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import MyOrthographicCamera from '../components/MyCamera';
import Landscape from '../components/Landscape';

function Project() {
  const cameraRef = useRef();

  useEffect(() => {
    const setCamera = () => {
      const aspect = window.innerWidth / window.innerHeight;
      const camera = new THREE.OrthographicCamera(-200 * aspect, 200 * aspect, 200, -200, 0.1, 1000);
      camera.position.set(200, 400, 200);
      camera.lookAt(0, 0, 0);
      return camera;
    };
    cameraRef.current = setCamera();
  }, []);

  return (
    <Canvas
      style={{ height: '75vh' }}
  gl={{ antialias: true }}
  shadowMap={{ enabled: true, type: THREE.PCFSoftShadowMap }}
  camera={{ position: [200, 200, 200], up: [0, 1, 0], far: 1000 }}
>
  <ambientLight intensity={0.5} />
  <pointLight position={[10, 10, 10]} />
  <Landscape />
  <MyOrthographicCamera />
</Canvas>
  );
};



export default Project;
