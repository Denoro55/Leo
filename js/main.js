$(document).ready(function(){

	$('.slider').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1100,
		pauseOnHover: false,
		slidesToShow: 1,
		infinite: true,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
    {
      breakpoint: 955,
      settings: {
      	arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
		
	})

	$('.icon__item').on('click',function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	})

	$('.icon__item a').on('click',function(e){
		e.preventDefault();
	})

})