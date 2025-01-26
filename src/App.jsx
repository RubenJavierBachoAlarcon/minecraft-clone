import { Sky } from '@react-three/drei'
import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { Camera } from './components/Camera'
import { Player } from './components/Player'
import { Cubes } from './components/Cubes'
import { TextureSelector } from './components/TextureSelector'
import { FPSMeter } from './components/FPSMeter.jsx'
import { ControlsUI } from './components/ControlsUI.jsx'
import { useEffect, useState } from 'react'
import { useKeyboard } from './hooks/useKeyboard'
import { useStore } from './hooks/useStore.js'
import { WorldManagment } from './components/WorldManagment.jsx'

function App() {
  const [shadowsEnabled, setShadowsEnabled] = useState(true)
  const { disable_shadows } = useKeyboard()
  const { loadWorld } = useStore()

  useEffect(() => {
    loadWorld()
  }, [loadWorld])

  useEffect(() => {
    if (disable_shadows) {
      setShadowsEnabled((prev) => !prev)
    }
  }, [disable_shadows])

  return (
    <>
      <Canvas shadows={shadowsEnabled}>
        <Sky sunPosition={[100, 100, 20]} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <ambientLight />
        <directionalLight
          castShadow={shadowsEnabled}
          position={[100, 100, 20]}
          intensity={0.2}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={200}
          shadow-camera-left={-100}
          shadow-camera-right={100}
          shadow-camera-top={100}
          shadow-camera-bottom={-100}
        />
        <Camera />
        <Physics>
          <Player />
          <Cubes castShadow receiveShadow />
          <Ground castShadow receiveShadow />
        </Physics>
      </Canvas>
      <FPSMeter />
      <TextureSelector />
      <ControlsUI />
      <WorldManagment />

      <h1>+</h1>
    </>
  )
}

export default App
