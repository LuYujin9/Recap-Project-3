export function createSearchBar(onSubmit) {
  const searchBar = document.createElement("div");
  searchBar.innerHTML = `
    <form action="" class="search-bar" data-js="search-bar">
    <input
      name="query"
      class="search-bar__input"
      type="text"
      placeholder="search characters"
      aria-label="character name"
    />
    <button class="search-bar__button" aria-label="search for character">
      <img
        class="search-bar__icon"
        src="assets/magnifying-glass.png"
        alt=""
      />
    </button>
  </form>
    `;
  searchBar.addEventListener("submit", (event) => onSubmit(event));
  return searchBar;
}
