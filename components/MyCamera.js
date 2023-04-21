import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';

const MyOrthographicCamera = () => {
  const cameraRef = useRef();
  const { set } = useThree();

  useEffect(() => {
    if (cameraRef.current) {
      set({ camera: cameraRef.current });
    }
  }, [set]);

  const aspect = window.innerWidth / window.innerHeight;
  const width = 200 * aspect;
  const height = 200;

  return (
    <orthographicCamera
      ref={cameraRef}
      args={[-width, width, height, -height, 0.1, 1000]}
      position={[200, 150, 200]}
      onUpdate={(camera) => camera.lookAt(0, 0, 0)}
    />
  );
};

export default MyOrthographicCamera;

