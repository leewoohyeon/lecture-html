$(document).ready(function () {
  $(".sidebar_menu li a").click(function () {
    $(".sidebar").toggle();
    $("#trigger").prop("checked", $(".sidebar").is(":visible"));
  });
  $("#trigger").change(function () {
    if ($(this).is(":checked")) {
      $(".sidebar").show();
    } else {
      $(".sidebar").hide();
    }
  });
  // sec_4_modal
  $(".sec_4_de_photo").on("click", function(e) {
    e.stopPropagation(); // 이벤트 버블링 막기
    $(this).siblings(".modal").fadeIn();
  });
  $(".close-btn").on("click", function () {
    $(".modal").fadeOut();
  });
  // modal 밖의 요소를 클릭했을때, modal창 없애기
  $(document).on('click', function(event) {
    var modal = $('.modal_container');
    if (!modal.is(event.target) && modal.has(event.target).length === 0) {
      $('.modal').fadeOut();
    }
  });
  
  //modal이 fadein 됐을때 ESC키를 눌러 modal창 없애기
  $(document).on('keydown', function(event) {
    if (event.key === 'Escape') {
      $('.modal').fadeOut();
    }
  });
  //footer:top_button
  $(".top_button").click(function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    var offset = $(target).offset().top;
    $("html, body").animate({ scrollTop: offset }, "slow", function () {
      window.location.hash = target;
    });
  });
});
