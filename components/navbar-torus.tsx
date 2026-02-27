"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import type { Mesh } from "three"

function WireframeTorus() {
  const meshRef = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.8
      meshRef.current.rotation.y += delta * 1.2
    }
  })

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[0.7, 0.28, 16, 32]} />
      <meshBasicMaterial color="#E5FF00" wireframe />
    </mesh>
  )
}

export function NavbarTorus() {
  return (
    <div className="h-8 w-8" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 2.4], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <WireframeTorus />
      </Canvas>
    </div>
  )
}
