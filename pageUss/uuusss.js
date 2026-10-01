/* =====================================================
   USS - JAVASCRIPT
   Object Oriented Programming
===================================================== */


/* =====================================================
   CHAMPIONSHIP CLASS
===================================================== */

class Championship {

    constructor(year, location, type, image, description) {

        this.year = year;

        this.location = location;

        this.type = type;

        this.image = image;

        this.description = description;

    }


    createHistoryCard() {

        return `

            <article class="history-card">

                <div class="history-photo">

                    <img
                        src="${this.image}"
                        alt="${this.location}"
                        loading="lazy">

                </div>


                <div class="history-info">

                    <span class="history-year">
                        ${this.year}
                    </span>

                    <h3>
                        ${this.location}
                    </h3>

                    <p>
                        ${this.description}
                    </p>

                </div>

            </article>

        `;

    }


    createTitleCard() {

        return `

            <article class="title-card">

                <div class="title-image">

                    <img
                        src="${this.image}"
                        alt="${this.location}"
                        loading="lazy">

                    <span>
                        ${this.year}
                    </span>

                </div>


                <div class="title-content">

                    <small>
                        ${this.type}
                    </small>

                    <h3>
                        ${this.location}
                    </h3>

                    <p>
                        ${this.description}
                    </p>

                </div>

            </article>

        `;

    }

}



/* =====================================================
   CHAMPIONSHIPS DATA
===================================================== */

const championships = [

    new Championship(

        "2019",

        "بسكرة",

        "بطولة وطنية",

        "images/biskra.jpg",

        "شارك النادي في البطولة الوطنية بمدينة بسكرة وحقق نتائج مشرفة على الصعيد الوطني."

    ),


    new Championship(

        "2022",

        "برج بوعريريج",

        "منافسة وطنية",

        "images/bba.jpg",

        "واصل النادي مشاركاته في المنافسات الرياضية بمدينة برج بوعريريج."

    ),


    new Championship(

        "2023",

        "تيزي وزو",

        "منافسة وطنية",

        "images/tizi.jpg",

        "شارك أعضاء النادي في المنافسات بمدينة تيزي وزو."

    ),


    new Championship(

        "2024",

        "الجزائر - بئر توتة",

        "بطولة وطنية",

        "images/birtouta.jpg",

        "شارك اتحاد رياضي سيدي موسى في البطولة الوطنية المقامة بمنطقة بئر توتة."

    ),


    new Championship(

        "2025",

        "سيدي بلعباس",

        "بطولة وطنية",

        "images/sba.jpg",

        "شارك النادي في منافسات سيدي بلعباس محققاً نتائج مشرفة جداً على الصعيد الوطني."

    )

];



/* =====================================================
   RENDER HISTORY
===================================================== */

class HistoryManager {

    constructor(container, data) {

        this.container = container;

        this.data = data;

    }


    render() {

        if (!this.container) return;


        this.container.innerHTML = "";


        this.data.forEach(championship => {

            this.container.innerHTML +=
                championship.createHistoryCard();

        });

    }

}



/* =====================================================
   RENDER TITLES
===================================================== */

class ChampionshipManager {

    constructor(container, data) {

        this.container = container;

        this.data = data;

    }


    render() {

        if (!this.container) return;


        this.container.innerHTML = "";


        this.data.forEach(championship => {

            this.container.innerHTML +=
                championship.createTitleCard();

        });

    }

}



/* =====================================================
   MOBILE MENU
===================================================== */

class MobileMenu {

    constructor(button, menu) {

        this.button = button;

        this.menu = menu;

        this.init();

    }


    init() {

        if (!this.button || !this.menu) return;


        this.button.addEventListener(
            "click",
            () => {

                this.menu.classList.toggle("active");

            }
        );


        const links =
            this.menu.querySelectorAll("a");


        links.forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    this.menu.classList.remove("active");

                }
            );

        });

    }

}



/* =====================================================
   SCROLL EFFECT
===================================================== */

class ScrollEffect {

    constructor() {

        this.init();

    }


    init() {

        const navbar =
            document.querySelector(".navbar");


        window.addEventListener(
            "scroll",
            () => {

                if (window.scrollY > 50) {

                    navbar.style.boxShadow =
                        "0 10px 30px rgba(0,0,0,0.35)";

                } else {

                    navbar.style.boxShadow =
                        "none";

                }

            }
        );

    }

}



/* =====================================================
   INITIALIZATION
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* History */

        const historyContainer =
            document.getElementById(
                "historyItems"
            );


        const historyManager =
            new HistoryManager(
                historyContainer,
                championships
            );


        historyManager.render();



        /* Championships */

        const titlesContainer =
            document.getElementById(
                "titlesGrid"
            );


        const championshipManager =
            new ChampionshipManager(
                titlesContainer,
                championships
            );


        championshipManager.render();



        /* Mobile menu */

        const menuButton =
            document.getElementById(
                "menuBtn"
            );


        const navigation =
            document.getElementById(
                "navMenu"
            );


        new MobileMenu(
            menuButton,
            navigation
        );



        /* Scroll */

        new ScrollEffect();

    }
);
/* ===== Animated Statistics using OOP ===== */


class Statistics {
    constructor() {
        this.numbers = document.querySelectorAll(".stat-number");
        this.started = false;
    }

    animateNumber(element) {
        const target = parseInt(element.getAttribute("data-target"), 10);

        if (Number.isNaN(target)) {
            console.error("data-target غير صحيح:", element);
            return;
        }

        const duration = 1800;
        const startTime = performance.now();

        const update = (currentTime) => {
            const progress = Math.min(
                (currentTime - startTime) / duration,
                1
            );

            const eased = 1 - Math.pow(1 - progress, 3);
            element.textContent = Math.floor(eased * target);

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target;
            }
        };

        requestAnimationFrame(update);
    }

    init() {
        if (this.started) return;
        this.started = true;

        this.numbers.forEach((number) => {
            this.animateNumber(number);
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new Statistics().init();
});