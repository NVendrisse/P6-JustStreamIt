let dp = document.getElementsByClassName("dropdown-content")
let bbm = document.getElementsByClassName("bck_img");
let bm = document.getElementsByClassName("best_movie");
let cmf = document.getElementsByClassName("cat0");
let c1 = document.getElementsByClassName("cat1");
let c2 = document.getElementsByClassName("cat2");
let c3 = document.getElementsByClassName("cat3");
let flm = document.getElementsByTagName('LI')
let m = document.getElementsByClassName('modal')
let mc = document.getElementsByClassName('modal_content')
let bt = document.getElementsByClassName('btnclose')
let categories = ["Horror","Thriller","Sci-Fi"]
let min_year = "1995"
m[0].style.display = "none";
m[0].style.transition = "display 1s ease-in-out"


function azert() {

  for (var i = 1; i < 6; i++) {
    fetch("http://localhost:8000/api/v1/genres/?page="+i)
    .then(function(r){
      if (r.ok) {
        return r.json()
      }
    })
    .then(function(e){
      for (var i = 0; i < 5; i++) {
        nd = dp[0].appendChild(document.createElement("div"))
        ch = nd.appendChild(document.createElement("input"))
        lb = nd.appendChild(document.createElement("label"))
        lb.for = e.results[i].name
        lb.innerHTML = e.results[i].name
        ch.name = e.results[i].name
        ch.type = "checkbox"
        ch.id = "inputCheckboxes"
        ch.value = e.results[i].name
        for (var categ of categories) {
          if (ch.name==categ) {
            ch.checked = true
          }
        }
        ch.onclick = function(e){
          if (e.srcElement.checked) {
            categories.push(e.srcElement.value)
            categories.shift()
          }
        }
      }
    })
  }
  fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score")
      .then(function(res) {
          if (res.ok) {
              return res.json();
          }
      })
      .then(function(e){
        bm[0].children[0].innerHTML = e.results[0].title;
        bm[0].children[1].src = e.results[0].image_url;
        bm[0].id = e.results[0].id;
        fetch("http://localhost:8000/api/v1/titles/" + e.results[0].id)
          .then(function(res) {
              if (res.ok) {
                  return res.json();
              }
          })
          .then(function(e) {
            bm[0].children[2].innerHTML = e.long_description;
          })
        for (var i = 1; i < 5; i++) {
          ti = cmf[0].children[1].children[i-1].appendChild(document.createElement("h2"))
          im = cmf[0].children[1].children[i-1].appendChild(document.createElement("img"))
          ti.innerHTML = e.results[i].title;
          im.src = e.results[i].image_url;
          im.id = e.results[i].id;
        }
        fetch(e.next)
          .then(function(res) {
              if (res.ok) {
                  return res.json();
              }
          })
          .then(function(e) {
            for (var i = 0; i < 3; i++) {
              ti = cmf[0].children[1].children[i+4].appendChild(document.createElement("h2"))
              im = cmf[0].children[1].children[i+4].appendChild(document.createElement("img"))
              ti.innerHTML = e.results[i].title;
              im.src = e.results[i].image_url;
              im.id = e.results[i].id;
            }
          })
      })

  for (var l of flm) {
    l.innerHTML = ""
  }
  fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre="+ categories[0] +"&min_year="+ min_year)
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(e){
          c1[0].children[0].innerHTML=categories[0]
          for (var i = 0; i < 5; i++) {
            ti = c1[0].children[1].children[i].appendChild(document.createElement("h2"))
            im = c1[0].children[1].children[i].appendChild(document.createElement("img"))
            ti.innerHTML = e.results[i].title;
            im.src = e.results[i].image_url;
            im.id = e.results[i].id;
          }
          fetch(e.next)
            .then(function(res) {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(function(e) {
              for (var i = 0; i < 2; i++) {
                ti = c1[0].children[1].children[i+5].appendChild(document.createElement("h2"))
                im = c1[0].children[1].children[i+5].appendChild(document.createElement("img"))
                ti.innerHTML = e.results[i].title;
                im.src = e.results[i].image_url;
                im.id = e.results[i].id;
              }
            })
      })
      fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre="+ categories[1] +"&min_year="+ min_year)
            .then(function(res) {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(function(e){
              c2[0].children[0].innerHTML=categories[1]
              for (var i = 0; i < 5; i++) {
                ti = c2[0].children[1].children[i].appendChild(document.createElement("h2"))
                im = c2[0].children[1].children[i].appendChild(document.createElement("img"))
                ti.innerHTML = e.results[i].title;
                im.src = e.results[i].image_url;
                im.id = e.results[i].id;
              }
              fetch(e.next)
                .then(function(res) {
                    if (res.ok) {
                        return res.json();
                    }
                })
                .then(function(e) {
                  for (var i = 0; i < 2; i++) {
                    ti = c2[0].children[1].children[i+5].appendChild(document.createElement("h2"))
                    im = c2[0].children[1].children[i+5].appendChild(document.createElement("img"))
                    ti.innerHTML = e.results[i].title;
                    im.src = e.results[i].image_url;
                    im.id = e.results[i].id;
                  }
                })
          })
          fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre="+ categories[2] +"&min_year="+ min_year)
                .then(function(res) {
                    if (res.ok) {
                        return res.json();
                    }
                })
                .then(function(e){
                  c3[0].children[0].innerHTML=categories[2]
                  for (var i = 0; i < 5; i++) {
                    ti = c3[0].children[1].children[i].appendChild(document.createElement("h2"))
                    im = c3[0].children[1].children[i].appendChild(document.createElement("img"))
                    ti.innerHTML = e.results[i].title;
                    im.src = e.results[i].image_url;
                    im.id = e.results[i].id;
                  }
                  fetch(e.next)
                    .then(function(res) {
                        if (res.ok) {
                            return res.json();
                        }
                    })
                    .then(function(e) {
                      for (var i = 0; i < 2; i++) {
                        ti = c3[0].children[1].children[i+5].appendChild(document.createElement("h2"))
                        im = c3[0].children[1].children[i+5].appendChild(document.createElement("img"))
                        ti.innerHTML = e.results[i].title;
                        im.src = e.results[i].image_url;
                        im.id = e.results[i].id;
                      }
                    })
              })
}

for (var l of flm) {
  l.onclick = function(e){
      mc[0].innerHTML = ""
      m[0].style.display = "block";
      m[0].style.transition = "display 1s ease-in-out"
    fetch("http://localhost:8000/api/v1/titles/" + e.srcElement.id)
    .then(function(r){
      if (r.ok) {
        return r.json();
      }
      })
    .then(function(a){
      img = mc[0].appendChild(document.createElement("img"));
      title = mc[0].appendChild(document.createElement("h1"));
      original = mc[0].appendChild(document.createElement("h2"));
      genres = mc[0].appendChild(document.createElement("p"));
      date = mc[0].appendChild(document.createElement("p"));
      rated = mc[0].appendChild(document.createElement("p"));
      score = mc[0].appendChild(document.createElement("p"));
      director = mc[0].appendChild(document.createElement("p"));
      actors = mc[0].appendChild(document.createElement("p"));
      lenght = mc[0].appendChild(document.createElement("p"));
      country = mc[0].appendChild(document.createElement("p"));
      boxOffice = mc[0].appendChild(document.createElement("p"));
      resume = mc[0].appendChild(document.createElement("p"));
      img.src = a.image_url
      title.innerHTML = "<p>Titre :  </p>" + a.title;
      original.innerHTML = "<p>Titre original :  </p>" + a.original_title
      genres.innerHTML = "<p>Genre(s) :  </p>" + a.genres
      date.innerHTML = "<p>Année :  </p>" + a.year
      rated.innerHTML = "<p>Rated :  </p>" + a.rated
      score.innerHTML = "<p>Score IMDB :  </p>" + a.imdb_score
      director.innerHTML = "<p>Réalisateur(s) :  </p>" + a.directors
      actors.innerHTML = "<p>Acteurs :  </p>" + a.actors
      lenght.innerHTML = "<p>Durée :  </p>" + a.duration + "<p>min</p>"
      country.innerHTML = "<p>Pays :  </p>" + a.countries
      boxOffice.innerHTML = "<p>Résultats Box Office :  </p>" + a.worldwide_gross_income
      resume.innerHTML = "<p>Résumé :  </p>" + a.long_description

    })
    }
  }


bm[0].onclick = function(e){
  mc[0].innerHTML = ""
  m[0].style.display = "block";
  m[0].style.transition = "display 1s ease-in-out"
  fetch("http://localhost:8000/api/v1/titles/" + bm[0].id)
  .then(function(r){
    if (r.ok) {
      return r.json();
    }
    })
  .then(function(a){
    img = mc[0].appendChild(document.createElement("img"));
    title = mc[0].appendChild(document.createElement("h1"));
    original = mc[0].appendChild(document.createElement("h2"));
    genres = mc[0].appendChild(document.createElement("p"));
    date = mc[0].appendChild(document.createElement("p"));
    rated = mc[0].appendChild(document.createElement("p"));
    score = mc[0].appendChild(document.createElement("p"));
    director = mc[0].appendChild(document.createElement("p"));
    actors = mc[0].appendChild(document.createElement("p"));
    lenght = mc[0].appendChild(document.createElement("p"));
    country = mc[0].appendChild(document.createElement("p"));
    boxOffice = mc[0].appendChild(document.createElement("p"));
    resume = mc[0].appendChild(document.createElement("p"));

    img.src = a.image_url
    title.innerHTML = "<p>Titre :  </p>" + a.title;
    original.innerHTML = "<p>Titre original :  </p>" + a.original_title
    genres.innerHTML = "<p>Genre(s) :  </p>" + a.genres
    date.innerHTML = "<p>Année :  </p>" + a.year
    rated.innerHTML = "<p>Rated :  </p>" + a.rated
    score.innerHTML = "<p>Score IMDB :  </p>" + a.imdb_score
    director.innerHTML = "<p>Réalisateur(s) :  </p>" + a.directors
    actors.innerHTML = "<p>Acteurs :  </p>" + a.actors
    lenght.innerHTML = "<p>Durée :  </p>" + a.duration + "<p>min</p>"
    country.innerHTML = "<p>Pays :  </p>" + a.countries
    boxOffice.innerHTML = "<p>Résultats Box Office :  </p>" + a.reviews_from_critics
    resume.innerHTML = "<p>Résumé :  </p>" + a.long_description
  })
}

m[0].onclick = function(e) {
  if (e.target == m[0]) {
    m[0].style.display = "none";
    m[0].style.transition = "display 1s ease-in-out"
  }
  if (e.target == bt[0]) {
    m[0].style.display = "none";
    m[0].style.transition = "display 1s ease-in-out"
  }
}


let cs = document.querySelectorAll(".carrousel")
let f = document.querySelectorAll(".film")
let b = document.querySelectorAll(".button")
let current=0
let pmax=0
for (var flms of f) {
  fpos=flms.getBoundingClientRect()
  if (fpos.x <= 250) {
    console.log('a');
    flms.style.visibility = 'hidden'
  } else {
    flms.style.visibility = 'visible'
  }
  if (fpos.x >= 1250) {
    flms.style.visibility = 'hidden'
  } else {
    flms.style.visibility = 'visible'
  }
}
for (var butt of b) {
  butt.onclick = function(e){
    for (var flm of f) {
      fpos=flm.getBoundingClientRect()
      if (fpos.x <= 250) {
        console.log('a');
        flm.style.visibility = 'hidden'
      } else {
        flm.style.visibility = 'visible'
      }
      if (fpos.x >= 1250) {
        flm.style.visibility = 'hidden'
      } else {
        flm.style.visibility = 'visible'
      }
    }
    if (e.srcElement.children[0].className == "fas fa-angle-left") {
      pmax=pmax-50
      for (var i = 0; i < e.srcElement.parentElement.parentElement.children.length-1; i++) {
        e.srcElement.parentElement.parentElement.children[i].style.transform = 'translateX('+pmax+'%)'
      }

    } else {
      pmax=pmax+50
        for (var i = 0; i < e.srcElement.parentElement.parentElement.children.length-1; i++) {
          e.srcElement.parentElement.parentElement.children[i].style.transform = 'translateX('+pmax+'%)'
        }
    }
}
}
