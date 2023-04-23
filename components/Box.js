import { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Vector2, Raycaster } from 'three';
import { useRouter } from 'next/router';
import * as YUKA from 'yuka';

function Box() {
  const router = useRouter();
  const meshRef = useRef();
  const { camera, scene } = useThree();
  const raycaster = new Raycaster();
  const pointer = new Vector2();

  const vehicle = new YUKA.Vehicle();
  vehicle.position.set(0, 40, 0);
  vehicle.maxSpeed = 50;

  const target = new YUKA.GameEntity();

  const arriveBehavior = new YUKA.ArriveBehavior(target.position, 3, 0.5);
  vehicle.steering.add(arriveBehavior);

  useEffect(() => {
    function onMouseDown(event) {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        target.position.set(intersects[0].point.x, 18, intersects[0].point.z);
      }
    }
    window.addEventListener('mousedown', onMouseDown);

    return () => {
      window.removeEventListener('mousedown', onMouseDown);
    };
  }, [camera, scene, router]);

  useFrame(() => {
    if (meshRef.current) {
      const mesh = meshRef.current;
      const delta = 1 / 60;
      vehicle.update(delta);
      mesh.position.copy(vehicle.position);
      const direction = target.position.clone().sub(vehicle.position);
      direction.y = 0; 
      direction.normalize();
      mesh.lookAt(mesh.position.clone().add(direction));
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 40, 0]} receiveShadow>
      <boxGeometry args={[40, 90, 40]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

export default Box;


