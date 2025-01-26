import { useEffect } from 'react'
import Stats from 'stats.js'

export const FPSMeter = () => {
  useEffect(() => {
    const stats = new Stats()
    stats.showPanel(0) // 0: FPS, 1: ms/frame, 2: memory
    document.body.appendChild(stats.dom)

    const animate = () => {
      stats.begin()
      
      stats.end()
      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)

    return () => {
      document.body.removeChild(stats.dom)
    }
  }, [])

  return null
}