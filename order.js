/* =====================================================
   DREAM LAND MOTEL
   ORDER PAGE JAVASCRIPT
   Cart + Search + Checkout + WhatsApp
   Bilingual: English / Kinyarwanda
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       LANGUAGE SYSTEM
    ===================================================== */

    const languageStorageKey = "dreamLandLanguage";
    const supportedLanguages = ["en", "rw"];
    const defaultLanguage = "en";

    let currentLanguage =
        localStorage.getItem(languageStorageKey) || defaultLanguage;

    if (!supportedLanguages.includes(currentLanguage)) {
        currentLanguage = defaultLanguage;
    }


    /* =====================================================
       TRANSLATIONS
    ===================================================== */

    const translations = {

        en: {

            /* Header */
            brandMain: "DREAM LAND",
            brandSub: "MOTEL KIGALI",

            /* Intro */
            introLabel: "DREAM LAND MOTEL",
            introTitle: "Place Your Order",
            introText:
                "Choose your favorite food and drinks and add them to your order.",

            /* Menu */
            menuLabel: "OUR MENU",
            menuTitle: "Choose What You Want",
            searchPlaceholder: "Search menu...",

            /* Selected */
            selectedLabel: "SELECTED",
            selectedTitle: "Your Selection",
            viewCart: "View Cart",
            emptySelectionTitle: "You haven't selected anything yet.",
            emptySelectionText:
                "Tap the + button beside an item to add it here.",
            each: "each",

            /* Cart */
            cartTitle: "Your Order",
            itemsSelectedSingular: "item selected",
            itemsSelectedPlural: "items selected",
            emptyCartTitle: "Your cart is empty",
            emptyCartText:
                "Choose the food and drinks you want from the menu, then tap + to add them to your cart.",
            chooseFromMenu: "Choose From Menu",

            /* Summary */
            items: "Items",
            total: "Total",
            continueOrder: "Continue Order",

            /* Search */
            noItemFound: "No item found",
            tryAnother:
                "Try another food or drink name.",

            /* Checkout */
            checkout: "CHECKOUT",
            customerDetails: "Customer Details",
            checkoutIntro:
                "Complete your details before sending your order.",
            fullName: "Full Name",
            enterName: "Enter your name",
            phoneNumber: "Phone Number",
            chooseBranch: "Choose Branch",
            selectBranch: "Select branch",
            tableRoom: "Table / Room",
            tableRoomPlaceholder: "e.g. Table 4 / Room 2",
            specialNotes: "Special Notes",
            specialNotesPlaceholder:
                "Any special request?",
            orderTotal: "Order Total",
            sendWhatsApp: "Send Order on WhatsApp",

            /* Branches */
            kabuga: "Kabuga",
            bisenga: "Bisenga",

            /* Buttons */
            remove: "Remove",

            /* Alerts */
            cartEmptyAlert:
                "Your cart is empty. Please select food or drinks first.",

            selectItemAlert:
                "Please select at least one item before placing your order.",

            enterNameAlert:
                "Please enter your name.",

            enterPhoneAlert:
                "Please enter your phone number.",

            selectBranchAlert:
                "Please select your branch.",

            invalidBranchAlert:
                "Please select a valid Dream Land Motel branch.",

            /* WhatsApp */
            whatsappOrderTitle:
                "DREAM LAND MOTEL ORDER",

            customer:
                "Customer",

            phone:
                "Phone",

            branch:
                "Branch",

            tableRoomMessage:
                "Table / Room",

            order:
                "ORDER",

            notes:
                "Notes",

            thankYou:
                "Thank you for choosing Dream Land Motel."
        },


        rw: {

            /* Header */
            brandMain: "DREAM LAND",
            brandSub: "MOTEL KIGALI",

            /* Intro */
            introLabel: "DREAM LAND MOTEL",
            introTitle: "TEGEKA NONAHA",
            introText:
                "Hitamo amafunguro n'ibinyobwa ukunda ubishyire muri commande yawe.",

            /* Menu */
            menuLabel: "MENU YACU",
            menuTitle: "HITAMO IBYO USHAKA",
            searchPlaceholder: "Shakisha muri menu...",

            /* Selected */
            selectedLabel: "IBYO WAHISEMO",
            selectedTitle: "Ibyo Wahisemo",
            viewCart: "Reba Gatebo",
            emptySelectionTitle: "Nta kintu urahitamo.",
            emptySelectionText:
                "Kanda kuri + iri ku kintu ushaka kugira ngo ukongeremo.",
            each: "buri kimwe",

            /* Cart */
            cartTitle: "Ibyo Watumije",
            itemsSelectedSingular: "kintu cyatoranyijwe",
            itemsSelectedPlural: "ibintu byatoranyijwe",
            emptyCartTitle: "Nta kintu kiri muri gatebo",
            emptyCartText:
                "Hitamo amafunguro n'ibinyobwa ushaka muri menu, hanyuma ukande kuri + kugira ngo ubyongere muri gatebo.",
            chooseFromMenu: "Hitamo muri Menu",

            /* Summary */
            items: "Ibintu",
            total: "Igiteranyo",
            continueOrder: "Komeza Gutumiza",

            /* Search */
            noItemFound: "Nta kintu cyabonetse",
            tryAnother:
                "Gerageza irindi zina ry'ifunguro cyangwa ikinyobwa.",

            /* Checkout */
            checkout: "KURANGIZA COMMAND",
            customerDetails: "Amakuru y'Umutumiza",
            checkoutIntro:
                "Uzuza amakuru yawe mbere yo kohereza commande.",
            fullName: "Amazina Yose",
            enterName: "Andika amazina yawe",
            phoneNumber: "Nimero ya Telefone",
            chooseBranch: "Hitamo Ishami",
            selectBranch: "Hitamo ishami",
            tableRoom: "Meza / Icyumba",
            tableRoomPlaceholder: "Urugero: Meza 4 / Icyumba 2",
            specialNotes: "Andi Mabwiriza",
            specialNotesPlaceholder:
                "Hari icyo wifuza kongeraho?",
            orderTotal: "Igiteranyo cya Commande",
            sendWhatsApp: "Ohereza Commande kuri WhatsApp",

            /* Branches */
            kabuga: "Kabuga",
            bisenga: "Bisenga",

            /* Buttons */
            remove: "Kuraho",

            /* Alerts */
            cartEmptyAlert:
                "Gatebo yawe nta kintu irimo. Banza uhitemo amafunguro cyangwa ibinyobwa.",

            selectItemAlert:
                "Hitamo nibura ikintu kimwe mbere yo kohereza commande.",

            enterNameAlert:
                "Andika amazina yawe.",

            enterPhoneAlert:
                "Andika nimero ya telefone.",

            selectBranchAlert:
                "Hitamo ishami.",

            invalidBranchAlert:
                "Hitamo ishami rya Dream Land Motel ryemewe.",

            /* WhatsApp */
            whatsappOrderTitle:
                "COMMANDE YA DREAM LAND MOTEL",

            customer:
                "Umutumiza",

            phone:
                "Telefone",

            branch:
                "Ishami",

            tableRoomMessage:
                "Meza / Icyumba",

            order:
                "COMMAND",

            notes:
                "Andi Mabwiriza",

            thankYou:
                "Murakoze guhitamo Dream Land Motel."
        }
    };


    /* =====================================================
       TRANSLATION HELPER
    ===================================================== */

    function t(key) {

        return (
            translations[currentLanguage]?.[key] ??
            translations[defaultLanguage]?.[key] ??
            key
        );

    }


    /* =====================================================
       CHANGE LANGUAGE
    ===================================================== */

    function setLanguage(language) {

        if (!supportedLanguages.includes(language)) {
            return;
        }

        currentLanguage = language;

        localStorage.setItem(
            languageStorageKey,
            currentLanguage
        );

        translatePage();

        updateCart();

    }


    /* =====================================================
       TRANSLATE STATIC PAGE
    ===================================================== */

    function translatePage() {

        document.documentElement.lang =
            currentLanguage;


        const elements =
            document.querySelectorAll("[data-translate]");

        elements.forEach(element => {

            const key =
                element.getAttribute("data-translate");

            const translatedText =
                t(key);

            if (translatedText !== undefined) {

                element.innerHTML =
                    translatedText;

            }

        });


        const placeholders =
            document.querySelectorAll(
                "[data-translate-placeholder]"
            );

        placeholders.forEach(element => {

            const key =
                element.getAttribute(
                    "data-translate-placeholder"
                );

            element.placeholder =
                t(key);

        });


        const titleElements =
            document.querySelectorAll(
                "[data-translate-title]"
            );

        titleElements.forEach(element => {

            const key =
                element.getAttribute(
                    "data-translate-title"
                );

            element.title =
                t(key);

        });


        const languageButtons =
            document.querySelectorAll(
                "#languageToggle"
            );

        languageButtons.forEach(button => {

            button.textContent =
                currentLanguage === "en"
                    ? "Kinyarwanda"
                    : "English";


            button.setAttribute(
                "aria-label",
                currentLanguage === "en"
                    ? "Switch to Kinyarwanda"
                    : "Switch to English"
            );


            button.setAttribute(
                "title",
                currentLanguage === "en"
                    ? "Hindura ururimi ujye mu Kinyarwanda"
                    : "Switch language to English"
            );

        });

    }


    /* =====================================================
       LANGUAGE BUTTON
    ===================================================== */

    const languageButtons =
        document.querySelectorAll(
            "#languageToggle"
        );

    languageButtons.forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.preventDefault();

                setLanguage(
                    currentLanguage === "en"
                        ? "rw"
                        : "en"
                );

            }
        );

    });


    /* =====================================================
       CART STATE
    ===================================================== */

    let cart = {};


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const menuItems =
        document.querySelectorAll(".order-item");

    const selectButtons =
        document.querySelectorAll(".select-item");

    const cartButton =
        document.getElementById("cartButton");

    const cartBadge =
        document.getElementById("cartBadge");

    const cartOverlay =
        document.getElementById("cartOverlay");

    const cartPanel =
        document.getElementById("cartPanel");

    const cartClose =
        document.getElementById("cartClose");

    const cartItems =
        document.getElementById("cartItems");

    const emptyCart =
        document.getElementById("emptyCart");

    const cartSummary =
        document.getElementById("cartSummary");

    const summaryItems =
        document.getElementById("summaryItems");

    const cartTotal =
        document.getElementById("cartTotal");

    const selectedItems =
        document.getElementById("selectedItems");

    const selectedTotal =
        document.getElementById("selectedTotal");

    const formTotal =
        document.getElementById("formTotal");

    const continueOrder =
        document.getElementById("continueOrder");

    const goMenuButton =
        document.getElementById("goMenuButton");

    const viewCartSmall =
        document.getElementById("viewCartSmall");

    const menuSearch =
        document.getElementById("menuSearch");

    const orderForm =
        document.getElementById("orderForm");

    const customerName =
        document.getElementById("customerName");

    const customerPhone =
        document.getElementById("customerPhone");

    const branch =
        document.getElementById("branch");

    const tableRoom =
        document.getElementById("tableRoom");

    const notes =
        document.getElementById("notes");

    const customerSection =
        document.getElementById("customerSection");


    /* =====================================================
       HELPERS
    ===================================================== */

    function formatMoney(number) {

        return Number(number)
            .toLocaleString("en-US") +
            " Rwf";

    }


    function getCartQuantity() {

        return Object.values(cart).reduce(
            (total, item) => {

                return total + item.quantity;

            },
            0
        );

    }


    function getCartTotal() {

        return Object.values(cart).reduce(
            (total, item) => {

                return total +
                    (item.price * item.quantity);

            },
            0
        );

    }


    /* =====================================================
       ADD ITEM
    ===================================================== */

    selectButtons.forEach(button => {

        button.addEventListener("click", () => {

            const itemElement =
                button.closest(".order-item");

            if (!itemElement) return;

            const id =
                itemElement.dataset.id;

            const name =
                itemElement.dataset.name;

            const price =
                Number(
                    itemElement.dataset.price
                );

            if (!id || !name || !price) {
                return;
            }


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

        const quantity =
            getCartQuantity();

        if (!cartBadge) return;

        cartBadge.textContent =
            quantity;


        if (quantity > 0) {

            cartBadge.style.display =
                "flex";

        } else {

            cartBadge.style.display =
                "none";

        }

    }


    /* =====================================================
       SELECTED ORDER PREVIEW
    ===================================================== */

    function renderSelectedItems() {

        if (!selectedItems) return;

        selectedItems.innerHTML = "";

        const items =
            Object.values(cart);


        if (items.length === 0) {

            selectedItems.innerHTML = `

                <div class="selected-empty">

                    <i class="fa-solid fa-cart-shopping"></i>

                    <p>
                        ${escapeHTML(
                            t("emptySelectionTitle")
                        )}
                    </p>

                    <small>
                        ${escapeHTML(
                            t("emptySelectionText")
                        )}
                    </small>

                </div>

            `;

            return;

        }


        items.forEach(item => {

            const row =
                document.createElement("div");

            row.className =
                "selected-row";


            row.innerHTML = `

                <div class="selected-info">

                    <strong>
                        ${escapeHTML(item.name)}
                    </strong>

                    <span>
                        ${formatMoney(item.price)}
                        ${escapeHTML(t("each"))}
                    </span>

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
                        title="${escapeHTML(
                            t("remove")
                        )}">

                        <i class="fa-solid fa-trash"></i>

                    </button>

                </div>


                <strong class="selected-line-total">
                    ${formatMoney(
                        item.price *
                        item.quantity
                    )}
                </strong>

            `;


            selectedItems.appendChild(row);

        });


        attachQuantityEvents(
            selectedItems
        );

    }


    /* =====================================================
       CART DRAWER
    ===================================================== */

    function renderCart() {

        if (!cartItems) return;

        cartItems.innerHTML = "";

        const items =
            Object.values(cart);


        if (items.length === 0) {

            if (emptyCart) {

                emptyCart.style.display =
                    "flex";

            }


            if (cartSummary) {

                cartSummary.style.display =
                    "none";

            }

            return;

        }


        if (emptyCart) {

            emptyCart.style.display =
                "none";

        }


        if (cartSummary) {

            cartSummary.style.display =
                "block";

        }


        items.forEach(item => {

            const row =
                document.createElement("div");

            row.className =
                "cart-item";


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
                        title="${escapeHTML(
                            t("remove")
                        )}">

                        <i class="fa-solid fa-trash"></i>

                    </button>

                </div>


                <strong class="cart-item-total">
                    ${formatMoney(
                        item.price *
                        item.quantity
                    )}
                </strong>

            `;


            cartItems.appendChild(row);

        });


        attachQuantityEvents(
            cartItems
        );

    }


    /* =====================================================
       QUANTITY + / -
    ===================================================== */

    function attachQuantityEvents(container) {

        const increaseButtons =
            container.querySelectorAll(
                ".increase"
            );

        const decreaseButtons =
            container.querySelectorAll(
                ".decrease"
            );

        const removeButtons =
            container.querySelectorAll(
                ".remove-item"
            );


        increaseButtons.forEach(button => {

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


        decreaseButtons.forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        button.dataset.id;

                    if (!cart[id]) return;

                    cart[id].quantity -= 1;


                    if (cart[id].quantity <= 0) {

                        delete cart[id];

                    }


                    updateCart();

                }
            );

        });


        removeButtons.forEach(button => {

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


    /* =====================================================
       TOTALS
    ===================================================== */

    function updateTotals() {

        const quantity =
            getCartQuantity();

        const total =
            getCartTotal();


        if (selectedTotal) {

            selectedTotal.textContent =
                formatMoney(total);

        }


        if (cartTotal) {

            cartTotal.textContent =
                formatMoney(total);

        }


        if (formTotal) {

            formTotal.textContent =
                formatMoney(total);

        }


        if (summaryItems) {

            summaryItems.textContent =
                quantity +
                " " +
                (
                    quantity === 1
                        ? t("itemsSelectedSingular")
                        : t("itemsSelectedPlural")
                );

        }

    }


    /* =====================================================
       OPEN CART
    ===================================================== */

    function openCart() {

        if (!cartPanel) return;


        cartPanel.classList.add(
            "active"
        );


        if (cartOverlay) {

            cartOverlay.classList.add(
                "active"
            );

        }


        document.body.classList.add(
            "cart-open"
        );


        updateCart();

    }


    /* =====================================================
       CLOSE CART
    ===================================================== */

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


    /* =====================================================
       CART BUTTON
    ===================================================== */

    if (cartButton) {

        cartButton.addEventListener(
            "click",
            () => {

                openCart();

            }
        );

    }


    if (cartClose) {

        cartClose.addEventListener(
            "click",
            () => {

                closeCart();

            }
        );

    }


    if (cartOverlay) {

        cartOverlay.addEventListener(
            "click",
            () => {

                closeCart();

            }
        );

    }


    /* =====================================================
       SMALL VIEW CART BUTTON
    ===================================================== */

    if (viewCartSmall) {

        viewCartSmall.addEventListener(
            "click",
            () => {

                openCart();

            }
        );

    }


    /* =====================================================
       GO MENU BUTTON
    ===================================================== */

    if (goMenuButton) {

        goMenuButton.addEventListener(
            "click",
            () => {

                closeCart();


                const menuScroll =
                    document.getElementById(
                        "menuScroll"
                    );


                if (menuScroll) {

                    menuScroll.scrollTo({

                        top: 0,

                        behavior: "smooth"

                    });

                }

            }
        );

    }


    /* =====================================================
       CONTINUE ORDER
    ===================================================== */

    if (continueOrder) {

        continueOrder.addEventListener(
            "click",
            () => {

                if (
                    getCartQuantity() === 0
                ) {

                    alert(
                        t("cartEmptyAlert")
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

            }
        );

    }


    /* =====================================================
       SEARCH MENU
    ===================================================== */

    if (menuSearch) {

        menuSearch.addEventListener(
            "input",
            () => {

                const query =
                    menuSearch.value
                        .trim()
                        .toLowerCase();


                const categories =
                    document.querySelectorAll(
                        ".order-category"
                    );


                let totalMatches = 0;


                categories.forEach(
                    category => {

                        const products =
                            category.querySelectorAll(
                                ".order-item"
                            );


                        let categoryMatches =
                            0;


                        products.forEach(
                            product => {

                                const name =
                                    (
                                        product.dataset.name ||
                                        product.textContent ||
                                        ""
                                    ).toLowerCase();


                                if (
                                    name.includes(
                                        query
                                    )
                                ) {

                                    product.style.display =
                                        "";

                                    categoryMatches++;

                                    totalMatches++;

                                } else {

                                    product.style.display =
                                        "none";

                                }

                            }
                        );


                        if (
                            query === "" ||
                            categoryMatches > 0
                        ) {

                            category.style.display =
                                "";

                        } else {

                            category.style.display =
                                "none";

                        }

                    }
                );


                let noResults =
                    document.getElementById(
                        "noResults"
                    );


                if (!noResults) {

                    noResults =
                        document.createElement(
                            "div"
                        );


                    noResults.id =
                        "noResults";


                    noResults.className =
                        "no-results";


                    noResults.innerHTML = `

                        <i class="fa-solid fa-magnifying-glass"></i>

                        <h3>
                            ${escapeHTML(
                                t("noItemFound")
                            )}
                        </h3>

                        <p>
                            ${escapeHTML(
                                t("tryAnother")
                            )}
                        </p>

                    `;


                    const menuScroll =
                        document.getElementById(
                            "menuScroll"
                        );


                    if (menuScroll) {

                        menuScroll.appendChild(
                            noResults
                        );

                    }

                } else {

                    const heading =
                        noResults.querySelector(
                            "h3"
                        );

                    const paragraph =
                        noResults.querySelector(
                            "p"
                        );


                    if (heading) {

                        heading.textContent =
                            t("noItemFound");

                    }


                    if (paragraph) {

                        paragraph.textContent =
                            t("tryAnother");

                    }

                }


                if (
                    query !== "" &&
                    totalMatches === 0
                ) {

                    noResults.style.display =
                        "flex";

                } else {

                    noResults.style.display =
                        "none";

                }

            }
        );

    }


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeCart();

            }

        }
    );


    /* =====================================================
       CHECKOUT / WHATSAPP
    ===================================================== */

    if (orderForm) {

        orderForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                /* -------------------------------
                   CHECK CART
                ------------------------------- */

                if (
                    getCartQuantity() === 0
                ) {

                    alert(
                        t("selectItemAlert")
                    );

                    openCart();

                    return;

                }


                /* -------------------------------
                   GET CUSTOMER INFO
                ------------------------------- */

                const name =
                    customerName
                        ? customerName.value.trim()
                        : "";


                const phone =
                    customerPhone
                        ? customerPhone.value.trim()
                        : "";


                const selectedBranch =
                    branch
                        ? branch.value
                        : "";


                const location =
                    tableRoom
                        ? tableRoom.value.trim()
                        : "";


                const customerNotes =
                    notes
                        ? notes.value.trim()
                        : "";


                /* -------------------------------
                   VALIDATION
                ------------------------------- */

                if (!name) {

                    alert(
                        t("enterNameAlert")
                    );


                    if (customerName) {

                        customerName.focus();

                    }


                    return;

                }


                if (!phone) {

                    alert(
                        t("enterPhoneAlert")
                    );


                    if (customerPhone) {

                        customerPhone.focus();

                    }


                    return;

                }


                if (!selectedBranch) {

                    alert(
                        t("selectBranchAlert")
                    );


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
                    selectedBranch
                        .toLowerCase()
                        .includes("kabuga")
                ) {

                    whatsappNumber =
                        "250788356146";

                } else if (
                    selectedBranch
                        .toLowerCase()
                        .includes("bisenga")
                ) {

                    whatsappNumber =
                        "250780696047";

                } else {

                    alert(
                        t("invalidBranchAlert")
                    );

                    return;

                }


                /* -------------------------------
                   BUILD ORDER MESSAGE
                ------------------------------- */

                let message = "";


                message +=
                    t("whatsappOrderTitle") +
                    "\n";


                message +=
                    "========================\n\n";


                message +=
                    t("customer") +
                    ": " +
                    name +
                    "\n";


                message +=
                    t("phone") +
                    ": " +
                    phone +
                    "\n";


                message +=
                    t("branch") +
                    ": " +
                    selectedBranch +
                    "\n";


                if (location) {

                    message +=
                        t("tableRoomMessage") +
                        ": " +
                        location +
                        "\n";

                }


                message +=
                    "\n" +
                    t("order") +
                    ":\n";


                message +=
                    "------------------------\n";


                Object.values(cart).forEach(
                    item => {

                        const lineTotal =
                            item.price *
                            item.quantity;


                        message +=
                            "- " +
                            item.name +
                            " x " +
                            item.quantity +
                            " = " +
                            lineTotal.toLocaleString(
                                "en-US"
                            ) +
                            " Rwf\n";

                    }
                );


                message +=
                    "------------------------\n";


                message +=
                    t("total") +
                    ": " +
                    getCartTotal()
                        .toLocaleString("en-US") +
                    " Rwf\n";


                if (customerNotes) {

                    message +=
                        "\n" +
                        t("notes") +
                        ": " +
                        customerNotes +
                        "\n";

                }


                message +=
                    "\n" +
                    t("thankYou");


                /* -------------------------------
                   OPEN WHATSAPP
                ------------------------------- */

                const whatsappURL =
                    "https://wa.me/" +
                    whatsappNumber +
                    "?text=" +
                    encodeURIComponent(
                        message
                    );


                window.open(
                    whatsappURL,
                    "_blank"
                );

            }
        );

    }


    /* =====================================================
       HTML ESCAPE
    ===================================================== */

    function escapeHTML(text) {

        const div =
            document.createElement(
                "div"
            );


        div.textContent =
            text;


        return div.innerHTML;

    }


    /* =====================================================
       INITIAL LANGUAGE + LOAD
    ===================================================== */

    translatePage();

    updateCart();

});