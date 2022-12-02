console.log('começou')

fetch('https://api.rawg.io/api/games?key=8308bad285634cf0a1c28c37e6c602c0&dates=2019-09-01,2022-11-20&platforms=18,1,7')
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


 //plataformas



fetch('https://api.rawg.io/api/platforms?key=8308bad285634cf0a1c28c37e6c602c0')
  .then(res => res.json())
  .then(data => {
    let str = ''
    for (let i = 0; i < data.results.length; i++) {
      let plataforms = data.results[i]
      str += `<div class="card" style="width: 18rem;">
    <img src="${plataforms.image_background}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${plataforms.name}</p>
    </div>
  </div>`
    }
    document.getElementById('tela2').innerHTML = str
  })

  