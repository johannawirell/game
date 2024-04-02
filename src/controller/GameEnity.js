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
            this.gltfAnimations = gltf.animations;
        
            this.mixer = new THREE.AnimationMixer(model);
            this.animationsMap = new Map();

            this.gltfAnimations.filter(a => a != 'TPose').forEach(a => {
                this.animationsMap.set(a.name, this.mixer.clipAction(a))
            })
        }
    )}
    
    
    
}