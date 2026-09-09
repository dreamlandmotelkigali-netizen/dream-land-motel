document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       LANGUAGE SYSTEM
    ========================================================= */

    const translations = {

        en: {

            // Header
            brandMain: "DREAM LAND",
            brandSub: "MOTEL KIGALI",

            // Intro
            introLabel: "DREAM LAND MOTEL",
            introTitle: "Place Your Order",
            introText: "Choose your favorite food and drinks and add them to your order.",

            // Menu
            menuLabel: "OUR MENU",
            menuTitle: "Choose What You Want",
            searchPlaceholder: "Search menu...",

            // Selected
            selectedLabel: "SELECTED",
            selectedTitle: "Your Selection",
            viewCart: "View Cart",
            emptySelectionTitle: "You haven't selected anything yet.",
            emptySelectionText: "Tap the + button beside an item to add it here.",
            each: "each",

            // Cart
            cartTitle: "Your Order",
            itemsSelectedSingular: "item selected",
            itemsSelectedPlural: "items selected",
            emptyCartTitle: "Your cart is empty",
            emptyCartText: "Choose the food and drinks you want from the menu, then tap + to add them to your cart.",
            chooseFromMenu: "Choose From Menu",

            // Summary
            items: "Items",
            total: "Total",
            continueOrder: "Continue Order",

            // Search
            noItemFound: "No item found",
            tryAnother: "Try another food or drink name.",

            // Checkout
            checkout: "CHECKOUT",
            customerDetails: "Customer Details",
            checkoutIntro: "Complete your details before sending your order.",
            fullName: "Full Name",
            enterName: "Enter your name",
            phoneNumber: "Phone Number",
            chooseBranch: "Choose Branch",
            selectBranch: "Select branch",
            tableRoom: "Table / Room",
            tableRoomPlaceholder: "e.g. Table 4 / Room 2",
            deliveryLocation: "Delivery Location",
            deliveryLocationPlaceholder: "e.g. Kabuga, near the market",
            specialNotes: "Special Notes",
            specialNotesPlaceholder: "Any special request?",
            orderTotal: "Order Total",
            sendWhatsApp: "Send Order on WhatsApp",

            // Branches
            kabuga: "Kabuga",
            bisenga: "Bisenga",

            // Buttons
            remove: "Remove",

            // Alerts
            cartEmptyAlert: "Your cart is empty. Choose food or drinks first.",
            selectItemAlert: "Please select at least one item before sending your order.",
            enterNameAlert: "Please enter your full name.",
            enterPhoneAlert: "Please enter your phone number.",
            selectBranchAlert: "Please select a branch.",
            invalidBranchAlert: "Please select a valid branch.",

            // WhatsApp
            whatsappOrderTitle: "DREAM LAND MOTEL ORDER",
            customer: "Customer",
            phone: "Phone",
            branch: "Branch",
            tableRoomMessage: "Table / Room",
            deliveryLocationMessage: "Delivery Location",
            order: "ORDER",
            notes: "Notes",
            thankYou: "Thank you for choosing Dream Land Motel."

        },

        rw: {

            // Header
            brandMain: "DREAM LAND",
            brandSub: "MOTEL KIGALI",

            // Intro
            introLabel: "DREAM LAND MOTEL",
            introTitle: "TUMIZA NONAHA",
            introText: "Hitamo amafunguro n'ibinyobwa ukunda ubishyire mu byo watumije.",

            // Menu
            menuLabel: "MENU YACU",
            menuTitle: "HITAMO IBYO USHAKA",
            searchPlaceholder: "Shakisha muri menu...",

            // Selected
            selectedLabel: "IBYO WAHISEMO",
            selectedTitle: "Ibyo Wahisemo",
            viewCart: "Reba Ibyo Watumije",
            emptySelectionTitle: "Nta kintu urahitamo kugeza ubu.",
            emptySelectionText: "Kanda kuri + iri ku ruhande rw'ikintu ushaka kugira ngo ukongeremo.",
            each: "buri kimwe",

            // Cart
            cartTitle: "Ibyo Watumije",
            itemsSelectedSingular: "kintu cyatoranyijwe",
            itemsSelectedPlural: "ibintu byatoranyijwe",
            emptyCartTitle: "Nta cyo watumije",
            emptyCartText: "Hitamo amafunguro n'ibinyobwa ushaka muri menu, hanyuma ukande kuri + kugira ngo ubyongere mu byo watumije.",
            chooseFromMenu: "Hitamo muri Menu",

            // Summary
            items: "Ibyatumijwe",
            total: "Igiteranyo",
            continueOrder: "Komeza Gutumiza",

            // Search
            noItemFound: "Nta cyo tubonye",
            tryAnother: "Gerageza irindi zina ry'ifunguro cyangwa ikinyobwa.",

            // Checkout
            checkout: "SOZA ITUMIZA",
            customerDetails: "Amakuru y'Umutumiza",
            checkoutIntro: "Uzuza amakuru yawe mbere yo kohereza itumiza.",
            fullName: "Amazina Yose",
            enterName: "Andika amazina yawe",
            phoneNumber: "Nimero ya Telefone",
            chooseBranch: "Hitamo Ishami",
            selectBranch: "Hitamo ishami",
            tableRoom: "Ameza / Icyumba",
            tableRoomPlaceholder: "Urugero Ameza 4 / Icyumba 2 (niba uri hano)",
            deliveryLocation: "Aho ibyo watumije bigusanga",
            deliveryLocationPlaceholder: "Urugero: Kabuga, hafi ya gare",
            specialNotes: "Icyifuzo Cyihariye",
            specialNotesPlaceholder: "Hari icyo wifuza kongeraho?",
            orderTotal: "Igiteranyo",
            sendWhatsApp: "Ohereza Itumiza kuri WhatsApp",

            // Branches
            kabuga: "Kabuga",
            bisenga: "Bisenga",

            // Buttons
            remove: "Kuraho",

            // Alerts
            cartEmptyAlert: "Nta cyo watumije. Banza uhitemo amafunguro cyangwa ibinyobwa.",
            selectItemAlert: "Banza uhitemo nibura ikintu kimwe mbere yo kohereza itumiza.",
            enterNameAlert: "Nyamuneka andika amazina yawe yose.",
            enterPhoneAlert: "Nyamuneka andika nimero ya telefone.",
            selectBranchAlert: "Nyamuneka hitamo ishami.",
            invalidBranchAlert: "Nyamuneka hitamo ishami ryemewe.",

            // WhatsApp
            whatsappOrderTitle: "ITUMIZA RYA DREAM LAND MOTEL",
            customer: "Umutumiza",
            phone: "Telefone",
            branch: "Ishami",
            tableRoomMessage: "Meza / Icyumba",
            deliveryLocationMessage: "Aho ibyo watumije bigusanga",
            order: "ITUMIZA",
            notes: "Icyitonderwa",
            thankYou: "Murakoze guhitamo Dream Land Motel."

        }
    };


    /* =========================================================
       LANGUAGE
    ========================================================= */

    let currentLanguage =
        localStorage.getItem("dreamLandLanguage") || "en";

    function t(key) {

        return translations[currentLanguage]?.[key] ||
               translations.en[key] ||
               key;

    }


    function translatePage() {

        document
            .querySelectorAll("[data-translate]")
            .forEach(element => {

                const key =
                    element.getAttribute("data-translate");

                if (translations[currentLanguage]?.[key]) {

                    element.innerHTML =
                        translations[currentLanguage][key];

                }

            });


        document
            .querySelectorAll("[data-translate-placeholder]")
            .forEach(element => {

                const key =
                    element.getAttribute(
                        "data-translate-placeholder"
                    );

                if (translations[currentLanguage]?.[key]) {

                    element.placeholder =
                        translations[currentLanguage][key];

                }

            });


        document
            .querySelectorAll("[data-translate-title]")
            .forEach(element => {

                const key =
                    element.getAttribute(
                        "data-translate-title"
                    );

                if (translations[currentLanguage]?.[key]) {

                    element.title =
                        translations[currentLanguage][key];

                }

            });


        const languageButton =
            document.getElementById("languageToggle");


        if (languageButton) {

            languageButton.textContent =
                currentLanguage === "en"
                    ? "Kinyarwanda"
                    : "English";

        }

    }


    function setLanguage(language) {

        if (!translations[language]) return;

        currentLanguage = language;

        localStorage.setItem(
            "dreamLandLanguage",
            currentLanguage
        );

        translatePage();
        updateCart();

    }


    const languageToggle =
        document.getElementById("languageToggle");


    if (languageToggle) {

        languageToggle.addEventListener("click", () => {

            setLanguage(
                currentLanguage === "en"
                    ? "rw"
                    : "en"
            );

        });

    }


    /* =========================================================
       CART
    ========================================================= */

    let cart = {};


    /* =========================================================
       ADD DELIVERY LOCATION FIELD
       This is added automatically.
       No HTML editing required.
    ========================================================= */

    function addDeliveryLocationField() {

        const form =
            document.getElementById("orderForm");

        if (!form) return;

        if (
            document.getElementById(
                "deliveryLocation"
            )
        ) {
            return;
        }


        const notesGroup =
            document
                .getElementById("notes")
                ?.closest(".form-group");


        const group =
            document.createElement("div");

        group.className =
            "form-group";


        group.innerHTML = `

            <label
                for="deliveryLocation"
                data-translate="deliveryLocation"
            >
                Delivery Location
            </label>

            <input
                type="text"
                id="deliveryLocation"
                name="deliveryLocation"
                placeholder="e.g. Kabuga, near the market"
                data-translate-placeholder="deliveryLocationPlaceholder"
                autocomplete="street-address"
            >

        `;


        if (notesGroup) {

            form.insertBefore(
                group,
                notesGroup
            );

        } else {

            const submitButton =
                form.querySelector(
                    'button[type="submit"]'
                );

            if (submitButton) {

                form.insertBefore(
                    group,
                    submitButton
                );

            } else {

                form.appendChild(group);

            }

        }

    }


    /* =========================================================
       MENU ITEMS
    ========================================================= */

    const selectButtons =
        document.querySelectorAll(
            ".select-item"
        );


    selectButtons.forEach(button => {

        button.addEventListener("click", () => {

            const itemElement =
                button.closest(".order-item");

            if (!itemElement) return;


            const id =
                itemElement.dataset.id;


            const name =
                itemElement.dataset.name ||
                itemElement.querySelector(
                    ".item-name"
                )?.textContent ||
                "Item";


            const price =
                Number(
                    itemElement.dataset.price
                ) || 0;


            if (!id) return;


            if (cart[id]) {

                cart[id].quantity += 1;

            } else {

                cart[id] = {
                    id,
                    name,
                    price,
                    quantity: 1
                };

            }


            updateCart();

        });

    });


    /* =========================================================
       SELECTED ITEMS
    ========================================================= */

    function renderSelectedItems() {

        const container =
            document.getElementById(
                "selectedItems"
            );


        if (!container) return;


        const items =
            Object.values(cart);


        if (!items.length) {

            container.innerHTML = `

                <div class="empty-selection">

                    <i class="fa-solid fa-basket-shopping"></i>

                    <p>
                        ${t("emptySelectionTitle")}
                    </p>

                    <small>
                        ${t("emptySelectionText")}
                    </small>

                </div>

            `;

            return;

        }


        container.innerHTML =
            items.map(item => {

                return `

                    <div class="selected-item">

                        <div class="selected-item-info">

                            <strong>
                                ${escapeHTML(item.name)}
                            </strong>

                            <span>
                                ${item.price.toLocaleString()}
                                Rwf
                                ${t("each")}
                            </span>

                        </div>

                        <div class="selected-item-quantity">
                            x${item.quantity}
                        </div>

                    </div>

                `;

            }).join("");

    }


    /* =========================================================
       CART DRAWER
    ========================================================= */

    const cartPanel =
        document.getElementById(
            "cartPanel"
        );


    const cartOverlay =
        document.getElementById(
            "cartOverlay"
        );


    function openCart() {

        if (cartPanel) {

            cartPanel.classList.add(
                "active"
            );

        }


        if (cartOverlay) {

            cartOverlay.classList.add(
                "active"
            );

        }


        document.body.classList.add(
            "cart-open"
        );

    }


    function closeCart() {

        if (cartPanel) {

            cartPanel.classList.remove(
                "active"
            );

        }


        if (cartOverlay) {

            cartOverlay.classList.remove(
                "active"
            );

        }


        document.body.classList.remove(
            "cart-open"
        );

    }


    const cartButton =
        document.getElementById(
            "cartButton"
        );


    if (cartButton) {

        cartButton.addEventListener(
            "click",
            openCart
        );

    }


    const cartClose =
        document.getElementById(
            "cartClose"
        );


    if (cartClose) {

        cartClose.addEventListener(
            "click",
            closeCart
        );

    }


    if (cartOverlay) {

        cartOverlay.addEventListener(
            "click",
            closeCart
        );

    }


    const viewCartSmall =
        document.getElementById(
            "viewCartSmall"
        );


    if (viewCartSmall) {

        viewCartSmall.addEventListener(
            "click",
            openCart
        );

    }


    /* =========================================================
       CART CONTENT
    ========================================================= */

    function renderCart() {

        const container =
            document.getElementById(
                "cartItems"
            );


        if (!container) return;


        const items =
            Object.values(cart);


        const emptyCart =
            document.getElementById(
                "emptyCart"
            );


        const cartSummary =
            document.getElementById(
                "cartSummary"
            );


        if (!items.length) {

            container.innerHTML = "";

            if (emptyCart) {
                emptyCart.style.display = "";
            }

            if (cartSummary) {
                cartSummary.style.display = "none";
            }

            return;

        }


        if (emptyCart) {

            emptyCart.style.display =
                "none";

        }


        if (cartSummary) {

            cartSummary.style.display =
                "";

        }


        container.innerHTML =
            items.map(item => {

                const lineTotal =
                    item.price *
                    item.quantity;


                return `

                    <div
                        class="cart-item"
                        data-id="${escapeHTML(item.id)}"
                    >

                        <div class="cart-item-info">

                            <strong>
                                ${escapeHTML(item.name)}
                            </strong>

                            <span>
                                ${lineTotal.toLocaleString()}
                                Rwf
                            </span>

                        </div>


                        <div class="cart-controls">

                            <button
                                type="button"
                                class="quantity-minus"
                                data-id="${escapeHTML(item.id)}"
                            >
                                −
                            </button>

                            <span>
                                ${item.quantity}
                            </span>

                            <button
                                type="button"
                                class="quantity-plus"
                                data-id="${escapeHTML(item.id)}"
                            >
                                +
                            </button>

                            <button
                                type="button"
                                class="remove-item"
                                data-id="${escapeHTML(item.id)}"
                            >
                                ${t("remove")}
                            </button>

                        </div>

                    </div>

                `;

            }).join("");


        attachQuantityEvents();

    }


    /* =========================================================
       QUANTITY CONTROLS
    ========================================================= */

    function attachQuantityEvents() {

        document
            .querySelectorAll(
                ".quantity-minus"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const id =
                            button.dataset.id;


                        if (!cart[id]) return;


                        cart[id].quantity -= 1;


                        if (
                            cart[id].quantity <= 0
                        ) {

                            delete cart[id];

                        }


                        updateCart();

                    }
                );

            });


        document
            .querySelectorAll(
                ".quantity-plus"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const id =
                            button.dataset.id;


                        if (!cart[id]) return;


                        cart[id].quantity += 1;


                        updateCart();

                    }
                );

            });


        document
            .querySelectorAll(
                ".remove-item"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const id =
                            button.dataset.id;


                        if (!cart[id]) return;


                        delete cart[id];


                        updateCart();

                    }
                );

            });

    }


    /* =========================================================
       TOTALS
    ========================================================= */

    function updateTotals() {

        const items =
            Object.values(cart);


        const itemCount =
            items.reduce(
                (total, item) =>
                    total + item.quantity,
                0
            );


        const total =
            items.reduce(
                (sum, item) =>
                    sum +
                    (
                        item.price *
                        item.quantity
                    ),
                0
            );


        const summaryItems =
            document.getElementById(
                "summaryItems"
            );


        const cartTotal =
            document.getElementById(
                "cartTotal"
            );


        const selectedTotal =
            document.getElementById(
                "selectedTotal"
            );


        const formTotal =
            document.getElementById(
                "formTotal"
            );


        const cartBadge =
            document.getElementById(
                "cartBadge"
            );


        const cartItemLabel =
            document.getElementById(
                "cartItemLabel"
            );


        if (summaryItems) {

            summaryItems.textContent =
                `${itemCount} ${
                    itemCount === 1
                        ? t("itemsSelectedSingular")
                        : t("itemsSelectedPlural")
                }`;

        }


        if (cartItemLabel) {

            cartItemLabel.textContent =
                `${itemCount} ${
                    itemCount === 1
                        ? t("itemsSelectedSingular")
                        : t("itemsSelectedPlural")
                }`;

        }


        if (cartTotal) {

            cartTotal.textContent =
                `${total.toLocaleString()} Rwf`;

        }


        if (selectedTotal) {

            selectedTotal.textContent =
                `${total.toLocaleString()} Rwf`;

        }


        if (formTotal) {

            formTotal.textContent =
                `${total.toLocaleString()} Rwf`;

        }


        if (cartBadge) {

            cartBadge.textContent =
                itemCount;


            cartBadge.style.display =
                itemCount > 0
                    ? "flex"
                    : "none";

        }

    }


    /* =========================================================
       UPDATE CART
    ========================================================= */

    function updateCart() {

        renderSelectedItems();

        renderCart();

        updateTotals();

    }


    /* =========================================================
       GO TO MENU
    ========================================================= */

    const goMenuButton =
        document.getElementById(
            "goMenuButton"
        );


    if (goMenuButton) {

        goMenuButton.addEventListener(
            "click",
            () => {

                closeCart();


                const menu =
                    document.getElementById(
                        "menuScroll"
                    );


                if (menu) {

                    menu.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }


    /* =========================================================
       CONTINUE ORDER
    ========================================================= */

    const continueOrderButton =
        document.getElementById(
            "continueOrder"
        );


    if (continueOrderButton) {

        continueOrderButton.addEventListener(
            "click",
            () => {

                const items =
                    Object.values(cart);


                if (!items.length) {

                    alert(
                        t("cartEmptyAlert")
                    );

                    return;

                }


                closeCart();


                const checkout =
                    document.getElementById(
                        "customerSection"
                    );


                if (checkout) {

                    checkout.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }


    /* =========================================================
       SEARCH MENU
    ========================================================= */

    const searchInput =
        document.getElementById(
            "menuSearch"
        );


    if (searchInput) {

        searchInput.addEventListener(
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


                let visibleItems = 0;


                categories.forEach(category => {

                    const items =
                        category.querySelectorAll(
                            ".order-item"
                        );


                    let categoryVisible = 0;


                    items.forEach(item => {

                        const name =
                            (
                                item.dataset.name ||
                                item.textContent
                            ).toLowerCase();


                        const matches =
                            name.includes(search);


                        item.style.display =
                            matches
                                ? ""
                                : "none";


                        if (matches) {

                            categoryVisible++;
                            visibleItems++;

                        }

                    });


                    category.style.display =
                        categoryVisible > 0
                            ? ""
                            : "none";

                });


                let noResults =
                    document.getElementById(
                        "noResults"
                    );


                if (
                    !visibleItems &&
                    search
                ) {

                    if (!noResults) {

                        noResults =
                            document.createElement(
                                "div"
                            );


                        noResults.id =
                            "noResults";


                        noResults.className =
                            "no-results";


                        const menuScroll =
                            document.getElementById(
                                "menuScroll"
                            );


                        if (menuScroll) {

                            menuScroll.appendChild(
                                noResults
                            );

                        }

                    }


                    noResults.innerHTML = `

                        <i class="fa-solid fa-magnifying-glass"></i>

                        <h3>
                            ${t("noItemFound")}
                        </h3>

                        <p>
                            ${t("tryAnother")}
                        </p>

                    `;

                } else if (noResults) {

                    noResults.remove();

                }

            }
        );

    }


    /* =========================================================
       ESCAPE KEY
    ========================================================= */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeCart();

            }

        }
    );


    /* =========================================================
       CHECKOUT / WHATSAPP
    ========================================================= */

    const orderForm =
        document.getElementById(
            "orderForm"
        );


    if (orderForm) {

        orderForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const items =
                    Object.values(cart);


                if (!items.length) {

                    alert(
                        t("selectItemAlert")
                    );

                    return;

                }


                const customerName =
                    document
                        .getElementById(
                            "customerName"
                        )
                        ?.value
                        .trim();


                const customerPhone =
                    document
                        .getElementById(
                            "customerPhone"
                        )
                        ?.value
                        .trim();


                const branch =
                    document
                        .getElementById(
                            "branch"
                        )
                        ?.value;


                const tableRoom =
                    document
                        .getElementById(
                            "tableRoom"
                        )
                        ?.value
                        .trim();


                const deliveryLocation =
                    document
                        .getElementById(
                            "deliveryLocation"
                        )
                        ?.value
                        .trim();


                const notes =
                    document
                        .getElementById(
                            "notes"
                        )
                        ?.value
                        .trim();


                /* -----------------------------------------
                   VALIDATION
                ----------------------------------------- */

                if (!customerName) {

                    alert(
                        t("enterNameAlert")
                    );

                    return;

                }


                if (!customerPhone) {

                    alert(
                        t("enterPhoneAlert")
                    );

                    return;

                }


                if (!branch) {

                    alert(
                        t("selectBranchAlert")
                    );

                    return;

                }


                const branchNumbers = {

                    Kabuga:
                        "250788356146",

                    Bisenga:
                        "250780696047"

                };


                const whatsappNumber =
                    branchNumbers[branch];


                if (!whatsappNumber) {

                    alert(
                        t("invalidBranchAlert")
                    );

                    return;

                }


                /* -----------------------------------------
                   ORDER TOTAL
                ----------------------------------------- */

                const total =
                    items.reduce(
                        (sum, item) =>
                            sum +
                            (
                                item.price *
                                item.quantity
                            ),
                        0
                    );


                /* -----------------------------------------
                   WHATSAPP MESSAGE
                ----------------------------------------- */

                let message =
`${t("whatsappOrderTitle")}

${t("customer")}: ${customerName}
${t("phone")}: ${customerPhone}
${t("branch")}: ${branch}
${t("tableRoomMessage")}: ${tableRoom || "-"}
${t("deliveryLocationMessage")}: ${deliveryLocation || "-"}

${t("order")}:`;


                items.forEach(item => {

                    const lineTotal =
                        item.price *
                        item.quantity;


                    message +=
`\n- ${item.name} x ${item.quantity} = ${lineTotal.toLocaleString()} Rwf`;

                });


                message +=
`\n\n${t("total")}: ${total.toLocaleString()} Rwf`;


                if (notes) {

                    message +=
`\n${t("notes")}: ${notes}`;

                }


                message +=
`\n\n${t("thankYou")}`;


                /* -----------------------------------------
                   OPEN WHATSAPP
                ----------------------------------------- */

                const whatsappURL =
                    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


                window.open(
                    whatsappURL,
                    "_blank"
                );

            }
        );

    }


    /* =========================================================
       HTML ESCAPE
    ========================================================= */

    function escapeHTML(value) {

        return String(value)
            .replace(
                /&/g,
                "&amp;"
            )
            .replace(
                /</g,
                "&lt;"
            )
            .replace(
                />/g,
                "&gt;"
            )
            .replace(
                /"/g,
                "&quot;"
            )
            .replace(
                /'/g,
                "&#039;"
            );

    }


    /* =========================================================
       INITIALIZE
    ========================================================= */

    addDeliveryLocationField();

    translatePage();

    updateCart();

});