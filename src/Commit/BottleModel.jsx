import * as THREE from 'three'
import { useMemo } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export default function BottleModel({ liquidColor }) {
  const gltf = useGLTF('/bottle.glb')
  const labelTexture = useTexture('/lemon.png')

  const model = useMemo(() => {
    const scene = gltf.scene.clone(true)

    // Center model
    const box = new THREE.Box3().setFromObject(scene)
    const center = box.getCenter(new THREE.Vector3())
    scene.position.sub(center)

    // Bottle glass
    const bottle = scene.getObjectByName('bottle')
    bottle?.traverse((child) => {
      if (child.isMesh) {
        child.renderOrder = 1
        child.material = new THREE.MeshPhysicalMaterial({
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
          side: THREE.DoubleSide,
        })
      }
    })

    const liquid = scene.getObjectByName('liquid')
    liquid?.traverse((child) => {
    if (child.isMesh) {
        child.renderOrder = 2
        child.material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(liquidColor),

    
        transparent: false,   // IMPORTANT
        opacity: 1.0,         // fully opaque
        roughness: 0.4,       // soft surface
        metalness: 0.0,       // liquid is non-metal

        depthWrite: true,
        depthTest: true,
        })
    }
    })


    const cap = scene.getObjectByName('cap')
    cap?.traverse((child) => {
    if (child.isMesh) {
        child.renderOrder = 3
        child.material = new THREE.MeshPhysicalMaterial({
        color: 0x1c1c1c,   // dark plastic
        roughness: 0.85,   // rough / matte
        metalness: 0.0,    // plastic = non-metal
        transmission: 0.0, // IMPORTANT: no glass effect
        clearcoat: 0.0,    // no glossy coating
        ior: 1.45,         // plastic IOR
        })
    }
    })


    // Label texture
    labelTexture.colorSpace = THREE.SRGBColorSpace
    labelTexture.wrapS = THREE.RepeatWrapping
    labelTexture.wrapT = THREE.ClampToEdgeWrapping
    labelTexture.repeat.set(-1, 0.9)
    labelTexture.offset.set(1, 0.05)

    const label = scene.getObjectByName('Cylinder')
    label?.traverse((child) => {
      child.renderOrder = 2
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          map: labelTexture,
          transparent: true,
          roughness: 0.7,
          metalness: 0,
          side: THREE.DoubleSide,
          depthWrite: false,
        })
        child.scale.set(1.002, 1, 1.002)
        child.rotation.y = Math.PI
      }
    })

    return scene
  }, [gltf, labelTexture, liquidColor])

  return <primitive object={model} />
}
