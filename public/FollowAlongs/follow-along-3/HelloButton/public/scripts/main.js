main = () => {
    console.log("Ready!")
    let counter = 0;
    update = () => {
        console.log(`Updating with counter = ${counter}`)
        document.querySelector("#counterText").innerHTML = `Count = ${counter}`
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
}



main()