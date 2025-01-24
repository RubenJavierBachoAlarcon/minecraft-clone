import { useState, useEffect } from 'react'

const keyMap = {
  w: 'moveForward',
  a: 'moveLeft',
  s: 'moveBackward',
  d: 'moveRight',
  ' ': 'jump',
}

export const useKeyboard = () => {
  const [keys, setKeys] = useState({
    moveForward: false,
    moveLeft: false,
    moveBackward: false,
    moveRight: false,
    jump: false,
  })

  useEffect(() => {
    const handleKeyDown = (e) => {
      const action = keyMap[e.key]
      if (action) {
        setKeys((prev) => ({
          ...prev,
          [action]: true,
        }))
      }
    }

    const handleKeyUp = (e) => {
      const action = keyMap[e.key]
      if (action) {
        setKeys((prev) => ({
          ...prev,
          [action]: false,
        }))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [keys])

  return keys
}
