/* =====================================================
   DREAM LAND MOTEL — BOOKING JAVASCRIPT
   BILINGUAL SYSTEM + BOOKING
===================================================== */


/* =====================================================
   LANGUAGE SYSTEM
===================================================== */

const supportedLanguages = ["en", "rw"];
const defaultLanguage = "en";
const languageStorageKey = "dreamLandLanguage";

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

        brandMain: "DREAM LAND",
        brandSub: "MOTEL",

        introLabel: "DREAM LAND MOTEL",
        introTitle: "Book Your Stay",
        introText:
            "Choose your branch, room and preferred dates.",

        reservation: "RESERVATION",
        yourStay: "Your Stay",

        guestInformation: "Guest Information",
        fullName: "Full Name",
        enterFullName: "Enter your full name",
        phoneNumber: "Phone Number",
        numberOfPeople: "Number of People",

        person1: "1 Person",
        people2: "2 People",
        people3: "3 People",
        people4: "4 People",
        people5: "5 People",
        people6: "6+ People",

        chooseBranch: "Choose Branch",
        kabuga: "Kabuga",
        bisenga: "Bisenga",

        chooseRoom: "Choose Room",
        standardRoom: "Standard Room",
        standardRoomText: "Comfortable & welcoming",
        vipRoom: "VIP Room",
        vipRoomText: "Extra comfort & privacy",
        vvipRoom: "VVIP Room",
        vvipRoomText: "Premium accommodation",

        stayDates: "Stay Dates",
        checkIn: "Check-in",
        checkOut: "Check-out",

        specialRequest: "Special Request",
        note: "Note",
        optional: "Optional",
        specialRequestPlaceholder:
            "Any special request for your stay?",

        bookNow: "BOOK NOW",

        bookingNotice:
            "Your booking request will be sent directly to Dream Land Motel via WhatsApp.",

        yourBooking: "YOUR BOOKING",
        staySummary: "Stay Summary",

        branch: "Branch",
        room: "Room",
        people: "People",
        nights: "Nights",
        notSelected: "Not selected",
        estimatedTotal: "Estimated Total",

        summaryNote:
            "Final confirmation and availability will be handled by Dream Land Motel.",

        footerDescription:
            "BAR • RESTAURANT • MOTEL",

        allRights:
            "All rights reserved.",

        language: "Kinyarwanda",

        backHome: "Back to home",
        callDreamLand: "Call Dream Land Motel",

        alertName:
            "Please enter your full name.",

        alertPhone:
            "Please enter a valid Rwanda phone number, for example 0788123456.",

        alertBranch:
            "Please select your preferred branch.",

        alertRoom:
            "Please select a room.",

        alertCheckIn:
            "Please select your check-in date.",

        alertCheckOut:
            "Please select your check-out date.",

        alertDates:
            "Check-out date must be after check-in date.",

        alertNights:
            "Please select valid stay dates."

    },


    rw: {

        brandMain: "DREAM LAND",
        brandSub: "MOTEL",

        introLabel: "DREAM LAND MOTEL",
        introTitle: "Bookinga Amacumbi",
        introText:
            "Hitamo ishami, icyumba n'amatariki wifuza gucumbikamo.",

        reservation: "BOOKING",
        yourStay: "Amacumbi Yawe",

        guestInformation: "Amakuru y'Umushyitsi",
        fullName: "Amazina Yose",
        enterFullName: "Andika amazina yawe yose",
        phoneNumber: "Nimero ya Telefone",
        numberOfPeople: "Umubare w'Abantu",

        person1: "Umuntu 1",
        people2: "Abantu 2",
        people3: "Abantu 3",
        people4: "Abantu 4",
        people5: "Abantu 5",
        people6: "Abantu 6 cyangwa benshi",

        chooseBranch: "Hitamo Ishami",
        kabuga: "Kabuga",
        bisenga: "Bisenga",

        chooseRoom: "Hitamo Icyumba",
        standardRoom: "Icyumba Gisanzwe",
        standardRoomText: "Kimeze neza kandi cyakira neza",
        vipRoom: "Icyumba cya VIP",
        vipRoomText: "Ihumure ryisumbuye n'umutekano",
        vvipRoom: "Icyumba cya VVIP",
        vvipRoomText: "Amacumbi yo ku rwego rwo hejuru",

        stayDates: "Amatariki yo Gucumbikamo",
        checkIn: "Kwinjira",
        checkOut: "Gusohoka",

        specialRequest: "Icyifuzo Cyihariye",
        note: "Icyitonderwa",
        optional: "Ntibitegetswe",
        specialRequestPlaceholder:
            "Hari icyo wifuza cyihariye mu gihe uzaba ucumbitse?",

        bookNow: "BOOKINGA NONAHA",

        bookingNotice:
            "Ubusabe bwawe bwo kubookinga buzoherezwa kuri Dream Land Motel binyuze kuri WhatsApp.",

        yourBooking: "BOOKING YAWE",
        staySummary: "Incamake y'Amacumbi",

        branch: "Ishami",
        room: "Icyumba",
        people: "Abantu",
        nights: "Ijoro",
        notSelected: "Ntabwo wahisemo",
        estimatedTotal: "Igiteranyo Giteganyijwe",

        summaryNote:
            "Kwemeza booking n'uko icyumba kiboneka bizakorwa na Dream Land Motel.",

        footerDescription:
            "BAR • RESTAURANT • MOTEL",

        allRights:
            "Uburenganzira bwose burabitswe.",

        language: "English",

        backHome: "Subira Ahabanza",
        callDreamLand: "Hamagara Dream Land Motel",

        alertName:
            "Andika amazina yawe yose.",

        alertPhone:
            "Andika nimero ya telefone yo mu Rwanda yemewe, urugero 0788123456.",

        alertBranch:
            "Hitamo ishami wifuza.",

        alertRoom:
            "Hitamo icyumba.",

        alertCheckIn:
            "Hitamo itariki yo kwinjiraho.",

        alertCheckOut:
            "Hitamo itariki yo gusohokaho.",

        alertDates:
            "Itariki yo gusohokaho igomba kuba nyuma y'itariki yo kwinjiraho.",

        alertNights:
            "Hitamo amatariki yemewe yo gucumbikamo."

    }

};


/* =====================================================
   TRANSLATION HELPER
===================================================== */

function t(key) {

    return (
        translations[currentLanguage]?.[key] ??
        translations.en[key] ??
        key
    );

}


/* =====================================================
   APPLY TRANSLATIONS
===================================================== */

function translatePage() {

    document.documentElement.lang =
        currentLanguage;


    const elements =
        document.querySelectorAll(
            "[data-translate]"
        );


    elements.forEach(element => {

        const key =
            element.getAttribute(
                "data-translate"
            );

        const translatedText =
            translations[currentLanguage]?.[key];

        if (translatedText !== undefined) {

            element.innerHTML =
                translatedText;

        }

    });


    const placeholderElements =
        document.querySelectorAll(
            "[data-translate-placeholder]"
        );


    placeholderElements.forEach(element => {

        const key =
            element.getAttribute(
                "data-translate-placeholder"
            );

        const translatedText =
            translations[currentLanguage]?.[key];

        if (translatedText !== undefined) {

            element.placeholder =
                translatedText;

        }

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

        const translatedText =
            translations[currentLanguage]?.[key];

        if (translatedText !== undefined) {

            element.title =
                translatedText;

        }

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


    updateSummary();

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
        function (event) {

            event.preventDefault();


            currentLanguage =
                currentLanguage === "en"
                    ? "rw"
                    : "en";


            localStorage.setItem(
                languageStorageKey,
                currentLanguage
            );


            translatePage();

        }
    );

});


/* =====================================================
   BRANCH CONTACTS
===================================================== */

const branchContacts = {

    Kabuga: {
        phone: "0788356146",
        whatsapp: "250788356146"
    },

    Bisenga: {
        phone: "0780696047",
        whatsapp: "250780696047"
    }

};


/* =====================================================
   GET ELEMENTS
===================================================== */

const guestName =
    document.getElementById("guestName");

const guestPhone =
    document.getElementById("guestPhone");

const guestCount =
    document.getElementById("guestCount");


const branchInputs =
    document.querySelectorAll(
        'input[name="branch"]'
    );


const roomInputs =
    document.querySelectorAll(
        'input[name="room"]'
    );


const checkIn =
    document.getElementById("checkIn");

const checkOut =
    document.getElementById("checkOut");


const bookingNote =
    document.getElementById("bookingNote");


const bookNowButton =
    document.getElementById(
        "bookNowButton"
    );


/* =====================================================
   SUMMARY ELEMENTS
===================================================== */

const summaryBranch =
    document.getElementById(
        "summaryBranch"
    );

const summaryRoom =
    document.getElementById(
        "summaryRoom"
    );

const summaryGuests =
    document.getElementById(
        "summaryGuests"
    );

const summaryCheckIn =
    document.getElementById(
        "summaryCheckIn"
    );

const summaryCheckOut =
    document.getElementById(
        "summaryCheckOut"
    );

const summaryNights =
    document.getElementById(
        "summaryNights"
    );

const summaryTotal =
    document.getElementById(
        "summaryTotal"
    );


/* =====================================================
   HEADER / FOOTER PHONE
===================================================== */

const headerPhone =
    document.querySelector(
        ".header-phone"
    );

const footerPhone =
    document.querySelector(
        ".footer-phone"
    );


/* =====================================================
   TODAY'S DATE
===================================================== */

const today =
    new Date();


const todayString =
    today.getFullYear() +
    "-" +
    String(
        today.getMonth() + 1
    ).padStart(2, "0") +
    "-" +
    String(
        today.getDate()
    ).padStart(2, "0");


checkIn.min =
    todayString;

checkOut.min =
    todayString;


/* =====================================================
   GET SELECTED BRANCH
===================================================== */

function getSelectedBranch() {

    const selected =
        document.querySelector(
            'input[name="branch"]:checked'
        );

    return selected
        ? selected.value
        : null;

}


/* =====================================================
   GET SELECTED ROOM
===================================================== */

function getSelectedRoom() {

    const selected =
        document.querySelector(
            'input[name="room"]:checked'
        );


    if (!selected) {

        return null;

    }


    return {

        name: selected.value,

        price: Number(
            selected.dataset.price
        )

    };

}


/* =====================================================
   FORMAT MONEY
===================================================== */

function formatMoney(amount) {

    return (
        amount.toLocaleString("en-US") +
        " Rwf"
    );

}


/* =====================================================
   FORMAT DATE
===================================================== */

function formatDate(dateString) {

    if (!dateString) {

        return "—";

    }


    const date =
        new Date(
            dateString +
            "T00:00:00"
        );


    return date.toLocaleDateString(
        "en-GB",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

}


/* =====================================================
   CALCULATE NIGHTS
===================================================== */

function calculateNights() {

    if (
        !checkIn.value ||
        !checkOut.value
    ) {

        return 0;

    }


    const start =
        new Date(
            checkIn.value +
            "T00:00:00"
        );


    const end =
        new Date(
            checkOut.value +
            "T00:00:00"
        );


    const difference =
        end.getTime() -
        start.getTime();


    const nights =
        Math.ceil(
            difference /
            (1000 * 60 * 60 * 24)
        );


    return nights > 0
        ? nights
        : 0;

}


/* =====================================================
   UPDATE HEADER / FOOTER CONTACT
===================================================== */

function updateContactButtons() {

    const branch =
        getSelectedBranch();


    if (
        !branch ||
        !branchContacts[branch]
    ) {

        return;

    }


    const contact =
        branchContacts[branch];


    /* Header */

    if (headerPhone) {

        headerPhone.href =
            "tel:+250" +
            contact.phone.substring(1);


        headerPhone.setAttribute(
            "aria-label",
            t("callDreamLand") +
            " " +
            branch
        );

    }


    /* Footer */

    if (footerPhone) {

        footerPhone.href =
            "tel:+250" +
            contact.phone.substring(1);


        footerPhone.innerHTML =
            '<i class="fa-solid fa-phone"></i> ' +
            contact.phone;

    }


    /* Floating buttons */

    updateFloatingButtons(
        contact
    );

}


/* =====================================================
   UPDATE SUMMARY
===================================================== */

function updateSummary() {

    if (
        !summaryBranch ||
        !summaryRoom ||
        !summaryGuests ||
        !summaryCheckIn ||
        !summaryCheckOut ||
        !summaryNights ||
        !summaryTotal
    ) {

        return;

    }


    const branch =
        getSelectedBranch();


    const room =
        getSelectedRoom();


    const people =
        guestCount.value;


    const nights =
        calculateNights();


    /* Branch */

    summaryBranch.textContent =
        branch || t("notSelected");


    /* Room */

    summaryRoom.textContent =
        room
            ? room.name + " Room"
            : t("notSelected");


    /* People */

    summaryGuests.textContent =

        people == "1"

            ? t("person1")

            : people == "2"

                ? t("people2")

                : people == "3"

                    ? t("people3")

                    : people == "4"

                        ? t("people4")

                        : people == "5"

                            ? t("people5")

                            : t("people6");


    /* Dates */

    summaryCheckIn.textContent =
        formatDate(
            checkIn.value
        );


    summaryCheckOut.textContent =
        formatDate(
            checkOut.value
        );


    /* Nights */

    summaryNights.textContent =
        nights;


    /* Total */

    let total = 0;


    if (
        room &&
        nights > 0
    ) {

        total =
            room.price *
            nights;

    }


    summaryTotal.textContent =
        formatMoney(total);

}


/* =====================================================
   CHECK-OUT MINIMUM DATE
===================================================== */

checkIn.addEventListener(
    "change",
    function () {

        if (checkIn.value) {

            const selectedDate =
                new Date(
                    checkIn.value +
                    "T00:00:00"
                );


            selectedDate.setDate(
                selectedDate.getDate() + 1
            );


            const minCheckout =
                selectedDate.getFullYear() +
                "-" +
                String(
                    selectedDate.getMonth() + 1
                ).padStart(2, "0") +
                "-" +
                String(
                    selectedDate.getDate()
                ).padStart(2, "0");


            checkOut.min =
                minCheckout;


            if (
                checkOut.value &&
                checkOut.value <=
                checkIn.value
            ) {

                checkOut.value = "";

            }

        }


        updateSummary();

    }
);


/* =====================================================
   UPDATE SUMMARY ON INPUTS
===================================================== */

guestCount.addEventListener(
    "change",
    updateSummary
);


checkOut.addEventListener(
    "change",
    updateSummary
);


branchInputs.forEach(
    function (input) {

        input.addEventListener(
            "change",
            function () {

                updateSummary();

                updateContactButtons();

            }
        );

    }
);


roomInputs.forEach(
    function (input) {

        input.addEventListener(
            "change",
            updateSummary
        );

    }
);


/* =====================================================
   NORMALIZE RWANDA PHONE
===================================================== */

function normalizePhone(phone) {

    let value =
        phone
            .replace(/\s+/g, "")
            .replace(/-/g, "");


    if (
        value.startsWith("+250")
    ) {

        value =
            "0" +
            value.substring(4);

    }


    if (
        value.startsWith("250") &&
        value.length === 12
    ) {

        value =
            "0" +
            value.substring(3);

    }


    return value;

}


/* =====================================================
   VALIDATE PHONE
===================================================== */

function validRwandaPhone(phone) {

    return /^07\d{8}$/.test(
        phone
    );

}


/* =====================================================
   BOOKING VALIDATION
===================================================== */

function validateBooking() {

    const name =
        guestName.value.trim();


    const phone =
        normalizePhone(
            guestPhone.value.trim()
        );


    const branch =
        getSelectedBranch();


    const room =
        getSelectedRoom();


    const nights =
        calculateNights();


    if (!name) {

        alert(
            t("alertName")
        );

        guestName.focus();

        return false;

    }


    if (
        !validRwandaPhone(phone)
    ) {

        alert(
            t("alertPhone")
        );

        guestPhone.focus();

        return false;

    }


    if (!branch) {

        alert(
            t("alertBranch")
        );

        return false;

    }


    if (!room) {

        alert(
            t("alertRoom")
        );

        return false;

    }


    if (!checkIn.value) {

        alert(
            t("alertCheckIn")
        );

        checkIn.focus();

        return false;

    }


    if (!checkOut.value) {

        alert(
            t("alertCheckOut")
        );

        checkOut.focus();

        return false;

    }


    if (
        checkOut.value <=
        checkIn.value
    ) {

        alert(
            t("alertDates")
        );

        checkOut.focus();

        return false;

    }


    if (nights <= 0) {

        alert(
            t("alertNights")
        );

        return false;

    }


    return true;

}


/* =====================================================
   CREATE WHATSAPP MESSAGE
===================================================== */

function createWhatsAppMessage() {

    const name =
        guestName.value.trim();


    const phone =
        normalizePhone(
            guestPhone.value.trim()
        );


    const people =
        guestCount.value;


    const branch =
        getSelectedBranch();


    const room =
        getSelectedRoom();


    const nights =
        calculateNights();


    const total =
        room.price *
        nights;


    const note =
        bookingNote.value.trim();


    const peopleText =

        people == "1"

            ? t("person1")

            : people == "2"

                ? t("people2")

                : people == "3"

                    ? t("people3")

                    : people == "4"

                        ? t("people4")

                        : people == "5"

                            ? t("people5")

                            : t("people6");


    let message =

        "🏨 *DREAM LAND MOTEL — " +
        (
            currentLanguage === "rw"
                ? "BOOKING REQUEST"
                : "BOOKING REQUEST"
        ) +
        "*" +

        "\n\n" +

        "👤 *" +
        (
            currentLanguage === "rw"
                ? "Amazina"
                : "Name"
        ) +
        ":* " +
        name +

        "\n📞 *" +
        (
            currentLanguage === "rw"
                ? "Telefone"
                : "Phone"
        ) +
        ":* " +
        phone +

        "\n👥 *" +
        (
            currentLanguage === "rw"
                ? "Abantu"
                : "People"
        ) +
        ":* " +
        peopleText +

        "\n📍 *" +
        (
            currentLanguage === "rw"
                ? "Ishami"
                : "Branch"
        ) +
        ":* " +
        branch +

        "\n🛏️ *" +
        (
            currentLanguage === "rw"
                ? "Icyumba"
                : "Room"
        ) +
        ":* " +
        room.name +

        "\n💰 *" +
        (
            currentLanguage === "rw"
                ? "Igiciro cy'Icyumba"
                : "Room Rate"
        ) +
        ":* " +
        formatMoney(room.price) +

        "\n📅 *" +
        (
            currentLanguage === "rw"
                ? "Kwinjira"
                : "Check-in"
        ) +
        ":* " +
        formatDate(
            checkIn.value
        ) +

        "\n📅 *" +
        (
            currentLanguage === "rw"
                ? "Gusohoka"
                : "Check-out"
        ) +
        ":* " +
        formatDate(
            checkOut.value
        ) +

        "\n🌙 *" +
        t("nights") +
        ":* " +
        nights +

        "\n💵 *" +
        t("estimatedTotal") +
        ":* " +
        formatMoney(total);


    if (note) {

        message +=

            "\n\n📝 *" +
            (
                currentLanguage === "rw"
                    ? "Icyifuzo Cyihariye"
                    : "Special Request"
            ) +
            ":* " +
            note;

    }


    message +=

        "\n\n" +

        (
            currentLanguage === "rw"
                ? "Turabasaba kwemeza ko icyumba kiboneka no kwemeza booking. Murakoze!"
                : "Please confirm availability and booking details. Thank you!"
        );


    return message;

}


/* =====================================================
   BOOK NOW — WHATSAPP
===================================================== */

bookNowButton.addEventListener(
    "click",
    function () {

        if (
            !validateBooking()
        ) {

            return;

        }


        const branch =
            getSelectedBranch();


        const contact =
            branchContacts[branch];


        const message =
            createWhatsAppMessage();


        const whatsappURL =

            "https://wa.me/" +
            contact.whatsapp +
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


/* =====================================================
   FLOATING BUTTONS
===================================================== */

function createFloatingButtons() {

    const container =
        document.createElement(
            "div"
        );


    container.className =
        "booking-floating-actions";


    /* WhatsApp */

    const whatsapp =
        document.createElement(
            "a"
        );


    whatsapp.className =
        "floating-whatsapp";


    whatsapp.innerHTML =
        '<i class="fa-brands fa-whatsapp"></i>';


    whatsapp.setAttribute(
        "aria-label",
        "WhatsApp Dream Land Motel"
    );


    /* Call */

    const call =
        document.createElement(
            "a"
        );


    call.className =
        "floating-call";


    call.innerHTML =
        '<i class="fa-solid fa-phone"></i>';


    call.setAttribute(
        "aria-label",
        "Call Dream Land Motel"
    );


    container.appendChild(
        whatsapp
    );


    container.appendChild(
        call
    );


    document.body.appendChild(
        container
    );


    return {

        whatsapp,
        call

    };

}


/* =====================================================
   INITIALIZE FLOATING BUTTONS
===================================================== */

const floatingButtons =
    createFloatingButtons();


/* =====================================================
   UPDATE FLOATING BUTTONS
===================================================== */

function updateFloatingButtons(
    contact
) {

    if (!contact) {

        return;

    }


    /* WhatsApp */

    floatingButtons.whatsapp.href =
        "https://wa.me/" +
        contact.whatsapp;


    floatingButtons.whatsapp.target =
        "_blank";


    floatingButtons.whatsapp.rel =
        "noopener noreferrer";


    /* CALL */

    floatingButtons.call.href =
        "tel:" +
        contact.phone;


    floatingButtons.call.removeAttribute(
        "target"
    );


    floatingButtons.call.removeAttribute(
        "rel"
    );

}


/* =====================================================
   DEFAULT CONTACT — KABUGA
===================================================== */

updateContactButtons();


/* =====================================================
   INITIAL TRANSLATION
===================================================== */

translatePage();


/* =====================================================
   INITIAL SUMMARY
===================================================== */

updateSummary();