import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export class GameEnity {
    constructor() {

    }

    addToScene(scene) {
        scene.add(this.mesh);
    }

    async load(path, name) {
        await new Promise(resolve => {
            new GLTFLoader().load(
                path,gltf => {
                    let model = gltf.scene;
                    console.log(model)
                    resolve();
                },
                undefined,
                error => console.error(`Error when loading ${name}: ${error}`)
            );
        });
        this.isDoneLoading = true;
    }
    
    
    
}