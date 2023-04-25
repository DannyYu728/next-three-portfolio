import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'

export const MyOrthographicCamera = () => {
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
      position={[200, 140, 200]}
      onUpdate={(camera) => camera.lookAt(0, 0, 0)}
    />
  );
};

export const CustomOrbitControls = ({min=8, max=500}) => {
  const { camera, gl } = useThree()
  const controls = useRef()

  useEffect(() => {
    if (controls.current) {
      controls.current.target.set(-0.5, 4.85, 0)
      controls.current.update()
      controls.current.minDistance = min
      controls.current.maxDistance = max
    }
  }, [controls, camera, gl.domElement])

  return <OrbitControls ref={controls} args={[camera, gl.domElement]} />
}

