import { create } from 'zustand'
import { nanoid } from 'nanoid'

export const useStore = create((set) => ({
  playerPosition: [0, 0, 0],
  texture: 'purpur_block',
  cubes: [
    { id: nanoid(), position: [0, 0.5, 0], texture: 'endstone' },
    { id: nanoid(), position: [1, 0.5, 0], texture: 'endstone_brick' },
    { id: nanoid(), position: [0, 1.5, 0], texture: 'purpur_block' },
    { id: nanoid(), position: [0, 0.5, 1], texture: 'chorus_flower' },
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
  saveWorld: () => {
    set((state) => {
      localStorage.setItem('world', JSON.stringify(state.cubes))
      return state
    })
  },
  loadWorld: () => {
    const world = localStorage.getItem('world')
    if (world) {
      set({ cubes: JSON.parse(world) })
    }
  },
  resetWorld: () => {
    localStorage.removeItem('world')
    set({ cubes: [] })
  },
  updatePlayerPosition: (playerPosition) => {
    set({ playerPosition })
  },
}))
