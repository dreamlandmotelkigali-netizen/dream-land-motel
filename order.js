/* =====================================================
   DREAM LAND MOTEL
   ORDER PAGE JAVASCRIPT
   Cart + Search + Checkout + WhatsApp
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       CART STATE
    ===================================================== */

    let cart = {};


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const menuItems = document.querySelectorAll(".order-item");
    const selectButtons = document.querySelectorAll(".select-item");

    const cartButton = document.getElementById("cartButton");
    const cartBadge = document.getElementById("cartBadge");

    const cartOverlay = document.getElementById("cartOverlay");
    const cartPanel = document.getElementById("cartPanel");
    const cartClose = document.getElementById("cartClose");

    const cartItems = document.getElementById("cartItems");
    const emptyCart = document.getElementById("emptyCart");
    const cartSummary = document.getElementById("cartSummary");

    const summaryItems = document.getElementById("summaryItems");
    const cartTotal = document.getElementById("cartTotal");

    const selectedItems = document.getElementById("selectedItems");
    const selectedTotal = document.getElementById("selectedTotal");

    const formTotal = document.getElementById("formTotal");

    const continueOrder = document.getElementById("continueOrder");
    const goMenuButton = document.getElementById("goMenuButton");

    const viewCartSmall = document.getElementById("viewCartSmall");

    const menuSearch = document.getElementById("menuSearch");

    const orderForm = document.getElementById("orderForm");

    const customerName = document.getElementById("customerName");
    const customerPhone = document.getElementById("customerPhone");
    const branch = document.getElementById("branch");
    const tableRoom = document.getElementById("tableRoom");
    const notes = document.getElementById("notes");

    const customerSection = document.getElementById("customerSection");

    /* =====================================================
       HELPERS
    ===================================================== */

    function formatMoney(number) {
        return Number(number).toLocaleString("en-US") + " Rwf";
    }


    function getCartQuantity() {
        return Object.values(cart).reduce((total, item) => {
            return total + item.quantity;
        }, 0);
    }


    function getCartTotal() {
        return Object.values(cart).reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }


    /* =====================================================
       ADD ITEM
    ===================================================== */

    selectButtons.forEach(button => {

        button.addEventListener("click", () => {

            const itemElement = button.closest(".order-item");

            if (!itemElement) return;

            const id = itemElement.dataset.id;
            const name = itemElement.dataset.name;
            const price = Number(itemElement.dataset.price);

            if (!id || !name || !price) return;

            if (cart[id]) {

                cart[id].quantity += 1;

            } else {

                cart[id] = {
                    id: id,
                    name: name,
                    price: price,
                    quantity: 1
                };

            }

            updateCart();

            /* Small visual feedback */

            button.classList.add("added");

            setTimeout(() => {
                button.classList.remove("added");
            }, 300);

        });

    });


    /* =====================================================
       UPDATE EVERYTHING
    ===================================================== */

    function updateCart() {

        renderSelectedItems();

        renderCart();

        updateTotals();

        updateBadge();

    }


    /* =====================================================
       CART BADGE
    ===================================================== */

    function updateBadge() {

        const quantity = getCartQuantity();

        if (!cartBadge) return;

        cartBadge.textContent = quantity;

        if (quantity > 0) {

            cartBadge.style.display = "flex";

        } else {

            cartBadge.style.display = "none";

        }

    }


    /* =====================================================
       SELECTED ORDER PREVIEW
    ===================================================== */

    function renderSelectedItems() {

        if (!selectedItems) return;

        selectedItems.innerHTML = "";

        const items = Object.values(cart);

        if (items.length === 0) {

            selectedItems.innerHTML = `
                <div class="selected-empty">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <p>No items selected yet.</p>
                    <small>Select food or drinks and tap the + button.</small>
                </div>
            `;

            return;
        }


        items.forEach(item => {

            const row = document.createElement("div");

            row.className = "selected-row";

            row.innerHTML = `
                <div class="selected-info">
                    <strong>${escapeHTML(item.name)}</strong>
                    <span>${formatMoney(item.price)} each</span>
                </div>

                <div class="selected-controls">

                    <button
                        type="button"
                        class="qty-btn decrease"
                        data-id="${item.id}">
                        −
                    </button>

                    <span class="qty-number">
                        ${item.quantity}
                    </span>

                    <button
                        type="button"
                        class="qty-btn increase"
                        data-id="${item.id}">
                        +
                    </button>

                    <button
                        type="button"
                        class="remove-item"
                        data-id="${item.id}"
                        title="Remove">
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </div>

                <strong class="selected-line-total">
                    ${formatMoney(item.price * item.quantity)}
                </strong>
            `;

            selectedItems.appendChild(row);

        });


        attachQuantityEvents(selectedItems);

    }


    /* =====================================================
       CART DRAWER
    ===================================================== */

    function renderCart() {

        if (!cartItems) return;

        cartItems.innerHTML = "";

        const items = Object.values(cart);


        if (items.length === 0) {

            if (emptyCart) {
                emptyCart.style.display = "flex";
            }

            if (cartSummary) {
                cartSummary.style.display = "none";
            }

            return;

        }


        if (emptyCart) {
            emptyCart.style.display = "none";
        }

        if (cartSummary) {
            cartSummary.style.display = "block";
        }


        items.forEach(item => {

            const row = document.createElement("div");

            row.className = "cart-item";

            row.innerHTML = `
                <div class="cart-item-info">

                    <strong>
                        ${escapeHTML(item.name)}
                    </strong>

                    <span>
                        ${formatMoney(item.price)}
                    </span>

                </div>

                <div class="cart-item-actions">

                    <button
                        type="button"
                        class="qty-btn decrease"
                        data-id="${item.id}">
                        −
                    </button>

                    <span class="qty-number">
                        ${item.quantity}
                    </span>

                    <button
                        type="button"
                        class="qty-btn increase"
                        data-id="${item.id}">
                        +
                    </button>

                    <button
                        type="button"
                        class="remove-item"
                        data-id="${item.id}"
                        title="Remove item">

                        <i class="fa-solid fa-trash"></i>

                    </button>

                </div>

                <strong class="cart-item-total">
                    ${formatMoney(item.price * item.quantity)}
                </strong>
            `;

            cartItems.appendChild(row);

        });


        attachQuantityEvents(cartItems);

    }


    /* =====================================================
       QUANTITY + / -
    ===================================================== */

    function attachQuantityEvents(container) {

        const increaseButtons =
            container.querySelectorAll(".increase");

        const decreaseButtons =
            container.querySelectorAll(".decrease");

        const removeButtons =
            container.querySelectorAll(".remove-item");


        increaseButtons.forEach(button => {

            button.addEventListener("click", () => {

                const id = button.dataset.id;

                if (!cart[id]) return;

                cart[id].quantity += 1;

                updateCart();

            });

        });


        decreaseButtons.forEach(button => {

            button.addEventListener("click", () => {

                const id = button.dataset.id;

                if (!cart[id]) return;

                cart[id].quantity -= 1;

                if (cart[id].quantity <= 0) {

                    delete cart[id];

                }

                updateCart();

            });

        });


        removeButtons.forEach(button => {

            button.addEventListener("click", () => {

                const id = button.dataset.id;

                if (!cart[id]) return;

                delete cart[id];

                updateCart();

            });

        });

    }


    /* =====================================================
       TOTALS
    ===================================================== */

    function updateTotals() {

        const quantity = getCartQuantity();
        const total = getCartTotal();

        if (selectedTotal) {
            selectedTotal.textContent = formatMoney(total);
        }

        if (cartTotal) {
            cartTotal.textContent = formatMoney(total);
        }

        if (formTotal) {
            formTotal.textContent = formatMoney(total);
        }

        if (summaryItems) {

            summaryItems.textContent =
                quantity +
                (quantity === 1 ? " item selected" : " items selected");

        }

    }


    /* =====================================================
       OPEN CART
    ===================================================== */

    function openCart() {

        if (!cartPanel) return;

        cartPanel.classList.add("active");

        if (cartOverlay) {
            cartOverlay.classList.add("active");
        }

        document.body.classList.add("cart-open");

        updateCart();

    }


    /* =====================================================
       CLOSE CART
    ===================================================== */

    function closeCart() {

        if (cartPanel) {
            cartPanel.classList.remove("active");
        }

        if (cartOverlay) {
            cartOverlay.classList.remove("active");
        }

        document.body.classList.remove("cart-open");

    }


    /* =====================================================
       CART BUTTON
    ===================================================== */

    if (cartButton) {

        cartButton.addEventListener("click", () => {

            openCart();

        });

    }


    if (cartClose) {

        cartClose.addEventListener("click", () => {

            closeCart();

        });

    }


    if (cartOverlay) {

        cartOverlay.addEventListener("click", () => {

            closeCart();

        });

    }


    /* =====================================================
       SMALL VIEW CART BUTTON
    ===================================================== */

    if (viewCartSmall) {

        viewCartSmall.addEventListener("click", () => {

            openCart();

        });

    }


    /* =====================================================
       GO MENU BUTTON
    ===================================================== */

    if (goMenuButton) {

        goMenuButton.addEventListener("click", () => {

            closeCart();

            const menuScroll =
                document.getElementById("menuScroll");

            if (menuScroll) {

                menuScroll.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }

        });

    }


    /* =====================================================
       CONTINUE ORDER
    ===================================================== */

    if (continueOrder) {

        continueOrder.addEventListener("click", () => {

            if (getCartQuantity() === 0) {

                alert(
                    "Your cart is empty. Please select food or drinks first."
                );

                return;

            }

            closeCart();

            if (customerSection) {

                customerSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    }


    /* =====================================================
       SEARCH MENU
    ===================================================== */

    if (menuSearch) {

        menuSearch.addEventListener("input", () => {

            const query =
                menuSearch.value
                    .trim()
                    .toLowerCase();

            const categories =
                document.querySelectorAll(".order-category");

            let totalMatches = 0;


            categories.forEach(category => {

                const products =
                    category.querySelectorAll(".order-item");

                let categoryMatches = 0;


                products.forEach(product => {

                    const name =
                        (
                            product.dataset.name ||
                            product.textContent ||
                            ""
                        ).toLowerCase();

                    if (name.includes(query)) {

                        product.style.display = "";

                        categoryMatches++;

                        totalMatches++;

                    } else {

                        product.style.display = "none";

                    }

                });


                /*
                   Keep category visible if:
                   - search is empty
                   - at least one product matches
                */

                if (query === "" || categoryMatches > 0) {

                    category.style.display = "";

                } else {

                    category.style.display = "none";

                }

            });


            let noResults =
                document.getElementById("noResults");


            if (!noResults) {

                noResults =
                    document.createElement("div");

                noResults.id = "noResults";

                noResults.className = "no-results";

                noResults.innerHTML = `
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <h3>No item found</h3>
                    <p>Try another food or drink name.</p>
                `;

                const menuScroll =
                    document.getElementById("menuScroll");

                if (menuScroll) {
                    menuScroll.appendChild(noResults);
                }

            }


            if (query !== "" && totalMatches === 0) {

                noResults.style.display = "flex";

            } else {

                noResults.style.display = "none";

            }

        });

    }


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closeCart();

        }

    });


    /* =====================================================
       CHECKOUT / WHATSAPP
    ===================================================== */

    if (orderForm) {

        orderForm.addEventListener("submit", event => {

            event.preventDefault();


            /* -------------------------------
               CHECK CART
            ------------------------------- */

            if (getCartQuantity() === 0) {

                alert(
                    "Please select at least one item before placing your order."
                );

                openCart();

                return;

            }


            /* -------------------------------
               GET CUSTOMER INFO
            ------------------------------- */

            const name =
                customerName ?
                customerName.value.trim() :
                "";

            const phone =
                customerPhone ?
                customerPhone.value.trim() :
                "";

            const selectedBranch =
                branch ?
                branch.value :
                "";

            const location =
                tableRoom ?
                tableRoom.value.trim() :
                "";

            const customerNotes =
                notes ?
                notes.value.trim() :
                "";


            /* -------------------------------
               VALIDATION
            ------------------------------- */

            if (!name) {

                alert("Please enter your name.");

                if (customerName) {
                    customerName.focus();
                }

                return;

            }


            if (!phone) {

                alert("Please enter your phone number.");

                if (customerPhone) {
                    customerPhone.focus();
                }

                return;

            }


            if (!selectedBranch) {

                alert("Please select your branch.");

                if (branch) {
                    branch.focus();
                }

                return;

            }


            /* -------------------------------
               BRANCH NUMBERS
            ------------------------------- */

            let whatsappNumber = "";


            if (
                selectedBranch.toLowerCase().includes("kabuga")
            ) {

                whatsappNumber = "250788356146";

            } else if (
                selectedBranch.toLowerCase().includes("bisenga")
            ) {

                whatsappNumber = "250780696047";

            } else {

                alert(
                    "Please select a valid Dream Land Motel branch."
                );

                return;

            }


            /* -------------------------------
               BUILD ORDER MESSAGE
            ------------------------------- */

            let message = "";

            message += "DREAM LAND MOTEL ORDER\n";
            message += "========================\n\n";

            message += "Customer: " + name + "\n";
            message += "Phone: " + phone + "\n";
            message += "Branch: " + selectedBranch + "\n";

            if (location) {

                message +=
                    "Table / Room: " +
                    location +
                    "\n";

            }

            message += "\nORDER:\n";
            message += "------------------------\n";


            Object.values(cart).forEach(item => {

                const lineTotal =
                    item.price * item.quantity;

                message +=
                    "- " +
                    item.name +
                    " x " +
                    item.quantity +
                    " = " +
                    lineTotal.toLocaleString("en-US") +
                    " Rwf\n";

            });


            message += "------------------------\n";

            message +=
                "TOTAL: " +
                getCartTotal().toLocaleString("en-US") +
                " Rwf\n";


            if (customerNotes) {

                message +=
                    "\nNotes: " +
                    customerNotes +
                    "\n";

            }


            message +=
                "\nThank you for choosing Dream Land Motel.";


            /* -------------------------------
               OPEN WHATSAPP
            ------------------------------- */

            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(message);


            window.open(
                whatsappURL,
                "_blank"
            );

        });

    }


    /* =====================================================
       HTML ESCAPE
    ===================================================== */

    function escapeHTML(text) {

        const div =
            document.createElement("div");

        div.textContent = text;

        return div.innerHTML;

    }


    /* =====================================================
       INITIAL LOAD
    ===================================================== */

    updateCart();

});