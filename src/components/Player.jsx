import { useThree } from '@react-three/fiber'
import { useSphere } from '@react-three/cannon'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { Vector3 } from 'three'
import { useKeyboard } from '../hooks/useKeyboard'
import { useStore } from '../hooks/useStore'

export function Player() {
  const { camera } = useThree()
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: 'Dynamic',
    position: [0, 5, 0],
  }))

  const JUMP_FORCE = 3.5

  const { moveForward, moveLeft, moveBackward, moveRight, jump } = useKeyboard()

  const pos = useRef([0, 0, 0])
  const updatePlayerPosition = useStore((state) => state.updatePlayerPosition)
  useEffect(() => {
    api.position.subscribe((p) => {
      pos.current = p
      updatePlayerPosition(p)
    })
  }, [api.position, updatePlayerPosition])

  const vel = useRef([0, 0, 0])
  useEffect(() => {
    api.velocity.subscribe((v) => (vel.current = v))
  }, [api.velocity])

  useFrame(() => {
    // Suaviza el movimiento de la cámara
    const currentPos = new Vector3(pos.current[0], pos.current[1] + 0.75, pos.current[2])
    camera.position.copy(currentPos)

    // Controla el movimiento del jugador
    const direction = new Vector3()
    const frontVector = new Vector3(0, 0, Number(moveBackward) - Number(moveForward))
    const sideVector = new Vector3(Number(moveLeft) - Number(moveRight), 0, 0)
    direction.subVectors(frontVector, sideVector).normalize().applyEuler(camera.rotation).multiplyScalar(5)

    // Controla el salto
    api.velocity.set(direction.x, vel.current[1], direction.z)
    if (jump && Math.abs(vel.current[1]) < 0.05) {
      api.velocity.set(vel.current[0], JUMP_FORCE, vel.current[2])
    }
  })

  return <mesh ref={ref} />
}
