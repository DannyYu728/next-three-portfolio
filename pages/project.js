import React from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import MyOrthographicCamera from '../components/MyCamera';
import Landscape from '../components/Landscape';
import MyBox from "../components/Box.js"

function Project() {

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
      <MyBox />
      <MyOrthographicCamera />
    </Canvas>
  );
};

export default Project;

