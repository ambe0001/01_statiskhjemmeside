console.log("script loaded...");
let productId = 1163;
let productContainer = document.querySelector(".productContainer");
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(data) {
  productContainer.innerHTML = ` <img class="marginleft produktfoto" src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="">

            <div class="flex">
                <h2 class="produktinfo">Produkt information</h2>
                <div>
                    <h3 class="specifik marginleft">Modelname</h3>
                    <p class="marginleft">${data.productdisplayname}</p>
                </div>
                <div>
                    <h3 class="specifik marginleft">Inventory number</h3>
                    <p class="marginleft nummer">${data.id}</p>
                </div>
            </div>

            <div class="flex kurv">
                <h3>${data.productdisplayname}</h3>
                <h4>${data.articletype}|${data.brandname}</h4>
                <p>${data.price},-</p>
                <div>
                    <p class="tilføjkurv">Tilføj kurv</p>
                </div>
            </div>
`;
}
