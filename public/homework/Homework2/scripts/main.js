// {
//     "location": "London, UK",
//     "name": "Lance Jarvis",
//     "avatar": "https://raw.githubusercontent.com/enggsuraj/testimonailapi/main/public/avatar/1.jpg",
//     "designation": "General Manager",
//     "message": "We have been using product for last one year, and I have to say that it has transformed the way we do business. Thank you for awesome service.",
//     "lorem": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
//     "rating": 4.8,
//     "id": "1"
// }

const getRandomInt = () => {
    return Math.floor(Math.random() * 10)
}

const clearText = () => {
    let body = document.getElementById("clientBody")
    for(const child of body.children) {
        body.removeChild(child)
    }
}

const processText = (text) => {
    return text.trim().replace(".", "!!!\n")
}

const textToArray = (text) => {
    return text.split("\n")
}


const appendText = (textArray) => {
    let spans = textArray.filter((text) => text !== "").map((text) => {
        let elem = document.createElement("span")
        elem.innerText = text
        elem.style.display = "block"
        elem.classList.add("text-center")
        return elem
    })
    console.log(spans);
    for(const span of spans) {
        document.getElementById("clientBody").appendChild(span)
    }
    
}

async function updateClient() {
    let testimonies = await getTestimonies()

    // select new testimony
    let newIndex = getRandomInt()
    while(index == newIndex) newIndex = getRandomInt()
    index = newIndex;
    let testimony = testimonies[index]

    // clear old testimony data
    clearText()

    // set title
    document.getElementById("clientTitle").innerHTML = testimony.name

    // set body
    let clientBody = testimony.message
    clientBody = processText(clientBody)
    clientBody = textToArray(clientBody)
    appendText(clientBody)

    // set image
    document.getElementById("clientImage").src = testimony.avatar
    
}

const getTestimonies = () => {
    return new Promise((resolve, reject) => {
        fetch("https://64486933e7eb3378ca2e0f51.mockapi.io/api/users").then(response => response.json())
        .then((data) => {
            resolve(data);
        }).catch(err => reject(err))
    })
}

let index = 0;
document.getElementById("newTestimonyButton").addEventListener('click', (e) => updateClient())