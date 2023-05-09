export function createPagination(page, maxPage) {
  const pagination = document.createElement("span");
  pagination.setAttribute("data-js", "pagination");
  pagination.classList.add("navigation__pagination");
  pagination.textContent = `${page}/${maxPage}`;
  return pagination;
}
