
// let pizza;

// function makePizza(callback) {
//     setTimeout(() => {
//         pizza = 'pizza';
//         callback(pizza);
//     }, 1000);
// }


// function breadBaking(callback) {
//     setTimeout(() => {
//         pizza = "bread";
//         console.log(pizza);
//         callback(pizza);
//     }, 1000);
// }

// function addTopping(callback) {
//     setTimeout(() => {
//         pizza = "topping";
//         console.log(pizza);
//         callback(pizza);
//     }, 1000)
// }

// function eatPizza() {
//     console.log(pizza);
// }

// console.log("order pizza");

// breadBaking(() => {
//     addTopping(() => {
//         makePizza(() => {
//             eatPizza();
//         })
//     })
// })


//promise

// let pizza
// function orderPizza() {
//     return new Promise(function (resovle, reject) {
//         setTimeout(() => {
//             pizza = "";
//             reject(pizza);
//         }, 2000)
//     })
// }

// function makeBread(pizza) {
//     return new Promise(function (resovle, reject) {
//         setTimeout(() => {
//             pizza += "pizza";
//             console.log("pizza being made");
//             resovle(pizza);
//         })
//     }, 2000)
// }


// function eat(pizza) {
//     setTimeout(() => {
//         console.log("eat", pizza);
//     }, 2000);
// }

// function takePizza(pizza) {
//     return new Promise((resovle, reject) => {
//         pizza = 'some one stole it';
//         console.log(pizza);
//         resovle(pizza);
//     })
// }

// function onError(error) {
//     console.log("error", error);
// }


// console.log("order pizza");
// orderPizza()
//     .then(makeBread, onError)
//     .then(takePizza)
//     .then(eat)
// // .catch(onError)



let url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=d5b7d25e03a3ed0023cdaa31fe5bf1b9'

function getWeather(data) {
    console.log(data);
}


function getData() {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                resolve(response.json())
            })
    })
}
getData()