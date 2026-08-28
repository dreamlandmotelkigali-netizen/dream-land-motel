/* =====================================================
   DREAM LAND MOTEL
   MAIN JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       PAGE LOADER
    ================================================= */

    const loader = document.getElementById("page-loader");

    if (loader) {
        window.addEventListener("load", function () {
            setTimeout(function () {
                loader.classList.add("hidden");
            }, 500);
        });
    }


    /* =================================================
       MOBILE MENU
    ================================================= */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("open");

            if (navLinks.classList.contains("open")) {
                menuToggle.innerHTML = "✕";
            } else {
                menuToggle.innerHTML = "☰";
            }

        });


        /* Close menu after clicking a link */

        const navItems = navLinks.querySelectorAll("a");

        navItems.forEach(function (link) {

            link.addEventListener("click", function () {
                navLinks.classList.remove("open");
                menuToggle.innerHTML = "☰";
            });

        });

    }


    /* =================================================
       SCROLL REVEAL
    ================================================= */

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


        revealElements.forEach(function (element) {
            observer.observe(element);
        });

    } else {

        /* Fallback for older browsers */

        revealElements.forEach(function (element) {
            element.classList.add("active");
        });

    }


    /* =================================================
       TEXT SIZE
    ================================================= */

    const smallButton = document.getElementById("fontSmall");
    const normalButton = document.getElementById("fontNormal");
    const largeButton = document.getElementById("fontLarge");


    function setTextSize(size) {

        document.documentElement.style.fontSize = size;

        localStorage.setItem("dreamlandTextSize", size);

    }


    if (smallButton) {

        smallButton.addEventListener("click", function () {
            setTextSize("14px");
        });

    }


    if (normalButton) {

        normalButton.addEventListener("click", function () {
            setTextSize("16px");
        });

    }


    if (largeButton) {

        largeButton.addEventListener("click", function () {
            setTextSize("19px");
        });

    }


    /* =================================================
       REMEMBER TEXT SIZE
    ================================================= */

    const savedTextSize =
        localStorage.getItem("dreamlandTextSize");

    if (savedTextSize) {
        document.documentElement.style.fontSize = savedTextSize;
    }


    /* =================================================
       REMOVE FLOATING ACTIONS
    ================================================= */

    const floatingActions =
        document.querySelector(".floating-actions");

    if (floatingActions) {
        floatingActions.remove();
    }


    /* =================================================
       SMOOTH SCROLL
    ================================================= */

    const anchors =
        document.querySelectorAll('a[href^="#"]');

    anchors.forEach(function (anchor) {

        anchor.addEventListener("click", function (event) {

            const targetId =
                anchor.getAttribute("href");

            if (
                targetId &&
                targetId !== "#"
            ) {

                const target =
                    document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    /* =================================================
       PAGE READY
    ================================================= */

    document.body.classList.add("js-ready");

});