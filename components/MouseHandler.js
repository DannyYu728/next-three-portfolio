import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

const MouseHandler = () => {
  const { camera, scene } = useThree();

  useEffect(() => {
    if (!camera || !scene) return;

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const onMouseMove = (event) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        intersects[0].object.material.color.set(0xff0000);
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [camera, scene]);

  return null;
};

export default MouseHandler;
