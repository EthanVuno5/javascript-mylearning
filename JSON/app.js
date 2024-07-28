

// async function getData(){
//     const response = await fetch("text.json");
//     const data =  await response.json(); 
//     const myObj = JSON.stringify(data);
//     const obj = JSON.parse(myObj);
//     console.log(obj)

// }

function getData(){
    const xml = new XMLHttpRequest; 
    xml.onload = function(){
        let response = this.responseText;
        let data = JSON.parse(response);
        console.log(data);
    }
    // const obj = {"name":"hieu"};
    xml.open("GET","text.json");
    xml.send("hello world");
}


getData()

