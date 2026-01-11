import * as THREE from 'three'
import { useMemo } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

const LABELS = {
  1: '/Grape.png',
  2: '/GreenApple.png',
  3: '/Mojito.png',
}

export default function BottleModel({
  liquidColor = '#eaff4f',
  labelIndex = 1,
}) {
  const { scene } = useGLTF('/bottle.glb')

  // pick label image based on number
  const labelPath = LABELS[labelIndex] || LABELS[1]
  const labelTexture = useTexture(labelPath)

  const model = useMemo(() => {
    const root = scene.clone(true)

    // ───────── CENTER MODEL ─────────
    const box = new THREE.Box3().setFromObject(root)
    const center = box.getCenter(new THREE.Vector3())
    root.position.sub(center)

    // ───────── MATERIALS ─────────
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 1,
      roughness: 0.05,
      metalness: 0,
      ior: 1.5,
      thickness: 0.4,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
      transparent: true,
      depthWrite: false,
      envMapIntensity: 1.5,
    })

    const liquidMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(liquidColor),
      roughness: 0.35,
      metalness: 0,
      envMapIntensity: 1.2,
    })

    const capMat = new THREE.MeshStandardMaterial({
      color: 0x1c1c1c,
      roughness: 0.85,
      metalness: 0,
    })

    // ───────── LABEL TEXTURE CONFIG ─────────
    labelTexture.colorSpace = THREE.SRGBColorSpace
    labelTexture.wrapS = THREE.RepeatWrapping
    labelTexture.wrapT = THREE.ClampToEdgeWrapping
    labelTexture.repeat.set(1, -2)
    labelTexture.offset.set(0, 1)

    const labelMat = new THREE.MeshStandardMaterial({
      map: labelTexture,
      transparent: true,
      roughness: 0.6,
      metalness: 0,
      depthWrite: false,
    })

    // ───────── APPLY MATERIALS ─────────
    root.getObjectByName('bottle')?.traverse((c) => {
      if (c.isMesh) {
        c.material = glassMat
        c.renderOrder = 2
      }
    })

    root.getObjectByName('liquid')?.traverse((c) => {
      if (c.isMesh) {
        c.material = liquidMat
        c.renderOrder = 1
      }
    })

    root.getObjectByName('cap')?.traverse((c) => {
      if (c.isMesh) {
        c.material = capMat
        c.renderOrder = 3
      }
    })

    root.getObjectByName('Cylinder')?.traverse((c) => {
      if (c.isMesh) {
        c.material = labelMat
        c.renderOrder = 4
        c.scale.set(1.002, 1, 1.002)
      }
    })

    return root
  }, [scene, labelTexture, liquidColor])

  return <primitive object={model} />
}
