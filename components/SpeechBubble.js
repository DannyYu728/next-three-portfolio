import { useRef, useMemo } from 'react';
import { SpriteMaterial, CanvasTexture } from 'three';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

function SpeechBubble({ msg }) {
  const bubbleRef = useRef();

  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 178;
    const ctx = canvas.getContext('2d');
    ctx.shadowColor = 'black';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(20, 15);
    ctx.lineTo(780, 15);
    ctx.quadraticCurveTo(800, 15, 800, 35);
    ctx.lineTo(800, 133);
    ctx.quadraticCurveTo(800, 153, 780, 153);
    ctx.lineTo(20, 153);
    ctx.quadraticCurveTo(0, 153, 0, 133);
    ctx.lineTo(0, 35);
    ctx.quadraticCurveTo(0, 15, 20, 15);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.shadowColor = 'black';
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    ctx.fillStyle = 'black';
    ctx.font = "36pt Comic Sans MS";
    ctx.textBaseline = "top";
    ctx.fillText(msg, 120, 65);

    const texture = new CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, [msg]);

  const material = new SpriteMaterial({ map: texture, color: 0xffffff });

  const [{ y }] = useSpring(() => ({
    from: { y: 0 },
    to: async (next) => {
      while (1) {
        await next({ y: 0.4, delay: 700 });
        await next({ y: -0.1, delay: 700 });
      }
    },
    config: { tension: 150, friction: 20 },
  }));


  useFrame(() => {
    if (bubbleRef.current) {
      bubbleRef.current.position.y = 11 + y.get();
      bubbleRef.current.position.x = 0.5;
      bubbleRef.current.position.z = 0;
    }
  });

  const createCircularTexture = (radius) => {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 2 * radius;
    const ctx = canvas.getContext('2d');
  
  
    // Draw the circle with white fill
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(radius, radius, radius, 0, 2 * Math.PI);
    ctx.fill();
  
    // Draw the border with black stroke
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(radius, radius, radius - ctx.lineWidth / 2, 0, 2 * Math.PI);
    ctx.stroke();
  
    return new CanvasTexture(canvas);
  };

  return (
    <group>
      <animated.sprite
        ref={bubbleRef}
        scale={[8, 2, 1]}
        material={material}
      />
      <animated.sprite
        position={[0, 8.5, 0]}
        scale={[1, 1, 1]}
        material={new SpriteMaterial({ map: createCircularTexture(10) })}
      />
      <animated.sprite
        position={[.5, 9.5, 0]}
        scale={[1.5, 1.5, 1]}
        material={new SpriteMaterial({ map: createCircularTexture(15) })}
      />
    </group>

  );
}

export default SpeechBubble;



