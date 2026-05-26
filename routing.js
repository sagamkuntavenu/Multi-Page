// Product Data

const products = [

  {
    id:1,
    name:"Diamond Ring",
    price:"₹14,999",
    image:"images/ring.jpg",
    description:
      "Elegant diamond ring crafted with premium finishing and luxury design."
  },

  {
    id:2,
    name:"Gold Necklace",
    price:"₹24,999",
    image:"images/necklace.jpg",
    description:
      "Luxury gold necklace with modern handcrafted style."
  },

  {
    id:3,
    name:"Luxury Bracelet",
    price:"₹9,999",
    image:"images/bracelet.jpg",
    description:
      "Premium bracelet collection with elegant finishing."
  }

];

// Get URL Parameter

const params =
  new URLSearchParams(window.location.search);

const productId = params.get("id");

// Find Product

const product =
  products.find((item)=> item.id == productId);

// Display Product Data

if(product){

  document.getElementById("productName").innerText =
    product.name;

  document.getElementById("productPrice").innerText =
    product.price;

  document.getElementById("productImage").src =
    product.image;

  document.getElementById("productDescription").innerText =
    product.description;

}

// Add To Cart Button

const cartBtn =
  document.querySelector(".cart-btn");

if(cartBtn){

  cartBtn.addEventListener("click", ()=>{

    alert("Product Added To Cart!");

  });

}