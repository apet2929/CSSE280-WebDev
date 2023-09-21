main = () => {
    console.log("Ready!")
    let counter = 0;
    let color = "#0D6EFD"
    let textColor = "white"
    update = () => {
        console.log(`Updating with counter = ${counter}`)
        document.getElementById("counterText").innerHTML = `${counter}`
        document.getElementById("colorBox").style.backgroundColor = color
        document.getElementById("colorBox").style.color = textColor
        document.getElementById("colorBox").innerHTML = color
        
    }
    document.querySelector("#decrementButton").onclick = (event) => {
        counter = counter - 1
        update()
    }
    document.querySelector("#resetButton").onclick = (event) => {
        counter=0;
        update()
    }
    document.querySelector("#incrementButton").onclick = (event) => {
        counter+=1;
        update()
    }

    document.querySelector("#blueButton").onclick = (event) => {
        color = "#0D6EFD"
        textColor = "#FFFFFF"
        update()
    }
    document.querySelector("#greenButton").onclick = (event) => {
        color = "#198754"
        textColor = "#FFFFFF"
        update()
    }
    document.querySelector("#yellowButton").onclick = (event) => {
        color = "#FFC107"
        textColor = "#000000"
        update()
    }
    document.querySelector("#redButton").onclick = (event) => {
        color = "#DC3545"
        textColor = "#FFFFFF"
        update()
    }
}



main()