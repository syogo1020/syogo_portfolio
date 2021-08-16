"use strict";

var swiper = new Swiper('.swiper-container', {
  // slidesPerView: "auto",/* 表示枚数 */
  slidesPerView: "3",

  /* 表示枚数 */
  //slidesPerView: 1,/* 表示枚数 */
  loop: true,
  //loopedSlides: 1,
  //spaceBetween: 20, /* marginスペース */
  spaceBetween: 20,

  /* marginスペース */
  centeredSlides: false,

  /* １枚目のスライド中央位置 true中央 false左端 上端 */
  // false中央 true左端
  //width: 335,
  pagination: {
    el: '.swiper-pagination'
  },
  breakpoints: {
    768: {
      loop: true,
      //無限ループさせる
      speed: 400,
      //移動するスピード
      // loopAdditionalSlides: 5, //スライダーを複製してループを滑らかにする
      centeredSlides: false
      /* １枚目のスライド中央位置 true中央 false左端 上端 */
      // spaceBetween: 40, /* marginスペース */
      // width: 750,

    }
  }
});

function check() {
  if (mail_form.mail.value == "") {
    //条件に一致する場合(メールアドレスが空の場合)
    alert("メールアドレスを入力してください"); //エラーメッセージを出力

    return false; //送信ボタン本来の動作をキャンセルします
  } else {
    //条件に一致しない場合(メールアドレスが入力されている場合)
    return true; //送信ボタン本来の動作を実行します
  }
}
/*
let $form = $('#js-form')
$form.submit(function(e) { 
  $.ajax({ 
   url: $form.attr('action'), 
   data: $form.serialize(), 
   type: "POST", 
   dataType: "xml", 
   statusCode: { 
      0: function() { 
        //送信に成功したときの処理 
        $form.slideUp()
        $('#js-success').slideDown()
      }, 
      200: function() { 
        //送信に失敗したときの処理 
        $form.slideUp()
        $('#js-error').slideDown()
      }
    } 
  });
  return false; 
}); 

*/


var $form = $('#js-form'); //このフォームが

$form.submit(function (e) {
  $.ajax({
    url: $form.attr('action'),
    data: $form.serialize(),
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function _() {
        //送信に成功したときの処理 
        $form.slideUp(); //上に消える

        $('#js-success').slideDown();
      },
      200: function _() {
        //送信に失敗したときの処理 
        $form.slideUp(); //上に消える

        $('#js-error').slideDown();
      }
    }
  });
  return false;
});
$(function () {
  $('a[href^="#"]').click(function () {
    //スクロールのスピード
    var headerHeight = 60; //固定ヘッダーの高さを入れる

    var speed = 300; //リンク元を取得

    var href = $(this).attr("href"); //リンク先を取得

    var target = $(href == "#" || href == "" ? 'html' : href); //リンク先までの距離を取得

    var position = target.offset().top - headerHeight; // let position = jQuery(target).offset().top - header;
    //スムーススクロール

    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});
lightGallery(document.querySelector(".lightgallery-default"));
lightGallery(document.getElementById('customize-thumbnails-gallery'), {
  // Add a custom class to apply style only for the particular gallery
  addClass: 'lg-custom-thumbnails',
  // Remove the starting animations.
  // This can be done by overriding CSS as well
  appendThumbnailsTo: '.lg-outer',
  animateThumb: false,
  allowMediaOverlap: true
});