export function removeDuplicates() {
  let list = document.querySelector("ul");
  let child = list.querySelectorAll("li");
  for (let i = 0; i < child.length; i++) {
    for (let j = i + 1; j < child.length; j++) {
      if (child[i].isEqualNode(child[j])) {
        child[j].parentNode.removeChild(child[j]);
      }
    }
  }
}
