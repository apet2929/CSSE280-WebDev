const switchBird = () => {
    const nameElem = document.getElementById("bird-name")
    const imgElem = document.getElementById("bird-img")

    if(nameElem.innerHTML == "Hedwig") {
        nameElem.innerHTML = "Pidwidgeon"
        imgElem.src = "pigwidgeon.png"
    } else {
        nameElem.innerHTML = "Hedwig"
        imgElem.src = "hedwig.jpg"
    }
    console.log("YIIK")
    console.log(nameElem);
    console.log(imgElem);

}