import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, RoundedBox, Environment } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const CubeCluster = () => {
  const groupRef = useRef();
  const cubes = useMemo(() => {
    const arr = [];
    const size = 1.0;
    const spacing = 1.15; 
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          if (x === 0 && y === 0 && z === 0) continue;
          if (Math.random() > 0.45) continue;
          const offsetX = (Math.random() - 0.5) * 0.15;
          const offsetY = (Math.random() - 0.5) * 0.15;
          const offsetZ = (Math.random() - 0.5) * 0.15;
          const scale = 0.7 + Math.random() * 0.6; 
          arr.push({
            position: [
              x * spacing + offsetX, 
              y * spacing + offsetY, 
              z * spacing + offsetZ
            ],
            scale: [scale, scale, scale]
          });
        }
      }
    }
    for (let i = 0; i < 15; i++) {
      const radius = 2 + Math.random() * 2;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      const scale = 0.2 + Math.random() * 0.5;
      arr.push({
        position: [x, y, z],
        scale: [scale, scale, scale]
      });
    }
    return arr;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.15;
      groupRef.current.rotation.y += 0.003;
    }
  });
  return (
    <group ref={groupRef} rotation={[Math.PI / 4, Math.PI / 5, Math.PI / 6]} scale={1.3}>
      {cubes.map((cube, i) => (
        <mesh key={i} position={cube.position} scale={cube.scale}>
          <RoundedBox args={[1, 1, 1]} radius={0.08} smoothness={4}>
            <meshStandardMaterial 
              color="#181818" 
              roughness={0.15} 
              metalness={0.8}
            />
          </RoundedBox>
        </mesh>
      ))}
      <mesh>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshBasicMaterial color="#ff5722" />
        <pointLight color="#ff8a44" intensity={200} distance={20} decay={1.5} />
      </mesh>
    </group>
  );
};
const Particles = () => {
  const points = useRef();
  const particlesCount = 30;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const radius = 5 + Math.random() * 5;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);
  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y += 0.001;
      points.current.rotation.x += 0.0005;
    }
  });
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.15} color="#444444" sizeAttenuation={true} />
    </points>
  );
};

const Orbits = () => {
  return (
    <group>
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[7, 0.005, 16, 100]} />
        <meshBasicMaterial color="#aaaaaa" transparent opacity={0.3} />
      </mesh>
      <mesh rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
        <torusGeometry args={[8.5, 0.005, 16, 100]} />
        <meshBasicMaterial color="#aaaaaa" transparent opacity={0.2} />
      </mesh>
    </group>
  );
};

const HeroModel = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }} gl={{ antialias: true }}>
      <color attach="background" args={['#f4f2ee']} />
      
      <Environment preset="city" />
      
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 20, 10]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-10, -10, -10]} intensity={0.8} color="#ff5722" />
      
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        <CubeCluster />
        <Orbits />
      </Float>
      
      <Particles />
      
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default HeroModel;
