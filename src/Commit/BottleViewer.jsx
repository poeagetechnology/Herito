import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import BottleModel from './BottleModel'

export default function BottleViewer({ color, labelIndex = 1 }) {
  return (
    <Canvas
      camera={{ position: [0, 1, 3.5], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        physicallyCorrectLights: true,
        toneMappingExposure: 0.85,
      }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />

      {/* Pass label number here */}
      <BottleModel liquidColor={color} labelIndex={labelIndex} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={5}
      />

      <Environment preset="studio" />
    </Canvas>
  )
}
