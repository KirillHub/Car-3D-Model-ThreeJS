
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { angleToRadians } from "../util/angle";

export const createControls = (camera, renderer, controls) => {
	controls = new OrbitControls(camera, renderer.domElement);
	controls.minPolarAngle = angleToRadians(20);
	controls.maxPolarAngle = angleToRadians(80);
	controls.maxDistance = 500;
	controls.target.set(0, 18, 0);
};
