/* =====================================================
   DREAM LAND MOTEL — ORDER SYSTEM
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       BRANCH PHONE NUMBERS
    ================================================= */

    const branchPhones = {
        "Kabuga": {
            display: "0788 356 146",
            whatsapp: "250788356146"
        },

        "Bisenga": {
            display: "0780 696 047",
            whatsapp: "250780696047"
        }
    };


    /* =================================================
       ELEMENTS
    ================================================= */

    const cartCount = document.getElementById("cartCount");
    const selectedItemsContainer =
        document.getElementById("selectedItems");

    const selectedTotal =
        document.getElementById("selectedTotal");

    const searchInput =
        document.getElementById("menuSearch");

    const submitOrder =
        document.getElementById("submitOrder");

    const branchSelect =
        document.getElementById("branch");

    const orderTypeSelect =
        document.getElementById("orderType");

    const deliveryLocation =
        document.getElementById("deliveryLocation");


    /* =================================================
       CART
    ================================================= */

    let cart = [];


    /* =================================================
       LOAD SAVED CART
    ================================================= */

    try {

        const savedCart =
            localStorage.getItem("dreamLandOrder");

        if (savedCart) {
            cart = JSON.parse(savedCart);
        }

    } catch (error) {

        console.error(
            "Could not load saved order:",
            error
        );

        cart = [];
    }


    /* =================================================
       SAVE CART
    ================================================= */

    function saveCart() {

        try {

            localStorage.setItem(
                "dreamLandOrder",
                JSON.stringify(cart)
            );

        } catch (error) {

            console.error(
                "Could not save order:",
                error
            );
        }
    }


    /* =================================================
       FORMAT PRICE
    ================================================= */

    function formatPrice(price) {

        return Number(price).toLocaleString("en-US") + " Rwf";
    }


    /* =================================================
       ADD ITEM
    ================================================= */

    function addItem(name, price) {

        price = Number(price);

        const existing =
            cart.find(item => item.name === name);

        if (existing) {

            existing.quantity += 1;

        } else {

            cart.push({
                name: name,
                price: price,
                quantity: 1
            });
        }

        saveCart();

        renderCart();
    }


    /* =================================================
       REMOVE ONE
    ================================================= */

    function decreaseItem(name) {

        const item =
            cart.find(item => item.name === name);

        if (!item) return;

        item.quantity -= 1;

        if (item.quantity <= 0) {

            cart =
                cart.filter(
                    item => item.name !== name
                );
        }

        saveCart();

        renderCart();
    }


    /* =================================================
       REMOVE COMPLETELY
    ================================================= */

    function removeItem(name) {

        cart =
            cart.filter(
                item => item.name !== name
            );

        saveCart();

        renderCart();
    }


    /* =================================================
       RENDER CART
    ================================================= */

    function renderCart() {

        if (!selectedItemsContainer) return;


        /* CLEAR */

        selectedItemsContainer.innerHTML = "";


        /* EMPTY */

        if (cart.length === 0) {

            selectedItemsContainer.innerHTML = `
                <div class="empty-selection">

                    <i class="fa-solid fa-cart-plus"></i>

                    <p>
                        No items selected yet.
                    </p>

                    <small>
                        Tap the + button to add items to your order.
                    </small>

                </div>
            `;

            updateTotals();

            return;
        }


        /* ITEMS */

        cart.forEach(item => {

            const row =
                document.createElement("div");

            row.className = "selected-item";


            const itemTotal =
                item.price * item.quantity;


            row.innerHTML = `

                <div class="selected-item-info">

                    <strong>
                        ${escapeHTML(item.name)}
                    </strong>

                    <span>
                        ${formatPrice(item.price)} each
                    </span>

                </div>


                <div class="selected-item-price">

                    ${formatPrice(itemTotal)}

                </div>


                <div class="quantity-control">

                    <button
                        type="button"
                        class="decrease-item"
                        data-name="${escapeAttribute(item.name)}"
                        aria-label="Decrease ${escapeAttribute(item.name)}"
                    >
                        <i class="fa-solid fa-minus"></i>
                    </button>


                    <span>
                        ${item.quantity}
                    </span>


                    <button
                        type="button"
                        class="increase-item"
                        data-name="${escapeAttribute(item.name)}"
                        aria-label="Increase ${escapeAttribute(item.name)}"
                    >
                        <i class="fa-solid fa-plus"></i>
                    </button>

                </div>


                <button
                    type="button"
                    class="remove-item"
                    data-name="${escapeAttribute(item.name)}"
                    aria-label="Remove ${escapeAttribute(item.name)}"
                >
                    <i class="fa-solid fa-trash"></i>
                </button>

            `;


            selectedItemsContainer.appendChild(row);

        });


        updateTotals();
    }


    /* =================================================
       UPDATE TOTALS
    ================================================= */

    function updateTotals() {

        let totalQuantity = 0;
        let totalPrice = 0;


        cart.forEach(item => {

            totalQuantity += item.quantity;

            totalPrice +=
                item.price * item.quantity;

        });


        if (cartCount) {

            cartCount.textContent =
                totalQuantity;

        }


        if (selectedTotal) {

            selectedTotal.textContent =
                formatPrice(totalPrice);

        }
    }


    /* =================================================
       ESCAPE HTML
    ================================================= */

    function escapeHTML(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    function escapeAttribute(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }


    /* =================================================
       ADD BUTTONS
    ================================================= */

    document
        .querySelectorAll(".select-item")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const item =
                        button.closest(".order-item");

                    if (!item) return;


                    const name =
                        item.dataset.name;

                    const price =
                        item.dataset.price;


                    addItem(name, price);


                    /* Small visual feedback */

                    button.classList.add("added");

                    setTimeout(() => {

                        button.classList.remove("added");

                    }, 250);

                }
            );

        });


    /* =================================================
       CART BUTTONS
    ================================================= */

    selectedItemsContainer
        ?.addEventListener(
            "click",
            event => {

                const button =
                    event.target.closest("button");

                if (!button) return;


                const name =
                    button.dataset.name;

                if (!name) return;


                if (
                    button.classList.contains(
                        "increase-item"
                    )
                ) {

                    const item =
                        cart.find(
                            item => item.name === name
                        );

                    if (item) {

                        item.quantity += 1;

                        saveCart();

                        renderCart();
                    }

                    return;
                }


                if (
                    button.classList.contains(
                        "decrease-item"
                    )
                ) {

                    decreaseItem(name);

                    return;
                }


                if (
                    button.classList.contains(
                        "remove-item"
                    )
                ) {

                    removeItem(name);

                }

            }
        );


    /* =================================================
       SEARCH
    ================================================= */

    searchInput?.addEventListener(
        "input",
        () => {

            const search =
                searchInput.value
                    .trim()
                    .toLowerCase();


            const categories =
                document.querySelectorAll(
                    ".order-category"
                );


            categories.forEach(category => {

                const items =
                    category.querySelectorAll(
                        ".order-item"
                    );


                let visibleItems = 0;


                items.forEach(item => {

                    const name =
                        (
                            item.dataset.name ||
                            ""
                        ).toLowerCase();


                    if (
                        name.includes(search)
                    ) {

                        item.style.display =
                            "flex";

                        visibleItems++;

                    } else {

                        item.style.display =
                            "none";
                    }

                });


                category.style.display =
                    visibleItems > 0
                        ? ""
                        : "none";

            });

        }
    );


    /* =================================================
       DELIVERY LOCATION
    ================================================= */

    function updateDeliveryRequirement() {

        if (!deliveryLocation) return;


        const isDelivery =
            orderTypeSelect?.value === "Delivery";


        if (isDelivery) {

            deliveryLocation.required = true;

            deliveryLocation
                .closest(".form-group")
                ?.classList.add("required-field");

        } else {

            deliveryLocation.required = false;

            deliveryLocation
                .closest(".form-group")
                ?.classList.remove("required-field");
        }
    }


    orderTypeSelect?.addEventListener(
        "change",
        updateDeliveryRequirement
    );


    updateDeliveryRequirement();


    /* =================================================
       FLOATING BUTTONS
    ================================================= */

    function createFloatingButtons() {

        if (
            document.querySelector(
                ".floating-actions"
            )
        ) {
            return;
        }


        const wrapper =
            document.createElement("div");

        wrapper.className =
            "floating-actions";


        wrapper.innerHTML = `

            <a
                href="#"
                class="floating-action floating-whatsapp"
                id="floatingWhatsApp"
                aria-label="WhatsApp"
                title="WhatsApp"
            >
                <i class="fa-brands fa-whatsapp"></i>
            </a>


            <a
                href="#"
                class="floating-action floating-call"
                id="floatingCall"
                aria-label="Call"
                title="Call"
            >
                <i class="fa-solid fa-phone"></i>
            </a>

        `;


        document.body.appendChild(wrapper);
    }


    createFloatingButtons();


    const floatingWhatsApp =
        document.getElementById(
            "floatingWhatsApp"
        );

    const floatingCall =
        document.getElementById(
            "floatingCall"
        );


    /* =================================================
       UPDATE FLOATING NUMBERS
    ================================================= */

    function updateFloatingButtons() {

        const branch =
            branchSelect?.value;


        const phone =
            branchPhones[branch];


        if (!phone) {

            if (floatingWhatsApp) {

                floatingWhatsApp.href =
                    "#";

                floatingWhatsApp.title =
                    "Select a branch first";
            }


            if (floatingCall) {

                floatingCall.href =
                    "#";

                floatingCall.title =
                    "Select a branch first";
            }

            return;
        }


        if (floatingWhatsApp) {

            floatingWhatsApp.href =
                `https://wa.me/${phone.whatsapp}`;

            floatingWhatsApp.title =
                `WhatsApp ${branch}`;
        }


        if (floatingCall) {

            floatingCall.href =
                `tel:${phone.display.replace(
                    /\s/g,
                    ""
                )}`;

            floatingCall.title =
                `Call ${branch}`;
        }
    }


    branchSelect?.addEventListener(
        "change",
        updateFloatingButtons
    );


    updateFloatingButtons();


    /* =================================================
       SUBMIT ORDER
    ================================================= */

    submitOrder?.addEventListener(
        "click",
        () => {

            /* CHECK ITEMS */

            if (cart.length === 0) {

                alert(
                    "Please select at least one item before placing your order."
                );

                return;
            }


            /* CUSTOMER */

            const customerName =
                document
                    .getElementById(
                        "customerName"
                    )
                    ?.value.trim();


            const customerPhone =
                document
                    .getElementById(
                        "customerPhone"
                    )
                    ?.value.trim();


            const branch =
                branchSelect?.value;


            const orderType =
                orderTypeSelect?.value;


            const delivery =
                deliveryLocation
                    ?.value.trim();


            const preferredTime =
                document
                    .getElementById(
                        "preferredTime"
                    )
                    ?.value;


            const orderNote =
                document
                    .getElementById(
                        "orderNote"
                    )
                    ?.value.trim();


            /* VALIDATION */

            if (
                !customerName ||
                !customerPhone ||
                !branch ||
                !orderType
            ) {

                alert(
                    "Please complete all required customer information."
                );

                return;
            }


            if (
                orderType === "Delivery" &&
                !delivery
            ) {

                alert(
                    "Please enter your delivery location."
                );

                deliveryLocation?.focus();

                return;
            }


            const phone =
                branchPhones[branch];


            if (!phone) {

                alert(
                    "Please select a valid branch."
                );

                return;
            }


            /* =================================================
               BUILD WHATSAPP MESSAGE
            ================================================= */

            let message =
                `*DREAM LAND MOTEL — NEW ORDER*\n\n`;


            message +=
                `*Customer:* ${customerName}\n`;

            message +=
                `*Phone:* ${customerPhone}\n`;

            message +=
                `*Branch:* ${branch}\n`;

            message +=
                `*Order Type:* ${orderType}\n`;


            if (orderType === "Delivery") {

                message +=
                    `*Delivery Location:* ${delivery}\n`;
            }


            if (preferredTime) {

                message +=
                    `*Preferred Time:* ${preferredTime}\n`;
            }


            message +=
                `\n*ORDER ITEMS*\n`;


            let grandTotal = 0;


            cart.forEach((item, index) => {

                const itemTotal =
                    item.price * item.quantity;


                grandTotal +=
                    itemTotal;


                message +=
                    `${index + 1}. ${item.name} × ${item.quantity} — ${formatPrice(itemTotal)}\n`;
            });


            message +=
                `\n*TOTAL: ${formatPrice(grandTotal)}*`;


            if (orderNote) {

                message +=
                    `\n\n*Note:* ${orderNote}`;
            }


            message +=
                `\n\nThank you for choosing Dream Land Motel.`;
            

            /* =================================================
               OPEN WHATSAPP
            ================================================= */

            const whatsappURL =
                `https://wa.me/${phone.whatsapp}?text=${encodeURIComponent(
                    message
                )}`;


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );


    /* =================================================
       INITIAL RENDER
    ================================================= */

    renderCart();


    /* =================================================
       UPDATE FLOATING BUTTONS WHEN BRANCH CHANGES
    ================================================= */

    updateFloatingButtons();

});