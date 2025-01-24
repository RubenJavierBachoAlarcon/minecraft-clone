import { Cube } from './Cube'

export function Cubes() {
  return (
    <>
      <Cube id={1} position={[0, 5, 0]} />
      <Cube id={2} position={[2, 0, 0]} />
      <Cube id={3} position={[0, 0, 2]} />
      <Cube id={4} position={[2, 0, 2]} />
    </>
  )
}
