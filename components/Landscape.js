import React from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

function Landscape() {
  const texture = useLoader(THREE.TextureLoader, '/assets/grass.jpg');
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(240, 240);

  return (
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeBufferGeometry args={[500, 500]} />
        <meshStandardMaterial map={texture} />
      </mesh>
  );
}

export default Landscape
