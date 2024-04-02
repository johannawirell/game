import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Scene } from './Scene.js'
import { Camera } from './Camera.js'
import { Player } from '../controller/Player.js';
import { Terrain } from './Terrain.js'
// import Stats from 'three/addons/libs/stats.module.js';


export class Game {
    constructor() {
        this.scene = this.addScene();
        this.camera = this.addCamera();
        this.player = this.addPlayer();
        this.terrain = this.addTerrain();
        this.addRenderer(); 
        this.addOrbitController();       
        this.animate();
        this.addEventListener();
    }

    animate() {
        requestAnimationFrame(() => this.animate(this.renderer));
        // console.log(this.camera.position)
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
        const player = new Player({
            camera: this.camera,
            scene: this.scene
        });
        // player.addToScene(this.scene);
        return player;
    }

    addTerrain() {
        const terrain = new Terrain({
            camera: this.camera,
            scene: this.scene
        });

        return terrain;
    }

    addOrbitController() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.minDistance = 5;
        this.controls.maxDistance = 15;
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
