import {
	PlaneGeometry,
	MeshLambertMaterial, Mesh
} from "three"

export function createGround(scene) {
	const geometry = new PlaneGeometry(1000, 1000);
	const material = new MeshLambertMaterial({ color: 0x808080 });
	const mesh = new Mesh(geometry, material);

	mesh.position.set(0, - 1, 0);
	mesh.rotation.x = - Math.PI / 2;
	mesh.receiveShadow = true;

	scene.add(mesh);
}