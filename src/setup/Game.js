import * as THREE from 'three';
import { Scene } from './Scene.js'
import { Camera } from './Camera.js'


export class Game {
    constructor() {
        this.scene = this.addScene();
        this.camera = this.addCamera();
        this.addRenderer();
        

        // Skapa en karaktär
        // this.character = new Character();
        // this.character.addToScene(this.scene);

        // Positionera kameran
        this.camera.position.z = 5;

        // Starta loopen
        this.animate();
    }

    addScene() {
        const scene = new Scene();
        return scene.get();
    }

    addCamera() {
        const camera = new Camera(this.scene);
        return camera.get();
    }

    addRenderer() {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        
        this.renderer.render(this.scene, this.camera);
    }
}
