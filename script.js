var navIcons = document.getElementsByClassName('hero__nav');
var mobileToggle = document.querySelector('.mobile-nav-toggle');

mobileToggle.addEventListener('click', function() {
    if (navIcons[0].classList.contains('active-mobile-nav')) {
        navIcons[0].classList.remove('active-mobile-nav')
    } else {
        navIcons[0].classList.add('active-mobile-nav')
    } 
})
