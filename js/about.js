
document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector(".navbar");
    const backToTop = document.getElementById("backToTop");
    const year = document.getElementById("year");

    // Automatically update copyright year
    year.textContent = new Date().getFullYear();

    // Navbar and back-to-top scroll effects
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // Back to top
    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Automatically close mobile menu after clicking a link
    const navLinks = document.querySelectorAll(
        ".navbar-nav .nav-link"
    );

    const navbarMenu = document.getElementById("navbarMenu");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            link.classList.add("active");

            if (
                window.innerWidth < 992 &&
                typeof bootstrap !== "undefined"
            ) {
                const menu = bootstrap.Collapse.getInstance(
                    navbarMenu
                );

                if (menu) {
                    menu.hide();
                }
            }
        });
    });

});
