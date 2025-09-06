const smartwatches = [
  {
    id: 1,
    name: "Samsung Galaxy Watch 8 Classic",
    brand: "Samsung",
    price: 449.99,
    colors: ["Black", "Silver"],
    features: [
      "Rotating Bezel",
      "Wear OS",
      "AI Wellness Insights",
      "GPS",
      "Heart Rate",
      "ECG",
    ],
    stock: 35,
    rating: 4.7,
    description:
      "Premium Samsung smartwatch with rotating bezel, AI health tracking, and long battery life.",
    image: "images/galaxy-watch-8-classic.jpg",
  },
  {
    id: 2,
    name: "Samsung Galaxy Watch 8",
    brand: "Samsung",
    price: 399.99,
    colors: ["Graphite", "Pink Gold", "Silver"],
    features: ["Wear OS", "AI Wellness Insights", "GPS", "Heart Rate", "ECG"],
    stock: 50,
    rating: 4.6,
    description:
      "Flagship Galaxy Watch with sleek design, advanced health features, and Google integration.",
    image: "images/galaxy-watch-8.jpg",
  },
  {
    id: 3,
    name: "Samsung Galaxy Watch Ultra",
    brand: "Samsung",
    price: 649.99,
    colors: ["Titanium Gray", "Titanium Silver"],
    features: [
      "Titanium Build",
      "48h Battery",
      "GPS",
      "Heart Rate",
      "ECG",
      "Water Resistant 100m",
    ],
    stock: 20,
    rating: 4.8,
    description:
      "Rugged titanium smartwatch with extreme durability and extended battery life.",
    image: "images/galaxy-watch-ultra.jpg",
  },
  {
    id: 4,
    name: "Samsung Galaxy Watch 7",
    brand: "Samsung",
    price: 349.99,
    colors: ["Graphite", "Silver", "Pink Gold"],
    features: ["Wear OS", "AI Wellness Insights", "GPS", "Heart Rate", "ECG"],
    stock: 40,
    rating: 4.5,
    description:
      "Well-rounded smartwatch with class-leading sleep tracking and AI-powered health tools.",
    image: "images/galaxy-watch-7.jpg",
  },
  {
    id: 5,
    name: "Samsung Galaxy Watch FE",
    brand: "Samsung",
    price: 249.99,
    colors: ["Black", "Silver", "Pink Gold"],
    features: [
      "Wear OS",
      "GPS",
      "Heart Rate",
      "Body Composition",
      "Sleep Tracking",
    ],
    stock: 60,
    rating: 4.3,
    description:
      "Affordable Galaxy Watch with essential health tracking and lifestyle features.",
    image: "images/galaxy-watch-fe.jpg",
  },
  {
    id: 6,
    name: "Apple Watch Series 10",
    brand: "Apple",
    price: 429.0,
    colors: ["Midnight", "Starlight", "Silver", "Product(RED)"],
    features: [
      "watchOS 11",
      "Always-On Display",
      "GPS",
      "Heart Rate",
      "ECG",
      "Blood Oxygen",
      "Sleep Apnea Notifications",
    ],
    stock: 45,
    rating: 4.8,
    description:
      "Apple’s latest flagship watch with bigger display, new sensors, and sleek design.",
    image: "images/apple-watch-series-10.jpg",
  },
  {
    id: 7,
    name: "Apple Watch Ultra 2",
    brand: "Apple",
    price: 799.0,
    colors: ["Natural Titanium"],
    features: [
      "watchOS 11",
      "49mm Titanium Case",
      "GPS",
      "Dual-Frequency GPS",
      "Heart Rate",
      "ECG",
      "36h Battery",
    ],
    stock: 15,
    rating: 4.9,
    description:
      "Ultra-rugged Apple Watch with extreme durability, long battery life, and pro-level GPS.",
    image: "images/apple-watch-ultra-2.jpg",
  },
  {
    id: 8,
    name: "Apple Watch SE (2nd Gen)",
    brand: "Apple",
    price: 249.0,
    colors: ["Midnight", "Starlight", "Silver"],
    features: [
      "watchOS 11",
      "GPS",
      "Heart Rate",
      "Fall Detection",
      "Crash Detection",
    ],
    stock: 55,
    rating: 4.4,
    description:
      "Affordable Apple Watch with core health and safety features for everyday use.",
    image: "images/apple-watch-se-2.jpg",
  },
  {
    id: 9,
    name: "Apple Watch Series 9",
    brand: "Apple",
    price: 399.0,
    colors: ["Midnight", "Starlight", "Silver", "Product(RED)"],
    features: [
      "watchOS 10",
      "Always-On Display",
      "GPS",
      "Heart Rate",
      "ECG",
      "Blood Oxygen",
    ],
    stock: 30,
    rating: 4.7,
    description:
      "Previous-gen Apple Watch with powerful S9 chip and advanced health tracking.",
    image: "images/apple-watch-series-9.jpg",
  },
  {
    id: 10,
    name: "Samsung Galaxy Fit3",
    brand: "Samsung",
    price: 59.99,
    colors: ["Black", "Silver", "Pink Gold"],
    features: [
      "Fitness Tracking",
      "Heart Rate",
      "Sleep Tracking",
      "Water Resistant 50m",
    ],
    stock: 70,
    rating: 4.2,
    description:
      "Lightweight fitness tracker with week-long battery life and over 100 workout modes.",
    image: "images/galaxy-fit3.jpg",
  },
  {
    id: 11,
    name: "Apple Watch Series 8 (Refurbished)",
    brand: "Apple",
    price: 299.0,
    colors: ["Midnight", "Starlight", "Silver", "Product(RED)"],
    features: [
      "watchOS 10",
      "Always-On Display",
      "GPS",
      "Heart Rate",
      "ECG",
      "Blood Oxygen",
    ],
    stock: 25,
    rating: 4.6,
    description:
      "Refurbished Series 8 with premium features at a lower price point.",
    image: "images/apple-watch-series-8.jpg",
  },
  {
    id: 12,
    name: "Samsung Galaxy Watch 6 Classic",
    brand: "Samsung",
    price: 379.99,
    colors: ["Black", "Silver"],
    features: ["Rotating Bezel", "Wear OS", "GPS", "Heart Rate", "ECG"],
    stock: 28,
    rating: 4.5,
    description:
      "Classic Samsung design with rotating bezel and robust health tracking.",
    image: "images/galaxy-watch-6-classic.jpg",
  },
  {
    id: 13,
    name: "Apple Watch Series 7 (Refurbished)",
    brand: "Apple",
    price: 249.0,
    colors: ["Midnight", "Starlight", "Green", "Blue", "Product(RED)"],
    features: ["watchOS 9", "Always-On Display", "GPS", "Heart Rate", "ECG"],
    stock: 20,
    rating: 4.5,
    description:
      "Refurbished Series 7 with large display and essential health features.",
    image: "images/apple-watch-series-7.jpg",
  },
  {
    id: 14,
    name: "Samsung Galaxy Watch 5 Pro",
    brand: "Samsung",
    price: 329.99,
    colors: ["Black Titanium", "Gray Titanium"],
    features: ["Wear OS", "GPS", "Heart Rate", "ECG", "Route Tracking"],
    stock: 22,
    rating: 4.6,
    description:
      "Pro-level Galaxy Watch with titanium build and advanced outdoor tracking.",
    image: "images/galaxy-watch-5-pro.jpg",
  },
  {
    id: 15,
    name: "Apple Watch SE (1st Gen, Refurbished)",
    brand: "Apple",
    price: 199.0,
    colors: ["Space Gray", "Silver", "Gold"],
    features: ["watchOS 9", "GPS", "Heart Rate", "Fall Detection"],
    stock: 18,
    rating: 4.3,
    description:
      "Entry-level Apple Watch with essential features at a budget-friendly price.",
    image: "images/apple-watch-se-1.jpg",
  },
];
const cart_list = document.getElementById("cart_list");
const cart_button = document.getElementById("cart_button");
const close_button = document.getElementById("close_cart");

let is_cart_list = false;
function toogle_cart_button() {
  cart_button.addEventListener("click", () => {
    if (is_cart_list == false) {
      is_cart_list = true;
      cart_list.classList.add("cart_onclick");
      return;
    }
    is_cart_list = false;

    cart_list.classList.remove("cart_onclick");
  });
}

function toogle_cart_close() {
  close_button.addEventListener("click", () => {
    if (is_cart_list == false) {
      is_cart_list = true;
      cart_list.classList.add("cart_onclick");
      return;
    }
    is_cart_list = false;

    cart_list.classList.remove("cart_onclick");
  });
}
toogle_cart_button();
toogle_cart_close();

// window.addEventListener("scroll", () => {
//   const rect_Featured = Featured.getBoundingClientRect();
//   const rect_Recommended = Recommended.getBoundingClientRect();

//   const inView_Featured =
//     rect_Featured.top < window.innerHeight && rect_Featured.bottom > 0;
//   const inView_Recommended =
//     rect_Recommended.top < window.innerHeight && rect_Recommended.bottom > 0;

//   if (inView_Featured) {
//     console.log("inView_Featured");
//     // Do your action here
//   }
//   if (inView_Recommended) {
//     console.log("inView_Recommended");
//     // Do your action here
//   }
// });

//-----------------------------------------------------
// const target = document.querySelector(".my-element");
// let hasTriggered = false;

// window.addEventListener("scroll", () => {
//   // if (hasTriggered) return;
//   if (window.scrollY <= 860) {
//     console.log("home");
//     alert("home");
//     // hasTriggered = true;
//   }
//   if (window.scrollY >= 861) {
//     console.log("fea");
//     alert("fea");
//     // hasTriggered = true;
//   }
//   if (window.scrollY >= 500) {
//     console.log("rec");
//     alert("rec");

//     // hasTriggered = true;
//   }
// });

const nav_hero_section = document.getElementById("nav_hero_section");
const nav_Featured = document.getElementById("nav_Featured");
const nav_Recommended = document.getElementById("nav_Recommended");

nav_hero_section.addEventListener("click", () => {
  nav_hero_section.classList.add("active");
  nav_Featured.classList.remove("active");
  nav_Recommended.classList.remove("active");
});

nav_Featured.addEventListener("click", () => {
  nav_hero_section.classList.remove("active");
  nav_Featured.classList.add("active");
  nav_Recommended.classList.remove("active");
});

nav_Recommended.addEventListener("click", () => {
  nav_hero_section.classList.remove("active");
  nav_Featured.classList.remove("active");
  nav_Recommended.classList.add("active");
});
//

/*
<a href="#hero_section" class="nav-link" id="nav_hero_section"
              >Home</a
            >
            <a href="#Featured" class="nav-link" id="nav_Featured">Featured</a>
            <a href="#Recommended" class="nav-link" id="nav_Recommended"
              >Recommended</a
            >
*/

// const navLinks = document.querySelectorAll(".nav-link");
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         // Remove active class from all links
//         navLinks.forEach((link) => link.classList.remove("active"));

//         // Highlight the link that matches the visible section
//         const activeLink = document.querySelector(
//           `.nav-link[href="#${entry.target.id}"]`
//         );
//         if (activeLink) activeLink.classList.add("active");
//       }
//     });
//   },
//   {
//     threshold: 0.5, // 50% of section must be visible
//   }
// );

// const sections = document.querySelectorAll("section");
// sections.forEach((section) => observer.observe(section));
