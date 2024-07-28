let apiKey = '9BgVsklINaTxHjUrKsb6uifryupFyx5KwRZVAfIWD765MxPAaboUaBth'

let container = document.querySelector(".container");


async function getData(){
    const searchBox = document.querySelector("#searchBox")
    // for(let i = 0 ; i<4;i++){
        //     container.remove(newImg);
        // }
        
        let linkTag = document.querySelectorAll('a');
        for(let i = 0 ; i < linkTag.length; i++ ){
            container.removeChild(linkTag[i]);
        }
        
        let url =  "https://api.pexels.com/v1/search?query="+searchBox.value;
        
        let headers = {"Authorization": apiKey}
        const response = await fetch(url,{headers})
        let data = await response.json();
        // if(count>0){
        //     for(let x = 0 ; x<14; x++){
            //         let removeLink = document.getElementsByName('a')
            //         container.remove(removeLink[x]);
            //     }
            // }
    let imgObLength = data.photos.length;
    console.log(imgObLength);
    for(let x = 0; x<imgObLength; x++){
        let link = document.createElement("a");
        let newImg = document.createElement("img");
        let image = data.photos[x].src.original;

        newImg.setAttribute("src",image);
        link.setAttribute("href",image);
        
        link.appendChild(newImg);
        container.appendChild(link);

        console.log(image);
        // saveData()
    }
    searchBox.value = "";
}

// function removeAll(){
//     for(let i = 0 ; i < linkTag.length; i++ ){
//         container.removeChild(linkTag[i]);
//     }

// }

// function saveData(){
//     localStorage.setItem("data",container.innerHTML)

// }

// function showData(){
//     container.innerHTML = localStorage.getItem("data")
// }
// showData()