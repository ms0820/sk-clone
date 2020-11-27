// 전체 아이템 묶고있는것

var expertIconsExpert = document.getElementsByClassName("hire-itm-wrap-expert");

var expertIconsJunior = document.getElementsByClassName("hire-itm-wrap-junior");

var expert = document.getElementById("select-expert");

var junior = document.getElementById("select-junior");

var currentState = 0;

// 애니메이션 기존 goingDown적용시 한박자 느려서 아예 opacity값만 바뀌는 새로운 애니메이션추가
// 버튼에 각각 id값을 주어서 색상및 백그라운드배변경

function selectExpert() {


  $('#hire_expert').removeClass('j-btn--normal');
  $('#hire_expert').addClass('j-btn--select');
  $('#hire_junior').removeClass('j-btn--select');
  $('#hire_junior').addClass('j-btn--normal');
  expert.style = " display:flex; visibility:visible";

  junior.style = " display:none; visibility:hidden";
  


    for(i=0;i<5;i++){
      expertIconsJunior[i].style="animation : disappear 0.1s  0.3s forwards step-start;"
    }


  expertIconsExpert[0].style = "animation : popUp 1.2s forwards ease-in;";
  expertIconsExpert[1].style = "animation : popUp2 1.2s 0.1s forwards ease-in;";
  expertIconsExpert[2].style = "animation : popUp3 1.2s 0.17s forwards ease-in;";
  expertIconsExpert[3].style = "animation : popUp4 1.2s 0.24s forwards ease-in;";
  expertIconsExpert[4].style = "animation : popUp5 1.2s 0.31s forwards ease-in;";

 
}

function selectJunior() {

  expert.style = " opacity: 0; visibility: hidden;";

  junior.style = " opacity: 1; visibility: visible;";

  $('#hire_junior').removeClass('j-btn--normal');
  $('#hire_junior').addClass('j-btn--select');
  $('#hire_expert').removeClass('j-btn--select');
  $('#hire_expert').addClass('j-btn--normal');
  $('.hire-itm-wrap-expert').addClass('opacity0');


  for(i=0;i<5;i++){
    expertIconsExpert[i].style="animation : disappear 0.1s  0.3s forwards step-start;"
  }


  expertIconsJunior[0].style = "animation : popUp 1.2s forwards ease-in;";
  expertIconsJunior[1].style = "animation : popUp2 1.2s 0.1s forwards ease-in;";
  expertIconsJunior[2].style = "animation : popUp3 1.2s 0.17s forwards ease-in;";
  expertIconsJunior[3].style = "animation : popUp4 1.2s 0.24s forwards ease-in;";
  expertIconsJunior[4].style = "animation : popUp5 1.2s 0.31s forwards ease-in;";

  //  for(i = 0; i < expertIconsJunior.length; i++){

  //  expertIconsJunior[i].style = "animation : popUp 0.8s " + 0.1*i + "s forwards;";

  // }
}

// cult 부분 버튼 눌렀을때 펼쳐지고
// 그 안에 아이템들 = 슬라이드

var cultButton = document.getElementById("btn-cult");
var sectionCult = document.getElementById("cult");

function cultExpand() {
  // sectionCult.style =
  //   " box-sizing: content-box; min-height: 2580px; height: auto; padding-bottom: 3200px;";
  $('.cult').addClass('');
  cultButton.style = "display:none;";

  document.getElementById("cult__hidden-wrap").style = "visibility: visible;";
}





// -webkit-transform:
// -ms-transform: translateY(30px);
// transform: translateY(30px);
// text-align: center;

// var presntScrollPosition = 0;
//    var prevScrollPosition = 0;

//    window.onscroll = function() {

//        console.log(window.pageYOffset);
//     //  console.log(document.window.screenTop);

//       prevScrollPosition = presntScrollPosition;
//       presntScrollPosition = window.pageYOffset;

//       scrollMove = presntScrollPosition - prevScrollPosition;

//     //   console.log(scrollMove);

//       if (scrollMove > 0) {

//         //  console.log ("아래방향");

//          if (window.pageYOffset > 2500)
//              {
//                 document.getElementById('para_bg').style=" top:-80%; "; }

//       } else {

//         //   console.log ("윗방향");

//           document.getElementById('para_bg').style=" top:-90%; ";
//           };

//         if(scrollMove < 0){
//             if (window.pageYOffset <80)
//              {
//         document.getElementById("gnb_wrap").style="height:165px;";
//         document.getElementById("logo_ai").style="color:#333";
//         document.getElementById("logo_dot").style="color:#333";
//         // document.getElementById("logo").style="transform: none;margin-left:0px;";
//         document.getElementById("logo_text_con").style="animation:herotextin .5s ease-in-out forwards;";
//         document.getElementById("top_menu_search").style="color:#333;";
//         document.getElementById("bugger_line1").style="background:#333;";
//         document.getElementById("bugger_line2").style="background:#333;";

//              }

//         if (window.pageYOffset < 200)
//         {  document.getElementById("ph_indicator").style="animation:fadeout 0.8s backwards"; }
//     }

//        if(scrollMove > 0){
//         if (window.pageYOffset > 80)
//              {
//                 document.getElementById("gnb_wrap").style="height:80px;";
//             document.getElementById("gnb").style="position:fixed;height:80px;background-color: rgba(255, 255, 255, 0.95);color: #333;transition: background-color 0.5s cubic-bezier(0.23, 1, 0.32, 1);"

//             document.getElementById("logo_text_con").style="animation:herotextout .1s ease-in-out forwards;";
//             // document.getElementById("logo").style="width:40px;margin-left: -45px;";
//             document.getElementById("logo_ai").style="color:#222;font-size:50px !important";
//             document.getElementById("logo_dot").style="color:#222;font-size:50px !important;line-height:65px";
//             document.getElementById("top_menu_search").style="color:#222;";
//             document.getElementById("bugger_line1").style="background:#222;";
//             document.getElementById("bugger_line2").style="background:#222;";

//        }

//        if (window.pageYOffset > 200)
//              {  document.getElementById("ph_indicator").style="animation:fadein 0.8s 0.3s forwards"; }
//     }≤
//     }

//         //burgermenuicon
//         function buggerIcon(){
//          document.getElementById('bugger_line1').style="animation: buggeropen1 .8s backwards;transform: translate(-50%, -50%) rotate(45deg);";
//          document.getElementById('bugger_line2').style="animation: buggeropen2 .8s backwards;transform: translate(-50%, -50%) rotate(-45deg);";
//      }

// CULT SLIDER JAVASCRIPT
var currentSlideNum = 0;
var slide = document.getElementsByClassName("slider_item");


function moveNext() {
  if (currentSlideNum != slide.length -1) {
    slide[currentSlideNum].style = "animation:fade_out_rtl  0.6s  forwards;";
    slide[currentSlideNum + 1].style = "animation:fade_in_rtl 0.6s forwards";
         currentSlideNum++;
 
  } 

  if(currentSlideNum == 1) {
    document.getElementById('arrow_left').style =
    "opacity:1;"  
  }

  if(currentSlideNum == 4) {
    document.getElementById('bt_prev').style =
    "opacity:1;" 
       document.getElementById('bt_next').style =
        "opacity:0.4;" 
  } 

  if(currentSlideNum != 5){
    document.getElementById('current').innerHTML = "0" + (currentSlideNum + 1);
  }
}

// 위에꺼랑 복사하여 수정했음
//  수정사항 : if문 구조를 != 0 이 아닐때를 기준, 왼쪽 버튼이 0 일때 opacity작아지도록 조절 
// innerHTML을 이용하여 숫자 를 조절

function movePrev() {
  if (currentSlideNum != 0) {
    slide[currentSlideNum].style = "animation:fade_out_ltr  0.6s  forwards;";
    slide[currentSlideNum - 1].style = "animation:fade_in_ltr 0.6s forwards";
         currentSlideNum--;
 
  } 

  if(currentSlideNum == 0) {
    document.getElementById('arrow_right').style = "opacity:1;"  
  }

  if(currentSlideNum == 0) {
      document.getElementById('bt_prev').style =
      "opacity:0.4;" 
         document.getElementById('bt_next').style =
          "opacity:1;" 
    } 

    if(currentSlideNum != 5){
      document.getElementById('current').innerHTML = "0" + (currentSlideNum + 1);
    } 


}

/*  POS SECTION - We care ITMS 버튼 클릭시 이미지랑 글씨 바뀌는 부분 */ 


var slideBtn = document.getElementsByClassName('g-tab__btn');
var textWrap = document.getElementsByClassName('pos-itm__info-tx');
function chItm(btnNum){
   for(i=0;i<4;i++){
    textWrap[i].style="opacity:0";
   }
  $(slideBtn).addClass('j-btn--normal');
 if(btnNum == 0){
  
   textWrap[0].style="display:block;opacity:1";
   $('#btn_pos_color1').addClass('j-btn--select').removeClass('j-btn--normal');
   
    // 이미지 변경 
    document.getElementById('pos_img').src ="img/sk_aic_joinus_job_position_1.jpg"; 

    
  }
 if(btnNum == 1){
  textWrap[0].style="display:none;opacity:0";
  textWrap[1].style="display:block;opacity:1";
   $('#btn_pos_color2').addClass('j-btn--select').removeClass('j-btn--normal');
   

    // 이미지 변경 
    document.getElementById('pos_img').src =
    "img/sk_aic_joinus_job_position_2.jpg"; 

    
  }
 if(btnNum == 2){
  textWrap[0].style="display:none;opacity:0";
  textWrap[2].style="display:block;opacity:1";
   $('#btn_pos_color3').addClass('j-btn--select').removeClass('j-btn--normal');
    document.getElementById('pos_img').src ="img/sk_aic_joinus_job_position_3.jpg"; 
    
  }
 if(btnNum == 3){
  textWrap[0].style="display:none;opacity:0";
  textWrap[3].style="display:block;opacity:1";
   $('#btn_pos_color4').addClass('j-btn--select').removeClass('j-btn--normal');
    document.getElementById('pos_img').src =
    "img/sk_aic_joinus_job_position_4.jpg"; 
   
   
  }
  
}
SM = new ScrollMagic.Controller;
var e = $("section.cult");
e.on("click", ".more-btn", function(t) {
  
// if(window.innerWidth > 768){

    $(this).hide(), $("html").hasClass("v1") || $("html").hasClass("v2") ? e.addClass("cult--expand") : e.addClass("cult--expand").delay(600).queue(function() {
        var e = $(window).scrollTop();
        new ScrollMagic.Scene({
            triggerElement: ".test",
            duration: 3200
        }).setPin(".cult--expand").on("start", function() {}).triggerHook(0).addTo(SM);
        $("html, body").stop().animate({
            scrollTop: e
        }, 0);
        var t = TweenMax.to(".pccard_coral", 1, {
            y: "-300%",
            ease: Power2.easeIn
        });
        new ScrollMagic.Scene({
            triggerElement: ".test",
            duration: 2500
        }).setTween(t).triggerHook(0).addTo(SM);
        t = TweenMax.to(".pccard_white", 1, {
            y: "-300%",
            ease: Power2.easeIn
        });
        new ScrollMagic.Scene({
            triggerElement: ".test",
            duration: 2500,
            offset: 1200
        }).setTween(t).triggerHook(0).addTo(SM);
        t = TweenMax.to(".pccard_blue", 1, {
            y: "-300%",
            ease: Power2.easeIn
        });
        new ScrollMagic.Scene({
            triggerElement: ".test",
            duration: 2500,
            offset: 2400
        }).setTween(t).triggerHook(0).addTo(SM)
    })
  // }
});

//burgermenuicon
function buggerIcon() {
    document.getElementById('bugger_line1').style = "animation: buggeropen1 .8s backwards;transform: translate(-50%, -50%) rotate(45deg);";
    document.getElementById('bugger_line2').style = "animation: buggeropen2 .8s backwards;transform: translate(-50%, -50%) rotate(-45deg);";
}