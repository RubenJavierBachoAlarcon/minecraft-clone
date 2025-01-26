import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { Camera } from './components/Camera'
import { Player } from './components/Player'
import { Cubes } from './components/Cubes'
import { TextureSelector } from './components/TextureSelector'
import { FPSMeter } from './components/FPSMeter.jsx'

function App() {
  return (
    <>
      <Canvas shadows>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={2} />
        <directionalLight
          castShadow
          position={[100, 100, 20]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={500}
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

      <h1>+</h1>
    </>
  )
}

export default App