
export const castShadow = (gltfModel) => {
	gltfModel.scene.traverse(node => {
		if (node.isMesh || node.isLight) node.castShadow = true;
		if (node.isMesh || node.isLight) node.receiveShadow = true;
	});
}