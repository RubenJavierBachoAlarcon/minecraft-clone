import { usePlane } from '@react-three/cannon'
import { groundTexture } from '../assets/textures'
import { useStore } from '../hooks/useStore'
import { useKeyboard } from '../hooks/useKeyboard'
import { useEffect, useState } from 'react'

export function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
  }))

  const handleOnGroundClick = (e) => {
    if (e.button !== 2) return
    e.stopPropagation()
    const { x, y, z } = {
      x: Math.round(e.point.x),
      y: Math.round(e.point.y),
      z: Math.round(e.point.z),
    }
    const { addCube } = useStore.getState()
    addCube(x, y + 0.5, z)
  }

  const [shadowsEnabled, setShadowsEnabled] = useState(true)
  const { disable_shadows } = useKeyboard()

  useEffect(() => {
    if (disable_shadows) {
      setShadowsEnabled((prev) => !prev)
    }
  }, [disable_shadows])

  return (
    <mesh onPointerDown={handleOnGroundClick} ref={ref} receiveShadow={shadowsEnabled}>
      <planeGeometry attach={'geometry'} args={[100, 100]} />
      <meshStandardMaterial attach={'material'} map={groundTexture} />
    </mesh>
  )
}
