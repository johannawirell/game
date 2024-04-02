// Character.js
import * as THREE from 'three';
import { GameEnity } from './GameEnity.js';
import { Controller } from './Controller.js';
const PATH = '../../assets/player/player.glb';

export class Player extends GameEnity {
    constructor(params) {
        super(params);
        this.controller = new Controller(this);
        this.loadPlayer();
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
    }

    addToScene(scene) {
        scene.add(this.mesh);
    }

    position(model) {
       
        model.scale.set(3, 3, 3); 

        model.position.set(0, -4, 0)
        
    }
}
