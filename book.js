/* =====================================================
   DREAM LAND MOTEL — BOOKING JAVASCRIPT
===================================================== */


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

const guestName = document.getElementById("guestName");
const guestPhone = document.getElementById("guestPhone");
const guestCount = document.getElementById("guestCount");

const branchInputs = document.querySelectorAll(
    'input[name="branch"]'
);

const roomInputs = document.querySelectorAll(
    'input[name="room"]'
);

const checkIn = document.getElementById("checkIn");
const checkOut = document.getElementById("checkOut");

const bookingNote = document.getElementById("bookingNote");

const bookNowButton = document.getElementById(
    "bookNowButton"
);


/* =====================================================
   SUMMARY ELEMENTS
===================================================== */

const summaryBranch = document.getElementById(
    "summaryBranch"
);

const summaryRoom = document.getElementById(
    "summaryRoom"
);

const summaryGuests = document.getElementById(
    "summaryGuests"
);

const summaryCheckIn = document.getElementById(
    "summaryCheckIn"
);

const summaryCheckOut = document.getElementById(
    "summaryCheckOut"
);

const summaryNights = document.getElementById(
    "summaryNights"
);

const summaryTotal = document.getElementById(
    "summaryTotal"
);


/* =====================================================
   HEADER / FOOTER PHONE
===================================================== */

const headerPhone = document.querySelector(
    ".header-phone"
);

const footerPhone = document.querySelector(
    ".footer-phone"
);


/* =====================================================
   TODAY'S DATE
===================================================== */

const today = new Date();

const todayString =
    today.getFullYear() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(today.getDate()).padStart(2, "0");


checkIn.min = todayString;
checkOut.min = todayString;


/* =====================================================
   GET SELECTED BRANCH
===================================================== */

function getSelectedBranch() {

    const selected = document.querySelector(
        'input[name="branch"]:checked'
    );

    return selected ? selected.value : null;

}


/* =====================================================
   GET SELECTED ROOM
===================================================== */

function getSelectedRoom() {

    const selected = document.querySelector(
        'input[name="room"]:checked'
    );

    if (!selected) {
        return null;
    }

    return {
        name: selected.value,
        price: Number(selected.dataset.price)
    };

}


/* =====================================================
   FORMAT MONEY
===================================================== */

function formatMoney(amount) {

    return amount.toLocaleString("en-US") + " Rwf";

}


/* =====================================================
   FORMAT DATE
===================================================== */

function formatDate(dateString) {

    if (!dateString) {
        return "—";
    }

    const date = new Date(
        dateString + "T00:00:00"
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

    if (!checkIn.value || !checkOut.value) {
        return 0;
    }

    const start = new Date(
        checkIn.value + "T00:00:00"
    );

    const end = new Date(
        checkOut.value + "T00:00:00"
    );

    const difference =
        end.getTime() - start.getTime();

    const nights =
        Math.ceil(
            difference / (1000 * 60 * 60 * 24)
        );

    return nights > 0 ? nights : 0;

}


/* =====================================================
   UPDATE HEADER / FOOTER CONTACT
===================================================== */

function updateContactButtons() {

    const branch = getSelectedBranch();

    if (!branch || !branchContacts[branch]) {
        return;
    }

    const contact = branchContacts[branch];


    /* Header */

    if (headerPhone) {

        headerPhone.href =
            "tel:+250" + contact.phone.substring(1);

        headerPhone.setAttribute(
            "aria-label",
            "Call Dream Land Motel " + branch
        );

    }


    /* Footer */

    if (footerPhone) {

        footerPhone.href =
            "tel:+250" + contact.phone.substring(1);

        footerPhone.innerHTML =
            '<i class="fa-solid fa-phone"></i> ' +
            contact.phone;

    }


    /* Floating buttons */

    updateFloatingButtons(contact);

}


/* =====================================================
   UPDATE SUMMARY
===================================================== */

function updateSummary() {

    const branch = getSelectedBranch();
    const room = getSelectedRoom();

    const people = guestCount.value;

    const nights = calculateNights();


    /* Branch */

    summaryBranch.textContent =
        branch || "Not selected";


    /* Room */

    summaryRoom.textContent =
        room ? room.name + " Room" : "Not selected";


    /* People */

    summaryGuests.textContent =
        people == "1"
            ? "1 Person"
            : people == "6"
                ? "6+ People"
                : people + " People";


    /* Dates */

    summaryCheckIn.textContent =
        formatDate(checkIn.value);

    summaryCheckOut.textContent =
        formatDate(checkOut.value);


    /* Nights */

    summaryNights.textContent =
        nights;


    /* Total */

    let total = 0;

    if (room && nights > 0) {

        total = room.price * nights;

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
                    checkIn.value + "T00:00:00"
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

            checkOut.min = minCheckout;


            if (
                checkOut.value &&
                checkOut.value <= checkIn.value
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

    if (value.startsWith("+250")) {

        value =
            "0" + value.substring(4);

    }

    if (
        value.startsWith("250") &&
        value.length === 12
    ) {

        value =
            "0" + value.substring(3);

    }

    return value;

}


/* =====================================================
   VALIDATE PHONE
===================================================== */

function validRwandaPhone(phone) {

    return /^07\d{8}$/.test(phone);

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
            "Please enter your full name."
        );

        guestName.focus();

        return false;

    }


    if (!validRwandaPhone(phone)) {

        alert(
            "Please enter a valid Rwanda phone number, for example 0788123456."
        );

        guestPhone.focus();

        return false;

    }


    if (!branch) {

        alert(
            "Please select your preferred branch."
        );

        return false;

    }


    if (!room) {

        alert(
            "Please select a room."
        );

        return false;

    }


    if (!checkIn.value) {

        alert(
            "Please select your check-in date."
        );

        checkIn.focus();

        return false;

    }


    if (!checkOut.value) {

        alert(
            "Please select your check-out date."
        );

        checkOut.focus();

        return false;

    }


    if (checkOut.value <= checkIn.value) {

        alert(
            "Check-out date must be after check-in date."
        );

        checkOut.focus();

        return false;

    }


    if (nights <= 0) {

        alert(
            "Please select valid stay dates."
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
        room.price * nights;

    const note =
        bookingNote.value.trim();


    const peopleText =
        people == "1"
            ? "1 Person"
            : people == "6"
                ? "6+ People"
                : people + " People";


    let message =

        "🏨 *DREAM LAND MOTEL — BOOKING REQUEST*" +
        "\n\n" +

        "👤 *Name:* " +
        name +

        "\n📞 *Phone:* " +
        phone +

        "\n👥 *People:* " +
        peopleText +

        "\n📍 *Branch:* " +
        branch +

        "\n🛏️ *Room:* " +
        room.name +

        "\n💰 *Room Rate:* " +
        formatMoney(room.price) +

        "\n📅 *Check-in:* " +
        formatDate(checkIn.value) +

        "\n📅 *Check-out:* " +
        formatDate(checkOut.value) +

        "\n🌙 *Nights:* " +
        nights +

        "\n💵 *Estimated Total:* " +
        formatMoney(total);


    if (note) {

        message +=
            "\n\n📝 *Special Request:* " +
            note;

    }


    message +=
        "\n\n" +
        "Please confirm availability and booking details. Thank you!";


    return message;

}


/* =====================================================
   BOOK NOW — WHATSAPP
===================================================== */

bookNowButton.addEventListener(
    "click",
    function () {

        if (!validateBooking()) {
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
            encodeURIComponent(message);


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
        document.createElement("div");

    container.className =
        "booking-floating-actions";


    /* WhatsApp */

    const whatsapp =
        document.createElement("a");

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
        document.createElement("a");

    call.className =
        "floating-call";

    call.innerHTML =
        '<i class="fa-solid fa-phone"></i>';


    call.setAttribute(
        "aria-label",
        "Call Dream Land Motel"
    );


    container.appendChild(whatsapp);
    container.appendChild(call);

    document.body.appendChild(container);


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

function updateFloatingButtons(contact) {

    if (!contact) {
        return;
    }

    /* WhatsApp */

    floatingButtons.whatsapp.href =
        "https://wa.me/" + contact.whatsapp;

    floatingButtons.whatsapp.target =
        "_blank";

    floatingButtons.whatsapp.rel =
        "noopener noreferrer";


    /* CALL */

    floatingButtons.call.href =
        "tel:" + contact.phone;

    floatingButtons.call.removeAttribute("target");
    floatingButtons.call.removeAttribute("rel");

}


/* =====================================================
   DEFAULT CONTACT — KABUGA
===================================================== */

updateContactButtons();


/* =====================================================
   INITIAL SUMMARY
===================================================== */

updateSummary();