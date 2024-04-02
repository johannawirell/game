import * as THREE from 'three';
import { Scene } from './Scene.js'
import { Camera } from './Camera.js'
import { Character } from '../controller/character.js';


export class Game {
    constructor() {
        this.scene = this.addScene();
        this.camera = this.addCamera();
        this.character = this.addCharacter();
        this.addRenderer();        
        this.animate();
        this.addEventListener();
    }

    animate() {
        requestAnimationFrame(() => this.animate(this.renderer));
        this.renderer.render(this.scene, this.camera);
    }

    addScene() {
        const scene = new Scene();
        return scene.get();
    }
    
    addCamera() {
        const camera = new Camera();
        camera.addToScene(this.scene);
        return camera.get();
    }
    
    addCharacter() {
        const character = new Character(this.camera);
        character.addToScene(this.scene);
    }

    addRenderer() {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
    }

    addEventListener() {
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }
}
