import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { Camera } from './components/Camera'
import { Player } from './components/Player'
import { Cubes } from './components/Cubes'

function App() {
  return (
    <Canvas>
      <Sky sunPosition={[100, 100, 20]} />
      <ambientLight intensity={2} />
      <Camera />

      <Physics>
        <Player />
        <Cubes />
        <Ground />
      </Physics>
    </Canvas>
  )
}

export default App
