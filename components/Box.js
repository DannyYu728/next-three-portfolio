import { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Vector2, Raycaster, Vector3 } from 'three';
import {useRouter} from 'next/router';

function Box() {
  const router = useRouter()
  const meshRef = useRef();
  const { camera, scene } = useThree();
  const raycaster = new Raycaster();
  const pointer = new Vector2();

  const target = new Vector3();
  const arriveDistance = 3;
  const arriveTolerance = 0.5;
  const maxSpeed = 2;

  useEffect(() => {
    function onMouseDown(event) {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);
      
      if (intersects.length > 0) {
        target.set(intersects[0].point.x + 40, intersects[0].point.y + 40, intersects[0].point.z + 40);
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
      const distanceToTarget = mesh.position.distanceTo(target);

      if (distanceToTarget > arriveTolerance) {
        const desiredVelocity = target
          .clone()
          .sub(mesh.position)
          .normalize()
          .multiplyScalar(maxSpeed);

        if (distanceToTarget < arriveDistance) {
          desiredVelocity.multiplyScalar(distanceToTarget / arriveDistance);
        }

        mesh.position.add(desiredVelocity);
      }
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

