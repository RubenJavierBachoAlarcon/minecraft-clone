import { useBox } from '@react-three/cannon'
import { textures } from '../assets/textures'

export function Cube({ id, position, texture }) {
  const [ref] = useBox(() => ({
    type: 'Static',
    position,
  }))

  const textureMap = textures[texture]

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={textureMap} />
    </mesh>
  )
}
