import { create } from 'zustand'
import { nanoid } from 'nanoid'

export const useStore = create((set) => ({
  playerPosition: [0, 0, 0],
  texture: 'purpur_block',
  cubes: [
    { id: nanoid(), position: [0, 0.5, 0], texture: 'endstone' },
    { id: nanoid(), position: [1, 0.5, 0], texture: 'endstone_brick' },
    { id: nanoid(), position: [0, 1.5, 0], texture: 'purpur_block' },
    { id: nanoid(), position: [0, 0.5, 1], texture: 'endstone' },
  ],
  setTexture: (texture) => set({ texture }),
  addCube: (x, y, z) => {
    set((state) => ({
      cubes: [...state.cubes, { id: nanoid(), position: [x, y, z], texture: state.texture }],
    }))
  },
  removeCube: (id) => {
    set((state) => ({
      cubes: state.cubes.filter((cube) => cube.id !== id),
    }))
  },
  setTexture: () => {},
  saveWorld: () => {},
  resetWorld: () => {},
  updatePlayerPosition: (playerPosition) => {
    set({ playerPosition })
  },
}))
