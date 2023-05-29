$(function () {
  // Scroll Change Download
  $(window).on("scroll", function () {
    // scroll menu
    if ($(window).scrollTop() > 250) {
      $(".m_menu").addClass("active").parent(".navi").css("background", "#000");
    } else {
      $(".m_menu")
        .removeClass("active")
        .parent(".navi")
        .css("background", "transparent");
    }
  });
  // menu
  $(".m_menu,.s_menu").on("mouseenter", function () {
    $(".s_menu").stop().slideDown();
    $(".sec_1_bg").addClass("active");
  });
  $(".m_menu,.s_menu").on("mouseleave", function () {
    $(".s_menu").stop().slideUp();
    $(".sec_1_bg").removeClass("active");
  });
  // select
  $(".filter_title, .language_title").on("click", function () {
    $(this).siblings().slideToggle();
    $(this).toggleClass("active");
  });
  $(".filter_list li").on("click", function () {
    let text = $(this).text();
    $(".filter_title").text(text);
    $(this).parent().slideUp();
    $(".filter_title").removeClass("active");
  });
  $(".language_list li").on("click", function () {
    let text = $(this).text();
    $(".language_title").text(text);
    $(this).parent().slideUp();
    $(".language_title").removeClass("active");
  });
});