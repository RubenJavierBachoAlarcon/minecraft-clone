import { useState, useEffect } from 'react'

const keyMap = {
  w: 'moveForward',
  a: 'moveLeft',
  s: 'moveBackward',
  d: 'moveRight',
  ' ': 'jump',
  1: 'texture_endstone',
  2: 'texture_endstone_brick',
  3: 'texture_purpur_block',
  4: 'texture_chorus_flower',
  5: 'texture_chorus_plant',
  6: 'texture_obsidian',
  l: 'disable_shadows',
  p: 'saveWorld',
  r: 'resetWorld',
  o: 'loadWorld',
}

export const useKeyboard = () => {
  const [keys, setKeys] = useState({
    moveForward: false,
    moveLeft: false,
    moveBackward: false,
    moveRight: false,
    jump: false,
    texture_endstone: false,
    texture_endstone_brick: false,
    texture_purpur_block: false,
    texture_chorus_flower: false,
    texture_chorus_plant: false,
    texture_obsidian: false,
    disable_shadows: false,
    saveWorld: false,
    resetWorld: false,
    loadWorld: false,
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
