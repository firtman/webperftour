function distance(coord1, coord2) {
	const lat1Radians = Math.PI * coord1.latitude/180
	const lat2Radians = Math.PI * coord2.latitude/180
	const theta = coord1.longitude-coord2.longitude
	const thetaRadians = Math.PI * theta/180
    let dist = Math.sin(lat1Radians) * Math.sin(lat2Radians) + Math.cos(lat1Radians) * Math.cos(lat2Radians) * Math.cos(thetaRadians);
	if (dist > 1) dist = 1;
	dist = Math.acos(dist)
	dist = dist * 180/Math.PI
	dist = dist * 60 * 1.1515
	return dist
}