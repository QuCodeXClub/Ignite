import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, RoundedBox, Environment } from '@react-three/drei';
import { useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';

const CubeCluster = () => {
  const groupRef = useRef();
  const cubes = useMemo(() => {
    const arr = [];
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
    if (groupRef.current) {
      groupRef.current.rotation.y -= 0.003;
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
        <meshBasicMaterial color="#06befc" />
        <pointLight color="#06befc" intensity={200} distance={20} decay={1.5} />
      </mesh>
    </group>
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

const Embers = () => {
  const count = 100;
  const mesh = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        ],
        factor: Math.random() * 0.5 + 0.5,
        speed: Math.random() * 0.01 + 0.005,
        xFactor: Math.random() * 2 - 1,
        yFactor: Math.random() * 2 - 1,
        zFactor: Math.random() * 2 - 1,
      });
    }
    return temp;
  }, []);

  useFrame(() => {
    particles.forEach((particle, i) => {
      let { position, speed, xFactor, yFactor, zFactor } = particle;

      // Embers floating upwards and outwards
      position[1] += speed * 2;
      position[0] += speed * xFactor;
      position[2] += speed * zFactor;

      // Reset if it goes too far
      if (position[1] > 5 || position[0] > 5 || position[0] < -5 || position[2] > 5 || position[2] < -5) {
        position[0] = (Math.random() - 0.5) * 2;
        position[1] = (Math.random() - 0.5) * 2;
        position[2] = (Math.random() - 0.5) * 2;
      }

      dummy.position.set(position[0], position[1], position[2]);
      // Small scale for embers
      const scale = particle.factor * 0.05;
      dummy.scale.set(scale, scale, scale);
      dummy.rotation.x += speed;
      dummy.rotation.y += speed;
      dummy.updateMatrix();

      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <boxGeometry args={[1, 1, 1]} />
      {/* Glow material for embers */}
      <meshBasicMaterial color="#ffffff" toneMapped={false} />
    </instancedMesh>
  );
};

const Scene = () => {
  const { viewport } = useThree();
  const isMobile = viewport.width < 12;
  const groupRef = useRef();

  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollYRef = useRef(0);
  const scrollVelocity = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // 1. Calculate Scroll Velocity for Rotation Boost
      const currentScroll = scrollYRef.current;
      const velocityTarget = currentScroll - (groupRef.current.userData.lastScroll || currentScroll);
      groupRef.current.userData.lastScroll = currentScroll;

      // Smoothly dampen the velocity so acceleration and deceleration feel organic
      scrollVelocity.current = THREE.MathUtils.damp(scrollVelocity.current, velocityTarget, 2, delta);

      // Natural base rotation + boost from scroll velocity
      const rotationBoost = Math.abs(scrollVelocity.current) * 0.003;
      const speedY = 0.25 + rotationBoost;

      groupRef.current.rotation.y -= speedY * delta;

      // 2. Static Position/Scale (No motion, only rotation)
      const targetX = isMobile ? 0 : viewport.width * 0.25; // Centered on mobile, Right on desktop
      const targetY = isMobile ? 1.5 : 0;
      const targetScale = isMobile ? 0.7 : 1.1;

      const dampFactor = 1.2;
      groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, targetX, dampFactor, delta);
      groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, targetY, dampFactor, delta);

      groupRef.current.scale.x = THREE.MathUtils.damp(groupRef.current.scale.x, targetScale, dampFactor, delta);
      groupRef.current.scale.y = THREE.MathUtils.damp(groupRef.current.scale.y, targetScale, dampFactor, delta);
      groupRef.current.scale.z = THREE.MathUtils.damp(groupRef.current.scale.z, targetScale, dampFactor, delta);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0} floatIntensity={0.5}>
        <CubeCluster />
        <Orbits />
      </Float>
      <Embers />
    </group>
  );
};

const HeroModel = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }} gl={{ antialias: false, alpha: true }}>
      <Environment preset="city" />
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 20, 10]} intensity={1.5} color="#ffffff" />
      {/* The cyan fill light */}
      <directionalLight position={[-10, -10, -10]} intensity={2.5} color="#06befc" />
      <Scene />
    </Canvas>
  );
};

export default HeroModel;
