console.log("script loaded...");

let listContainer = document.querySelector(".produkt_liste_container");
fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += ` <div class="card">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="">
                <h3>${product.productdisplayname}</h3>
                <h4>${product.articletype}|${product.brandname}</h4>
                <p>${product.price},-</p>
                <a href="produkt.html">Read more</a>
            </div>`;
    })
    .join("");

  console.log(markup);
  listContainer.innerHTML = markup;
}
