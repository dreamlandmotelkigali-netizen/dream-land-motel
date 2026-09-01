/* =====================================================
   DREAM LAND MOTEL
   BOOKING SYSTEM
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       ELEMENTS
    ================================================= */

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

    const bookNowButton =
        document.getElementById("bookNowButton");


    /* =================================================
       SUMMARY ELEMENTS
    ================================================= */

    const summaryBranch =
        document.getElementById("summaryBranch");

    const summaryRoom =
        document.getElementById("summaryRoom");

    const summaryGuests =
        document.getElementById("summaryGuests");

    const summaryCheckIn =
        document.getElementById("summaryCheckIn");

    const summaryCheckOut =
        document.getElementById("summaryCheckOut");

    const summaryNights =
        document.getElementById("summaryNights");

    const summaryTotal =
        document.getElementById("summaryTotal");


    /* =================================================
       TODAY'S DATE
    ================================================= */

    const today = new Date();

    const todayString =
        today.toISOString().split("T")[0];

    checkIn.min = todayString;
    checkOut.min = todayString;


    /* =================================================
       FORMAT MONEY
    ================================================= */

    function formatMoney(amount) {

        return amount.toLocaleString("en-US") + " Rwf";

    }


    /* =================================================
       FORMAT DATE
    ================================================= */

    function formatDate(dateValue) {

        if (!dateValue) {
            return "—";
        }

        const date = new Date(dateValue + "T00:00:00");

        return date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });

    }


    /* =================================================
       CALCULATE NIGHTS
    ================================================= */

    function calculateNights() {

        if (!checkIn.value || !checkOut.value) {
            return 0;
        }

        const start =
            new Date(checkIn.value + "T00:00:00");

        const end =
            new Date(checkOut.value + "T00:00:00");

        const difference =
            end.getTime() - start.getTime();

        const nights =
            Math.ceil(
                difference / (1000 * 60 * 60 * 24)
            );

        return nights > 0 ? nights : 0;

    }


    /* =================================================
       GET SELECTED BRANCH
    ================================================= */

    function getSelectedBranch() {

        const selected =
            document.querySelector(
                'input[name="branch"]:checked'
            );

        return selected
            ? selected.value
            : "";

    }


    /* =================================================
       GET SELECTED ROOM
    ================================================= */

    function getSelectedRoom() {

        const selected =
            document.querySelector(
                'input[name="room"]:checked'
            );

        if (!selected) {
            return {
                name: "",
                price: 0
            };
        }

        return {
            name: selected.value,
            price: Number(selected.dataset.price)
        };

    }


    /* =================================================
       UPDATE SUMMARY
    ================================================= */

    function updateSummary() {

        const branch =
            getSelectedBranch();

        const room =
            getSelectedRoom();

        const nights =
            calculateNights();

        const guests =
            guestCount.value;

        const total =
            room.price * nights;


        /* Branch */

        summaryBranch.textContent =
            branch || "Not selected";


        /* Room */

        if (room.name) {

            summaryRoom.textContent =
                room.name;

        } else {

            summaryRoom.textContent =
                "Not selected";

        }


        /* Guests */

        summaryGuests.textContent =
            guests +
            (Number(guests) === 1
                ? " Guest"
                : " Guests");


        /* Dates */

        summaryCheckIn.textContent =
            formatDate(checkIn.value);

        summaryCheckOut.textContent =
            formatDate(checkOut.value);


        /* Nights */

        summaryNights.textContent =
            nights;


        /* Total */

        summaryTotal.textContent =
            formatMoney(total);

    }


    /* =================================================
       BRANCH EVENTS
    ================================================= */

    branchInputs.forEach(function (input) {

        input.addEventListener(
            "change",
            updateSummary
        );

    });


    /* =================================================
       ROOM EVENTS
    ================================================= */

    roomInputs.forEach(function (input) {

        input.addEventListener(
            "change",
            updateSummary
        );

    });


    /* =================================================
       GUEST EVENTS
    ================================================= */

    guestCount.addEventListener(
        "change",
        updateSummary
    );


    /* =================================================
       DATE EVENTS
    ================================================= */

    checkIn.addEventListener(
        "change",
        function () {

            if (checkIn.value) {

                checkOut.min =
                    checkIn.value;

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


    checkOut.addEventListener(
        "change",
        updateSummary
    );


    /* =================================================
       PHONE NUMBER
    ================================================= */

    guestPhone.addEventListener(
        "input",
        function () {

            this.value =
                this.value.replace(/\D/g, "");

        }
    );


    /* =================================================
       BOOK NOW
    ================================================= */

    bookNowButton.addEventListener(
        "click",
        function () {

            const name =
                guestName.value.trim();

            const phone =
                guestPhone.value.trim();

            const branch =
                getSelectedBranch();

            const room =
                getSelectedRoom();

            const guests =
                guestCount.value;

            const nights =
                calculateNights();

            const note =
                bookingNote.value.trim();


            /* =========================================
               VALIDATION
            ========================================= */

            if (!name) {

                alert(
                    "Please enter your full name."
                );

                guestName.focus();

                return;

            }


            if (!phone) {

                alert(
                    "Please enter your phone number."
                );

                guestPhone.focus();

                return;

            }


            if (phone.length < 10) {

                alert(
                    "Please enter a valid Rwandan phone number."
                );

                guestPhone.focus();

                return;

            }


            if (!branch) {

                alert(
                    "Please select a branch."
                );

                return;

            }


            if (!room.name) {

                alert(
                    "Please select a room."
                );

                return;

            }


            if (!checkIn.value) {

                alert(
                    "Please select your check-in date."
                );

                checkIn.focus();

                return;

            }


            if (!checkOut.value) {

                alert(
                    "Please select your check-out date."
                );

                checkOut.focus();

                return;

            }


            if (nights <= 0) {

                alert(
                    "Check-out date must be after check-in date."
                );

                checkOut.focus();

                return;

            }


            /* =========================================
               TOTAL
            ========================================= */

            const total =
                room.price * nights;


            /* =========================================
               WHATSAPP MESSAGE
            ========================================= */

            let message =

`🏨 *DREAM LAND MOTEL*
📋 *NEW BOOKING REQUEST*

━━━━━━━━━━━━━━━━━━

👤 *Guest Information*
Name: ${name}
Phone: ${phone}
Guests: ${guests}

📍 *Branch*
Dream Land Motel — ${branch}

🛏️ *Room*
${room.name}
Rate: ${formatMoney(room.price)} / night

📅 *Stay*
Check-in: ${formatDate(checkIn.value)}
Check-out: ${formatDate(checkOut.value)}
Nights: ${nights}

💰 *Estimated Total*
${formatMoney(total)}`;


            /* =========================================
               OPTIONAL NOTE
            ========================================= */

            if (note) {

                message +=

`

📝 *Special Request*
${note}`;

            }


            message +=

`

━━━━━━━━━━━━━━━━━━

Please confirm room availability and booking.

Thank you.
*Dream Land Motel*`;


            /* =========================================
               WHATSAPP NUMBER
            ========================================= */

            const whatsappNumber =
                "250784365816";


            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(message);


            /* =========================================
               OPEN WHATSAPP
            ========================================= */

            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );


    /* =================================================
       INITIAL SUMMARY
    ================================================= */

    updateSummary();

});