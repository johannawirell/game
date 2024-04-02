import * as THREE from 'three';
import { GameEnity } from '../controller/GameEnity';
// const TERRAIN_MODEL_PATH = '../../assets/terrain/scene.gltf';

export class Terrain extends GameEnity {
    constructor() {
        super();

        const geometry = new THREE.PlaneGeometry(window.innerWidth * 2, window.innerHeight * 2);
        const material = new THREE.MeshStandardMaterial({ color: 0x808080 });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.rotation.x = -Math.PI / 2; 
        this.mesh.position.y = 10;
    

    }

    position(model) {
        if (model) {
            model.position.set(0, 0, 0)
        }
    }

    
}
