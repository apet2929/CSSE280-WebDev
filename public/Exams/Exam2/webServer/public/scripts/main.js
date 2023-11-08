let reset = (months) => {
    const monthTable = document.getElementById("months")
    let tr1 = monthTable.children[0]
    let tr2 = monthTable.children[1]
    tr1.innerHTML = ""
    tr2.innerHTML = ""

    let getMonth = (i) => {
        let month = months[i]
        let monthElem = document.createElement("td")
        monthElem.innerHTML = `${i}. ${month}`
        return monthElem
    }

    for (let i = 0; i < 12; i++) {
        if(i < 6) tr1.appendChild(getMonth(i))
        else tr2.appendChild(getMonth(i))
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch('/api/getmonths')
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
    const months = await response.json()
    console.log(months);
    reset(months)
    
})

document.getElementById("moveButton").addEventListener('click', async () => {
    let from = 0
    let to = 2
    let response = await fetch(`/api/move/${from}/${to}`,
        {
            method: "PUT"
        }
    )
    if(response.ok){
        let months = response.json()
        reset(months)
    } else {
        console.log(response);
    }
    
})