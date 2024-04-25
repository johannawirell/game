import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Scene } from './Scene.js';
import { Camera } from './Camera.js';
import { Sky } from './Sky.js';
import { Terrain } from './Terrain.js';
import { Player } from '../player/Player.js';

export class Game {
    constructor() {
        this.scene = this.addScene();
        this.camera = this.addCamera();
        this.sky = this.addSky();
        this.terrain = this.addTerrain();
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

    addSky() {
        const sky = new Sky();
        sky.addToScene(this.scene);
        return sky;
    }
    
    addTerrain() {
       const t = new Terrain();
       t.addToScene(this.scene);
       return t;
    }

    addPlayer() {
        const player = new Player(this.terrain);
        player.addToScene(this.scene);
        return player;
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
