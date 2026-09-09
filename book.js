/* =====================================================
DREAM LAND MOTEL — BOOKING JAVASCRIPT
FINAL VERSION
BILINGUAL SYSTEM + ROOM BOOKING + WHATSAPP
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
    numberOfPeople: "Number of Guests",

    person1: "1 Guest",
    people2: "2 Guests",
    people3: "3 Guests",
    people4: "4 Guests",
    people5: "5 Guests",
    people6: "6+ Guests",

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
    people: "Guests",
    nights: "Nights",
    night: "Night",
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
    introTitle: "Gufata Icyumba",
    introText:
        "Hitamo ishami, icyumba n'amatariki wifuza gucumbikamo.",

    reservation: "GUSABA ICYUMBA",
    yourStay: "Icyumba Ugiye Gucumbikamo",

    guestInformation: "Amakuru y'Umushyitsi",
    fullName: "Amazina Yose",
    enterFullName: "Andika amazina yawe yose",
    phoneNumber: "Nimero ya Telefone",
    numberOfPeople: "Umubare w'Abashyitsi",

    person1: "Umushyitsi 1",
    people2: "Abashyitsi 2",
    people3: "Abashyitsi 3",
    people4: "Abashyitsi 4",
    people5: "Abashyitsi 5",
    people6: "Abashyitsi 6 cyangwa benshi",

    chooseBranch: "Hitamo Ishami",
    kabuga: "Kabuga",
    bisenga: "Bisenga",

    chooseRoom: "Hitamo Icyumba",
    standardRoom: "Icyumba Gisanzwe",
    standardRoomText: "Ihumure kandi cyakira neza",
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

    bookNow: "SABA ICYUMBA NONAHA",

    bookingNotice:
        "Ubusabe bwawe bwo gufata icyumba buzoherezwa kuri Dream Land Motel binyuze kuri WhatsApp.",

    yourBooking: "UBUSABE BW'ICYUMBA",
    staySummary: "Incamake y'Amacumbi",

    branch: "Ishami",
    room: "Icyumba",
    people: "Abashyitsi",
    nights: "Amajoro",
    night: "Ijoro",
    notSelected: "Ntabwo wahisemo",
    estimatedTotal: "Amafaranga Ateganyijwe",

    summaryNote:
        "Kwemeza ubusabe bwawe n'uko icyumba kiboneka bizakorwa na Dream Land Motel.",

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

if (checkIn) {
checkIn.min =
todayString;
}

if (checkOut) {
checkOut.min =
todayString;
}

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
    Number(amount).toLocaleString("en-US") +
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
    !checkIn ||
    !checkOut ||
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


/* HEADER PHONE */

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


/* FOOTER PHONE */

if (footerPhone) {

    footerPhone.href =
        "tel:+250" +
        contact.phone.substring(1);

    footerPhone.innerHTML =
        '<i class="fa-solid fa-phone"></i> ' +
        contact.phone;

}


/* FLOATING BUTTONS */

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
    guestCount
        ? guestCount.value
        : "1";


const nights =
    calculateNights();


/* BRANCH */

summaryBranch.textContent =
    branch || t("notSelected");


/* ROOM */

summaryRoom.textContent =
    room
        ? room.name
        : t("notSelected");


/* PEOPLE */

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


/* DATES */

summaryCheckIn.textContent =
    formatDate(
        checkIn
            ? checkIn.value
            : ""
    );


summaryCheckOut.textContent =
    formatDate(
        checkOut
            ? checkOut.value
            : ""
    );


/* NIGHTS */

summaryNights.textContent =

    nights === 1

        ? `1 ${t("night")}`

        : `${nights} ${t("nights")}`;


/* TOTAL */

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

if (checkIn && checkOut) {

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

}

/* =====================================================
UPDATE SUMMARY ON INPUTS
===================================================== */

if (guestCount) {

guestCount.addEventListener(
    "change",
    updateSummary
);

}

if (checkOut) {

checkOut.addEventListener(
    "change",
    updateSummary
);

}

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
    guestName
        ? guestName.value.trim()
        : "";


const phone =
    guestPhone
        ? normalizePhone(
            guestPhone.value.trim()
        )
        : "";


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

    if (guestName) {
        guestName.focus();
    }

    return false;

}


if (
    !validRwandaPhone(phone)
) {

    alert(
        t("alertPhone")
    );

    if (guestPhone) {
        guestPhone.focus();
    }

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


if (!checkIn || !checkIn.value) {

    alert(
        t("alertCheckIn")
    );

    if (checkIn) {
        checkIn.focus();
    }

    return false;

}


if (!checkOut || !checkOut.value) {

    alert(
        t("alertCheckOut")
    );

    if (checkOut) {
        checkOut.focus();
    }

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


const bookingTitle =

    currentLanguage === "rw"

        ? "UBUSABE BWO GUFATA ICYUMBA"

        : "ROOM BOOKING REQUEST";


const labels = {

    name:
        currentLanguage === "rw"
            ? "Amazina"
            : "Name",

    phone:
        currentLanguage === "rw"
            ? "Telefone"
            : "Phone",

    people:
        currentLanguage === "rw"
            ? "Abashyitsi"
            : "Guests",

    branch:
        currentLanguage === "rw"
            ? "Ishami"
            : "Branch",

    room:
        currentLanguage === "rw"
            ? "Icyumba"
            : "Room",

    roomRate:
        currentLanguage === "rw"
            ? "Igiciro cy'Icyumba"
            : "Room Rate",

    checkIn:
        currentLanguage === "rw"
            ? "Kwinjira"
            : "Check-in",

    checkOut:
        currentLanguage === "rw"
            ? "Gusohoka"
            : "Check-out",

    nights:
        currentLanguage === "rw"
            ? nights === 1
                ? "Ijoro"
                : "Amajoro"
            : nights === 1
                ? "Night"
                : "Nights",

    total:
        currentLanguage === "rw"
            ? "Amafaranga Ateganyijwe"
            : "Estimated Total",

    specialRequest:
        currentLanguage === "rw"
            ? "Icyifuzo Cyihariye"
            : "Special Request"

};


let message =

    "🏨 *DREAM LAND MOTEL — " +
    bookingTitle +
    "*" +

    "\n\n" +

    "👤 *" +
    labels.name +
    ":* " +
    name +

    "\n📞 *" +
    labels.phone +
    ":* " +
    phone +

    "\n👥 *" +
    labels.people +
    ":* " +
    peopleText +

    "\n📍 *" +
    labels.branch +
    ":* " +
    branch +

    "\n🛏️ *" +
    labels.room +
    ":* " +
    room.name +

    "\n💰 *" +
    labels.roomRate +
    ":* " +
    formatMoney(room.price) +

    "\n📅 *" +
    labels.checkIn +
    ":* " +
    formatDate(
        checkIn.value
    ) +

    "\n📅 *" +
    labels.checkOut +
    ":* " +
    formatDate(
        checkOut.value
    ) +

    "\n🌙 *" +
    labels.nights +
    ":* " +
    nights +

    "\n💵 *" +
    labels.total +
    ":* " +
    formatMoney(total);


if (note) {

    message +=

        "\n\n📝 *" +
        labels.specialRequest +
        ":* " +
        note;

}


message +=

    "\n\n" +

    (
        currentLanguage === "rw"

            ? "Turabasaba kwemeza ko icyumba kiboneka no kwemeza ubusabe bwo kugifata. Murakoze!"

            : "Please confirm room availability and booking details. Thank you!"
    );


return message;

}

/* =====================================================
BOOK NOW — WHATSAPP
===================================================== */

if (bookNowButton) {

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


        if (!contact) {

            return;

        }


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

}

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


/* WHATSAPP */

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


/* CALL */

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


/* WHATSAPP */

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

updateFloatingButtons(
branchContacts.Kabuga
);

/* =====================================================
INITIAL TRANSLATION
===================================================== */

translatePage();

/* =====================================================
INITIAL SUMMARY
===================================================== */

updateSummary();