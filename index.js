const api_key = '3b91ad5c4b0c41779a9176a8551d1574';
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`;
const mainNewContainer = document.getElementById('mainNew');
const bodyContainer = document.getElementById('bodyContainer');

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        //creacion del container de la noticia que mas resalta
        mainNewContainer.innerHTML += `<div class="mainNew-container">
        <img class="mainImg" src="${data.articles[0].urlToImage}" alt=""></img>
        <div class="mainNew-text">
        <h1 class="mainNew-title">${data.articles[0].title}</h1>
        <hr>
        <p class="mainNew-desc">${data.articles[0].description}</p>
        </div>
        </div>`
        //como la noticia que mas resalta, es la que esta en el puesto 0, se arranca el for desde el puesto 1
        for(i=1; i < data.articles.length; i++){
            //este if, valida que el formato de la noticia recibido este en condiciones, ya que si incumple 
            //con las condiciones mencionadas, no se ve correctamente
            if(data.articles[i].title !== '[Removed]' && data.articles[i].urlToImage !== null){
                bodyContainer.innerHTML += `<div class="newCard">
            <img class="newImg" src="${data.articles[i].urlToImage}" alt=""></img>
            <h1 class="newTitle">${data.articles[i].title}</h1>
            <p class="newDesc">${data.articles[i].description}</p>
            </div>`
            }
        }
    })
    .catch((error) => {
        console.error('Error: ', error);
    });