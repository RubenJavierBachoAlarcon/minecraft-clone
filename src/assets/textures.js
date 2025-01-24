import groundImage from '../assets/endstone.jpg'
import { TextureLoader, RepeatWrapping, NearestFilter } from 'three'

const groundTexture = new TextureLoader().load(groundImage)
groundTexture.wrapS = groundTexture.wrapT = RepeatWrapping
groundTexture.magFilter = NearestFilter
groundTexture.repeat.set(100, 100)

export { groundTexture }
