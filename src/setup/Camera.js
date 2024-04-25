import * as THREE from 'three';
const targetPosition = { x: 0, y: -5, z: 0 };


export class Camera {
    constructor() {
        const { x, y, z } = targetPosition
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(x, y, z);

        this.camera.lookAt(targetPosition.x, targetPosition.y, targetPosition.z);
    }

  
    addToScene(scene) {
        scene.add(this.camera);
    }

    get() {
        return this.camera;
    }
}
