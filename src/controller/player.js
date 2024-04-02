// Character.js
import * as THREE from 'three';
import { GameEnity } from './GameEnity';
const PATH = '../../assets/player/scene.gltf';

export class Player extends GameEnity {
    constructor(camera) {
        super();
        this.camera = camera;
        this.loadPlayer();
        // const geometry = new THREE.BoxGeometry(1, 1, 1);
        // const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
        // this.mesh = new THREE.Mesh(geometry, material);
        // this.mesh.castShadow = true;
        // this.mesh.receiveShadow = true;
        // this.mesh.name = 'player';
        // this.mesh.position.set(1, 1, 1);
        

    }

    async loadPlayer() {
        await this.load(PATH, 'Player')
            .then(r => console.log('hejhopp ' + r))
            .catch(err => console.log('error: ' + err))
    }

    addToScene(scene) {
        scene.add(this.mesh);
    }

    position(model) {
        model.position.set(1, 1, 1);
    }
}
