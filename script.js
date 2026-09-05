document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       PAGE LOADER
    ===================================================== */

    const pageLoader =
        document.getElementById("page-loader");


    window.addEventListener("load", function () {

        if (pageLoader) {

            setTimeout(function () {

                pageLoader.classList.add("hide");

            }, 700);

        }

    });


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");


    const navLinks =
        document.getElementById("navLinks");


    function updateMenuIcon() {

        if (!menuToggle || !navLinks) return;


        if (navLinks.classList.contains("open")) {

            menuToggle.textContent = "✕";

            menuToggle.setAttribute(
                "aria-label",
                "Close menu"
            );

        } else {

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open menu"
            );

        }

    }


    function closeMenu() {

        if (!navLinks) return;

        navLinks.classList.remove("open");

        updateMenuIcon();

    }


    function openMenu() {

        if (!navLinks) return;

        navLinks.classList.add("open");

        updateMenuIcon();

    }


    if (menuToggle && navLinks) {

        menuToggle.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();


                if (
                    navLinks.classList.contains("open")
                ) {

                    closeMenu();

                } else {

                    openMenu();

                }

            }
        );


        navLinks
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        closeMenu();

                    }
                );

            });


        document.addEventListener(
            "click",
            function (event) {

                if (
                    navLinks.classList.contains("open") &&
                    !navLinks.contains(event.target) &&
                    !menuToggle.contains(event.target)
                ) {

                    closeMenu();

                }

            }
        );


        document.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Escape") {

                    closeMenu();

                }

            }
        );


        window.addEventListener(
            "resize",
            function () {

                if (window.innerWidth > 700) {

                    closeMenu();

                }

            }
        );

    }


    /* =====================================================
       REVEAL ANIMATION
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    function revealOnScroll() {

        const windowHeight =
            window.innerHeight;


        revealElements.forEach(
            function (element) {

                const elementTop =
                    element.getBoundingClientRect().top;


                if (
                    elementTop <
                    windowHeight - 80
                ) {

                    element.classList.add(
                        "active"
                    );

                }

            }
        );

    }


    window.addEventListener(
        "scroll",
        revealOnScroll,
        { passive: true }
    );


    revealOnScroll();


    /* =====================================================
       SERVICE IMAGE TRANSITION DELAYS
    ===================================================== */

    const serviceImages =
        document.querySelectorAll(
            ".service-image img"
        );


    serviceImages.forEach(
        function (image, index) {

            image.style.transitionDelay =
                (index * 0.08) + "s";

        }
    );


    /* =====================================================
       NAVBAR SCROLL
    ===================================================== */

    const navbar =
        document.querySelector(".navbar");


    function navbarScroll() {

        if (!navbar) return;


        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        navbarScroll,
        { passive: true }
    );


    navbarScroll();


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        link.getAttribute("href");


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        event.preventDefault();

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    document
        .querySelectorAll(".nav-links a")
        .forEach(function (link) {

            const href =
                link.getAttribute("href");


            if (!href) return;

            if (href.startsWith("#")) return;


            const currentPage =
                window.location.pathname
                    .split("/")
                    .pop()
                || "index.html";


            const linkPage =
                href
                    .split("/")
                    .pop();


            if (linkPage === currentPage) {

                link.classList.add("active");

            } else {

                link.classList.remove("active");

            }

        });


    /* =====================================================
       DISABLE EMPTY LINKS
    ===================================================== */

    document
        .querySelectorAll('a[href="#"]')
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                }
            );

        });


    /* =====================================================
       HOME HERO SLIDESHOW
       ONLY hero2.jpg + hero3.jpg
    ===================================================== */

    const hero =
        document.querySelector(".hero");


    const heroSlides = [

        "hero2.jpg",
        "hero3.jpg"

    ];


    let heroIndex = 0;


    /* -----------------------------------------------------
       PRELOAD HERO IMAGES
    ----------------------------------------------------- */

    heroSlides.forEach(function (src) {

        const preloadImage =
            new Image();

        preloadImage.src = src;

    });


    function changeHeroSlide() {

        if (!hero) return;


        const nextImage =
            heroSlides[heroIndex];


        hero.classList.add(
            "hero-changing"
        );


        setTimeout(
            function () {

                hero.style.setProperty(
                    "--hero-slide-image",
                    'url("' +
                    nextImage +
                    '")'
                );


                hero.classList.remove(
                    "hero-changing"
                );

            },
            600
        );


        heroIndex++;


        if (
            heroIndex >=
            heroSlides.length
        ) {

            heroIndex = 0;

        }

    }


    if (hero) {

        hero.style.setProperty(
            "--hero-slide-image",
            'url("' +
            heroSlides[0] +
            '")'
        );


        heroIndex = 1;


        setInterval(
            changeHeroSlide,
            5000
        );

    }


    /* =====================================================
       SERVICE SLIDESHOWS
    ===================================================== */

    const serviceSlideshows = [

        {
            selector:
                ".service-card:nth-child(1) .service-image img",

            images: [
                "rooms1.jpg",
                "rooms2.jpg",
                "rooms3.jpg",
                "rooms4.jpg"
            ]
        },


        {
            selector:
                ".service-card:nth-child(2) .service-image img",

            images: [
                "ibiryo1.jpg",
                "ibiryo2.jpg",
                "ibiryo3.jpg",
                "ibiryo4.jpg"
            ]
        },


        {
            selector:
                ".service-card:nth-child(3) .service-image img",

            images: [
                "sauna1.jpg",
                "sauna2.jpg",
                "sauna3.jpg",
                "sauna4.jpg"
            ]
        },


        {
            selector:
                ".service-card:nth-child(4) .service-image img",

            images: [
                "massage1.jpg",
                "massage2.jpg",
                "massage3.jpg",
                "massage4.jpg"
            ]
        },


        {
            selector:
                ".service-card:nth-child(5) .service-image img",

            images: [
                "bar1.jpg",
                "bar2.jpg",
                "bar3.jpg",
                "bar4.jpg"
            ]
        },


        {
            selector:
                ".service-card:nth-child(6) .service-image img",

            images: [
                "events1.jpg",
                "events2.jpg",
                "events3.jpg",
                "events4.jpg"
            ]
        },


        {
            selector:
                ".service-card:nth-child(7) .service-image img",

            images: [
                "biyari1.jpg",
                "biyari2.jpg",
                "biyari3.jpg",
                "biyari4.jpg"
            ]
        }

    ];


    /* =====================================================
       START SERVICE SLIDESHOWS
    ===================================================== */

    serviceSlideshows.forEach(
        function (slideshow) {

            const image =
                document.querySelector(
                    slideshow.selector
                );


            if (!image) return;


            let currentIndex = 0;


            image.src =
                slideshow.images[currentIndex];


            setInterval(
                function () {

                    image.classList.add(
                        "slideshow-changing"
                    );


                    setTimeout(
                        function () {

                            currentIndex++;


                            if (
                                currentIndex >=
                                slideshow.images.length
                            ) {

                                currentIndex = 0;

                            }


                            image.src =
                                slideshow.images[
                                    currentIndex
                                ];


                            image.classList.remove(
                                "slideshow-changing"
                            );

                        },
                        600
                    );

                },
                4000
            );

        }
    );


    /* =====================================================
       BOOK SPACE
       FLOATING CONTACT BUTTONS
    ===================================================== */

    const spaceBookingForm =
        document.getElementById(
            "spaceBookingForm"
        );


    if (spaceBookingForm) {


        /* =================================================
           FLOATING CONTACT
        ================================================= */

        const floatingPhone =
            document.querySelector(
                ".floating-phone"
            );


        const floatingWhatsapp =
            document.querySelector(
                ".floating-whatsapp"
            );


        /* KABUGA NUMBER */

        const spacePhone =
            "0788356146";


        if (floatingPhone) {

            floatingPhone.href =
                "tel:+250" +
                spacePhone;


            floatingPhone.innerHTML =
                '<i class="fas fa-phone"></i>';


            floatingPhone.setAttribute(
                "aria-label",
                "Call Dream Land Motel"
            );


            floatingPhone.setAttribute(
                "title",
                "Call Dream Land Motel"
            );

        }


        if (floatingWhatsapp) {

            floatingWhatsapp.href =
                "https://wa.me/250" +
                spacePhone;


            floatingWhatsapp.innerHTML =
                '<i class="fab fa-whatsapp"></i>';


            floatingWhatsapp.setAttribute(
                "aria-label",
                "Contact Dream Land Motel on WhatsApp"
            );


            floatingWhatsapp.setAttribute(
                "title",
                "WhatsApp Dream Land Motel"
            );

        }


        /* =================================================
           FORM ELEMENTS
        ================================================= */

        const fullName =
            document.getElementById(
                "fullName"
            );


        const phone =
            document.getElementById(
                "phone"
            );


        const location =
            document.getElementById(
                "location"
            );


        const eventType =
            document.getElementById(
                "eventType"
            );


        const guests =
            document.getElementById(
                "guests"
            );


        const eventDate =
            document.getElementById(
                "eventDate"
            );


        const startTime =
            document.getElementById(
                "startTime"
            );


        const duration =
            document.getElementById(
                "duration"
            );


        const specialRequest =
            document.getElementById(
                "specialRequest"
            );


        const viewMenuBtn =
            document.getElementById(
                "viewMenuBtn"
            );


        const continueBookingBtn =
            document.getElementById(
                "continueBookingBtn"
            );


        const summaryEvent =
            document.getElementById(
                "summaryEvent"
            );


        const summaryGuests =
            document.getElementById(
                "summaryGuests"
            );


        const summaryDate =
            document.getElementById(
                "summaryDate"
            );


        const summaryTime =
            document.getElementById(
                "summaryTime"
            );


        const summaryDuration =
            document.getElementById(
                "summaryDuration"
            );


        const summarySpaceFee =
            document.getElementById(
                "summarySpaceFee"
            );


        const summaryTotal =
            document.getElementById(
                "summaryTotal"
            );


        /* =================================================
           PRICE
           1 HOUR = 5,000 RWF
        ================================================= */

        const pricePerHour =
            5000;


        function formatRWF(amount) {

            return new Intl.NumberFormat(
                "en-RW"
            ).format(amount) +
                " RWF";

        }


        function calculateSpacePrice() {

            const hours =
                Number(
                    duration
                    ? duration.value
                    : 0
                ) || 0;


            return hours *
                pricePerHour;

        }


        /* =================================================
           UPDATE SUMMARY
        ================================================= */

        function updateSpaceSummary() {

            const hours =
                Number(
                    duration
                    ? duration.value
                    : 0
                ) || 0;


            const total =
                calculateSpacePrice();


            if (summaryEvent) {

                summaryEvent.textContent =
                    eventType &&
                    eventType.value
                    ? eventType.value
                    : "Not selected";

            }


            if (summaryGuests) {

                summaryGuests.textContent =
                    guests &&
                    guests.value
                    ? guests.value +
                        " people"
                    : "Not specified";

            }


            if (summaryDate) {

                summaryDate.textContent =
                    eventDate &&
                    eventDate.value
                    ? eventDate.value
                    : "Not selected";

            }


            if (summaryTime) {

                summaryTime.textContent =
                    startTime &&
                    startTime.value
                    ? startTime.value
                    : "Not selected";

            }


            if (summaryDuration) {

                summaryDuration.textContent =
                    hours
                    ? hours +
                        " hour" +
                        (
                            hours > 1
                            ? "s"
                            : ""
                        )
                    : "Not selected";

            }


            if (summarySpaceFee) {

                summarySpaceFee.textContent =
                    formatRWF(total);

            }


            if (summaryTotal) {

                summaryTotal.textContent =
                    formatRWF(total);

            }

        }


        /* =================================================
           FORM CHANGE EVENTS
        ================================================= */

        if (duration) {

            duration.addEventListener(
                "change",
                updateSpaceSummary
            );


            duration.addEventListener(
                "input",
                updateSpaceSummary
            );

        }


        [
            eventType,
            guests,
            eventDate,
            startTime
        ].forEach(
            function (field) {

                if (!field) return;


                field.addEventListener(
                    "change",
                    updateSpaceSummary
                );


                field.addEventListener(
                    "input",
                    updateSpaceSummary
                );

            }
        );


        /* =================================================
           SAVE BOOKING
        ================================================= */

        function saveSpaceBookingData() {

            const bookingData = {

                fullName:
                    fullName
                    ? fullName.value.trim()
                    : "",


                phone:
                    phone
                    ? phone.value.trim()
                    : "",


                location:
                    location
                    ? location.value.trim()
                    : "",


                eventType:
                    eventType
                    ? eventType.value
                    : "",


                guests:
                    guests
                    ? guests.value
                    : "",


                eventDate:
                    eventDate
                    ? eventDate.value
                    : "",


                startTime:
                    startTime
                    ? startTime.value
                    : "",


                duration:
                    duration
                    ? duration.value
                    : "",


                specialRequest:
                    specialRequest
                    ? specialRequest.value.trim()
                    : "",


                spaceFee:
                    calculateSpacePrice()

            };


            localStorage.setItem(
                "dreamLandSpaceBooking",
                JSON.stringify(
                    bookingData
                )
            );

        }


        /* =================================================
           RESTORE BOOKING
        ================================================= */

        function restoreSpaceBookingData() {

            const savedData =
                localStorage.getItem(
                    "dreamLandSpaceBooking"
                );


            if (!savedData) return;


            try {

                const data =
                    JSON.parse(savedData);


                if (
                    fullName &&
                    data.fullName
                ) {

                    fullName.value =
                        data.fullName;

                }


                if (
                    phone &&
                    data.phone
                ) {

                    phone.value =
                        data.phone;

                }


                if (
                    location &&
                    data.location
                ) {

                    location.value =
                        data.location;

                }


                if (
                    eventType &&
                    data.eventType
                ) {

                    eventType.value =
                        data.eventType;

                }


                if (
                    guests &&
                    data.guests
                ) {

                    guests.value =
                        data.guests;

                }


                if (
                    eventDate &&
                    data.eventDate
                ) {

                    eventDate.value =
                        data.eventDate;

                }


                if (
                    startTime &&
                    data.startTime
                ) {

                    startTime.value =
                        data.startTime;

                }


                if (
                    duration &&
                    data.duration
                ) {

                    duration.value =
                        data.duration;

                }


                if (
                    specialRequest &&
                    data.specialRequest
                ) {

                    specialRequest.value =
                        data.specialRequest;

                }


                updateSpaceSummary();

            } catch (error) {

                console.log(
                    "Could not restore booking data."
                );

            }

        }


        /* =================================================
           VIEW MENU
        ================================================= */

        if (viewMenuBtn) {

            viewMenuBtn.addEventListener(
                "click",
                function () {

                    saveSpaceBookingData();


                    window.location.href =
                        "menu.html";

                }
            );

        }


        /* =================================================
           CONTINUE BOOKING
        ================================================= */

        if (continueBookingBtn) {

            continueBookingBtn.addEventListener(
                "click",
                function () {

                    saveSpaceBookingData();


                    const summary =
                        document.querySelector(
                            ".booking-summary-card"
                        );


                    if (summary) {

                        summary.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    }

                }
            );

        }


        /* =================================================
           SUBMIT BOOKING
        ================================================= */

        spaceBookingForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                /* VALIDATION */

                if (
                    !fullName ||
                    !fullName.value.trim()
                ) {

                    alert(
                        "Please enter your full name."
                    );


                    if (fullName)
                        fullName.focus();


                    return;

                }


                if (
                    !phone ||
                    !phone.value.trim()
                ) {

                    alert(
                        "Please enter your telephone number."
                    );


                    if (phone)
                        phone.focus();


                    return;

                }


                if (
                    !eventType ||
                    !eventType.value
                ) {

                    alert(
                        "Please select the type of event."
                    );


                    if (eventType)
                        eventType.focus();


                    return;

                }


                if (
                    !eventDate ||
                    !eventDate.value
                ) {

                    alert(
                        "Please select your event date."
                    );


                    if (eventDate)
                        eventDate.focus();


                    return;

                }


                if (
                    !startTime ||
                    !startTime.value
                ) {

                    alert(
                        "Please select your starting time."
                    );


                    if (startTime)
                        startTime.focus();


                    return;

                }


                if (
                    !duration ||
                    !duration.value
                ) {

                    alert(
                        "Please select how many hours you need."
                    );


                    if (duration)
                        duration.focus();


                    return;

                }


                /* SAVE */

                saveSpaceBookingData();


                /* CALCULATE */

                const hours =
                    Number(
                        duration.value
                    );


                const total =
                    calculateSpacePrice();


                /* =================================================
                   WHATSAPP MESSAGE
                ================================================= */

                const message =

                    "🎉 DREAM LAND MOTEL — SPACE BOOKING" +

                    "\n\n" +

                    "👤 Full Name: " +
                    fullName.value.trim() +

                    "\n📞 Phone: " +
                    phone.value.trim() +

                    "\n📍 Location: " +
                    (
                        location &&
                        location.value.trim()
                        ? location.value.trim()
                        : "Not provided"
                    ) +

                    "\n\n🎊 Event: " +
                    eventType.value +

                    "\n👥 Guests: " +
                    (
                        guests &&
                        guests.value
                        ? guests.value
                        : "Not specified"
                    ) +

                    "\n📅 Date: " +
                    eventDate.value +

                    "\n⏰ Start Time: " +
                    startTime.value +

                    "\n⌛ Duration: " +
                    hours +
                    " hour" +
                    (
                        hours > 1
                        ? "s"
                        : ""
                    ) +

                    "\n💰 Space Fee: " +
                    formatRWF(total) +

                    "\n\n📝 Special Request:" +

                    "\n" +
                    (
                        specialRequest &&
                        specialRequest.value.trim()
                        ? specialRequest.value.trim()
                        : "No special request provided."
                    ) +

                    "\n\n" +

                    "⚠️ Space fee only. " +
                    "Food, drinks, decoration, sound " +
                    "and other services are not included " +
                    "in this total." +

                    "\n\n" +

                    "Please contact me to confirm " +
                    "the booking and the price of my " +
                    "special requests.";


                /* =================================================
                   WHATSAPP NUMBER
                ================================================= */

                const whatsappNumber =
                    "250788356146";


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


        /* =================================================
           INITIALIZE BOOK SPACE
        ================================================= */

        restoreSpaceBookingData();

        updateSpaceSummary();

    }


    /* =====================================================
       PAGE READY
    ===================================================== */

    document.body.classList.add(
        "page-ready"
    );

});