let getScreenSize = () => {
    width = window.innerWidth;
    if(width > 1000){
        return "Desktop"
    } else if (width > 760) {
        return "Laptop"
    } else if (width > 576) {
        return "Tablet"
    } else {
        return "Mobile"
    }
    // less than 500 -> mobile
    // 500 -> 760 -> tablet
    // 760 -> 1000 -> laptop
    // greater than 1000 -> desktop
}

function screen() {
    width = window.innerWidth;
    document.getElementById("size").innerHTML = `Width : ${width} px`;
    document.getElementById("screen").innerHTML = `${getScreenSize()} 👇🏿`
}

window.onresize = screen;
window.onload = screen;

let main = () => {
    console.log("Ready");
    console.log(window.innerWidth);
    screen();
}

main();