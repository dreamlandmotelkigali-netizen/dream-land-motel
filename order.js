/* =====================================================
   DREAM LAND MOTEL
   ORDER.JS
   Order system — WhatsApp
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       ELEMENTS
    ================================================= */

    const menuItems = document.querySelectorAll(".order-item");
    const selectButtons = document.querySelectorAll(".select-item");

    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");

    const menuSearch = document.getElementById("menuSearch");

    const customerName = document.getElementById("customerName");
    const customerPhone = document.getElementById("customerPhone");
    const branch = document.getElementById("branch");
    const orderType = document.getElementById("orderType");
    const orderNote = document.getElementById("orderNote");

    const submitOrder = document.getElementById("submitOrder");


    /* =================================================
       CART
    ================================================= */

    let cart = {};


    /* =================================================
       MONEY FORMAT
    ================================================= */

    function formatMoney(amount) {

        return Number(amount).toLocaleString("en-US") + " Rwf";

    }


    /* =================================================
       ADD ITEM
    ================================================= */

    function addToCart(name, price) {

        if (cart[name]) {

            cart[name].quantity += 1;

        } else {

            cart[name] = {
                name: name,
                price: Number(price),
                quantity: 1
            };

        }

        renderCart();

    }


    /* =================================================
       DECREASE ITEM
    ================================================= */

    function decreaseItem(name) {

        if (!cart[name]) {
            return;
        }

        cart[name].quantity -= 1;

        if (cart[name].quantity <= 0) {
            delete cart[name];
        }

        renderCart();

    }


    /* =================================================
       REMOVE ITEM
    ================================================= */

    function removeItem(name) {

        if (cart[name]) {
            delete cart[name];
        }

        renderCart();

    }


    /* =================================================
       RENDER CART
    ================================================= */

    function renderCart() {

        if (!cartItems) {
            return;
        }

        cartItems.innerHTML = "";

        const items = Object.values(cart);


        /* EMPTY */

        if (items.length === 0) {

            cartItems.innerHTML = `

                <div class="empty-cart">

                    <i class="fa-solid fa-basket-shopping"></i>

                    <p>Your order is empty.</p>

                    <small>
                        Select items from the menu.
                    </small>

                </div>

            `;

            if (cartCount) {
                cartCount.textContent = "0";
            }

            if (cartTotal) {
                cartTotal.textContent = "0 Rwf";
            }

            return;
        }


        let total = 0;
        let count = 0;


        /* CART ITEMS */

        items.forEach(function (item) {

            const itemTotal =
                item.price * item.quantity;

            total += itemTotal;
            count += item.quantity;


            const cartItem =
                document.createElement("div");

            cartItem.className = "cart-item";


            cartItem.innerHTML = `

                <div class="cart-item-info">

                    <strong>
                        ${escapeHTML(item.name)}
                    </strong>

                    <small>
                        ${formatMoney(item.price)}
                    </small>

                </div>


                <div class="cart-item-controls">

                    <button
                        type="button"
                        class="quantity-btn minus"
                        data-name="${escapeHTML(item.name)}"
                    >
                        −
                    </button>

                    <span class="quantity">
                        ${item.quantity}
                    </span>

                    <button
                        type="button"
                        class="quantity-btn plus"
                        data-name="${escapeHTML(item.name)}"
                    >
                        +
                    </button>

                </div>


                <div class="cart-item-price">

                    <strong>
                        ${formatMoney(itemTotal)}
                    </strong>

                    <button
                        type="button"
                        class="remove-item"
                        data-name="${escapeHTML(item.name)}"
                        aria-label="Remove ${escapeHTML(item.name)}"
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </div>

            `;


            cartItems.appendChild(cartItem);

        });


        /* UPDATE */

        if (cartCount) {
            cartCount.textContent = count;
        }

        if (cartTotal) {
            cartTotal.textContent = formatMoney(total);
        }


        /* PLUS */

        cartItems
            .querySelectorAll(".plus")
            .forEach(function (button) {

                button.addEventListener("click", function () {

                    const name =
                        button.dataset.name;

                    if (cart[name]) {

                        cart[name].quantity += 1;

                        renderCart();

                    }

                });

            });


        /* MINUS */

        cartItems
            .querySelectorAll(".minus")
            .forEach(function (button) {

                button.addEventListener("click", function () {

                    decreaseItem(
                        button.dataset.name
                    );

                });

            });


        /* REMOVE */

        cartItems
            .querySelectorAll(".remove-item")
            .forEach(function (button) {

                button.addEventListener("click", function () {

                    removeItem(
                        button.dataset.name
                    );

                });

            });

    }


    /* =================================================
       ESCAPE HTML
    ================================================= */

    function escapeHTML(text) {

        const div = document.createElement("div");

        div.textContent = text;

        return div.innerHTML;

    }


    /* =================================================
       SELECT MENU ITEMS
    ================================================= */

    selectButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const menuItem =
                button.closest(".order-item");

            if (!menuItem) {
                return;
            }


            const name =
                menuItem.dataset.name;

            const price =
                Number(menuItem.dataset.price);


            if (!name || !price) {
                return;
            }


            addToCart(name, price);


            /* BUTTON FEEDBACK */

            button.classList.add("added");


            setTimeout(function () {

                button.classList.remove("added");

            }, 400);

        });

    });


    /* =================================================
       SEARCH
    ================================================= */

    if (menuSearch) {

        menuSearch.addEventListener(
            "input",
            function () {

                const search =
                    menuSearch.value
                        .trim()
                        .toLowerCase();


                menuItems.forEach(function (item) {

                    const name =
                        (item.dataset.name || "")
                            .toLowerCase();


                    if (name.includes(search)) {

                        item.style.display = "";

                    } else {

                        item.style.display = "none";

                    }

                });


                /* HIDE EMPTY CATEGORIES */

                document
                    .querySelectorAll(".order-category")
                    .forEach(function (category) {

                        const visibleItems =
                            Array.from(
                                category.querySelectorAll(
                                    ".order-item"
                                )
                            ).filter(function (item) {

                                return item.style.display !== "none";

                            });


                        if (
                            search &&
                            visibleItems.length === 0
                        ) {

                            category.style.display = "none";

                        } else {

                            category.style.display = "";

                        }

                    });

            }
        );

    }


    /* =================================================
       PHONE NUMBER
    ================================================= */

    if (customerPhone) {

        customerPhone.addEventListener(
            "input",
            function () {

                customerPhone.value =
                    customerPhone.value
                        .replace(/\D/g, "")
                        .slice(0, 10);

            }
        );

    }


    /* =================================================
       ORDER TYPE
    ================================================= */

    function getOrderTypeName(type) {

        if (type === "restaurant") {
            return "At Restaurant";
        }

        if (type === "takeaway") {
            return "Takeaway";
        }

        if (type === "delivery") {
            return "Delivery";
        }

        return type;

    }


    /* =================================================
       SEND ORDER
    ================================================= */

    if (submitOrder) {

        submitOrder.addEventListener(
            "click",
            function () {

                const items =
                    Object.values(cart);


                /* -----------------------------------------
                   CART CHECK
                ----------------------------------------- */

                if (items.length === 0) {

                    alert(
                        "Please select at least one item from the menu."
                    );

                    return;

                }


                /* -----------------------------------------
                   NAME
                ----------------------------------------- */

                const name =
                    customerName.value.trim();


                if (!name) {

                    alert(
                        "Please enter your name."
                    );

                    customerName.focus();

                    return;

                }


                /* -----------------------------------------
                   PHONE
                ----------------------------------------- */

                const phone =
                    customerPhone.value.trim();


                if (!phone) {

                    alert(
                        "Please enter your phone number."
                    );

                    customerPhone.focus();

                    return;

                }


                if (!/^07\d{8}$/.test(phone)) {

                    alert(
                        "Please enter a valid Rwanda phone number, e.g. 0784365816."
                    );

                    customerPhone.focus();

                    return;

                }


                /* -----------------------------------------
                   BRANCH
                ----------------------------------------- */

                const selectedBranch =
                    branch.value;


                if (!selectedBranch) {

                    alert(
                        "Please select a branch."
                    );

                    branch.focus();

                    return;

                }


                /* -----------------------------------------
                   ORDER TYPE
                ----------------------------------------- */

                const selectedOrderType =
                    orderType.value;


                /* -----------------------------------------
                   BUILD MESSAGE
                ----------------------------------------- */

                let message =
                    "🍽️ *DREAM LAND MOTEL – NEW ORDER*";

                message += "\n\n";


                message +=
                    "👤 *Customer:* " +
                    name;

                message += "\n";


                message +=
                    "📞 *Phone:* " +
                    phone;

                message += "\n";


                message +=
                    "📍 *Branch:* " +
                    selectedBranch;

                message += "\n";


                message +=
                    "🛍️ *Order Type:* " +
                    getOrderTypeName(
                        selectedOrderType
                    );

                message += "\n\n";


                message +=
                    "📋 *ORDER ITEMS*";

                message += "\n";


                message +=
                    "────────────────";

                message += "\n";


                let total = 0;
                let count = 0;


                items.forEach(function (item) {

                    const itemTotal =
                        item.price *
                        item.quantity;


                    total += itemTotal;

                    count += item.quantity;


                    message +=
                        "• " +
                        item.name +
                        " × " +
                        item.quantity +
                        " = " +
                        formatMoney(itemTotal);

                    message += "\n";

                });


                message +=
                    "────────────────";

                message += "\n";


                message +=
                    "🔢 *Total Items:* " +
                    count;

                message += "\n";


                message +=
                    "💰 *TOTAL:* " +
                    formatMoney(total);


                /* -----------------------------------------
                   NOTE
                ----------------------------------------- */

                const note =
                    orderNote.value.trim();


                if (note) {

                    message += "\n\n";

                    message +=
                        "📝 *Note:* " +
                        note;

                }


                message += "\n\n";


                message +=
                    "Thank you for choosing Dream Land Motel. ❤️";


                /* -----------------------------------------
                   WHATSAPP NUMBER
                   0784365816
                ----------------------------------------- */

                const whatsappNumber =
                    "250784365816";


                const whatsappURL =
                    "https://wa.me/" +
                    whatsappNumber +
                    "?text=" +
                    encodeURIComponent(message);


                window.open(
                    whatsappURL,
                    "_blank"
                );

            }
        );

    }


    /* =================================================
       INITIAL CART
    ================================================= */

    renderCart();

});