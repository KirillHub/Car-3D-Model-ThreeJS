import * as THREE from "three";
import "../style/style.css";
import { createLights } from "../modules/createLights";
import { createControls } from "../modules/createControls";
import { wheelsAnimation } from "../modules/wheelsAnimation";
import { createRectangle } from "../modules/createRectangle";
import { createRenderer } from "../modules/createRenderer";
import { createGround } from "../modules/createGround";
import { ARButton } from 'three/addons/webxr/ARButton.js';
import { loadModel } from "../modules/loadModel";


window.addEventListener('DOMContentLoaded', () => {

	(function () {

		// hooked Canvas for renderer
		const canvas = document.querySelector('canvas.webgl');

		const clock = new THREE.Clock();
		const positionLeftRectangle = { x: 4, y: 0, z: 0 }
		const positionRinghtRectangle = { x: -4.3, y: 0, z: 0 };

		let renderer, scene, camera, wheels, mixers = [];

		init();


		function init() {

			// renderer
			renderer = new THREE.WebGLRenderer({
				canvas: canvas
			});

			// Scene
			scene = new THREE.Scene();
			scene.background = new THREE.Color("#83C2F9");

			createCamera();
			createLights(scene);
			loadModel(mixers, wheels, scene);
			createRenderer(renderer,
				THREE.PCFSoftShadowMap, THREE.sRGBEncoding,
				THREE.ACESFilmicToneMapping
			);
			createControls(camera, renderer);
			createGround(scene)

			createRectangle([70, 2.3], positionLeftRectangle, scene)
			createRectangle([70, 2.3], positionRinghtRectangle, scene)

			renderer.setAnimationLoop(() => {
				update();
				render();
				wheelsAnimation(wheels)
			});

			document.body.appendChild(ARButton.createButton(renderer,
				{ requiredFeatures: ['hit-test'] }));
		};

		function createCamera() {
			const fov = 75;
			const aspect = window.innerWidth / window.innerHeight;
			const near = 0.1;
			const far = 1000;
			camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
			camera.position.set(35, 22, 0);
		};


		// resize
		window.addEventListener('resize', onWindowResize, false);
		function onWindowResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();

			renderer.setSize(window.innerWidth, window.innerHeight);
		};


		function animate() {
			requestAnimationFrame(animate);

			renderer.render(scene, camera);
		};
		function update() {
			const delta = clock.getDelta();

			mixers.forEach(mixer => mixer.update(delta));
		};

		
		function render() {
			renderer.render(scene, camera);
		};

		animate();

	})();

});