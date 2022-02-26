let params = new URLSearchParams(document.location.search);

(async () => {
    let data = await fetch("./data.json")
    data = await data.json()
    let relevent_data = data[params.get('website')]
    for (let key in relevent_data) {
        if (key !== "company") document.querySelector(`#${key}`).setAttribute("value", relevent_data[key])
        if (key === "overall") document.querySelector("#score").textContent = relevent_data[key] * 100
    }
    document.querySelectorAll(".rating-bar").forEach((bar) => {
        let val = bar.getAttribute('value')
        bar.style.width = val * 100 + '%';
        bar.style.backgroundColor = `rgb(90, ${199 * val}, ${120 * (val)})`;
    });    
})()

