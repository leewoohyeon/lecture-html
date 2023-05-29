$(function () {
  $(".mainnav").on("mouseenter", function () {
    $(".sub_menu").stop().slideDown();
  });
    $(".mainnav").on("mouseleave", function () {
      $(".sub_menu").stop().slideUp();
    });
  $(".sub_menu").on("mouseenter", function () {
    $(".sub_menu").stop().slideDown();
  });
    $(".sub_menu").on("mouseleave", function () {
      $(".sub_menu").stop().slideUp();
    });
  });
// $(function () {
//   $(".main_menu").on("mouseenter", function () {
//     $(".sub_menu").stop().slideDown();
//   });
//   $(".main_menu").on("mouseleave", function () {
//     $(".sub_menu").stop().slideUp();
//   });
//   $(".sub_menu").on("mouseenter", function () {
//     $(".sub_menu").stop().slideDown();
//   });
//   $(".sub_menu").on("mouseleave", function () {
//     $(".sub_menu").stop().slideUp();
//   });
