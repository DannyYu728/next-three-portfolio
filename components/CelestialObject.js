import { OrbitControls, useGLTF } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useLoader, useThree, useFrame } from '@react-three/fiber'

export const distanceFromSun = distanceinAU => {
  const sunRadius = 5 * 109.2
  return sunRadius + 5 * distanceinAU * 50
}

export const calculatePlanetPosition =(distanceFromSun, angleInDegrees) => {
  const sunPosition = new THREE.Vector3(5 * 50, 6 * 50, 20 * 50)
  const earthPosition = new THREE.Vector3(0, 0, 0)
  const angleInRadians = (angleInDegrees * Math.PI) / 180
  const sunToEarth = new THREE.Vector3().subVectors(earthPosition, sunPosition)
  const sunToEarthNormalized = sunToEarth.clone().normalize()
  const rotationAxis = new THREE.Vector3(0, 1, 0)
  sunToEarthNormalized.applyAxisAngle(rotationAxis, angleInRadians)
  const planetPosition = sunPosition
    .clone()
    .add(sunToEarthNormalized.multiplyScalar(distanceFromSun))
  return planetPosition
}

export const Planet = ({ textureUrl, size, position, orbitTarget, orbitSpeed = 0.001  }) => {
  const texture = useLoader(THREE.TextureLoader, textureUrl)
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(1, 1)
  texture.anisotropy = 16
  const planetMaterial = new THREE.MeshPhongMaterial({ map: texture })

  const meshRef = useRef();

  useEffect(() => {
    if (meshRef.current && orbitTarget) {
      meshRef.current.position.set(...position);
      meshRef.current.position.sub(orbitTarget);
    }
  }, [orbitTarget, position]);

  useFrame(() => {
    if (meshRef.current && orbitTarget) {
      meshRef.current.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), orbitSpeed);
      meshRef.current.position.add(orbitTarget);
    }
  });

  return (
    <mesh ref={meshRef} position={position} material={planetMaterial}>
      <sphereGeometry args={[size, 64, 64]} />
    </mesh>
  )
}

export const Sun = () => {
  const sunSize = 5 * 109.2
  const texture = useLoader(THREE.TextureLoader, '/assets/sun.jpeg')
  const glowTexture = useLoader(THREE.TextureLoader, '/assets/glow.png');
  const glowMaterial = new THREE.MeshBasicMaterial({
    map: glowTexture,
    transparent: true,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide
  });
  const glowSizeMultiplier = 1.015;
  
  return (
    <>
      <mesh position={[5 * 50, 6 * 50, 20 * 50]}>
        <sphereGeometry args={[sunSize, 64, 64]} />
        <meshBasicMaterial map={texture} />
      </mesh>
      <mesh position={[4.9 * 50, 5.9 * 50, 20 * 50]}>
        <sphereGeometry args={[sunSize * glowSizeMultiplier, 64, 64]} />
        <meshBasicMaterial {...glowMaterial} />
      </mesh>
    </>
  )
}

export const Asteroid = ({ position, size, texture }) => {
  const material = new THREE.MeshStandardMaterial({ map: texture });

  const geometry = new THREE.IcosahedronGeometry(size, Math.floor(Math.random() * 2));

  return (
    <mesh position={position} geometry={geometry} material={material}>
      <meshStandardMaterial attach="material" map={texture}/>
    </mesh>
  );
};

export const AsteroidBelt = ({ count}) => {
  const texture = useLoader(THREE.TextureLoader, '/assets/moon.jpeg');
  const minDistance = distanceFromSun(2.75)
  const maxDistance = distanceFromSun(3.0)
  const asteroidBelt = [];

  for (let i = 0; i < count; i++) {
    const distanceFromSun = THREE.MathUtils.randFloat(minDistance, maxDistance);
    const angle = THREE.MathUtils.randFloat(0, Math.PI * 2);

    const sunPosition = new THREE.Vector3(5 * 50, 6 * 50, 20 * 50);

    const position = new THREE.Vector3(
      sunPosition.x + distanceFromSun * Math.cos(angle),
      sunPosition.y + THREE.MathUtils.randFloat(-200, -450),
      sunPosition.z + distanceFromSun * Math.sin(angle)
    );

    const size = THREE.MathUtils.randFloat(0.5, 1.5);

    asteroidBelt.push(<Asteroid key={i} position={position.toArray()} size={size} texture={texture} />);
  }

  return <>{asteroidBelt}</>;
};

export const SaturnRing = () => {
  const texture = useLoader(THREE.TextureLoader, '/assets/saturn-ring.png');
  const position = calculatePlanetPosition(distanceFromSun(5.58), 18).toArray();
  const tilt = -70
  const ringSize = 64; 
  const ringGeometry = new THREE.RingGeometry(ringSize, ringSize * 1.5, 64);
  const ringMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    side: THREE.DoubleSide,
    transparent: true,
  });
  const tiltInRadians = (tilt * Math.PI) / 180;

  return (
    <mesh position={position} geometry={ringGeometry} material={ringMaterial} rotation={[tiltInRadians, 0, 5]}>
      <meshStandardMaterial attach="material" map={texture} />
    </mesh>
  );
};

export const House = ({scene, scale, position, rotation, ref}) => {
  const houseRef = useRef()
  const gltf = useGLTF(scene)

  return (
    <primitive
      ref={houseRef}
      object={gltf.scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  )
}

export const CustomOrbitControls = () => {
  const { camera, gl } = useThree()
  const controls = useRef()

  useEffect(() => {
    if (controls.current) {
      controls.current.target.set(-0.5, 4.85, 0)
      controls.current.update()
      controls.current.minDistance = 8
      controls.current.maxDistance = 400
    }
  }, [controls, camera, gl.domElement])

  return <OrbitControls ref={controls} args={[camera, gl.domElement]} />
}





