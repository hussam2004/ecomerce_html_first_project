import { Products } from "./product.js";
import { render_merged } from "./cart.js";

const dialog_container = document.getElementById("dialog_container");
const dialog = document.querySelector(".dialog");
let is_dialog = false;

export function injectDialogContent(product) {
  dialog.innerHTML = `
    <div>
      <img src="${product.image}" alt="${product.name}" />
    </div>
    <div>
      <p class="dialog_product_name">${product.name}</p>
      <div>
        <p class="dialog_product_brand">Brand: ${product.brand}</p>
        <div class="dialog_product_colors" style="justify-content: flex-end">
          ${product.colors
            .map(
              (color) => `
            <div 
              style="background-color: ${color}; height: 20px; width: 20px" 
              class="dialog_product_colors_single">
            </div>
          `
            )
            .join("")}
        </div>
      </div>
      <p class="dialog_product_description">
        description: ${product.description}
      </p>
      <p class="dialog_product_stock">stock: ${product.stock}</p>
      <div>
        <p class="dialog_product_rating">rating: ${product.rating}</p>
        <p class="dialog_product_price">${product.price}</p>
      </div>
      <button class="cta_dialog" onclick="addToCart(event, ${
        product.id
      })">Add to cart</button>
    </div>
  `;
}

export function card_click(product) {
  injectDialogContent(product);
  toogle_dialog();
}

// const addtocart = (e) => {
//   console.log(1000);
//   e.preventDefault();
//   //puthing the badge
//   if (!products_number.classList.contains("products_number_hover")) {
//     products_number.classList.add("products_number_hover");
//   }

//   // Always parse and default to an empty array
//   let current_cart = JSON.parse(localStorage.getItem("added_to_cart"));

//   // If somehow it's not an array (bad data in storage), reset it
//   // if (!Array.isArray(current_cart)) {
//   //   current_cart = [];
//   // }

//   // Find the product in the cart
//   let foundItem = current_cart.find((obj) => obj.id === Product.id);

//   if (foundItem) {
//     foundItem.amount += 1;
//   } else {
//     current_cart.push({
//       id: Product.id,
//       amount: 1,
//     });
//   }
//   localStorage.setItem("added_to_cart", JSON.stringify(current_cart));
//   render_merged(current_cart);
//   // if (can_createCartItem(Product)) {
//   //   render_merged();
//   // }
//   // document
//   //   .getElementById("basket_items")
//   //   .appendChild(createCartItem(Product));
//   // Save the updated array back to localStorage
//   localStorage.setItem("added_to_cart", JSON.stringify(current_cart));
//   products_number.innerHTML = current_cart.length;

//   // console.log(current_cart);
// };
//---------------------------------------

// const dialog = document.querySelector(".dialog");

// Make sure these exist in your scope
const products_number = document.getElementById("products_number");

// Example: your Products array should be accessible here
// const Products = [...];

window.addToCart = function (e, productId) {
  e.preventDefault();

  // Show badge if not already visible
  if (!products_number.classList.contains("products_number_hover")) {
    products_number.classList.add("products_number_hover");
  }

  // Always parse and default to an empty array
  let current_cart = JSON.parse(localStorage.getItem("added_to_cart")) || [];

  // Find the product in your Products array
  const Product = Products.find((p) => p.id === productId);
  if (!Product) {
    console.warn("Product not found:", productId);
    return;
  }

  // Find the product in the cart
  let foundItem = current_cart.find((obj) => obj.id === Product.id);

  if (foundItem) {
    foundItem.amount += 1;
  } else {
    current_cart.push({
      id: Product.id,
      amount: 1,
    });
  }

  // Save updated cart
  localStorage.setItem("added_to_cart", JSON.stringify(current_cart));

  // Update UI
  render_merged(current_cart);
  products_number.textContent = current_cart.length;
};

function toogle_dialog() {
  if (is_dialog == false) {
    dialog_container.classList.add("dialog_container");
    dialog_container.classList.remove("dialog_container_none");

    dialog.classList.add("dialog_active");
    is_dialog = true;
    return;
  }

  dialog_container.classList.add("dialog_container_none");
  dialog_container.classList.remove("dialog_container");

  dialog.classList.remove("dialog_active");

  is_dialog = false;
  return;
}

// document.body.addEventListener("click", () => {
//   // dialog.classList.add("dialog_active");
//   toogle_dialog();
//   console.log(500);
// });

dialog_container.addEventListener("click", (e) => {
  if (e.target == dialog_container && e.target != dialog) {
    toogle_dialog();
  }
});
