import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Scene } from './Scene.js'
import { Camera } from './Camera.js'
import { Player } from '../controller/player.js';
// import Stats from 'three/addons/libs/stats.module.js';


export class Game {
    constructor() {
        this.scene = this.addScene();
        this.camera = this.addCamera();
        this.player = this.addPlayer();
        this.addRenderer(); 
        this.addOrbitController();       
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
    
    addPlayer() {
        // const player = new Player(this.camera);
        // player.addToScene(this.scene);
    }

    addOrbitController() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target.set(0, 0, 0); // Målposition för kameran
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
