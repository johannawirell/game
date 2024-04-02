// Character.js
import * as THREE from 'three';
import { GameEnity } from './GameEnity.js';
import { Controller } from './Controller.js';
const PATH = '../../assets/player/player.glb';

export class Player extends GameEnity {
    constructor(camera) {
        super();
        this.camera = camera;
        this.controller = new Controller(this);
        this.loadPlayer();
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
        this.mesh.name = 'player';

        // this.position(this.mesh);
    }

    walk(action) {
        console.log('walk: ' + action)
    }

    turn(action) {
        console.log('turn: ' + action)
    }

    run(action) {
        console.log('run: ' + action)
    }

    async loadPlayer() {
        await this.load(PATH, 'Player')
            // .then(r => console.log('hejhopp ' + r))
            // .catch(err => console.log('error: ' + err))
    }

    addToScene(scene) {
        scene.add(this.mesh);
    }

    position(model) {
        // Placera objektet på marknivån
        // model.position.y = -10;
    }
}
