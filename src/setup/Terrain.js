import * as THREE from 'three';
import { GameEnity } from '../controller/GameEnity';
// const TERRAIN_MODEL_PATH = '../../assets/terrain/scene.gltf';

export class Terrain extends GameEnity {
    constructor(params) {
        super(params);

        const geometry = new THREE.PlaneGeometry(100, 100);
        const material = new THREE.MeshStandardMaterial({ color: 0x808080 });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.rotation.x = - Math.PI / 2
        this.mesh.position.set(0, -5, 0)
        this.mesh.name = 'plane';

    }

    position(model) {
        if (model) {
            model.position.set(0, 0, 0)
        }
    }

    
}
