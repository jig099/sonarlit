var toppag=$('#top-pag1,#top-pag2,#top-pag3,#top-pag4');
var pag=$('#pag1,#pag2,#pag3,#pag4');

toppag.css({position:'fixed',bottom:'0px'});


$(window).scroll(function () {
    var scroll=$(this).scrollTop()+$(this).height();
    pag.each(function(i,n){
        if(scroll > $(this).offset().top) {
            toppag.eq(i).css({'position':'relative'});
            if(i>0){
                toppag.eq(i).css({'top':i*-50});
            }
        }
        if(scroll < ($(this).offset().top + toppag.eq(i).height()))  {
            toppag.eq(i).css({'position':'fixed','top':''});
        }
    }); 
});