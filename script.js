/* =========================================================
   SHRISTY SHARAN — WEBSITE JAVASCRIPT
========================================================= */


/* ================= SITE CONFIG ================= */

const siteConfig = {

    name: "Shristy Sharan",

    location: "Patna, Bihar, India",

    email: "angelshristy2@gmail.com",

    social: {

        instagram:
            "https://www.instagram.com/shristy_sharan1206/",

        youtube:
            "https://www.youtube.com/@ShristyAngel-fi3th",

        threads:
            "https://www.threads.com/@shristy_sharan1206"

    },

    /*
        Add REAL YouTube video IDs here.

        Example:

        {
            id: "dQw4w9WgXcQ",
            title: "My Mini Vlog",
            description: "A little day from my life."
        }

    */

    youtubeVideos: [

        // Add videos here

    ]

};


/* ================= DOM ================= */

const body = document.body;

const header = document.getElementById("header");

const navMenu = document.getElementById("navMenu");

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.querySelectorAll(".nav-link");

const revealElements = document.querySelectorAll(".reveal");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const lightboxClose = document.getElementById("lightboxClose");

const galleryItems = document.querySelectorAll(".gallery-item");

const videoGrid = document.getElementById("videoGrid");


/* ================= PRELOADER ================= */

window.addEventListener("load", () => {

    const preloader = document.querySelector(".preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 700);

});


/* ================= HEADER SCROLL ================= */

function handleHeader() {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", handleHeader);

handleHeader();


/* ================= MOBILE NAVIGATION ================= */

function toggleMenu() {

    navMenu.classList.toggle("active");

    body.classList.toggle("no-scroll");

}

menuToggle.addEventListener("click", toggleMenu);


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        body.classList.remove("no-scroll");

    });

});


/* ================= SCROLL REVEAL ================= */

const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("main section[id]");

const sectionObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const currentId = entry.target.getAttribute("id");

                navLinks.forEach(link => {

                    link.classList.remove("active");

                    const href = link.getAttribute("href");

                    if (href === `#${currentId}`) {

                        link.classList.add("active");

                    }

                });

            }

        });

    },

    {
        threshold: 0.35
    }

);


sections.forEach(section => {

    sectionObserver.observe(section);

});


/* ================= GALLERY LIGHTBOX ================= */

galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        const imagePath = item.dataset.image;

        if (!imagePath) return;

        lightboxImage.src = imagePath;

        lightbox.classList.add("active");

        body.classList.add("no-scroll");

    });

});


function closeLightbox() {

    lightbox.classList.remove("active");

    body.classList.remove("no-scroll");

    setTimeout(() => {

        lightboxImage.src = "";

    }, 300);

}


lightboxClose.addEventListener("click", closeLightbox);


lightbox.addEventListener("click", event => {

    if (event.target === lightbox) {

        closeLightbox();

    }

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeLightbox();

    }

});


/* ================= YOUTUBE ================= */

function renderYouTubeVideos() {

    if (!videoGrid) return;

    /*
        If no videos are configured,
        show a clean channel CTA.
    */

    if (
        !siteConfig.youtubeVideos ||
        siteConfig.youtubeVideos.length === 0
    ) {

        videoGrid.innerHTML = `

            <article class="video-card">

                <div class="video-thumbnail">

                    <img
                        src="../images/video1.jpg"
                        alt="Shristy Sharan Vlogs"
                        loading="lazy"
                    >

                    <a
                        href="https://youtu.be/tRK4K-rDT5Y"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="video-play"
                        aria-label="Open YouTube channel"
                    >

                        <i class="fa-solid fa-play"></i>

                    </a>

                </div>

                <div class="video-info">

                    <h3>
                        Shristy Sharan Vlogs
                    </h3>

                    <p>
                        Daily vlogs · Mini vlogs · Real life moments
                    </p>

                </div>

            </article>

            <article class="video-card">

                <div class="video-thumbnail">

                    <img
                        src="../images/video2.jpg"
                        alt="Daily vlog"
                        loading="lazy"
                    >

                    <a
                        href="https://youtu.be/CepZ5-EuhFw"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="video-play"
                        aria-label="Watch on YouTube"
                    >

                        <i class="fa-solid fa-play"></i>

                    </a>

                </div>

                <div class="video-info">

                    <h3>
                        Daily Life & Little Moments
                    </h3>

                    <p>
                        Simple moments worth remembering.
                    </p>

                </div>

            </article>

            <article class="video-card">

                <div class="video-thumbnail">

                    <img
                        src="../images/video3.jpg"
                        alt="Mini vlog"
                        loading="lazy"
                    >

                    <a
                        href="https://youtu.be/hsG_F9NgNKI"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="video-play"
                        aria-label="Watch on YouTube"
                    >

                        <i class="fa-solid fa-play"></i>

                    </a>

                </div>

                <div class="video-info">

                    <h3>
                        Mini Vlogs
                    </h3>

                    <p>
                        Travel, masti and everyday memories.
                    </p>

                </div>

            </article>

        `;

        return;

    }


    /*
        Render configured real videos.
    */

    siteConfig.youtubeVideos.forEach(video => {

        const article = document.createElement("article");

        article.className = "video-card reveal";

        article.innerHTML = `

            <div class="video-thumbnail">

                <img
                    src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg"
                    alt="${video.title}"
                    loading="lazy"
                >

                <a
                    href="https://www.youtube.com/watch?v=${video.id}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="video-play"
                    aria-label="Watch ${video.title}"
                >

                    <i class="fa-solid fa-play"></i>

                </a>

            </div>

            <div class="video-info">

                <h3>
                    ${video.title}
                </h3>

                <p>
                    ${video.description || ""}
                </p>

            </div>

        `;

        videoGrid.appendChild(article);

    });

}


renderYouTubeVideos();


/* ================= EMAIL CTA ================= */

function setupEmailActions() {

    const emailLinks =
        document.querySelectorAll(
            'a[href^="mailto:"]'
        );

    emailLinks.forEach(link => {

        link.addEventListener("click", () => {

            console.log(
                `Opening email for ${siteConfig.email}`
            );

        });

    });

}

setupEmailActions();


/* ================= PARALLAX ================= */

const heroImage =
    document.querySelector(".hero-image");

const quoteImage =
    document.querySelector(".quote-background img");


function handleParallax() {

    /*
        Disable on smaller screens.
    */

    if (window.innerWidth <= 768) return;


    const scrollY = window.scrollY;


    if (heroImage && scrollY < window.innerHeight) {

        heroImage.style.transform =
            `translateY(${scrollY * 0.12}px) scale(1.02)`;

    }


    if (quoteImage) {

        const rect =
            quoteImage.getBoundingClientRect();

        if (
            rect.top < window.innerHeight &&
            rect.bottom > 0
        ) {

            const offset =
                (window.innerHeight - rect.top) * 0.05;

            quoteImage.style.transform =
                `translateY(${offset}px) scale(1.05)`;

        }

    }

}


window.addEventListener(
    "scroll",
    handleParallax,
    { passive: true }
);


/* ================= SMOOTH ANCHORS ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) return;

        const target =
            document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* ================= IMAGE FALLBACK ================= */

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("error", () => {

        /*
            Prevent broken-image icons.
            Replace this later with actual images.
        */

        img.style.background =
            "#e7d5d2";

        img.style.objectFit =
            "cover";

        console.warn(
            "Image not found:",
            img.src
        );

    });

});


/* ================= BUTTON MICRO INTERACTION ================= */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transition =
            "transform .3s ease";

    });

});


/* ================= INITIALIZATION ================= */

document.addEventListener("DOMContentLoaded", () => {

    handleHeader();

    renderYouTubeVideos();

});

/* ================= THEME SYSTEM ================= */

const themeButtons =
    document.querySelectorAll(".theme-btn");

const savedTheme =
    localStorage.getItem("shristy-theme") || "auto";


function getAutoTheme() {

    const hour = new Date().getHours();

    /*
        Day:
        06:00 - 18:00

        Night:
        18:00 - 06:00
    */

    return (
        hour >= 6 &&
        hour < 18
    )
        ? "day"
        : "night";

}


function applyTheme(theme) {

    let actualTheme = theme;

    if (theme === "auto") {

        actualTheme = getAutoTheme();

    }

    document.documentElement.setAttribute(
        "data-theme",
        actualTheme
    );

    themeButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.theme === theme
        );

    });

    localStorage.setItem(
        "shristy-theme",
        theme
    );

}


themeButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedTheme =
            button.dataset.theme;

        applyTheme(selectedTheme);

    });

});


applyTheme(savedTheme);


/*
    If AUTO mode is selected,
    check the time periodically so
    the theme can change automatically.
*/

setInterval(() => {

    if (
        localStorage.getItem("shristy-theme")
        === "auto"
    ) {

        applyTheme("auto");

    }

}, 60000);

/* =========================================================
   END
========================================================= */
