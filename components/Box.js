import { useRef, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Raycaster, Vector3, Vector2, PlaneBufferGeometry} from 'three';

const Box = () => {
  const meshRef = useRef();
  const { camera, size, scene } = useThree();
  const [targetPosition, setTargetPosition] = useState(new Vector3());

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.lerp(targetPosition, 0.1);
    }
  });

  // Update the box position
  const updatePosition = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const { width, height } = size;
    const x = (offsetX / width) * 2 - 1;
    const y = -(offsetY / height) * 2 + 1;
    const mouse = new Vector2(x, y);
    const raycaster = new Raycaster();
    raycaster.setFromCamera(mouse, camera);

    // const landscapeObjects = scene.children.filter((child) => child.type === 'Mesh' && (child.name === 'invisiblePlane' || child.name === 'landscapeMesh'));
    // const landscapeObjects = scene.children.filter((child) => child.type === 'Mesh' && child.geometry instanceof PlaneBufferGeometry);
    const landscapeObjects = scene.children.filter((child) => child.type === 'Mesh' && (child.name === 'invisiblePlane' || child.name === 'landscapeMesh'));

    const intersects = raycaster.intersectObjects(landscapeObjects);
    if (intersects.length > 0) {
      const { x, y, z } = intersects[0].point;
      setTargetPosition(new Vector3(x, y, z));
    }
  };

  return (
    <mesh ref={meshRef} onClick={updatePosition}>
      <boxBufferGeometry args={[40, 40, 40]} />
      <meshPhongMaterial color={'orange'} />
    </mesh>
  );
};

export default Box;





