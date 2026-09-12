import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, RoundedBox, Environment } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
const CubeCluster = () => {
  const groupRef = useRef();
  const cubeRefs = useRef([]);
  const cubes = useMemo(() => {
    const arr = [];
    const spacing = 1.15; 
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          if (x === 0 && y === 0 && z === 0) continue;
          let scale = 0.7 + Math.random() * 0.6; 
          const assembledPos = [x * spacing, y * spacing, z * spacing];
          if (Math.random() > 0.45) {
            scale = 0;
          }
          const offsetX = scale === 0 ? 0 : (Math.random() - 0.5) * 0.15;
          const offsetY = scale === 0 ? 0 : (Math.random() - 0.5) * 0.15;
          const offsetZ = scale === 0 ? 0 : (Math.random() - 0.5) * 0.15;
          const scatteredPos = [
            x * spacing + offsetX, 
            y * spacing + offsetY, 
            z * spacing + offsetZ
          ];
          arr.push({
            assembledPos,
            scatteredPos,
            scatteredScale: [scale, scale, scale],
            assembledScale: [0.95, 0.95, 0.95],
          });
        }
      }
    }
    for (let i = 0; i < 15; i++) {
      const radius = 2 + Math.random() * 2;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      const px = radius * Math.sin(phi) * Math.cos(theta);
      const py = radius * Math.sin(phi) * Math.sin(theta);
      const pz = radius * Math.cos(phi);
      const scale = 0.2 + Math.random() * 0.5;
      arr.push({
        assembledPos: [0,0,0], 
        scatteredPos: [px, py, pz],
        scatteredScale: [scale, scale, scale],
        assembledScale: [0, 0, 0],
      });
    }
    return arr;
  }, []);

  useFrame(() => {
    const scrollY = window.scrollY;
    const progress = Math.min(Math.max(scrollY / 700, 0), 1);
    const easedProgress = progress < 0.5 
      ? 4 * progress * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    cubes.forEach((cubeData, i) => {
      const mesh = cubeRefs.current[i];
      if (mesh) {
        mesh.position.lerpVectors(
          new THREE.Vector3(...cubeData.scatteredPos), 
          new THREE.Vector3(...cubeData.assembledPos), 
          easedProgress
        );
        mesh.scale.lerpVectors(
          new THREE.Vector3(...cubeData.scatteredScale), 
          new THREE.Vector3(...cubeData.assembledScale), 
          easedProgress
        );
      }
    });

    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
      
      const startPos = new THREE.Vector3(3.5, 0, 0);
      const endPos = new THREE.Vector3(-3.5, -2, -2);
      groupRef.current.position.lerpVectors(startPos, endPos, easedProgress);
      
      const startScale = 0.7;
      const endScale = 0.4;
      const s = startScale - ((startScale - endScale) * easedProgress);
      groupRef.current.scale.set(s, s, s);
    }
  });

  return (
    <group ref={groupRef} rotation={[Math.PI / 4, Math.PI / 5, Math.PI / 6]}>
      {cubes.map((cube, i) => (
        <mesh 
          key={i} 
          ref={(el) => (cubeRefs.current[i] = el)}
        >
          <RoundedBox args={[1, 1, 1]} radius={0.1} smoothness={4}>
            <meshStandardMaterial 
              color="#111" 
              roughness={0.2} 
              metalness={0.8}
              envMapIntensity={2}
            />
          </RoundedBox>
        </mesh>
      ))}
      <mesh>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshBasicMaterial color="#ff5722" />
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
      const radius = 4 + Math.random() * 2;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame(() => {
    const scrollY = window.scrollY;
    const progress = Math.min(Math.max(scrollY / 700, 0), 1);

    if (points.current) {
      points.current.rotation.y += 0.001;
      points.current.rotation.x += 0.0005;
      
      const startPos = new THREE.Vector3(3.5, 0, 0);
      const endPos = new THREE.Vector3(-3.5, -2, -2);
      points.current.position.lerpVectors(startPos, endPos, progress);
      
      const s = 1 - progress;
      points.current.scale.set(s, s, s);
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
      <pointsMaterial size={0.05} color="#ff5722" />
    </points>
  );
};

const HeroModel = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      <Environment preset="city" />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <CubeCluster />
        <Particles />
      </Float>
    </Canvas>
  );
};

export default HeroModel;
