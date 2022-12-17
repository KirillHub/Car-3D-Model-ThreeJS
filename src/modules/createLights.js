import {
	HemisphereLight,
	SpotLight
} from "three";

export const createLights = (scene) => {
	const spotLightColor = '#4611F2';
	const spotLightSecondColor = '#0F5CF6';

	const ambient = new HemisphereLight(0xffffff, 0x444444, 0.065);
	scene.add(ambient);

	const spotLight = new SpotLight(spotLightColor, 5);
	spotLight.position.set(10, 5, 0);
	spotLight.angle = 4.0;
	spotLight.penumbra = 0.5;
	spotLight.decay = 2;
	spotLight.distance = 200;
	spotLight.intensity = 2;

	spotLight.castShadow = true;
	spotLight.shadow.mapSize.width = 1024;
	spotLight.shadow.mapSize.height = 1024;
	spotLight.shadow.camera.near = 10;
	spotLight.shadow.camera.far = 200;
	spotLight.shadow.focus = 1;
	spotLight.shadow.bias = -0.0001;

	const spotLightSecond = new SpotLight(spotLightSecondColor, 5);
	spotLightSecond.intensity = 2;
	spotLightSecond.position.set(-10, 5, 0);
	spotLightSecond.angle = 4.0;
	spotLightSecond.penumbra = 0.5;
	spotLightSecond.decay = 2;
	spotLightSecond.distance = 200;

	spotLightSecond.castShadow = true;
	spotLightSecond.shadow.mapSize.width = 1024;
	spotLightSecond.shadow.mapSize.height = 1024;
	spotLightSecond.shadow.camera.near = 10;
	spotLightSecond.shadow.camera.far = 200;
	spotLightSecond.shadow.focus = 1;
	spotLightSecond.shadow.bias = -0.0001;
	scene.add(spotLight, spotLightSecond);

};