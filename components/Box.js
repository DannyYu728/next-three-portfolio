import { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Quaternion, Vector3, Vector2, Raycaster } from 'three';
import { useRouter } from 'next/router';
import { useGLTF } from '@react-three/drei';
import * as YUKA from 'yuka';

function Box() {
  const router = useRouter();
  const meshRef = useRef();
  const modelRef = useRef();
  const { camera, scene } = useThree();
  const raycaster = new Raycaster();
  const pointer = new Vector2();
  const { scene: model } = useGLTF('/models/astronaut/scene.gltf');

  const vehicle = new YUKA.Vehicle();
  vehicle.position.set(-250, 0, 250);
  vehicle.maxSpeed = 60;

  const target = new YUKA.GameEntity();
  target.position.copy(vehicle.position);

  const arriveBehavior = new YUKA.ArriveBehavior(target.position, 3, 0.5);
  vehicle.steering.add(arriveBehavior);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.PI;
    }  
    function onMouseDown(event) {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        target.position.set(intersects[0].point.x, 0, intersects[0].point.z);
      }
    }
    window.addEventListener('mousedown', onMouseDown);

    return () => {
      window.removeEventListener('mousedown', onMouseDown);
    };
  }, [camera, scene, router, modelRef]);

  useFrame(() => {
    if (meshRef.current) {
      const mesh = meshRef.current;
      const delta = 1 / 60;
      vehicle.update(delta);
      mesh.position.copy(vehicle.position);
      const direction = target.position.clone().sub(vehicle.position); 
      direction.y = 0; 
      direction.normalize();
      // mesh.quaternion.setFromUnitVectors(new Vector3(0, 0, 1), direction);
      mesh.lookAt(mesh.position.clone().add(direction));
    }
  });

  return (
    <group ref={meshRef}>
      <primitive ref={modelRef} object={model}  scale={90}/>
    </group>
  );
}

export default Box;


