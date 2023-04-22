import { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { BoxBufferGeometry, MeshStandardMaterial, Vector2, Raycaster, Vector3 } from 'three';

function Box() {
  const meshRef = useRef();
  const { camera, scene } = useThree();
  const raycaster = new Raycaster();
  const pointer = new Vector2();

  const target = new Vector3();
  const arriveDistance = 3;
  const arriveTolerance = 0.5;
  const maxSpeed = 1.5;

  useEffect(() => {
    function onMouseDown(event) {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        target.set(intersects[0].point.x, intersects[0].point.y, intersects[0].point.z);
      }
    }

    window.addEventListener('mousedown', onMouseDown);

    return () => {
      window.removeEventListener('mousedown', onMouseDown);
    };
  }, [camera, scene]);

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
    <mesh ref={meshRef} position={[-3, 20, -3]}>
      <boxBufferGeometry args={[40, 40, 40]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

export default Box;

