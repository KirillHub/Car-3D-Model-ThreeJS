import {
	BoxGeometry,
	MeshBasicMaterial,
	DoubleSide, Mesh
} from "three";

export const createRectangle = (sizeSettings, { x, y, z }, scene) => {

	const geometry = new BoxGeometry(sizeSettings[0], sizeSettings[1]);
	const material = new MeshBasicMaterial({ color: '#0F66B2', side: DoubleSide });

	const plane = new Mesh(geometry, material);
	plane.rotateX(80.10);
	plane.rotateZ(300.019);

	plane.position.set(x, y, z)

	scene.add(plane)
}