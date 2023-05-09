"use client"

import Spline from "./Spline"
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

export default function Home() {
  return (
    <Suspense fallback={null}>
    <Canvas  style={{ width: '100', height: '100vh' }} shadows flat linear>
      <Spline />
    </Canvas>
  </Suspense>
  )
}
