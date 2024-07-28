

// let pokemonName = "pikacu";
let url = "https://newsapi.org/v2/everything?q=tesla&from=2024-05-15&sortBy=publishedAt&apiKey=5dfcf67db72a4eb3ab207e1692b76c98";

async function getData() {
    let request = new Request(url);
    const response = await fetch(request);
    const data = await response.json();
    if (response.status != 200) {
        console.log("i cant find it", response);
    }
    else { console.log(response) };

}
getData();

// const request = new Request(url)

// fetch(request)
//     .then(response => response.json())
//     .then(data => console.log('success', data))
//     .catch(error => console.log('Error: ${error}'))


// try {
//     getData()

// } catch (error) {
//     console.log("Sorry i found it", error)
// }