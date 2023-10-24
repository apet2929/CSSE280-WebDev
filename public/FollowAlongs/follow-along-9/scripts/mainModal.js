document.addEventListener('DOMContentLoaded', (e) => {
    const fetchDataButton = document.getElementById("fetchDataButton");
    const dataIndexInput = document.getElementById("dataIndexInput");
    const dataDisplay = document.getElementById("dataDisplay");

    fetchDataButton.addEventListener("click", () => {
        const dataIndex = dataIndexInput.value;
        if(dataIndex) {
            fetch(`https://jsonplaceholder.typicode.com/todos/${dataIndex}`)
            .then(response => response.json().
            then(data => {
                dataDisplay.innerHTML = `
                <p><strong>Title:</strong> ${data.title}</p>
                <p><strong>Completed:</strong> ${data.completed}</p>
            `;
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