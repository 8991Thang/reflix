$("#team-carousel").owlCarousel({
    loop:true,
    margin:10,
    items: 2,
    nav:true,
    autoplay: true,
    autoPlaySpeed: 5000,
    autoPlayTimeout: 5000,
    autoplayHoverPause: true,
    // stagePadding: 50,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        },
        1500:{
            items:4
        }
    }
});



$("#works-carousel").owlCarousel({  
    loop:true,
    items: 2,
    autoplay: true,
    autoPlaySpeed: 5000,
    autoPlayTimeout: 5000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
        1500:{
            items:1
        }
    }
});
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

//preloader
window.addEventListener("load", () => {
    const preload = document.querySelector(".preload");
    preload.classList.add("preload-finish");
  });
// phao hoa de
