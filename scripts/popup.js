document.querySelectorAll(".rating-bar").forEach((bar) => {
    let val = bar.getAttribute('value')
    bar.style.width = val * 100 + '%';
    bar.style.backgroundColor = `rgb(90, ${199 * val}, ${120 * (val)})`;
});

let params = new URLSearchParams(document.location.search);

(async () => {
    let data = await fetch("./data.json")
    data = await data.json()
})()