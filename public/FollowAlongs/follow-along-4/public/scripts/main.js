function screen() {
    width = window.innerWidth;
    document.getElementById("size").innerHTML = `Width : ${width} px`;

}

window.onresize = screen;
window.onload = screen;

main = () => {
    console.log("Ready");
    console.log(window.innerWidth);
    screen();
}

main();