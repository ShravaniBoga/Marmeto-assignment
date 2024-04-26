document.addEventListener("DOMContentLoaded", function () {
  const customTabs = document.querySelectorAll(".custom-tab-btn");

  function sendGetRequest(category) {
    const url =
      "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const productObject = data.categories.find(
          (item) => item.category_name === category
        );
        displayProducts(productObject.category_products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function displayProducts(products) {
    const customProductListContainer = document.getElementById(
      "customProductListContainer"
    );
    customProductListContainer.innerHTML = ""; // Clear previous content

    products.forEach((product) => {
      const { badge_text, image, title, vendor, price, compare_at_price } =
        product;

      const discount = Math.round(
        ((compare_at_price - price) / compare_at_price) * 100
      );

      const customProductEl = document.createElement("li");
      customProductEl.classList.add("custom-product-item-container");

      customProductEl.innerHTML = `
                    <div class="custom-product-item-image" style="background-image: url(${image})">
                        <p class="custom-badge ${
                          badge_text ? "" : "d-none"
                        }">${badge_text}</p>
                    </div>
                    <div class="custom-product-item-details-card">
                        <div class="custom-product-item-card">
                            <h1 class="custom-product-item-title">${title}</h1>
                            <p class="custom-product-item-vendor">${vendor}</p>
                        </div>
                        <div class="custom-price-discount-card">
                            <div class="custom-price-card">
                                <p class="custom-price">Rs. ${price}.00</p>
                                <p class="custom-compare-price">${compare_at_price}.00</p>
                            </div>
                            <p class="custom-discount">${discount}% Off</p>
                        </div>
                        <button class="custom-add-to-cart-button">Add to Cart</button>
                    </div>
                `;

      customProductListContainer.appendChild(customProductEl);
    });
  }

  customTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const activeTab = document.querySelector(
        ".custom-tab.active-custom-tab-btn"
      );
      activeTab.classList.remove("active-custom-tab-btn");
      this.classList.add("active-custom-tab-btn");

      const category = this.getAttribute("data-tab");
      sendGetRequest(category);
    });
  });

  // Initially load products for the default active tab
  const defaultActiveTab = document.querySelector(
    ".custom-tab.active-custom-tab-btn"
  );
  const defaultCategory = defaultActiveTab.getAttribute("data-tab");
  sendGetRequest(defaultCategory);
});
