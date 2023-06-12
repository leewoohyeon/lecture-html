$(document).ready(function () {
  // $('.toggle').on('click', function () {
  //   $('.toggle, .overlay, .gnb').toggleClass('active');
  //   // $('.overlay').toggleClass('active');
  //   // $('.gnb').toggleClass('active');
  // });
  // $('.gnb a').on('click',function(){
  //   $('.toggle, .overlay, .gnb').removeClass('active');
  // });
  $(".sidebar_menu li a").click(function () {
    $(".sidebar").toggle();
    $("#trigger").prop("checked", $(".sidebar").is(":visible"));
  });
  $('#trigger').change(function() {
    if ($(this).is(':checked')) {
      $('.sidebar').show();
    } else {
      $('.sidebar').hide();
    }
  });
  $('.top_button').click(function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    var offset = $(target).offset().top;

    $('html, body').animate({ scrollTop: offset }, 'slow', function() {
      window.location.hash = target;
    });
  });
  $('.sec_4_de_photo').click(function() {
    $(this).siblings().fadeIn();
  });

  $('.close-modal').click(function() {
    $('.modal_design').fadeOut();
  });

  $(document).on('click', function(event) {
    if ($(event.target).hasClass('modal')) {
      $('.modal').fadeOut();
    }
  });
});
