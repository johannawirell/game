import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const TERRAIN_MODEL_PATH = '../../assets/terrain/scene.gltf';

export class Terrain {
    constructor(scene, loadingManager) {
        this.scene = scene;
        this.loadingManager = loadingManager;
        // this.loadTerrainModel();
    }

    // async loadTerrainModel() {
    //     const geometry = new THREE.PlaneGeometry(10, 10, 10, 10);
    //     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
    //     const plane = new THREE.Mesh(geometry, material);
    //     this.scene.add(plane);
      
    // }
}
