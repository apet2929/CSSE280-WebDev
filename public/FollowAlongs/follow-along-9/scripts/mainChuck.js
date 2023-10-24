document.addEventListener('DOMContentLoaded', (e) => {
    const fetchDataButton = document.getElementById("fab");
    const dataTableHead = document.querySelector("#dataTable thead tr")
    const dataTableBody = document.querySelector("#dataTable tbody tr")

    fetchDataButton.addEventListener("click", () => {
        fetch(`https://api.chucknorris.io/jokes/random`)
        .then(response => response.json().
        then(data => {
            dataTableHead.innerHTML = "";
            dataTableBody.innerHTML = ""
            for(const key in data) {
                dataTableHead.insertAdjacentHTML('beforeend', `<th>${key}</th>`)
                dataTableBody.insertAdjacentHTML('beforeend', `<th>${data[key]}</th>`)
            }
        }))
        .catch(error => {
            console.error("Error fetching data", error);
            dataDisplay.innerHTML = "Error fetching data. Please try again."
        })
        
    })
})