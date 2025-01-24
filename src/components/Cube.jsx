import { useBox } from '@react-three/cannon'

export function Cube({ id, position, texture }) {
  const [ref] = useBox(() => ({
    mass: 0,
    position,
  }))

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}
