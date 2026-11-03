"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, useTexture } from "@react-three/drei";
import { useRef, useLayoutEffect, Suspense } from "react";
import { Group, InstancedMesh, Object3D, SRGBColorSpace } from "three";
function Sculpture() {
  const group = useRef<Group>(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += Math.min(delta, 0.04) * 0.13;
    group.current.rotation.x +=
      (state.pointer.y * 0.15 - group.current.rotation.x) * 0.025;
    group.current.rotation.z +=
      (state.pointer.x * 0.12 - group.current.rotation.z) * 0.025;
  });
  return (
    <group ref={group} rotation={[0.22, 0.35, -0.18]}>
      <mesh rotation={[Math.PI / 2.9, 0, 0]}>
        <torusGeometry args={[1.47, 0.12, 16, 96]} />
        <meshStandardMaterial
          color="#bac4dd"
          metalness={0.92}
          roughness={0.23}
        />
      </mesh>
      <mesh rotation={[0, Math.PI / 2.3, 0]}>
        <torusGeometry args={[1.47, 0.09, 16, 96]} />
        <meshStandardMaterial
          color="#647bff"
          metalness={0.65}
          roughness={0.26}
        />
      </mesh>
      <mesh rotation={[0.4, 0.7, 0.6]}>
        <torusGeometry args={[1.04, 0.24, 20, 96]} />
        <meshStandardMaterial
          color="#c5cbed"
          metalness={0.9}
          roughness={0.18}
        />
      </mesh>
      <mesh rotation={[0.45, 0.3, 0.3]}>
        <octahedronGeometry args={[0.62, 0]} />
        <meshPhysicalMaterial
          color="#8697ff"
          metalness={0.45}
          roughness={0.14}
          clearcoat={1}
        />
      </mesh>
      {Array.from({ length: 8 }, (_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i * Math.PI) / 4) * 1.47,
            Math.sin((i * Math.PI) / 4) * 0.55,
            Math.sin((i * Math.PI) / 4) * 1.35,
          ]}
        >
          <sphereGeometry args={[0.055, 12, 12]} />
          <meshStandardMaterial
            color="#8294ff"
            emissive="#647bff"
            emissiveIntensity={0.5}
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}
export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.4]}
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      role="img"
      aria-label="Interactive orbital engineering sculpture"
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[3, 5, 3]} intensity={4} color="#ffffff" />
      <directionalLight position={[-4, 0, 2]} intensity={3} color="#647bff" />
      <pointLight position={[0, -3, -1]} intensity={20} color="#a8b4ff" />
      <Sculpture />
    </Canvas>
  );
}
function Keyboard() {
  const keys = useRef<InstancedMesh>(null);
  useLayoutEffect(() => {
    if (!keys.current) return;
    const obj = new Object3D();
    for (let i = 0; i < 48; i++) {
      obj.position.set(
        ((i % 12) - 5.5) * 0.246,
        -1.209,
        0.39 + Math.floor(i / 12) * 0.18,
      );
      obj.updateMatrix();
      keys.current.setMatrixAt(i, obj.matrix);
    }
    keys.current.instanceMatrix.needsUpdate = true;
  }, []);
  return (
    <>
      <instancedMesh ref={keys} args={[undefined, undefined, 48]}>
        <boxGeometry args={[0.208, 0.014, 0.132]} />
        <meshStandardMaterial color="#172035" roughness={0.5} />
      </instancedMesh>
      <RoundedBox
        args={[0.95, 0.012, 0.38]}
        position={[0, -1.21, 1.26]}
        radius={0.03}
        smoothness={2}
      >
        <meshStandardMaterial color="#8c97b0" metalness={0.6} roughness={0.4} />
      </RoundedBox>
    </>
  );
}
function Device({ src }: { src: string }) {
  const group = useRef<Group>(null);
  const texture = useTexture(src, (loaded) => {
    if (!Array.isArray(loaded)) loaded.colorSpace = SRGBColorSpace;
  });
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y +=
      (state.pointer.x * 0.13 - 0.12 - group.current.rotation.y) * 0.035;
    group.current.rotation.x +=
      (-state.pointer.y * 0.06 - 0.08 - group.current.rotation.x) * 0.035;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.035;
  });
  return (
    <group ref={group} rotation={[-0.08, -0.12, 0]}>
      <RoundedBox args={[3.7, 2.42, 0.1]} radius={0.08} smoothness={3}>
        <meshStandardMaterial
          color="#141d30"
          metalness={0.7}
          roughness={0.25}
        />
      </RoundedBox>
      <mesh position={[0, -0.02, 0.058]}>
        <planeGeometry args={[3.48, 2.18]} />
        <meshBasicMaterial map={texture} />
      </mesh>
      <mesh position={[0, 1.15, 0.058]}>
        <sphereGeometry args={[0.014, 8, 8]} />
        <meshBasicMaterial color="#647bff" />
      </mesh>
      <RoundedBox
        args={[3.95, 0.12, 1.9]}
        position={[0, -1.29, 0.7]}
        radius={0.05}
        smoothness={2}
      >
        <meshStandardMaterial
          color="#a4adc2"
          metalness={0.8}
          roughness={0.28}
        />
      </RoundedBox>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.221, 0.8]}>
        <planeGeometry args={[3.25, 0.8]} />
        <meshStandardMaterial color="#293248" roughness={0.55} />
      </mesh>
      <Keyboard />
    </group>
  );
}
export function DeviceScene({ src }: { src: string }) {
  return (
    <Canvas
      dpr={[1, 1.4]}
      camera={{ position: [0, 0.4, 5.8], fov: 40 }}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      role="img"
      aria-label="Interactive 3D laptop showing an authentic project screenshot"
    >
      <ambientLight intensity={2} />
      <directionalLight position={[4, 5, 4]} intensity={4} />
      <directionalLight position={[-3, 1, 1]} intensity={2} color="#8899ff" />
      <Suspense fallback={null}>
        <Device src={src} />
      </Suspense>
    </Canvas>
  );
}
