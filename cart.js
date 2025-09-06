import { Products } from "./product.js";

// console.log(Products);
const cart_icon = document.getElementById("cart_button");
let cart_items = JSON.parse(localStorage.getItem("added_to_cart"));
const cart_amount = document.getElementById("products_number");
cart_icon.addEventListener("click", () => {
  cart_amount.classList.add("products_number_hover");
  cart_amount.innerHTML = cart_items.length;
});
if (!cart_items) {
  cart_items = [];
  localStorage.setItem("added_to_cart", JSON.stringify(cart_items));
}

function show_cart_items() {
  //   let cart_items = localStorage.getItem("added_to_cart");
}
show_cart_items();

/*
<div class="cart_item">
    <div class="opperations_product_cart">
        <button>+</button>
        <button>-</button>
    </div>
    <div class="image_product_cart">
        <img
            src="assets/product_images/Samsung Galaxy Watch 7.avif"
            alt=""
        />
    </div>
    <div class="cart_item_details">
        <div class="cart_item_title">Samsung Galaxy Watch 8</div>
            <div class="small_details">
                <div>
                  <p>brand</p>
                  <p>samsung</p>
                </div>
                <div style="text-align: center">
                  <p>quantity</p>
                  <p>4</p>
                </div>
                <div style="text-align: left">
                  <p>color</p>
                  <p>green</p>
                </div>
            </div>
        </div>
    <div class="cart_item_price">400.99$</div>
    <div class="cart_x_section"><button class="cart_x">x</button></div>
</div>

*/
export function can_createCartItem(product) {
  const ls = JSON.parse(localStorage.getItem("added_to_cart"));
  const is_existed_cart_item = ls.find((e) => e.id === product.id);
  if (is_existed_cart_item) {
    increase_cart_item(product);
    return 0;
  }
  return 1;
}

export function createCartItem(product) {
  /*
    product = {
      name: "Samsung Galaxy Watch 8",
      brand: "Samsung",
      quantity: 4,
      color: "Green",
      price: 400.99,
      image: "assets/product_images/Samsung Galaxy Watch 7.avif"
    }
  */

  //   ls.forEach((e) => {
  //     if (e.id === product.id) {
  //       increase_cart_item(product);
  //       return;
  //     }
  //   });

  // Create main container
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart_item");

  // Operations section (+ / -)
  const operations = document.createElement("div");
  operations.classList.add("opperations_product_cart");

  const plusBtn = document.createElement("button");
  plusBtn.textContent = "+";
  plusBtn.onclick = () => {
    // increase the count of the amount

    const cart_product_amount = document.getElementById(
      `cart_product${product.id}`
    );
    cart_product_amount.innerHTML = product.amount + 1;
    increase_cart_item(product);
    display_total_price();
    // change the price
  };

  const minusBtn = document.createElement("button");
  minusBtn.textContent = "-";
  minusBtn.onclick = () => {
    const cart_product_amount = document.getElementById(
      `cart_product${product.id}`
    );
    cart_product_amount.innerHTML = product.amount - 1;

    decrease_cart_item(product);
    display_total_price();
  };

  operations.appendChild(plusBtn);
  operations.appendChild(minusBtn);

  // Image section
  const imageSection = document.createElement("div");
  imageSection.classList.add("image_product_cart");

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;

  imageSection.appendChild(img);

  // Details section
  const details = document.createElement("div");
  details.classList.add("cart_item_details");

  const title = document.createElement("div");
  title.classList.add("cart_item_title");
  title.textContent = product.name;

  const smallDetails = document.createElement("div");
  smallDetails.classList.add("small_details");

  // Brand
  const brandDiv = document.createElement("div");
  brandDiv.innerHTML = `<p>brand</p><p>${product.brand}</p>`;

  // Quantity
  const quantityDiv = document.createElement("div");
  quantityDiv.style.textAlign = "center";
  quantityDiv.innerHTML = `<p>quantity</p><p id="cart_product${product.id}">${product.amount}</p>`;

  // Color
  const colorDiv = document.createElement("div");
  colorDiv.style.textAlign = "left";
  colorDiv.innerHTML = `<p>color</p><p>${product.colors[0]}</p>`;

  smallDetails.appendChild(brandDiv);
  smallDetails.appendChild(quantityDiv);
  smallDetails.appendChild(colorDiv);

  details.appendChild(title);
  details.appendChild(smallDetails);

  // Price section
  const priceDiv = document.createElement("div");
  priceDiv.classList.add("cart_item_price");
  priceDiv.textContent = `${product.price}$`;

  // Remove button section
  const removeSection = document.createElement("div");
  removeSection.classList.add("cart_x_section");

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("cart_x");
  removeBtn.textContent = "x";
  removeBtn.onclick = () => {
    remove_cart_item(product);
  };

  removeSection.appendChild(removeBtn);

  // Assemble everything
  cartItem.appendChild(operations);
  cartItem.appendChild(imageSection);
  cartItem.appendChild(details);
  cartItem.appendChild(priceDiv);
  cartItem.appendChild(removeSection);

  return cartItem;
}

const basket_items = document.getElementById("basket_items");
// cart_items.forEach(e => {

// });

//merging the cart data with the actual data
// const merged = Products.filter((sw) =>
//   cart_items.some((cartItem) => cartItem.id === sw.id)
// ).map((sw) => {
//   const cartItem = cart_items.find((c) => c.id === sw.id);
//   return { ...sw, amount: cartItem.amount };
// });
function mergeProductsWithCart(products) {
  let cartn = JSON.parse(localStorage.getItem("added_to_cart"));
  return products.map((prod) => {
    const cartItem = cartn.find((c) => c.id === prod.id);
    return {
      ...prod,
      amount: cartItem ? cartItem.amount : prod.amount || 0,
    };
  });
}
export var merged = mergeProductsWithCart(Products, cart_items);

export function render_merged() {
  merged = mergeProductsWithCart(Products);
  console.log(merged);
  basket_items.innerHTML = "";
  merged.forEach((e) => {
    if (e.amount != 0) {
      //   basket_items.innerHTML

      basket_items.appendChild(createCartItem(e));
    }
    //   preventDefault();
  });
  console.log(merged);
}
render_merged();
// function close_basket() {}
function increase_cart_item(Product) {
  merged.forEach((e) => {
    if (e.id == Product.id) {
      e.amount = e.amount + 1;
    }
  });
  cart_items.forEach((e) => {
    if (e.id == Product.id) {
      e.amount = (e.amount || 0) + 1;
    }
  });
  //edit local storage
  merge_to_local();
}

function decrease_cart_item(Product) {
  merged.forEach((e) => {
    if (e.id == Product.id) {
      e.amount -= 1;
      if (e.amount == 0) {
        remove_cart_item(e);
      }
    }
  });
  cart_items.forEach((e) => {
    if (e.id == Product.id) {
      e.amount = e.amount - 1;
    }
    if (e.amount == 0) {
      //   remove_cart_item(e);
      cart_items.splice(e.index, 1);
    }
  });
  //edit local storage
  merge_to_local();
}

function remove_cart_item(Product) {
  //   const index = merged.findIndex((e) => e.id === Product.id);
  //   if (index !== -1) {
  //     merged.splice(index, 1);
  //   }
  //   cart_items
  const index = cart_items.findIndex((e) => e.id === Product.id);
  if (index !== -1) {
    cart_items.splice(index, 1);
  }
  merge_to_local();
  const pro_amount = document.getElementById(`cart_product${Product.id}`);
  const card =
    pro_amount.parentElement.parentElement.parentElement.parentElement;
  card.parentElement.removeChild(card);

  //edit to the span_P
  change_items_count();
  //   edit the cart badge count
}

function calc_total_price() {
  let sum = 0;
  console.log(merged);
  for (let i = 0; i < merged.length; i++) {
    sum = Number(merged[i].amount) * Number(merged[i].price) + sum;
  }
  return sum;
}
const cart_count = document.getElementById("items_p_span");
function change_items_count() {
  cart_count.innerHTML = cart_items.length;
}
function clear_all_cart() {
  cart_items = [];
  localStorage.setItem("added_to_cart", JSON.stringify([]));
  basket_items.innerHTML = "no items found";
  //   merged = [];
  //   cart_count.innerHTML = "0";
}
function merge_to_local() {
  localStorage.setItem("added_to_cart", JSON.stringify(cart_items));
  //   console.log(JSON.parse(localStorage.getItem("added_to_cart")));
}
const total_price = document.getElementById("total_price");
function display_total_price() {
  const price = calc_total_price();
  total_price.innerHTML = price;
}
change_items_count();
display_total_price(); // add it on the add to cart action

const clear_all_cart_button = document.getElementById("clear_all_cart");
clear_all_cart_button.addEventListener("click", () => {
  clear_all_cart();
  //   cart_count.innerHTML = "0";
  document.getElementById("items_p_span").innerHTML = "0";
});
