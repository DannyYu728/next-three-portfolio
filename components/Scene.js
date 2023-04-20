import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, PerspectiveCamera } from '@react-three/drei';
import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Scene = () => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'#00FF00'} />
      </mesh>
      <Html fullscreen>
        <MotionBox
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          position="absolute"
          top={0}
          left={0}
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          zIndex={10}
        >
          <Box
            bg="blue.500"
            color="white"
            p={4}
            borderRadius="md"
            boxShadow="lg"
          >
            <Text fontSize="xl" fontWeight="bold">
              Hello, welcome to my 3D scene!
            </Text>
          </Box>
        </MotionBox>
      </Html>
    </Canvas>
  );
};

export default Scene;




