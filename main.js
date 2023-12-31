const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailtContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");
const myordercontentContainer = document.querySelector(".my-order-content");
const countCarrito = document.querySelector(".navbar-shopping-cart div");
const totalCarrito = document.querySelector(".total");
const cerrarMiOrden = document.querySelector(".arrow");
const productImageInfor = document.querySelector(
  "#productDetail > img:nth-child(2)"
);
const labelPriceInfo = document.querySelector(".product-info p:nth-child(1)");
const labelNameInfo = document.querySelector(".product-info p:nth-child(2)");
const labelInforInfo = document.querySelector(".product-info p:nth-child(3)");
const buttonInfo = document.querySelector(".add-to-cart-button");
let productosEnCarrito = [];
let productoACarrito = [];

countCarrito.innerText = document.querySelectorAll(".shopping-cart").length;
totalCarrito.innerText = "$0.00";

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);
buttonInfo.addEventListener("click", butonClick);
cerrarMiOrden.addEventListener("click", closeMyOrder);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  shoppingCartContainer.classList.add("inactive");
  productDetailtContainer.classList.add("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  desktopMenu.classList.add("inactive");
  shoppingCartContainer.classList.add("inactive");
  productDetailtContainer.classList.add("inactive");
}

function toggleCarritoAside() {
  shoppingCartContainer.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productDetailtContainer.classList.add("inactive");
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  productDetailtContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
  productDetailtContainer.classList.add("inactive");
}

function butonClick() {
  agregarCarrito(productoACarrito);
}

function closeMyOrder() {
  shoppingCartContainer.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productDetailtContainer.classList.add("inactive");
}

function verificarProducto(nameProduct) {
  return productosEnCarrito.some(function (articulo) {
    return articulo === nameProduct;
  });
}

let productList = [];
productList.push({
  name: "Café Orgánico de Altura 125 g.",
  price: 10,
  image:
    "https://nutrih.pe/wp-content/uploads/2023/11/cafe-organico-125-gr-600x600.webp",
  desc: "Hola 1",
});
productList.push({
  name: "Café Orgánico Nutri H 250 g.",
  price: 18,
  image:
    "https://nutrih.pe/wp-content/uploads/2023/11/cafe-organico-250-gr-600x600.webp",
  desc: "Hola 2",
});
productList.push({
  name: "Galleta Nutri H vegetariana con cereales | 30 UNID",
  price: 32,
  image:
    "https://nutrih.pe/wp-content/uploads/2023/11/Galleta-Nutri-H-vegetariana-caja.webp",
  desc: "Hola 3",
});
productList.push({
  name: "Galleta Nutri H con cereales | 30 UNID",
  price: 32,
  image:
    "https://nutrih.pe/wp-content/uploads/2023/11/Galleta-Nutri-H-con-DHA-y-OMEGA-3-caja.webp",
  desc: "Hola 4",
});
productList.push({
  name: "Paneton clasico",
  price: 25,
  image: "https://nutrih.pe/wp-content/uploads/2023/11/Paneton-clasico-1.webp",
  desc: "Hola 5",
});
productList.push({
  name: "Chocolate en barra con Leche | 12 UNID",
  price: 72,
  image:
    "https://nutrih.pe/wp-content/uploads/2023/11/Chocolate-barra-con-leche-600x600.webp",
  desc: "Hola 6",
});

function renderProducts(productList) {
  for (const product of productList) {
    const productCard = document.createElement("div");
    const productImg = document.createElement("img");
    const productInfo = document.createElement("div");
    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    const productName = document.createElement("p");
    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");

    productCard.classList.add("product-card");
    productImg.setAttribute("src", product.image);
    productInfo.classList.add("product-info");
    productPrice.innerText = "$" + product.price;
    productName.innerText = product.name;
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);
    productInfoDiv.append(productPrice, productName);
    productInfo.append(productInfoDiv, productInfoFigure);
    productCard.append(productImg, productInfo);
    cardsContainer.appendChild(productCard);

    productImg.addEventListener("click", openProductDetailAside);

    productImg.addEventListener("click", function () {
      mostrarInfoProduct(
        product.image,
        product.price,
        product.name,
        product.desc
      );
      openProductDetailAside();
    });

    productImgCart.addEventListener("click", function () {
      let productoAgregado = [];
      productoAgregado.push({
        name: product.name,
        price: product.price,
        image: product.image,
      });
      agregarCarrito(productoAgregado);
    });
  }
}

/* Funcion para agregar productos al carrito */
function agregarCarrito(producto) {
  if (verificarProducto(producto[0].name)) {
    productoACarrito = [];
  }

  /* Creacion de elemtentos HTML */
  let divShoppingCart = document.createElement("div");
  let figureShoppingCart = document.createElement("figure");
  let imgfigureShoppingCart = document.createElement("img");
  let pnameShoppingCart = document.createElement("p");
  let ppriceShoppingCart = document.createElement("p");
  let imgcloseShoppingCart = document.createElement("img");

  /* Se agrega contenido a cada uno de los elementos */
  divShoppingCart.classList.add("shopping-cart");
  imgfigureShoppingCart.setAttribute("src", producto[0].image);
  pnameShoppingCart.innerText = producto[0].name;
  ppriceShoppingCart.innerText = "$" + producto[0].price;
  imgcloseShoppingCart.setAttribute("src", "./icons/icon_close.png");
  imgcloseShoppingCart.classList.add("removeList");

  /* Se insertan los documentos */
  figureShoppingCart.appendChild(imgfigureShoppingCart);
  divShoppingCart.appendChild(figureShoppingCart);
  divShoppingCart.appendChild(pnameShoppingCart);
  divShoppingCart.appendChild(ppriceShoppingCart);
  divShoppingCart.appendChild(imgcloseShoppingCart);
  myordercontentContainer.appendChild(divShoppingCart);

  /* Se agregan la cantidad de productos ademas de la suma de precios */
  countCarrito.innerText = document.querySelectorAll(".shopping-cart").length;
  totalCarrito.innerText =
    "$" +
    (Number(totalCarrito.innerText.substring(1)) + Number(producto[0].price));
  productosEnCarrito.push(producto[0].name);

  /* Funcion para quitar productos del carrito */
  imgcloseShoppingCart.addEventListener("click", function () {
    divShoppingCart.remove();
    countCarrito.innerText = document.querySelectorAll(".shopping-cart").length;
    totalCarrito.innerText =
      "$" +
      (Number(totalCarrito.innerText.substring(1)) - Number(producto[0].price));
    productosEnCarrito.splice(productosEnCarrito.indexOf(producto[0].name), 1);
  });
}

function mostrarInfoProduct(imagen, precio, nombre, descripcion) {
  productImageInfor.setAttribute("src", imagen);
  labelPriceInfo.innerText = "$" + precio;
  labelNameInfo.innerText = nombre;
  labelInforInfo.innerText = descripcion;
  productoACarrito = [];
  productoACarrito.push({
    name: nombre,
    price: precio,
    image: imagen,
  });
}

renderProducts(productList);
