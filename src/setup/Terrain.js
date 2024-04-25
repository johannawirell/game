import * as THREE from 'three';
import { Noise } from 'noisejs';

const width = 200;
const height = 200;
const segments = 200;
const amplitude = 10;

export class Terrain {
    constructor() {
        this.noise = new Noise();
        this.mesh = this.createTerrain(); // Skapa terrängen
    }

    createTerrain() {
        const geometry = new THREE.PlaneGeometry(width, height, segments, segments);

        const positionAttribute = geometry.getAttribute('position');

        for (let i = 0; i < positionAttribute.count; i++) {
            const x = positionAttribute.getX(i);
            const y = positionAttribute.getY(i);

            const value = this.noise.perlin3(x / 50, y / 50, 0);
            positionAttribute.setZ(i, value * amplitude);
        }

        positionAttribute.needsUpdate = true;

        const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
        const mesh = new THREE.Mesh(geometry, material);

        return mesh;
    }

    addToScene(scene) {
        scene.add(this.mesh);
    }

    getHeightAt(x, z) {
        const geometry = this.mesh.geometry;
        const positionAttribute = geometry.getAttribute('position');
    
        const localX = x + this.width / 2;
        const localZ = z + this.height / 2;
    
        const col = Math.floor((localX / this.width) * this.segments);
        const row = Math.floor((localZ / this.height) * this.segments);
        const index = row * (this.segments + 1) + col;
    
        const vertexPosition = new THREE.Vector3();
        positionAttribute.getX(index, vertexPosition.x);
        positionAttribute.getY(index, vertexPosition.y);
        positionAttribute.getZ(index, vertexPosition.z);
    
        return vertexPosition.z;
    }
}
