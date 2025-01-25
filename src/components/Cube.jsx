import { useBox } from '@react-three/cannon'
import { textures } from '../assets/textures'
import { useState } from 'react'
import { useStore } from '../hooks/useStore'

export function Cube({ id, position, texture }) {
  const [isHovered, setIsHovered] = useState(false)
  const { removeCube } = useStore()
  const { addCube } = useStore()
  const { playerPosition } = useStore()
  const [ref] = useBox(() => ({
    type: 'Static',
    position,
  }))

  const textureMap = textures[texture]

  return (
    <mesh
      ref={ref}
      onPointerDown={(e) => {
        if (e.button === 0) {
          e.stopPropagation()
          removeCube(id)
        }
        if (e.button === 2) {
          e.stopPropagation()
          const { x, y, z } = {
            x: position[0],
            y: position[1],
            z: position[2],
          }
          const { playerX, playerY, playerZ } = {
            playerX: Math.round(playerPosition[0]),
            playerY: Math.round(playerPosition[1]),
            playerZ: Math.round(playerPosition[2]),
          }

          const deltaX = x - e.point.x
          const deltaY = y - e.point.y
          const deltaZ = z - e.point.z

          if (playerX === Math.round(x) && playerY === Math.round(y) + 1 && playerZ === Math.round(z)) return

          if (deltaX >= -0.5 && deltaX <= 0.5 && deltaY >= -0.5 && deltaY <= 0.5 && deltaZ === 0.5) {
            addCube(x, y, z - 1)
          } else if (deltaX >= -0.5 && deltaX <= 0.5 && deltaY >= -0.5 && deltaY <= 0.5 && deltaZ === -0.5) {
            addCube(x, y, z + 1)
          } else if (deltaX === 0.5 && deltaY >= -0.5 && deltaY <= 0.5 && deltaZ >= -0.5 && deltaZ <= 0.5) {
            addCube(x - 1, y, z)
          } else if (deltaX === -0.5 && deltaY >= -0.5 && deltaY <= 0.5 && deltaZ >= -0.5 && deltaZ <= 0.5) {
            addCube(x + 1, y, z)
          } else if (deltaX >= -0.5 && deltaX <= 0.5 && deltaY === 0.5 && deltaZ >= -0.5 && deltaZ <= 0.5) {
            addCube(x, y - 1, z)
          } else if (deltaX >= -0.5 && deltaX <= 0.5 && deltaY === -0.5 && deltaZ >= -0.5 && deltaZ <= 0.5) {
            addCube(x, y + 1, z)
          }
        }
      }}
      onPointerOver={(e) => {
        e.stopPropagation()
        setIsHovered(true)
      }}
      onPointerOut={(e) => {
        e.stopPropagation()
        setIsHovered(false)
      }}
      position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={isHovered ? 'grey' : 'white'} map={textureMap} />
    </mesh>
  )
}
