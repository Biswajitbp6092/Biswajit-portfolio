
// navbar toggle functionality
(function () {
    const toogle = document.querySelector('.toogle');
    toogle.onclick = function () {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle("active-nav");
    }
})();

// navbar sticky functionality.
(function () {
    const header = document.querySelector(".nav-section");
    const about = document.querySelector('.about-section');
    // const toggleClass = "is-sticky";
    let aboutTop = about.offsetTop;
    console.log()
    window.addEventListener("scroll", function () {
        if (window.pageYOffset >= aboutTop-100) {
            header.classList.add("is-sticky");
        } else {
            header.classList.remove("is-sticky");
        }
    });
})();

(function(){
    let skillPerAll = document.querySelectorAll('.skill-per');
    skillPerAll.forEach(function(skillPar){
        setTimeout(function(){
            skillPar.children[0].style.display = 'block';
        }, 1000)
    });
})();

function dynamicBannerHeight(){
    if(window.innerWidth < 1182){
        console.log('hi');
        // select elements
        const bannerImg = document.querySelector('.my-images');
        const bannerImgWrapper = document.querySelector('.banner-img');
        // get image's height
        const bannerImgHeight = bannerImg.clientHeight;
        // Apply that to banner's height
        // console.log(bannerImgWrapper.outerHeight);
        bannerImgWrapper.outerHeight = `${bannerImgHeight}px`;
        // console.log(bannerImgWrapper.outerHeight);
        bannerImgWrapper.style.height = `${bannerImgHeight}px`;
    }
}

window.addEventListener('DOMContentLoaded', dynamicBannerHeight);
window.addEventListener('resize', dynamicBannerHeight);



$(document).ready(function () {
    // scroll to inner sections of a page.
    (function () {
        $('.scrollTo').click(function () {
            // this is a getter variable.
            // We're getting the current value of the href attribute of each element with a class "scrollTo".
            var getElem = $(this).attr('href');
            // This is a variable containing an integer value.
            var targetDistance = 0;
            // Checking If the element exists on the page or not.
            if ($(getElem).length) {
                // getting the top offset of the targetted element.
                var getOffset = $(getElem).offset().top;
                // Now We can animate to our desired section using the html element.
                $('html').animate({
                    scrollTop: getOffset - targetDistance
                }, 500);
            }
            // returning false performs three tasks when called:
            // event.preventDefault();
            // event.stopPropagation();
            // Stops callback execution and returns immediately when called.
            return false;
        });
    })();

    (function () {
        // dynamically added the back to top button.
        $('body').append('<a href="#" class="back-to-top">Back to Top</a>');
        var amountScrolled = window.outerHeight;
        $(window).scroll(function () {
            if ($(window).scrollTop() > amountScrolled) {
                $('a.back-to-top').fadeIn('slow');
            } else {
                $('a.back-to-top').fadeOut('slow');
            }
        });
        $('a.back-to-top').click(function () {
            $('html').animate({ scrollTop: 0 }, 500);
            return false;
        });
    })();
});