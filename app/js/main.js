$(function(){
  
  $(".star").rateYo({
    starWidth: "25px",
    normallFill: "#ccccce",
    ratedFill: '#FFBB0C',
    readOnly: true,
    starSvg:'<svg width="26" height="24" viewBox="0 0 26 24" fill="#FFBB0C" xmlns="http://www.w3.org/2000/svg"><path d="M12.5854 20.0488L18.5854 23.7073C19.7561 24.439 21.0732 23.4146 20.7805 22.0976L19.1707 15.2195L24.5854 10.5366C25.6098 9.65854 25.0244 8.04878 23.7073 7.90244L16.6829 7.31707L13.9024 0.878049C13.3171 -0.292683 11.7073 -0.292683 11.1219 0.878049L8.34146 7.46341L1.31707 8.04878C-3.21865e-06 8.04878 -0.439028 9.65854 0.439021 10.5366L5.85366 15.2195L4.2439 22.0976C3.95122 23.4146 5.26829 24.2927 6.43902 23.7073L12.5854 20.0488Z" /></svg>',
  });

  $('.guide__slick').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    prevArrow:'<button type="button" class="slick-prev"><svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 10L1 5.5L5 1" stroke="#D7D7D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow:'<button type="button" class="slick-next"><svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5.5L1 10" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  });

});