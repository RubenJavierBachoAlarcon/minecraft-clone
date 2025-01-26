import { TextureLoader, RepeatWrapping, NearestFilter } from 'three'
import endstone_brick_img from '../assets/endstone_brick.jpg'
import purpur_block_img from '../assets/purpur_block.jpg'
import endstone_img from '../assets/endstone.jpg'
import chorus_flower_img from '../assets/chorus_flower.jpg'
import chorus_plant_img from '../assets/chorus_plant.jpg'

const loadTexture = (imagepPath) => {
  const texture = new TextureLoader().load(imagepPath)
  texture.magFilter = NearestFilter
  return texture
}

const groundTexture = new TextureLoader().load(endstone_img)
groundTexture.wrapS = groundTexture.wrapT = RepeatWrapping
groundTexture.magFilter = NearestFilter
groundTexture.repeat.set(100, 100)

const textures = {
  endstone_brick: loadTexture(endstone_brick_img),
  purpur_block: loadTexture(purpur_block_img),
  endstone: loadTexture(endstone_img),
  chorus_flower: loadTexture(chorus_flower_img),
  chorus_plant: loadTexture(chorus_plant_img),
}

const endstone_brick = loadTexture(endstone_brick_img)

export { groundTexture, textures, endstone_brick }
