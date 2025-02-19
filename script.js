let Movies = [];
let updateMovie = () => {
    let movieElement;
    document.querySelector(".page-title").innerText = `FAV MOVIE - ${Movies.length}`;
    let area = document.querySelector(".movieArea");
    area.innerHTML = '';
    Movies.forEach((todo, index) => {
        movieElement = document.createElement("div");
        movieElement.classList.add("todo-element");
        movieElement.innerText = todo["movie-name"];
        
        // Add click event to remove movie on click
        movieElement.addEventListener("click", () => {
            removeMovie(index); // Call the removeMovie function with the index of the movie
        });

        area.appendChild(movieElement);
    });
}

let removeMovie = (index) => {
    // Remove movie from Movies array based on index
    Movies.splice(index, 1);
    updateMovie(); // Re-render the updated movie list
};

document.addEventListener("DOMContentLoaded", updateMovie);

let addMovie = () => {
    let currentMovie = document.querySelector("#movie-input").value;
    if (currentMovie.trim() !== "") {
        let movieObject = {
            "movie-name": currentMovie,
        };
        Movies.push(movieObject);
    }
};

let removeAllMovies = () => {
    Movies = [];
    let area = document.querySelector(".movieArea");
    area.innerHTML = '';
    document.querySelector(".page-title").innerText = `FAV MOVIE - ${Movies.length}`;
};

document.querySelector(".remove-all-btn").addEventListener("click", removeAllMovies);

document.querySelector(".submitbtn").addEventListener("click", () => {
    let movieInput = document.querySelector("#movie-input");
    if (movieInput.value === "") {
        movieInput.setAttribute("placeholder", "Enter a valid movie please");
        return;
    }
    addMovie();
    updateMovie();
    movieInput.value = "";
});
