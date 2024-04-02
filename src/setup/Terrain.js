import * as THREE from 'three';
import { GameEnity } from '../controller/GameEnity';
// const TERRAIN_MODEL_PATH = '../../assets/terrain/scene.gltf';

export class Terrain extends GameEnity {
    constructor() {
        super();
       
        // this.load(TERRAIN_MODEL_PATH, 'Terrain');

    }

    position(model) {
        if (model) {
            model.position.set(0, 0, 0)
        }
    }

    
}
