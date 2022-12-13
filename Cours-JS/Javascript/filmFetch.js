const btn= document.querySelector("button");

btn.addEventListener('click',(e) =>{
    e.preventDefault()
    let nameFilm=document.querySelector("#search").value;
    console.log(nameFilm)
    fetch("http://www.omdbapi.com/?apikey=de846841&s="+nameFilm)
        .then(response => response.json())
        .then(data=>{
            console.log(data)
            displayFilm(data)  
        })
        
})

function displayFilm(data){
    const div= document.querySelector("#div")
    let html = `<table class="table table-striped table-hover"><thead><tr>`;
    html += displayHeaders(data[0]);
    html += "</tr></thead>";
  

    data.Search.forEach(film => {
      html += `<img src=${film.Poster}><p>${film.Title}</p>` ;
      console.log(film)
    });
    html += "</table>";
  
    div.innerHTML = html;
  }
  
  function displayPoster(film) {
    let html = "<tr>";
  
    for (const prop in film) {
      if (film[prop] instanceof Object) {
        let ob = film[prop];
        html += "<td>";
  
        for (const prop in ob) {
          html += ob[prop] + " ";
        }
        html += "</td>";
      } else {
        html += `<td>${film[prop]}</td>`;
      }
    }
    html += "</tr>";
    return html;
  }
  
  function displayHeaders(film) {
    let html = "";
    for (const prop in film) {
      html += `<th>${prop}</th>`;
    }
    return html;
  }
  