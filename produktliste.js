console.log("script loaded...");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const mycategory = urlParams.get("categories");

console.log("The category is:", mycategory);

let listContainer = document.querySelector(".produkt_liste_container");
fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map(
      (product) =>
        ` <div class="card">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="">
                <h3>${product.productdisplayname}</h3>
                <h4>${product.articletype}|${product.brandname}</h4>
                <p>${product.price},-</p>
                <a href="produkt.html?id=${product.id}">Read more</a>
            </div>`
    )
    .join("");

  console.log(markup);
  listContainer.innerHTML = markup;
}
