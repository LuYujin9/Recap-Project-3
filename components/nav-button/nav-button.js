export function createPrevButton(onClick) {
  const previousButton = document.createElement("button");
  previousButton.setAttribute("data-js", "button-prev");
  previousButton.classList.add("button", "button--prev");
  previousButton.textContent = "previous";
  previousButton.addEventListener("click", onClick);
  return previousButton;
}
export function createNextButton(onClick) {
  const nextButton = document.createElement("button");
  nextButton.setAttribute("data-js", "button-next");
  nextButton.classList.add("button", "button--next");
  nextButton.textContent = "next";
  nextButton.addEventListener("click", onClick);
  return nextButton;
}
