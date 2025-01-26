import { usePlane } from '@react-three/cannon'
import { groundTexture } from '../assets/textures'
import { useStore } from '../hooks/useStore'

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

  return (
    <mesh onPointerDown={handleOnGroundClick} ref={ref} receiveShadow>
      <planeGeometry attach={'geometry'} args={[100, 100]} />
      <meshStandardMaterial attach={'material'} map={groundTexture} />
    </mesh>
  )
}
