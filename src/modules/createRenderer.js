
export function createRenderer(renderer,
	PCFSoftShadowMap, sRGBEncoding, ACESFilmicToneMapping
) {
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);

	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = PCFSoftShadowMap;

	renderer.outputEncoding = sRGBEncoding;

	renderer.toneMapping = ACESFilmicToneMapping;
	renderer.toneMappingExposure = 1;
}
