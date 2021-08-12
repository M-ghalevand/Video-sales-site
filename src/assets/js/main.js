// Set the date we're counting down to
const countDownDate = new Date("August 1, 2023 15:37:25").getTime();

// Update the count down every 1 second
const x = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    // document.getElementById("demo").innerHTML ='<span id="day">'+ days + '</span>' +  '<span id="hours">'+ hours + '</span>'
    // + '<span id="minutes">'+ minutes + '</span>' + '<span id="seconds">'+ seconds + '</span>';
    const z = document.getElementsByClassName("demos");
    for (let i = 0; i < z.length; i++) {
        z[i].innerHTML =
            '<span id="day">' +
            days +
            "</span>" +
            '<span id="hours">' +
            hours +
            "</span>" +
            '<span id="minutes">' +
            minutes +
            "</span>" +
            '<span id="seconds">' +
            seconds +
            "</span>";
    }

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        // document.getElementById("demo").innerHTML = "";
        const y = document.getElementsByClassName("demos");
        for (let i = 0; i < z.length; i++) {
            y[i].innerHTML = "مهلت تخفیف به پایان رسیده است";
        }

        // document.getElementById("after-expire").setAttribute("id","offer-expire-text");
        const g = document.getElementsByClassName("after-expire");
        for (let i = 0; i < z.length; i++) {
            g[i].classList.add("offer-expire-text");
        }

        // document.getElementById("offer-expire-text-inner").innerHTML = "پیشنهاد ویژه این محصول به پایان رسیده!";
        const d = document.getElementsByClassName("offer-expire-text-inner");
        for (let i = 0; i < z.length; i++) {
            d[i].innerHTML = "پیشنهاد ویژه این محصول به پایان رسیده!";
            d[i].classList.add("badge")
        }

        // document.getElementById("offer-blur").style.filter = "blur(2px)";
        const t = document.getElementsByClassName("offer-blur");
        for (let i = 0; i < z.length; i++) {
            t[i].style.filter = "blur(2px)";
        }
    }
}, 1000);

// owl.carousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        rtl:true,
        items: 4,
        loop: true,
        margin: 0,
        nav:true,
        dots:false,
        center: true,
        autoplay: true,
        slideBy:3,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                center: false,
            },
            1200:{
                items:4,
                nav:true,

            }
        }
    });
});