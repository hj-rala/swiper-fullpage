$(function(){

   //main
   if ($('#info').length > 0){


   //swipe
    var $body = $('body'),
    about = $('#info'),
    nav = ['유퀴즈','참여방법','경품안내','참가현황','공지사항'],
    swiperDirection = 'vertical',
    swiperEffect = 'flip';
    if($(window).width()<993){
        swiperDirection = 'horizontal';
        //swiperEffect = '';
    }
    var swiper = new Swiper('#info', {
        effect:swiperEffect,
        speed:500,
        mousewheel:{
            //invert:true,
        },
        pagination:{
            el:'#aboutNav',
            clickable:true,
            bulletClass:'index-nav',
            bulletActiveClass:'active',
            renderBullet:function(index,className){
                return '<a class="'+className+'" href="#i'+index+'"><span>'+ nav[index]+'</span></a>';
            }
        },
        on:{
            init:function(){
                about.find('.swiper-slide-next .animated').addClass('ani-stop');
            },
            transitionStart:function(){
                $body.attr('data-id',$('.swiper-slide-active').attr('id'));
                about.find('.swiper-slide-active').siblings().find('.animated').removeClass('ani-stop');
                about.find('.swiper-slide-active .animated').removeClass('ani-stop');
            },
            transitionEnd:function(){
                about.find('.swiper-slide-active').siblings().find('.animated').addClass('ani-stop');
            }
        }
    });
   } 


   //sub
   if ($('#info').length < 1){
      $('html').addClass('sub');
   }




});