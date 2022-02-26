
console.log("popup.js loaded");
document.querySelectorAll(".rating-bar").forEach(function(bar) {
    let val = bar.getAttribute('value')
    bar.style.width = val * 100 + '%';
    bar.style.backgroundColor = `rgb(90, ${199 * val}, ${120 * (val)})`;
});