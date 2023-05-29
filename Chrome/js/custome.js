$(function () {
  // Scroll Change Download
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 500) {
      $(".download").addClass("active");
    } else {
      $(".download").removeClass("active");
    }
  });
  // Header : hamberger 
  $('.hamburger').on('click',function(){
    $('.nav-mobile').fadeIn().addClass('active');
    $('body').addClass('active');
  });
  $('.btn-close').on('click',function(){
    $('.nav-mobile').fadeOut().removeClass('active');
    $('body').removeClass('active');
  });
  // Sitemap Accordion
  $('.link-item-title').on('click', function () {
    // $(this).next().slideToggle();
    $(this).next().slideDown();
    $(this).parent().siblings().children('.link-item-content').slideUp();
    $(this).addClass('active');
    $(this).parent().siblings().children('.link-item-title').removeClass('active');
  });
});
