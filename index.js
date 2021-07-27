// For Hamburger Icon

let hamburger = $('.hamburger');
let navbar = $('nav ul');
let hamImageChange = 1;
hamburger.click(() => {
    navbar.toggleClass("active-nav");
    if (hamImageChange === 0) {
        hamburger.attr('src', 'images/icon-hamburger.svg');
        hamImageChange = 1;
    }
    else {
        hamburger.attr('src', 'images/icon-close.svg');
        hamImageChange = 0;
    }
})

// To change the images to mobile version when screen-width is below 400

if ($(window).width() < 400) {
    $('.intro-img').attr('src', "images/image-intro-mobile.jpg")
    $('header div:last-child img:first-child').attr('src', 'images/bg-pattern-intro-right-mobile.svg');
    $('header div:first-child img').attr('src', 'images/bg-pattern-intro-left-mobile.svg');
}