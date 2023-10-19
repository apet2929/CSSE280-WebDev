const IMG_PATH = "pic/"

class Car {
    constructor(name, imgSrc) {
        this.clickCount = 0;
        this.name = name;
        this.imgSrc = IMG_PATH + imgSrc;
    }
}

const carModel = {
    currentCar: null,
    cars: [
        new Car("Coupe Maserati", 'coupe-maserati.jpg'),
        new Car("Camaro SS 1LE", 'chevrolet-camaro.jpeg'),
        new Car("Dodge Charger 1970", 'dodge-charger.jpeg'),
        new Car("Ford Mustang 1966", 'ford-mustang.jpeg'),
        new Car("190 SL Roadster 1962", 'mercedes-benz.jpeg'),
    ]
};

const carController = {
    init() {
        carModel.currentCar = carModel.cars[0]
        carListView.init()
        carView.init()
    },
    getCurrentCar() {
        return carModel.currentCar;
    },

    getCars() {
        return carModel.cars;
    },

    setCurrentCar(car) {
        carModel.currentCar = car;
    },
    incrementCounter() {
        carModel.currentCar.clickCount++;
        console.log(carModel.currentCar.clickCount);
        carView.render();
    }

};

const carView = {
    init() {
        this.carElem = document.getElementById('car');
        this.carNameElem = document.getElementById('car-name');
        this.carImageElem = document.getElementById('car-img');
        this.countElem = document.getElementById('car-count');
        this.carImageElem.addEventListener('click', this.clickHandler)
        this.render();
    },
    render() {
        const currentCar = carController.getCurrentCar();
        this.countElem.textContent = currentCar.clickCount;
        this.carNameElem.textContent = currentCar.name;
        this.carImageElem.src = currentCar.imgSrc;
        this.carImageElem.style.cursor = 'pointer';
    },
    clickHandler() {
        return carController.incrementCounter();
    }
};

const carListView = {
    init() {
        this.carListElem = document.getElementById("car-list")
        this.render()
    },
    render() {
        let car, elem;
        const cars = carController.getCars();
        this.carListElem.innerHTML = '';
        let onClick = function(carCopy) {
            return function() {
                carController.setCurrentCar(carCopy);
                carView.render();
            }
        }
        for (let i = 0; i < cars.length; i++) {
            car = cars[i];
            elem = document.createElement('li');
            elem.className = 'list-group-item d-flex justify-content-between lh-condensed'
            elem.style.cursor = 'pointer';
            elem.textContent = car.name;
            
            elem.addEventListener('click', onClick(car))
            this.carListElem.appendChild(elem);
        }
    }
};

window.onload = () => {
    carController.init();
}