console.log("script loaded...");

let categoryContainer = document.querySelector(".category_list_container");
fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((data) => showCategory(data));

function showCategory(data) {
  const markup = data
    .map(
      (element) =>
        ` 
           <a href="produktliste.html?category=${element.category}">${element.category}</a> 
           `
    )
    .join("");

  console.log(markup);
  categoryContainer.innerHTML = markup;
}
