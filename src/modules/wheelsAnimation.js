
export const wheelsAnimation = (arrayOfWheels = []) => {
	const wheelRotationSpeed = 1.75;
	const time = Math.round(performance.now() / 100);

	if (arrayOfWheels && arrayOfWheels.length !== 0 && time < 52) {
		arrayOfWheels.map((wheel, wheelID) => {
			wheelID == 0 || wheelID == 1 ?
				wheel.rotation.z = (time * wheelRotationSpeed) :
				wheel.rotation.z = (-time * wheelRotationSpeed)
		});
	};
};