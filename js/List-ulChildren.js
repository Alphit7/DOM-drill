// get the ul element
let list = document.querySelector("ul");

// get all the children of the ul element
let children = list.childNodes;

// logs each child to the console
export function listUlChildren() {
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    if (child.nodeType === 1) {
      child.addEventListener("click", () => {
        alert(child.textContent);
      });
      console.log(child);
      if (child.textContent === "Fast and Furious") {
        list.prepend(child);
        child.setAttribute("class", "important");
      }
    }
  }
}
