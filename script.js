document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");
    const menuButton = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", () => {
            const expanded = menuButton.getAttribute("aria-expanded") === "true";
            menuButton.setAttribute("aria-expanded", String(!expanded));
            navLinks.classList.toggle("active");
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                menuButton.setAttribute("aria-expanded", "false");
                navLinks.classList.remove("active");
            });
        });
    }

    const syncHeaderState = () => {
        if (!header) {
            return;
        }

        header.classList.toggle("scrolled", window.scrollY > 12);
    };

    syncHeaderState();
    window.addEventListener("scroll", syncHeaderState, { passive: true });

    if (prefersReducedMotion) {
        document.querySelectorAll(".reveal").forEach((element) => {
            element.classList.add("is-visible");
        });
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.14,
        rootMargin: "0px 0px -40px 0px"
    });

    document.querySelectorAll(".reveal").forEach((element) => {
        observer.observe(element);
    });
});
