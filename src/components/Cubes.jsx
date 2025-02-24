import { Cube } from './Cube'
import { useStore } from '../hooks/useStore'

export function Cubes() {
  const cubes = useStore((state) => state.cubes)
  return cubes.map(({ id, position, texture }) => {
    return <Cube key={id} id={id} position={position} texture={texture} />
  })
}
