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


let starting = performance.now();
console.log(`Starting process in worker`);
self.addEventListener("message", event => {
    const {data} = event;
    let html = "";

    data.forEach( (country, i) => {
        html += `<h1>${country.country}</h1>`;
        html += `<p>Capital City: ${country.capital.name}`;
        html += `<h2>Distances to other Capitals</h2>
                    <ul>`;
        data.forEach(compareCountry => {
            html += `<li>${compareCountry.capital.name}:
                ${Math.round(distance({
                    latitude: country.capital.latitude,
                    longitude: country.capital.longitude
                }, {
                    latitude: compareCountry.capital.latitude,
                    longitude: compareCountry.capital.longitude
                } 
            ))} miles
            </li>`
        });
        html += "</ul><hr>";
    });
    console.log(`Ending process after ${Math.round(performance.now()-starting)}ms in worker`);

})
