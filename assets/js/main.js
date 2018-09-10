
jQuery(document).ready(function() {

$(".main-image > div:gt(0)").hide();

setInterval(function() { 
  $('.main-image > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.main-image');
},  3000);


    
    $('.level-bar-inner').css('width', '0');
    $("div").css({opacity: 0});
    
    
    $(window).on('load', function() {

        $("div").animate({opacity: 1}, 1500);

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 5000);
            
        });

    });
    





});