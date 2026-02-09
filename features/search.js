import { Products } from "../data/product.js";
import { create_product } from "./product_list.js";
let timeoutId;
function debounce(cb, dely = 5_00) {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    cb();
  }, dely);
}

function  Products(e) {
  debounce(() => {
    const inputValue = getInputValue().toLowerCase();
    const matchedProducts = Products.filter((product) =>
      product.name.toLowerCase().includes(inputValue)
    );
    console.log(matchedProducts);
    renderProducts(matchedProducts);
  });
}
// searchProducts();

function getInputValue() {
  let search_val = document.getElementById("search_bar_input");
  return search_val.value;
}
// function renderProducts() {}
// function getInputValue(){}
let searchbar = document.getElementById("search_bar_input");
searchbar.addEventListener("input", searchProducts);

/**
 * Callback to handle search results and render matching items
 * @param {Array} searchResults - Array of product objects from search
 * @param {Array} sourceArray - The array to filter (e.g., merged or Products)
 * @param {HTMLElement} container - The DOM element to append children to
 * @param {Function} createItemFn - Function that creates a DOM element for a product
 */
/**
 * Featured_section
 * Recommended_section
 */
// const container = document.querySelector(".Featured_section");
// const rec_container = document.querySelector(".Recommended_section");

const Featured_products = Products.slice(0, 4);
const Recommended_products = Products.slice(4, 8);
Recommended_products.forEach((e) => console.log(e));
// console.log(`rec ${Recommended_products.toString()}`);
function handleSearchResults(searchResults) {
  // Clear old results
  Product_list.innerHTML = "";
  recomended_list.innerHTML = "";

  // Get IDs from search results for quick lookup
  const searchIds = searchResults.map((item) => item.id);

  // Filter the source array to only include matches
  const filtered = Featured_products.filter((item) =>
    searchIds.includes(item.id)
  );

  const rec_filtered = Recommended_products.filter((item) =>
    searchIds.includes(item.id)
  );

  // Append each matching item to the container
  filtered.forEach((product) => {
    Product_list.appendChild(create_product(product));
  });

  rec_filtered.forEach((product) => {
    recomended_list.appendChild(create_product(product));
  });
}

const Product_list = document.getElementById("Featured");
const recomended_list = document.getElementById("Recommended");

function renderProducts(matched) {
  const fea = Featured_products.filter((e) => matched.indexOf(e) != -1);
  const rec = Recommended_products.filter((e) => matched.indexOf(e) != -1);

  Product_list.innerHTML = "";
  recomended_list.innerHTML = "";

  if (fea.length == 0) {
    Product_list.innerHTML = "no items found";
  }
  if (rec.length == 0) {
    recomended_list.innerHTML = "no items found";
  }
  fea.forEach((e) => {
    Product_list.appendChild(create_product(e));
  });
  rec.forEach((e) => {
    recomended_list.appendChild(create_product(e));
  });
}
