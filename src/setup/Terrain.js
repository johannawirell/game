import * as THREE from 'three';
import { Noise } from 'noisejs';

const width = 200;
const height = 200;
const segments = 200;
const amplitude = 10;


export class Terrain {
    constructor() {
        this.noise = new Noise();
        this.mesh = this.createTerrain();
    }

    createTerrain() {
        const geometry = new THREE.PlaneGeometry(width, height, segments, segments);
    
        // Access position attribute
        const positionAttribute = geometry.getAttribute('position');
    
        // Loop through positions and modify z-coordinate based on noise
        for (let i = 0; i < positionAttribute.count; i++) {
            const x = positionAttribute.getX(i);
            const y = positionAttribute.getY(i);
    
            const value = this.noise.perlin3(x / 50, y / 50, 0);
            positionAttribute.setZ(i, value * amplitude);
        }
    
        // Ensure geometry updates are applied
        positionAttribute.needsUpdate = true;
    
        const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
        return new THREE.Mesh(geometry, material);
    }
      

    addToScene(scene) {
        scene.add(this.mesh);
    }
}
