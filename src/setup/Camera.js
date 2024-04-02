import * as THREE from 'three';

export class Camera {
    constructor() {
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
        this.camera.position.set(-0.225, 1.126, 4.951)

        
    }
    addToScene(scene) {
        scene.add(this.camera);
    }

    get() {
        return this.camera;
    }
}