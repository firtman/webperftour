let data = [];
fetch("data/data.json")
    .then(r=>r.json())
    .then(response => {
        data = response;
        start();
    });

function start() {
    let starting = performance.now();
    console.log(`Starting process`);
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
    console.log(`Ending process after ${Math.round(performance.now()-starting)}ms`);

}