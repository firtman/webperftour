window.addEventListener("load", event => {
    // we defer until onload
    let data = [];
    fetch("data/data.json")
        .then(r=>r.json())
        .then(response => {
            data = response;
            start();
        });
})


function start() {
    const worker = new Worker("js/worker.js");
    worker.postMessage(data);
}