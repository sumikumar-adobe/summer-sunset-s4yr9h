const getProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      let productList = "";
      json.map((x) => {
        productList += `<a href="./products-details.html?id=${x.id}"><div class="product-card"><div class="img-wrapper"><img alt="Product" src="${x.image}" /></div><p>${x.title}</p><p>$${x.price}<p/><div class="like-icon"></div></div></a>`;
      });
      document.querySelector(".product-list-wrapper").innerHTML = productList;
    });
};

const toggleFilter = () => {
  document.querySelector(".filter-wrapper").classList.toggle("active");
  document.querySelector("body").classList.toggle("no-scroll");
};

getProducts();
