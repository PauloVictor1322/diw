const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

fetch(`https://api.rawg.io/api/games/${myParam}?key=8308bad285634cf0a1c28c37e6c602c0&dates=2019-09-01,2022-11-20&platforms=18,1,7`)
    .then(res => res.json())
    .then(data => {
        let idx = data.id 
        if (idx != -1) {
             let str =`<div class="card mb-3" style="max-width: 170vh;">
             <img src="${data.background_image}" class="card-img-top" alt="...">
             <div class="card-body">
               <h1 class="card-title">${data.name}</h1>
               <p class="card-text">released ${data.released}</p>
               <p class="card-text"><small class="strong">nota: ${data.rating}</small></p>
             </div>
             <div class="card mb-3" style="max-width: 155vh;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${data.background_image_additional}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Sobre o jogo</h5>
        <p class="card-text">${data.description_raw}</p>

      </div>
    </div>
  </div>
</div>


<div class="card text-bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">website</div>
  <div class="card-body">
    <p class="card-text">${data.website}</p>
  </div>
</div>
             `









             // `
// //           <div class="card text-bg-dark">
// //   <img src="${data.background_image}" class="card-img" alt="...">
// //   <div class="card-img-overlay">
// //     <h5 class="card-title">Card title</h5>
// //     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
// //     <p class="card-text"><small>Last updated 3 mins ago</small></p>
// //   </div>
// // </div>`
  
      
      
      
        //   let str = `<div class="card col-md-4" style="width: 18rem;">
        //     <img src="${data.background_image}" class="card-img-top" alt="....">
        //     <div class="card-body">
        //       <h5 class="card-title">${data.name}</h5>
        //       <p class="card-text">nota:${data.rating}</p>
        //       <p class="card-text">${data.description_raw}</p>
             
        //     </div>
        //   </div>`
        
        document.getElementById('tela').innerHTML = str
        }
        else {
          document.querySelector('#tela').innerHTML= '<h1>nao encontrado</h1>'
        }
        })
    


