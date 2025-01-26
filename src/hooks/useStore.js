import { create } from 'zustand'
import { nanoid } from 'nanoid'

export const useStore = create((set) => ({
  playerPosition: [0, 0, 0],
  texture: 'purpur_block',
  cubes: [],
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
