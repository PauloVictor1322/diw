document.getElementById('formulario').addEventListener('submit',pesquisargame)
 
function pesquisargame(e){
  var gamespesquisa = document.getElementById('pesquisar').value;
  buscargame(gamespesquisa)
  e.preventDefault();
  
}


function buscargame(gamepesquisa){
fetch("https://api.rawg.io/api/games?search="+ gamepesquisa +"key=8308bad285634cf0a1c28c37e6c602c0")
  .then(res => res.json())
  .then(data => {
    let str = ''
    for (let i = 0; i < data.results.length; i++) {
      let games = data.results[i]
      let platforms = ''
       games.platforms.forEach(e => {
        console.log(e)
        platforms += `${e.platform.name}  `
       })
      str += `<div class="card col-md-4" style="width: 18rem;">
        <img src="${games.background_image}" class="card-img-top" alt="....">
        <div class="card-body">
          <h5 class="card-title">${games.name}</h5>
          <p class="card-text">nota:${games.rating}</p>
          <p class="card-text">${platforms}</p>
          <p class="card-text">${games.released}</p>
          <a href="detalhes.html?id=${games.id}" target="_blank" class="btn btn-primary">Mais detalhes</a>
        </div>
      </div>`
    }

    document.getElementById('tela').innerHTML = str
    


  })
}






















































// document.getElementById('formulario').addEventListener('submit',pesquisargame)
 
// function pesquisargame(e){
//   var gamespesquisa = document.getElementById('pesquisar').value;
//   buscargame(gamespesquisa)
//   e.preventDefault();
  
// }


// function buscargame(gamespesquisa){
//   axios.get('https://api.rawg.io/api/games?search=gamepesquisa&key=8308bad285634cf0a1c28c37e6c602c0&page=1' + gamespesquisa)
//   .then(function (response) {
//     console.log(response);
//     var games = response.data.Search;
//     var mostrargames = '';

//     for(var i = 0; i < games.length; i++){
//       mostrargames += `
//       <div class="col-sm-6 col-md-4">
//       <div class="tumbnail">
//       <img src="${games.background_image}" class="img-thumbnail">
//       <h4>${games.name}</h4>
//       <h4>plataformas${platforms}</h4>
//       <p><>a href="detalhes.html?id=${games.id}" target="_blank" class="btn-primary" role="button">ver detalhes></a>
//       </div>
//       </div>
      
      
//       `;
//     }

//     document.getElementById('games').innerHTML = mostrargames



//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// }