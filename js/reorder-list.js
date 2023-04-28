export function reorder(e) {
  let list = document.querySelector("ul");
  let movieList = list.querySelectorAll("li");
  let bestMovie = list.firstChild;
  if (e.keyCode === 68) {
    let bestMovieClone = bestMovie.cloneNode(true);
    list.prepend(bestMovieClone);
  }
  if (e.keyCode === 82) {
    let i = 0;
    while (i < movieList.length) {
      let randomNumber = getRandomNumber();
      let movie = movieList[randomNumber];
      if (movie.classList.contains("important")) {
        list.prepend(movie);
      } else {
        list.appendChild(movie);
        i++;
      }
    }
  }
}
function getRandomNumber() {
  let list = document.querySelector("ul");
  let movieList = list.querySelectorAll("li");
  let randomNumber = Math.floor(Math.random() * (movieList.length - 1));
  return randomNumber;
}
