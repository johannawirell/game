import * as THREE from 'three';
import { InputHandler } from './InputHandler';

export class Player {
    constructor(terrain) {
        this.terrain = terrain;
        this.mesh = this.createPlayerObject();
        this.inputHandler = new InputHandler(this)
    }

    createPlayerObject() {
        const geometry = new THREE.BoxGeometry(1, 2, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const playerObject = new THREE.Mesh(geometry, material);

      
        const startPosition = new THREE.Vector3(0, 0, 0);
        playerObject.position.copy(startPosition);

        return playerObject
    }

    addToScene(scene) {
        scene.add(this.mesh);
    }

    update() {
        const raycaster = new THREE.Raycaster(this.mesh.position, new THREE.Vector3(0, -1, 0));

        const intersects = raycaster.intersectObject(this.terrain.mesh);

        if (intersects.length > 0) {
            const terrainHeight = intersects[0].point.y;

            this.mesh.position.y = terrainHeight;
        }
    }


    move(direction) {
        const speed = 0.1;
        switch (direction) {
            case 'forward':
                this.mesh.position.z -= speed;
                break;
            case 'backward':
                this.mesh.position.z += speed;
                break;
            case 'left':
                this.mesh.position.x -= speed;
                break;
            case 'right':
                this.mesh.position.x += speed;
                break;
        }
    }   
}
