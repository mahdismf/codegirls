// $(document).ready(function(){
//     $('.your-slider').slick({
//         infinite: true, // Enables infinite scrolling
//         slidesToShow: 3, // Number of slides to show at once
//         slidesToScroll: 1, // Number of slides to scroll at once
//         autoplay: true, // Enable autoplay
//         autoplaySpeed: 2000, // Autoplay speed in milliseconds
//         dots: true, // Show dots for navigation
//         arrows: true, // Show previous/next arrows
//     });
// });

//   $('.slider').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     adaptiveHeight: true
//   });
$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    dots: true,
    speed: 500,
    cssEase: 'linear',
    centerMode: true,
    arrows: true,
});