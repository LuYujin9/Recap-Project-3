import { createCharacterCard } from "./components/card/card.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";
import {
  createPrevButton,
  createNextButton,
} from "./components/nav-button/nav-button.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const navigation = document.querySelector('[data-js="navigation"]');
var maxPage = 1;
var page = 1;

navigation.append(createPrevButton(handlePreviousResults));
navigation.append(createPagination(page, maxPage));
navigation.append(createNextButton(handleNextResults));
searchBarContainer.append(createSearchBar(handleSearch));

const pagination = document.querySelector('[data-js="pagination"]');
fetchCharacters(`https://rickandmortyapi.com/api/character/?page=${page}`);

async function fetchCharacters(url) {
  cardContainer.innerHTML = "";
  try {
    const response = await fetch(url, {
      method: "GET",
    });
    if (response.ok) {
      const data = await response.json();
      maxPage = data.info.pages;
      data.results.forEach((character) => {
        const characterCard = createCharacterCard(character);
        cardContainer.append(characterCard);
      });
      pagination.textContent = `${page}/${maxPage}`;
    }
  } catch (error) {
    console.log(error);
  }
}

function handlePreviousResults() {
  if (page > 1) page--;
  fetchCharacters(`https://rickandmortyapi.com/api/character/?page=${page}`);
}

function handleNextResults() {
  if (page < maxPage) page++;
  fetchCharacters(`https://rickandmortyapi.com/api/character/?page=${page}`);
}

function handleSearch(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  var searchQuery = data.query;
  fetchCharacters(
    `https://rickandmortyapi.com/api/character/?name=${searchQuery}`
  );
}
