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
      controls.current.maxDistance = 500
    }
  }, [controls, camera, gl.domElement])

  return <OrbitControls ref={controls} args={[camera, gl.domElement]} />
}

import { useMemo } from 'react';
import { Color, Vector3, Spherical, PointsMaterial } from 'three';
import { useColorModeValue, useTheme } from '@chakra-ui/react';

// export function CustomStars() {
  // const bgColor = useColorModeValue('#f1ddce', '#ffffff');

//   const { position, size } = useMemo(() => {
//     const positions = [];
//     const sizes = [];
//     const radius = 500;
//     const depth = 500;
//     const count = 5000;
//     const factor = 20;

//     let r = radius + depth;
//     const increment = depth / count;

//     for (let i = 0; i < count; i++) {
//       r -= increment * Math.random();
//       const star = new Vector3().setFromSpherical(
//         new Spherical(r, Math.acos(1 - Math.random() * 2), Math.random() * 2 * Math.PI),
//       );
//       positions.push(star.x, star.y, star.z);
//       sizes.push((0.5 + 0.5 * Math.random()) * factor);
//     }

//     return {
//       position: new Float32Array(positions),
//       size: new Float32Array(sizes),
//     };
//   }, []);

//   const pointsMaterial = useMemo(() => {
//     return new PointsMaterial({
//       size: 1,
//       sizeAttenuation: true,
//       color: new Color(bgColor),
//       map: undefined,
//       alphaTest: 0.5,
//       transparent: true,
//     });
//   }, [bgColor]);

//   return (
//     <points>
//       <bufferGeometry>
//         <bufferAttribute attach="attributes-position" count={position.length / 3} array={position} itemSize={3} />
//         <bufferAttribute attach="attributes-size" count={size.length} array={size} itemSize={1} />
//       </bufferGeometry>
//       <primitive object={pointsMaterial} attach="material" />
//     </points>
//   );
// }




import * as React from 'react';
import { AdditiveBlending, ShaderMaterial } from 'three';

class StarfieldMaterial extends ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        time: {
          value: 0.0
        },
        fade: {
          value: 1.0
        }
      },
      vertexShader:
      /* glsl */
      `
      uniform float time;
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);
        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(time + 100.0));
        gl_Position = projectionMatrix * mvPosition;
      }`,
      fragmentShader:
      /* glsl */
      `
      uniform sampler2D pointTexture;
      uniform float fade;
      varying vec3 vColor;
      void main() {
        float opacity = 1.0;
        if (fade == 1.0) {
          float d = distance(gl_PointCoord, vec2(0.5, 0.5));
          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));
        }
        gl_FragColor = vec4(vColor, opacity);

        #include <tonemapping_fragment>
	      #include <encodings_fragment>
      }`
    });
  }

}

const genStar = r => {
  return new Vector3().setFromSpherical(new Spherical(r, Math.acos(1 - Math.random() * 2), Math.random() * 2 * Math.PI));
};

const CustomStars = /*#__PURE__*/React.forwardRef(({
  radius = 100,
  depth = 50,
  count = 5000,
  saturation = 0,
  factor = 4,
  fade = false,
  speed = 1
}, ref) => {
  const bgColor = useColorModeValue('green', 'red');
  const material = React.useRef();
  const [position, color, size] = React.useMemo(() => {
    const positions = [];
    const colors = [];
    const sizes = Array.from({
      length: count
    }, () => (0.5 + 0.5 * Math.random()) * factor);
    const color = new Color(bgColor);
    let r = radius + depth;
    const increment = depth / count;

    for (let i = 0; i < count; i++) {
      r -= increment * Math.random();
      positions.push(...genStar(r).toArray());
      // color.setHSL(i / count, saturation, 0.9);
      colors.push(color.r, color.g, color.b);
    }

    return [new Float32Array(positions), new Float32Array(colors), new Float32Array(sizes)];
  }, [count, depth, factor, radius, saturation, bgColor]);
  useFrame(state => material.current && (material.current.uniforms.time.value = state.clock.getElapsedTime() * speed));
  const [starfieldMaterial] = React.useState(() => new StarfieldMaterial());
  return /*#__PURE__*/React.createElement("points", {
    ref: ref
  }, /*#__PURE__*/React.createElement("bufferGeometry", null, /*#__PURE__*/React.createElement("bufferAttribute", {
    attach: "attributes-position",
    args: [position, 3]
  }), /*#__PURE__*/React.createElement("bufferAttribute", {
    attach: "attributes-color",
    args: [color, 3]
  }), /*#__PURE__*/React.createElement("bufferAttribute", {
    attach: "attributes-size",
    args: [size, 1]
  })), /*#__PURE__*/React.createElement("primitive", {
    ref: material,
    object: starfieldMaterial,
    attach: "material",
    blending: AdditiveBlending,
    "uniforms-fade-value": fade,
    depthWrite: false,
    transparent: true,
    vertexColors: true
  }));
});

export { CustomStars };