(function($){
  

  var gangwon = {
    init: function(){
      this.header();
      this.section1();
      this.section2();
      this.footer();
    },
    header: function(){

      $('.main-btn').on({
        mouseenter: function(){
          $('.sub').stop().fadeOut(0);
          $(this).stop().next().fadeIn(600);
      
          $('.main-btn').removeClass('on');
          $(this).addClass('on');
        },
        focusin: function(){
          $('.sub').stop().fadeOut(0);
          $(this).stop().next().fadeIn(600);
      
          $('.main-btn').removeClass('on');
          $(this).addClass('on');
        }
      });
    
      $('#nav').mouseleave(function(){
        $('.sub').stop().fadeOut(300);
        $('.main-btn').removeClass('on');
      });

    },
    section1: function(){

      let cnt=0;

      function mainSlide(){
        $('.slide-wrap').stop().animate({top:-300*cnt},600,function(){
          cnt>2?cnt=0:cnt;
          cnt<0?cnt=2:cnt;
          $('.slide-wrap').stop().animate({top:-300*cnt},0);
        });
      }
    
      function nextCount(){
        cnt++;
        mainSlide();
      }
    
      function prevCount(){
        cnt--;
        mainSlide();
      }
    
      function autoTimer(){
        setInterval(nextCount,2500);
        // setInterval(prevCount,2000);
      }
      autoTimer();

      
    },
    section2: function(){

      $('.gallery-btn').on({
        click: function(){
          $('.notice-btn').addClass('on');
          $('.gallery-btn').addClass('on');
          $('.gallery-box').addClass('on');
          $('.notice-box').addClass('on');
        }
      });
    
      $('.notice-btn').on({
        click: function(){
          $('.notice-btn').removeClass('on');
          $('.gallery-btn').removeClass('on');
          $('.gallery-box').removeClass('on');
          $('.notice-box').removeClass('on');
        }
      });
    
      $('.link-btn').click(function(){
        $('#modal').stop().fadeIn(600);
      });
    
      $('.close-btn').click(function(){
        $('#modal').stop().fadeOut(300);
      });

    },
    footer: function(){

    },
  }
  gangwon.init();


})(jQuery);