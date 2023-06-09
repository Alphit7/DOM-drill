// get the ul element
let list = document.querySelector("ul");

// get all the children of the ul element
let children = list.childNodes;

// logs each child to the console
export function listUlChildren() {
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    if (child.nodeType === 1) {
      console.log(child);
      if (child.textContent === "Fast and Furious") {
        list.prepend(child);
        child.setAttribute("class", "important");
      }
    }
  }
}
export function alertName() {
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    if (child.nodeType === 1) {
      child.addEventListener("click", () => {
        if (child.textContent === "Fast and Furious") {
          alert(
            "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family."
          );
        } else {
          alert(child.textContent);
        }
      });
    }
  }
}
