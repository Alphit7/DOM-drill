export function reorder(e) {
  let list = document.querySelector("ul");
  let movie = list.querySelectorAll("li");
  if (e.keyCode === 82) {
    let i = 0;
    while (i < movie.length) {
      list.appendChild(
        movie[Math.floor(Math.random() * (movie.length - 1)) + 1]
      );
      i++;
    }
  }
}
