import * as THREE from 'three';

export class Scene {
    constructor() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xF02050);
        this.scene.fog = new THREE.Fog(0xF02050, 1, 26);
    }

    get() {
        return this.scene;
    }
}


