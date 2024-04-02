import * as THREE from 'three';

export class Camera {
    constructor() {
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        this.camera.position.set(0, 5, 5)

        
    }
    addToScene(scene) {
        scene.add(this.camera);
    }

    get() {
        return this.camera;
    }
}