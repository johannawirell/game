import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export class GameEnity {
    constructor(params) {
        this.camera = params.camera;
        this.scene = params.scene;
    }

    

    async load(path, name) {
        new GLTFLoader().load(path, gltf => {
            const model = gltf.scene;
            model.name = name;
          
            model.traverse(obj => {
                if (obj.isMesh) {
                    obj.castShadow = true;
                } 
            })
            this.position(model);
            this.scene.add(model);
        }
        // await new Promise(resolve => {
        //     new GLTFLoader().load(
        //         path,gltf => {
        //             let model = gltf.scene;
        //             console.log(model)
        //             resolve();
        //         },
        //         undefined,
        //         error => console.error(`Error when loading ${name}: ${error}`)
        //     );
        // });
        // this.isDoneLoading = true;
    )}
    
    
    
}