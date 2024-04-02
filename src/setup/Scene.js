import * as THREE from 'three';
import { Terrain } from './Terrain.js'

export class Scene {
    constructor() {
        this.scene = new THREE.Scene();
        // this.scene.background = new THREE.Color(0xF02050);
        // this.scene.fog = new THREE.Fog(0xF02050, 1, 26);

        this.addLights();
        this.addTerrain();
    }

    addTerrain() {
        console.log('add terrain')
    }

    addLights() {
        const ambLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.color.setHSL(0.1, 1, 0.95);
        dirLight.position.set(-3, 2.5, 1);
        dirLight.position.multiplyScalar(100);
        this.scene.add(dirLight);

        dirLight.castShadow = true;

        dirLight.shadow.mapSize.width = 2048;
        dirLight.shadow.mapSize.height = 2048;

        const d = 50;
        dirLight.shadow.camera.left = -d;
        dirLight.shadow.camera.right = d;
        dirLight.shadow.camera.top = d;
        dirLight.shadow.camera.bottom = -d;
        dirLight.shadow.camera.far = 200000;
    }

    get() {
        return this.scene;
    }
}


