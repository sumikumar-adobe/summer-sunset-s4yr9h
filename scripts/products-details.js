const getProduct = () => {
  fetch(
    `https://fakestoreapi.com/products/${new URLSearchParams(
      window.location.search
    ).get("id")}`
  )
    .then((res) => res.json())
    .then((json) => {
      let rating = "";
      let className = "";
      for (let i = 0; i < 5; i++) {
        className = i < Math.ceil(json.rating.rate) ? "active" : "";
        rating += "<div class='star-icon " + className + "'></div>";
      }
      const productDetails = `
        <div class="product-detail">
          <img src="${json.image}"/>
          <p class="title">${json.title}</p>
          <p class="price">$${json.price}</p>
          <div class="rating-wrapper">${rating}<p class='count'>${json.rating.count}</p></div>

        </div>
      `;
      document.querySelector(".stars").innerHTML = rating;
    });
};

window.onload = () => {
  document
    .querySelector(".quantity-box .plus")
    .addEventListener("click", (e) => {
      const input = document.querySelector(".quantity-box input");
      input.setAttribute("value", parseInt(input.getAttribute("value")) + 1);
    });

  document
    .querySelector(".quantity-box .minus")
    .addEventListener("click", (e) => {
      const input = document.querySelector(".quantity-box input");
      if (parseInt(input.getAttribute("value")) > 1) {
        input.setAttribute("value", parseInt(input.getAttribute("value")) - 1);
      }
    });
};

getProduct();
