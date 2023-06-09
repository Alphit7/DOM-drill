let list = document.querySelector("ul");
export const filter = document.createElement("div");
document.body.insertBefore(filter, list);
let select = document.createElement("select");
filter.appendChild(select);
let optionOne = document.createElement("option");
optionOne.textContent = "normal franchises";
optionOne.setAttribute("value", "normal franchises");
select.appendChild(optionOne);

let optionTwo = document.createElement("option");
optionTwo.setAttribute("value", "important franchises");
optionTwo.textContent = "important franchises";
select.appendChild(optionTwo);

select.addEventListener("change", (event) => {
  let movies = document.querySelectorAll("li");
  let importantMovies = document.querySelectorAll(".important");
  if (event.target.value === "important franchises") {
    movies.forEach((movie) => {
      movie.style.visibility = "hidden";
    });
    importantMovies.forEach((movie) => {
      movie.style.visibility = "visible";
    });
  } else {
    movies.forEach((movie) => {
      movie.style.visibility = "visible";
    });
  }
});
