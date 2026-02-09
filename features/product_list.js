import { Products } from "../data/product.js";
import { render_merged, merged } from "./cart.js";
import { can_createCartItem, createCartItem } from "./cart.js";
import { card_click } from "./dialog.js";
let added_to_cart = [];
const Product_list = document.getElementById("Featured");
export function create_product(Product) {
  //adding the elements and the css classes
  const product_card = document.createElement("div");
  product_card.classList.add("product_card");

  const product_image = document.createElement("div");
  const product_image_img = document.createElement("img");
  product_image_img.src = `${Product.image}`;
  product_image_img.loading = "lazy";
  product_image.appendChild(product_image_img);
  product_image.classList.add("product_image");

  const product_card_details = document.createElement("div");
  product_card_details.classList.add("product_card_details");

  const product_card_title = document.createElement("p");
  product_card_title.classList.add("product_card_title");

  const product_card_desc = document.createElement("p");
  product_card_desc.classList.add("product_card_desc");

  const price_cta = document.createElement("div");
  price_cta.classList.add("price_cta");

  const product_card_price = document.createElement("p");
  product_card_price.classList.add("product_card_price");

  const add_to_cart = document.createElement("button");
  add_to_cart.classList.add("add_to_cart");
  const products_number = document.getElementById("products_number");
  // add_to_cart.onclick = () => {
  //   let current_cart = localStorage.getItem("added_to_cart");
  //   if (current_cart && Array.isArray(current_cart)) {
  //     var foundItem = current_cart.find((obj) => obj.id == Product.id);
  //   }
  //   if (foundItem) {
  //     //the item in the cart and we want to increase the amount
  //     foundItem.amount += 1;
  //     localStorage.setItem("added_to_cart", JSON.stringify(current_cart));
  //     console.log(localStorage.getItem("added_to_cart"));
  //   } else {
  //     //adding the item when it is not in the cart
  //     let added_item = {
  //       id: Product.id,
  //       amount: 1,
  //     };

  //     added_to_cart.push(added_item);

  //     localStorage.setItem("added_to_cart", JSON.stringify(added_to_cart));
  //     console.log(localStorage.getItem("added_to_cart"));
  //   }
  // };
  //nesting the elements
  // add_to_cart.onclick = () => {
  //   // Get cart from localStorage or start with empty array
  //   let current_cart = JSON.parse(localStorage.getItem("added_to_cart")) || [];

  //   // Find the product in the cart
  //   let foundItem = current_cart.find((obj) => obj.id === Product.id);

  //   if (foundItem) {
  //     // Increase amount if found
  //     foundItem.amount += 1;
  //   } else {
  //     // Add new item if not found
  //     current_cart.push({
  //       id: Product.id,
  //       amount: 1,
  //     });
  //   }

  //   // Save updated cart back to localStorage
  //   localStorage.setItem("added_to_cart", JSON.stringify(current_cart));

  //   console.log(localStorage.getItem("added_to_cart"));
  // };
  // add_to_cart.onclick = () => {
  //   // Always parse and default to an empty array
  //   let current_cart = JSON.parse(localStorage.getItem("added_to_cart")) || [];

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

  //   // Save the updated array back to localStorage
  //   localStorage.setItem("added_to_cart", JSON.stringify(current_cart));

  //   console.log(current_cart);
  // };
  product_card.onclick = (e) => {
    // console.log(1000);
    if (e.target != add_to_cart) {
      card_click(Product);
    }
  };

  add_to_cart.onclick = (e) => {
    console.log(1000);
    e.preventDefault();
    //puthing the badge
    if (!products_number.classList.contains("products_number_hover")) {
      products_number.classList.add("products_number_hover");
    }

    // Always parse and default to an empty array
    let current_cart = JSON.parse(localStorage.getItem("added_to_cart"));

    // If somehow it's not an array (bad data in storage), reset it
    // if (!Array.isArray(current_cart)) {
    //   current_cart = [];
    // }

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
    localStorage.setItem("added_to_cart", JSON.stringify(current_cart));
    render_merged(current_cart);
    // if (can_createCartItem(Product)) {
    //   render_merged();
    // }
    // document
    //   .getElementById("basket_items")
    //   .appendChild(createCartItem(Product));
    // Save the updated array back to localStorage
    localStorage.setItem("added_to_cart", JSON.stringify(current_cart));
    products_number.innerHTML = current_cart.length;

    // console.log(current_cart);
  };
  // add_to_cart.onclick = (e) => {
  //   e.preventDefault();

  //   if (!products_number.classList.contains("products_number_hover")) {
  //     products_number.classList.add("products_number_hover");
  //   }

  //   let current_cart = JSON.parse(localStorage.getItem("added_to_cart")) || [];

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

  //   merged = current_cart; // keep merged in sync
  //   render_merged();

  //   products_number.textContent = current_cart.length;
  //   console.log(current_cart);
  // };

  product_card.appendChild(product_image);
  product_card.appendChild(product_card_details);

  product_card_details.appendChild(product_card_title);
  product_card_details.appendChild(product_card_desc);
  product_card_details.appendChild(price_cta);

  price_cta.appendChild(product_card_price);
  price_cta.appendChild(add_to_cart);

  //adding the vals to the elements
  product_card_title.innerHTML = `${Product.name}`;
  product_card_desc.innerHTML = `${Product.description}`;
  product_card_price.innerHTML = `${Product.price}`;
  add_to_cart.innerHTML = `Add to cart`;

  return product_card;
}
const recomended_list = document.getElementById("Recommended");

function add_all_products() {
  for (let i = 0; i < 4; i++) {
    Product_list.appendChild(create_product(Products[i]));
  }
  for (let i = 4; i < 8; i++) {
    recomended_list.appendChild(create_product(Products[i]));
  }

  //   Products.forEach((e) => {
  //     Product_list.appendChild(create_product(e));
  //   });
}
//---------------------------------
add_all_products();
//---------------------------------

/*
<div class="product_card">
    <div class="product_image">
        <!-- <img src="../assets/logo.png" alt="" class="product_image" /> -->
    </div>
    <div class="product_card_details">
        <p class="product_card_title">Samsung Galaxy Watch 8 Classic</p>
        <p class="product_card_desc">
            Premium Samsung smartwatch with rotating bezel, AI health tracking,
            and long battery life.
        </p>
        <div class="price_cta">
            <p class="product_card_price">400.99$</p>
            <button class="add_to_cart">add to cart</button>
        </div>
    </div>
</div>
*/
function render_in_cart(Product) {}
