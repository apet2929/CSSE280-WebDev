document.addEventListener('DOMContentLoaded', (e) => {
    const fetchDataButton = document.getElementById("fetchDataButton");
    const dataIndexInput = document.getElementById("dataIndexInput");
    const dataTableHead = document.querySelector("#dataTable thead tr")
    const dataTableBody = document.querySelector("#dataTable tbody tr")

    fetchDataButton.addEventListener("click", () => {
        const dataIndex = dataIndexInput.value;
        if(dataIndex) {
            fetch(`https://jsonplaceholder.typicode.com/todos/${dataIndex}`)
            .then(response => response.json().
            then(data => {
                dataTableHead.innerHTML = "";
                dataTableBody.innerHTML = ""
                for(const key in data) {
                    dataTableHead.insertAdjacentHTML('beforeend', `<th>${key}</th>`)
                    dataTableBody.insertAdjacentHTML('beforeend', `<th>${data[key]}</th>`)
                }
            $("#dataIndexModal").modal('hide');
            }))
            .catch(error => {
                console.error("Error fetching data", error);
                dataDisplay.innerHTML = "Error fetching data. Please try again."
            })
            .finally(() => {
                $("#dataIndexModal").modal("hide")
                $("body").removeClass('modal-open');
                $(".modal-backdrop").remove();
            })
        }
    })
})