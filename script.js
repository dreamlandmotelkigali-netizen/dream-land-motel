/* =====================================================
   DREAM LAND MOTEL KIGALI
   SCRIPT.JS — FINAL
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

        function updateMenuIcon(isOpen) {

            const icon =
                menuToggle.querySelector("i");

            if (!icon) {
                return;
            }

            if (isOpen) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

                menuToggle.setAttribute(
                    "aria-label",
                    "Close menu"
                );

            } else {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

                menuToggle.setAttribute(
                    "aria-label",
                    "Open menu"
                );

            }

        }


        function closeMenu() {

            navLinks.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            updateMenuIcon(false);

        }


        function openMenu() {

            navLinks.classList.add("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "true"
            );

            updateMenuIcon(true);

        }


        /* INITIAL STATE */

        closeMenu();


        /* TOGGLE MENU */

        menuToggle.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                const isOpen =
                    navLinks.classList.contains("open");

                if (isOpen) {

                    closeMenu();

                } else {

                    openMenu();

                }

            }
        );


        /* CLOSE WHEN NAV LINK IS CLICKED */

        const navItems =
            navLinks.querySelectorAll("a");


        navItems.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    closeMenu();

                }
            );

        });


        /* CLOSE WHEN CLICKING OUTSIDE */

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


        /* CLOSE WITH ESCAPE */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape" &&
                    navLinks.classList.contains("open")
                ) {

                    closeMenu();

                    menuToggle.focus();

                }

            }
        );


        /* CLOSE ON RESIZE */

        window.addEventListener(
            "resize",
            function () {

                if (window.innerWidth > 700) {

                    closeMenu();

                }

            }
        );

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


            if (
                elementTop <
                windowHeight - 80
            ) {

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


    revealOnScroll();


    /* =================================================
       SERVICE PHOTO ANIMATION
    ================================================= */

    const serviceImages =
        document.querySelectorAll(
            ".service-image img"
        );


    serviceImages.forEach(function (image, index) {

        image.style.transitionDelay =
            (index * 0.08) + "s";

    });


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
       SMOOTH INTERNAL MENU LINK
    ================================================= */

    const menuButton =
        document.querySelector(
            '.hero-button[href="#menu"], .hero-menu-button[href="#menu"]'
        );


    if (menuButton) {

        menuButton.addEventListener(
            "click",
            function (event) {

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

            }
        );

    }


    /* =================================================
       PREVENT EMPTY HASH LINKS
    ================================================= */

    const hashLinks =
        document.querySelectorAll(
            'a[href="#"]'
        );


    hashLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

            }
        );

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
            href
                .split("#")[0]
                .split("?")[0]
                .toLowerCase();


        /*
           Do not remove the HTML active class.
           This simply makes sure the current page
           receives active styling.
        */

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

    document.body.classList.add(
        "page-ready"
    );

});