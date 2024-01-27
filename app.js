let api = 'https://www.omdbapi.com/?apikey=61e576a4&t='
let notFound = document.getElementById('notFound');
let found = document.getElementById('found');

let logo = document.getElementById('netflix-img');
let loader = document.getElementById('animation-loader');
loader.classList.add('d-none');

function searchMovie(){
    logo.style.display = 'none';
    loader.classList.remove('d-none');
    let movieName = document.getElementById('movieName');
    let query = api + movieName.value;
    fetch(query).then((data)=>{
        return data.json()
    }).then((data)=>{
        if(data.Error){
            loader.classList.add('d-none');
            notFound.classList.remove('d-none');
            found.classList.add('d-none');
            document.getElementById('name').innerText = movieName.value;
        }
        else{
            loader.classList.add('d-none');
            notFound.classList.add('d-none');
            found.classList.remove('d-none');
            document.getElementById('title').innerText = data.Title;
            document.getElementById('poster').src = data.Poster;
            document.getElementById('genre').innerText = data.Genre;
            document.getElementById('date').innerText = data.Released;
            document.getElementById('actors').innerText = data.Actors;
            document.getElementById('collection').innerText = data.BoxOffice;
            document.getElementById('awards').innerText = data.Awards;
            document.getElementById('director').innerText = data.Director;
            document.getElementById('writer').innerText = data.Writer;
            document.getElementById('ratings').innerText = data.imdbRating;
            document.getElementById('desc').innerText = data.Plot;
        }
    })



}