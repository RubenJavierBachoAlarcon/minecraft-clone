import { useStore } from '../hooks/useStore'
import { useKeyboard } from '../hooks/useKeyboard'
import { useEffect } from 'react'

export function WorldManagment() {
  const save_world = useStore((state) => state.saveWorld)
  const reset_world = useStore((state) => state.resetWorld)
  const load_world = useStore((state) => state.loadWorld)
  const { saveWorld, resetWorld, loadWorld } = useKeyboard()
  useEffect(() => {
    if (saveWorld) {
      save_world()
    }
  }, [save_world, saveWorld])
  useEffect(() => {
    if (resetWorld) {
      reset_world()
    }
  }, [reset_world, resetWorld])
  useEffect(() => {
    if (loadWorld) {
      load_world()
    }
  }, [load_world, loadWorld])
}
