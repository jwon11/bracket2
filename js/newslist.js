// 토글버튼

const toggle = document.querySelector(".toggle_wrap");
const menu = document.querySelector(".inner_wrap");

toggle.addEventListener("click", function () {
  menu.classList.toggle("active");
});

// 더보기버튼

//jQuery(document).ready(function(){
//  $(".info_more").click(function(){
//    $(".info_article").fadeIn(1000);
//  });
//});

$(function(){
  $(".info_more").click(function(){
    $(".info_article").fadeIn(1000);
    if($('.info_article:nth-child(n+7)').css('display')!=='none'){ 
      $(".info_more").hide(); 
    }
  })
})
