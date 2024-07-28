// 
let cityName = "London";
let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&limit=5&appid=d5b7d25e03a3ed0023cdaa31fe5bf1b9&units=metric&mode=xml'
let url1 = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&limit=5&appid=d5b7d25e03a3ed0023cdaa31fe5bf1b9&units=metric&mode=json'



// let url = 'ajax_info.txt'

async function ajax(){    
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        const data = this.responseXML;
        // const response = JSON.parse(data);
        // let temperature = response.main.temp; 
        let temperature = data.getElementsByTagName("temperature")[0].getAttribute("value");
        

        console.log(temperature);
    }

    xhttp.open("GET",url);
    xhttp.send();

    const xhttp1 = new XMLHttpRequest();
    xhttp1.onload = ()=>{
        const data1 = xhttp1.responseText;
        const response1 = JSON.parse(data1);
        const temperature = response1.main.temp;
    
        console.log(temperature);
    }

    xhttp1.open("GET",url1);
    xhttp1.send();

    let response = await fetch(url1);
    let data = await response.json();
    let temperature = data.main.temp;
    console.log(temperature);

}

