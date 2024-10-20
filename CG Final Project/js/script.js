
const products = [
  { id: 1, name: "Plump and Repair", price: 2000.0, image: "images/plupandrepair.webp" },
  { id: 2, name: "Skin Brightening", price: 2000.0, image: "images/skinbrightening.webp" },
  { id: 3, name: "Under Eye Brightening", price: 2000.0, image: "images/undereyebrightening.webp" },
  { id: 4, name: "Skin Reviving", price: 2000.0, image: "images/skinreviving.webp" },
  { id: 5, name: "Cherry on Top", price: 2000.0, image: "images/cherryontop.webp" },
  { id: 6, name: "Peachy Keen", price: 1500.0, image: "images/peachykeen.webp" },
  { id: 7, name: "What a Melon", price: 1500.0, image: "images/whatamelon.webp" },
  { id: 8, name: "Moisture Surge", price: 2000.0, image: "images/moisturesurge.webp" },
  { id: 9, name: "Skin Douse", price: 1800.0, image: "images/skindouse.webp" },
  { id: 10, name: "Bright Skin Days", price: 1000.0, image: "images/BSD.webp" },
  { id: 11, name: "Dirt Away", price: 1000.0, image: "images/dirtaway.webp" },
  { id: 12, name: "Morinaga Toner", price: 1800.0, image: "images/moringa.webp" },
];

console.log("ready!");
let productList = document.getElementById("productlist");
console.log("productList:", productList);
function displayProducts() {
 

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
      <img src="${product.image}" style="width: 100%; height: auto;">
      <button class="quick-shop-button">Quick Shop</button>
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
    `;
    productList.appendChild(productDiv);
  });
}
displayProducts();

  addQuickShopEventListeners();


function addQuickShopEventListeners() {
  const quickShopButtons = document.querySelectorAll(".quick-shop-button");
  const checkOutPopup = document.getElementById("checkoutpop");
  const popupContent = document.getElementById("popupcontent");
  const popupimg = document.getElementById("popupimg");
  const confirmationModal = document.getElementById("confirmationmodal");

  quickShopButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productDiv = button.closest(".product");
      const productName = productDiv.querySelector("h3").innerText;
      const productPrice = productDiv.querySelector("p").innerText;
      const productImageSrc = productDiv.querySelector("img").src;

      // Set the popup content
      checkOutPopup.style.display = "flex";
      popupimg.src = productImageSrc;
      popupContent.innerHTML = `
        <div class="popup-image-container">
          <img src="${productImageSrc}" style="width: 26em; height: auto;">
        </div>
        <div class="popup-text">
          <h3>${productName}</h3>
          <p class="productprice">${productPrice}</p>
          <span id="closebutton"><i class="fa-solid fa-x"></i></span>
          <p class="product-details"> More than just brightening, it's resurfacing magic. Experience the transformative power of Alpha Arbutin & Glycolic Acid.</p>
          <button class="add-to-cart-button">ADD TO CART</button>
          <p>VENDOR : SERENDIPITY BY ROOJ</p>
          <div id="cart-message" style="display:none; margin-top:10px;" >
        </div>
      `;

      document.body.style.overflow = "hidden";

      const closeButton = document.querySelector("#closebutton");
      closeButton.addEventListener("click", function () {
        checkOutPopup.style.display = "none";
        document.body.style.overflow = "auto";
      });
      const addToCartButton = document.querySelector(".add-to-cart-button");
      addToCartButton.addEventListener("click", function () {
        const cartMessage = document.getElementById("cart-message");
        console.log(cartMessage);
        cartMessage.innerHTML = `${productName} has been added to your cart!`;
        cartMessage.style.display = "block";
  
        // Continue Shopping button
  
        const continueShoppingButton = document.getElementById(
          "continue-shopping"
        );
        continueShoppingButton.innerText = "Continue Shopping";
        cartMessage.appendChild(continueShoppingButton);
        continueShoppingButton.addEventListener("click", function () {
          checkOutPopup.style.display = "none"; // Close the popup
          document.body.style.overflow = "auto";
        });
  
        // Checkout button
        const modalcontent = document.getElementById("modal-content");
        const checkoutButton = document.getElementById("checkout-button");
        checkoutButton.innerText = "Checkout";
        cartMessage.appendChild(checkoutButton);
        checkoutButton.addEventListener("click", function () {
          // confirmationModal.style.display = "none"; // Close the confirmation modal
          $("#checkoutModal").css("display", "flex"); // Open checkout modal
                
        });
      });
      const closeModalButton = document.getElementById("closeModal");
      closeModalButton.addEventListener("click", function () {
        $("#checkoutModal").hide(); // Hide the modal
        document.body.style.overflow = "auto"; // Re-enable scrolling
      });

      $(document).ready(function () {
        $("#myForm").validate({
          Rules: {
            name: {
              required: true,
              minlength: 2,
              pattern: /^[a-zA-Z ]*$/,
            },
            Email: {
              required: true,
              email: true,
            },
            Phone: {
              required: true,
              minlength: 11,
            },
            ResdentialAddress: {
              required: true,
              minlength: 11,
            },
          },
          messages: {
            name: {
              required: "Please enter your name",
              minlength: "Your name must be at least 2 characters long",
            },
            email: {
              required: "Please enter your email",
              email: "Invalid email format",
            },
            password: {
              required: "Please provide a password",
              minlength: "Your password must be at least 6 characters long",
            },
          },
          submitHandler: function (form) {
            $("#message").text("Form submitted successfully!");
            form.reset();
            $("#checkoutModal").hide(); // Close the modal on successful submission
          },
        });
      });
      document.getElementById('subscribeForm').addEventListener( "click", function () {
        event.preventDefault(); // Prevent the form from submitting

        const emailInput = document.getElementById('email').value;
        const messageDiv = document.getElementById('message');

        // Display the subscription message
        if (emailInput) {
            messageDiv.textContent = 'You have been subscribed with ' + emailInput;
        } else {
            messageDiv.textContent = 'Please enter a valid email.';
        }
    });
    });
  });
}


 
