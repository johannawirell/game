import * as THREE from 'three';

export class Sky {
    constructor() {
        this.createSky();
    }

    createSky() {
        const skyGeometry = new THREE.SphereGeometry(500, 32, 32);
        const skyMaterial = new THREE.MeshBasicMaterial({ color: 0x87ceeb, side: THREE.BackSide });
        this.mesh = new THREE.Mesh(skyGeometry, skyMaterial);
    }

    addToScene(scene) {
        scene.add(this.mesh);
    }
}
