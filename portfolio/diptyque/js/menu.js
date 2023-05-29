$(function () {
  // 메뉴슬라이더
  $(".main_menu").on("mouseenter", function () {
    $(".sub_menu").stop().slideDown();
  });
  $(".main_menu").on("mouseleave", function () {
    $(".sub_menu").stop().slideUp();
  });
  $(".sub_menu").on("mouseenter", function () {
    $(".sub_menu").stop().slideDown();
  });
  $(".sub_menu").on("mouseleave", function () {
    $(".sub_menu").stop().slideUp();
  });
  //찜하기
  $(".no_heart").on("click", function () {
    if ($(this).hasClass("off")) {
      $(this).removeClass("fa-regular");
      $(this).addClass("fa-solid");
      $(this).removeClass("off");
      $(this).addClass("on");
    } else {
      $(this).removeClass("fa-solid");
      $(this).addClass("fa-regular");
      $(this).removeClass("on");
      $(this).addClass("off");
    }
  });
  // 로그인 페이지
  $('.once_login').on('click',function(){
    $('.non-member').addClass('active');
    $('.member').css("display","none");
    $('.once_login').css({"background":'#333',"color":"#fff", "border":"none"});
    $('.id_login').css({"background":"#fff", "color":"#333", "border":"1px solid #333"});
  });
  $('.id_login').on('click',function(){
    $('.non-member').removeClass('active');
    $('.member').css("display","block");
    $('.id_login').css({"background":'#333',"color":"#fff", "border":"none"});
    $('.once_login').css({"background":"#fff", "color":"#333", "border":"1px solid #333"});
  });
  //상품 합계
  $(".minus").on("click", function () {
    let num = Number($(".quantity").text());
    if (1 < num) {
      let price = $(".sum_price").data("price");
      let multi = price * (num - 1);
      $(".quantity").text(num - 1);
      $(".sum_price").text(multi.toLocaleString() + "원");
    }
  });
  $(".plus").on("click", function () {
    let num = Number($(".quantity").text());
    let price = $(".sum_price").data("price");
    let multi = price * (num + 1);
    $(".quantity").text(num + 1);
    $(".sum_price").text(multi.toLocaleString() + "원");
  });
  //상품 페이지 이동
  $(".review_number>li").on("click", function () {
    let idx = $(this).index();
    $(".review_customer").css({ display: "none" });
    $(".review_customer").eq(idx).css({ display: "block" });
    $(".review_number>li").css({ color: "#c9caca" });
    $(this).css({ color: "#333" });
  });
  //
  $(".product_number>li").on("click", function () {
    let idx = $(this).index();
    $(".product_list_bigbox").css("display", "none");
    $(".product_list_bigbox").eq(idx).css("display", "block");
  });

});