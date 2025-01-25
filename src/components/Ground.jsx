import { usePlane } from '@react-three/cannon'
import { groundTexture } from '../assets/textures'
import { useStore } from '../hooks/useStore'

export function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }))

  const handleOnGroundClick = (e) => {
    e.stopPropagation()
    const { x, y, z } = {
      x: Math.round(e.point.x),
      y: Math.round(e.point.y),
      z: Math.round(e.point.z),
    }

    const { addCube } = useStore.getState()
    addCube(x, y, z)
  }

  return (
    <mesh onClick={handleOnGroundClick} ref={ref}>
      <planeGeometry attach={'geometry'} args={[100, 100]} />
      <meshStandardMaterial attach={'material'} map={groundTexture} />
    </mesh>
  )
}
