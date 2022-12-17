import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer, Vector3 } from "three";
import { castShadow } from './castShadow';
import gsap from 'gsap';

export const loadModel = (mixers, wheels, scene) => {
	const loader = new GLTFLoader();

	const onLoad = (result, position) => {
		result.scene.castShadow = true
		result.scene.receiveShadow = true

		const model = result.scene.children[0];
		model.position.copy(position);
		model.scale.set(0.03, 0.03, 0.03);
		model.rotation.set(29.845, 0, 300.019);

		castShadow(result);
		model.castShadow = true

		if (!!model) {
			gsap.to(model.position, {
				duration: 5,
				x: 0,
				z: 28
			})
		};

		const mixer = new AnimationMixer(model);
		mixers.push(mixer);

		const animation = result.animations[0];
		const action = mixer.clipAction(animation);
		action.play();

		const carParentObjects = result.scene.children[0].children[0].children[0].children[0]
		wheels = carParentObjects.children.filter((model, modelID) =>
			modelID ? modelID >= 17 : false
		);

		scene.add(model);
	};

	const carPosition = new Vector3(-0.45, 1.9, -27);
	loader.load(
		"/src/models/car.glb",
		gltf => {
			let car = gltf.scene;
			car.traverse(child => {
				if (child.isMesh) {
					if (child.material.name === 'Orange') {
						console.log(child.material);
						child.material.color = { isColor: true, r: 1.0, g: 1.0, b: 1.0 }
					}
				}
			})

			onLoad(gltf, carPosition)
		},
	);

};