$(function () {
  // Scroll Change Download
  function scroll() {
    if ($(window).scrollTop() > 250) {
      $(".m_menu").addClass("active").parent(".navi").css("background", "#000");
      // console.log('scroll이 250보다 큽니다.');
      // console.log($('.m_menu').parent(".navi"));
    } 
    else {
      $(".m_menu")
        .removeClass("active")
        .parent(".navi")
        .css("background", "transparent");
        // console.log('scroll이 250보다 작습니다.');
    }
  }
  scroll();
  $(window).on("scroll",scroll);  
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
  $(".filter_title, .language_title, .showroom_title, .product_title").on(
    "click",
    function () {
      // $(this).siblings().slideToggle();
      $(this).next().slideToggle();
      $(this).toggleClass("active");
    }
  );
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
  $(".product_list li").on("click", function () {
    let text = $(this).text();
    $(".product_title").text(text);
    $(this).parent().slideUp();
    $(".product_title").removeClass("active");
  });
  $(".showroom_list li").on("click", function () {
    let text = $(this).text();
    $(".showroom_title").text(text);
    8;
    $(this).parent().slideUp();
    $(".showroom_title").removeClass("active");
  });
  // section_4_스와이퍼 슬라이더: 클릭이벤트
  $(".s3").on("click", function () {
    s1.slideNext();
  });
  $(".s1").on("click", function () {
    s3.slidePrev();
  });
  // section_4_스와이퍼 슬라이더: 스와이퍼 이벤트
  var s1 = new Swiper(".s1", {
    loop: true,
  });
  var s2 = new Swiper(".s2", {
    loop: true,
    allowTouchMove: false,
  });
  var s3 = new Swiper(".s3", {
    loop: true,
  });
  s1.controller.control = [s2, s3];
  s3.controller.control = [s1, s2];
  // section_7 map src
  // showroom_list 내의 <a> 태그
  const aTags = document.querySelectorAll(".showroom_list li a");
  // <iframe> 요소
  const iframes = document.querySelectorAll(".sec_7_map iframe");
  // 선택하기 전 iframe 요소
  for (let i = 1; i < iframes.length; i++) {
    iframes[i].style.display = "none";
  }
  // <a> 태그를 클릭했을 때 실행되는 함수
  function handleClick(event) {
    event.preventDefault();
    // 클릭한 <a> 태그의 인덱스를 가져옵니다.
    const index = Array.from(aTags).indexOf(this);
    // 모든 <iframe> 요소를 숨깁니다.
    iframes.forEach((iframe) => {
      iframe.style.display = "none";
    });
    // 클릭한 <a> 태그에 해당하는 <iframe> 요소만 표시합니다.
    iframes[index].style.display = "block";
  }
  // <a> 태그에 이벤트 리스너를 추가합니다.
  aTags.forEach((a) => {
    a.addEventListener("click", handleClick);
  });

});
