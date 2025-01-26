import { useStore } from '../hooks/useStore'
import { useKeyboard } from '../hooks/useKeyboard'
import { useEffect } from 'react'

export const TextureSelector = () => {
  const texture = useStore((state) => state.texture)
  const setTexture = useStore((state) => state.setTexture)

  const {
    texture_endstone,
    texture_endstone_brick,
    texture_purpur_block,
    texture_chorus_flower,
    texture_chorus_plant,
    texture_obsidian,
  } = useKeyboard()

  useEffect(() => {
    switch (true) {
      case texture_endstone:
        setTexture('endstone')
        break
      case texture_endstone_brick:
        setTexture('endstone_brick')
        break
      case texture_purpur_block:
        setTexture('purpur_block')
        break
      case texture_chorus_flower:
        setTexture('chorus_flower')
        break
      case texture_chorus_plant:
        setTexture('chorus_plant')
        break
      case texture_obsidian:
        setTexture('obsidian')
        break
      default:
        break
    }
  }, [
    texture_endstone,
    texture_endstone_brick,
    texture_purpur_block,
    texture_chorus_flower,
    texture_chorus_plant,
    texture_obsidian,
    setTexture,
  ])

  return (
    <>
      <article className="fixed bottom-0 left-1/2 flex w-1/4 -translate-x-1/2 transform border-4 border-black">
        <img
          src="/src/assets/endstone.jpg"
          className={`w-1/6 border-4 p-3 ${texture === 'endstone' ? 'border-white bg-black/70' : 'border-gray-400 bg-black/50'}`}
        />
        <img
          src="/src/assets/endstone_brick.jpg"
          className={`w-1/6 border-4 p-3 ${texture === 'endstone_brick' ? 'border-white bg-black/70' : 'border-gray-400 bg-black/50'}`}
        />
        <img
          src="/src/assets/purpur_block.jpg"
          className={`w-1/6 border-4 p-3 ${texture === 'purpur_block' ? 'border-white bg-black/70' : 'border-gray-400 bg-black/50'}`}
        />
        <img
          src="/src/assets/chorus_flower.jpg"
          className={`w-1/6 border-4 p-3 ${texture === 'chorus_flower' ? 'border-white bg-black/70' : 'border-gray-400 bg-black/50'}`}
        />
        <img
          src="/src/assets/chorus_plant.jpg"
          className={`w-1/6 border-4 p-3 ${texture === 'chorus_plant' ? 'border-white bg-black/70' : 'border-gray-400 bg-black/50'}`}
        />
        <img
          src="/src/assets/obsidian.jpg"
          className={`w-1/6 border-4 p-3 ${texture === 'obsidian' ? 'border-white bg-black/70' : 'border-gray-400 bg-black/50'}`}
        />
      </article>
    </>
  )
}
