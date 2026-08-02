/* =====================================================
   Personal Resume Website
   Version : V1.0
   Part    : 1 / 3
===================================================== */

/* ===============================
   返回顶部按钮
================================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ===============================
   深色模式
================================= */

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

});


/* ===============================
   导航栏滚动效果
================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.height = "70px";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        navbar.style.height = "80px";
        navbar.style.boxShadow = "none";

    }

});


/* ===============================
   当前导航高亮
================================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top &&
            window.scrollY < top + height) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ===============================
   首页数字动画
================================= */

const numbers = document.querySelectorAll(".data h3");

numbers.forEach(number => {

    const target = parseInt(number.textContent);

    if (isNaN(target)) return;

    let count = 0;

    const timer = setInterval(() => {

        count++;

        number.textContent = count + "+";

        if (count >= target) {

            clearInterval(timer);

            if (number.textContent.includes("100")) {

                number.textContent = "100%";

            }

        }

    }, 40);

});
/* =====================================================
   Part 2 / 3
   Scroll Animation / Progress / Mobile Menu
===================================================== */

/* ===============================
   页面滚动出现动画
================================= */

const revealElements = document.querySelectorAll(
    ".about-content, .about-image, .skill-box, .project-card, .timeline-item, .certificate-card, .contact-card"
);

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);


/* ===============================
   技能条动画
================================= */

const progressBars = document.querySelectorAll(".progress span");

function progressAnimation() {

    progressBars.forEach(bar => {

        const width = bar.style.width;

        bar.style.width = "0";

        setTimeout(() => {

            bar.style.width = width;

        }, 300);

    });

}

window.addEventListener("load", progressAnimation);


/* ===============================
   图片鼠标跟随效果
================================= */

const heroImage = document.querySelector(".hero-right img");

if (heroImage) {

    heroImage.addEventListener("mousemove", (e) => {

        const rect = heroImage.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x - rect.width / 2) / 25;

        const rotateX = -(y - rect.height / 2) / 25;

        heroImage.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.04)`;

    });

    heroImage.addEventListener("mouseleave", () => {

        heroImage.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) scale(1)";

    });

}


/* ===============================
   手机菜单
================================= */

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("showMenu");

    });

}


/* ===============================
   点击菜单自动关闭
================================= */

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("showMenu");

    });

});


/* ===============================
   页面加载完成动画
================================= */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});
/* =====================================================
   Personal Resume Website
   Version : V1.0
   Part    : 3 / 3
===================================================== */

/* ===============================
   平滑滚动
================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});


/* ===============================
   深色模式记忆
================================= */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    if (themeBtn) {

        themeBtn.textContent = "☀️";

    }

}

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

        } else {

            localStorage.setItem("theme", "light");

        }

    });

}


/* ===============================
   ESC 键关闭手机菜单
================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        navMenu.classList.remove("showMenu");

    }

});


/* ===============================
   Home 键返回顶部
================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Home") {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

});


/* ===============================
   页面加载完成
================================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/* ===============================
   图片加载动画
================================= */

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("load", () => {

        img.style.opacity = "1";

        img.style.transform = "scale(1)";

    });

});


/* ===============================
   控制台欢迎信息
================================= */

console.log("%c欢迎来到个人简历网站！", "color:#2563eb;font-size:20px;font-weight:bold;");

console.log("%cDesigned by Wang Wei", "color:#64748b;font-size:14px;");


/* ===============================
   页面初始化
================================= */

function initWebsite() {

    console.log("Website Ready!");

}

initWebsite();