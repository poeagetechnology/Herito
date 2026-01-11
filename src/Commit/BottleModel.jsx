import * as THREE from 'three'
import { useMemo } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export default function BottleModel({ liquidColor = '#eaff4f' }) {
  const { scene } = useGLTF('/bottle.glb')
  const labelTexture = useTexture('/lemon.png')

  const model = useMemo(() => {
    const root = scene.clone(true)

    // ───────────────── CENTER MODEL ─────────────────
    const box = new THREE.Box3().setFromObject(root)
    const center = box.getCenter(new THREE.Vector3())
    root.position.sub(center)

    // ───────────────── MATERIALS ─────────────────
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
      transparent: false,
      depthWrite: true,
      envMapIntensity: 1.2,
    })

    const capMat = new THREE.MeshStandardMaterial({
      color: 0x1c1c1c,
      roughness: 0.85,
      metalness: 0,
    })

    // ───────── LABEL TEXTURE ─────────
    labelTexture.colorSpace = THREE.SRGBColorSpace
    labelTexture.wrapS = THREE.RepeatWrapping
    labelTexture.wrapT = THREE.ClampToEdgeWrapping

    // IMPORTANT: no rotation, no flipping
    labelTexture.center.set(0, 0)
    labelTexture.rotation = 0


    labelTexture.repeat.set(1, -2)
    labelTexture.offset.set(0, 1)

    // ───────── LABEL MATERIAL ─────────
    const labelMat = new THREE.MeshStandardMaterial({
      map: labelTexture,
      transparent: true,
      roughness: 0.6,
      metalness: 0,
      depthWrite: false,
    })


    // ───────────────── APPLY MATERIALS ─────────────────

    root.getObjectByName('bottle')?.traverse((child) => {
      if (child.isMesh) {
        child.material = glassMat
        child.renderOrder = 2
      }
    })

    root.getObjectByName('liquid')?.traverse((child) => {
      if (child.isMesh) {
        child.material = liquidMat
        child.renderOrder = 1
      }
    })

    root.getObjectByName('cap')?.traverse((child) => {
      if (child.isMesh) {
        child.material = capMat
        child.renderOrder = 3
      }
    })

    // ───────── APPLY TO LABEL MESH ─────────
    root.getObjectByName('Cylinder')?.traverse((child) => {
      if (child.isMesh) {
        child.material = labelMat
        child.renderOrder = 4

        // Small scale to avoid z-fighting with bottle
        child.scale.set(1.002, 1, 1.002)

        // DO NOT rotate the mesh
        child.rotation.set(0, 0, 0)
      }
    })
    
    return root
  }, [scene, labelTexture, liquidColor])

  return <primitive object={model} />
}
