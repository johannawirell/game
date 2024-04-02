// Character.js
import * as THREE from 'three';

export class Character {
    constructor(camera) {
        const geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
        const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
        this.mesh.name = 'player';
        this.mesh.position.set(1, 1, 1);
        this.camera = camera;

    }

    addToScene(scene) {
        scene.add(this.mesh);
    }
}
