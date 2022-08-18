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
    if($('.info_article:nth-last-child(1)').css('display')!=='none'){ //만약 마지막 기사가 display:none이 아니라면
      $(".info_more").hide(); //더보기 버튼을 감춘다
    }
  })
})
