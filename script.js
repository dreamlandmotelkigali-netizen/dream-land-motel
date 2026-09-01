/* =====================================================
   DREAM LAND MOTEL KIGALI
   SCRIPT.JS
   MENU PAGE INTERACTIONS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       PAGE LOADER
    ================================================= */

    const loader = document.getElementById("page-loader");

    if (loader) {

        window.addEventListener("load", function () {

            setTimeout(function () {

                loader.classList.add("hide");

            }, 700);

        });

    }


    /* =================================================
       MOBILE MENU
    ================================================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const navLinks =
        document.getElementById("navLinks");


    if (menuToggle && navLinks) {

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );


        menuToggle.addEventListener("click", function (event) {

            event.stopPropagation();

            const isOpen =
                navLinks.classList.toggle("open");


            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );


            updateMenuIcon(isOpen);

        });


        /* ---------------------------------------------
           CLOSE AFTER CLICKING A LINK
        --------------------------------------------- */

        const navItems =
            navLinks.querySelectorAll("a");


        navItems.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                updateMenuIcon(false);

            });

        });


        /* ---------------------------------------------
           CLOSE WHEN CLICKING OUTSIDE
        --------------------------------------------- */

        document.addEventListener("click", function (event) {

            if (
                navLinks.classList.contains("open") &&
                !navLinks.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                navLinks.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                updateMenuIcon(false);

            }

        });


        /* ---------------------------------------------
           ESCAPE KEY
        --------------------------------------------- */

        document.addEventListener("keydown", function (event) {

            if (
                event.key === "Escape" &&
                navLinks.classList.contains("open")
            ) {

                navLinks.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                updateMenuIcon(false);

            }

        });


        /* ---------------------------------------------
           MENU ICON
        --------------------------------------------- */

        function updateMenuIcon(isOpen) {

            const icon =
                menuToggle.querySelector("i");


            /*
               If the HTML uses Font Awesome
            */

            if (icon) {

                if (isOpen) {

                    icon.classList.remove("fa-bars");

                    icon.classList.add("fa-xmark");

                } else {

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");

                }

                return;

            }


            /*
               If the button is using plain ☰
            */

            if (isOpen) {

                menuToggle.textContent = "×";

            } else {

                menuToggle.textContent = "☰";

            }

        }

    }


    /* =================================================
       SCROLL REVEAL
    ================================================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    function revealOnScroll() {

        const windowHeight =
            window.innerHeight;


        revealElements.forEach(function (element) {

            const elementTop =
                element.getBoundingClientRect().top;


            if (elementTop < windowHeight - 80) {

                element.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        revealOnScroll,
        { passive: true }
    );


    window.addEventListener(
        "load",
        revealOnScroll
    );


    /*
       Run once immediately
    */

    revealOnScroll();


    /* =================================================
       NAVBAR SCROLL EFFECT
    ================================================= */

    const navbar =
        document.querySelector(".navbar");


    function updateNavbar() {

        if (!navbar) {
            return;
        }


        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );


    updateNavbar();


    /* =================================================
       CLOSE MOBILE MENU ON RESIZE
    ================================================= */

    window.addEventListener("resize", function () {

        if (
            window.innerWidth > 768 &&
            navLinks &&
            menuToggle
        ) {

            navLinks.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );


            const icon =
                menuToggle.querySelector("i");


            if (icon) {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            } else {

                menuToggle.textContent = "☰";

            }

        }

    });


    /* =================================================
       SMOOTH MENU ANCHOR
    ================================================= */

    const menuButton =
        document.querySelector('.hero-button[href="#menu"]');


    if (menuButton) {

        menuButton.addEventListener("click", function (event) {

            const target =
                document.getElementById("menu");


            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    }


    /* =================================================
       PREVENT BROKEN EMPTY LINKS
    ================================================= */

    const hashLinks =
        document.querySelectorAll('a[href="#"]');


    hashLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

        });

    });


    /* =================================================
       WHATSAPP LINKS
    ================================================= */

    const whatsappLinks =
        document.querySelectorAll(
            'a[href*="wa.me"]'
        );


    whatsappLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            /*
               WhatsApp opens normally.
               This listener intentionally does not
               prevent the default action.
            */

        });

    });


    /* =================================================
       PHONE LINKS
    ================================================= */

    const phoneLinks =
        document.querySelectorAll(
            'a[href^="tel:"]'
        );


    phoneLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            /*
               Phone links are handled by the device.
            */

        });

    });


    /* =================================================
       PAYMENT LINKS
    ================================================= */

    const paymentLinks =
        document.querySelectorAll(
            '.payment-card[href^="tel:"]'
        );


    paymentLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            /*
               USSD payment opens through the phone dialer.
               No preventDefault here.
            */

        });

    });


    /* =================================================
       ACTIVE NAVIGATION
    ================================================= */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    const navigationLinks =
        document.querySelectorAll(
            ".nav-links a"
        );


    navigationLinks.forEach(function (link) {

        const href =
            link.getAttribute("href");


        if (!href) {
            return;
        }


        const cleanHref =
            href.split("#")[0]
                .split("?")[0]
                .toLowerCase();


        if (
            cleanHref === currentPage ||
            (
                currentPage === "" &&
                cleanHref === "index.html"
            )
        ) {

            link.classList.add("active");

        }

    });


    /* =================================================
       PAGE READY
    ================================================= */

    document.body.classList.add("page-ready");

});