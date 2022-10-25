
//Toggle show and hide search content(img and input form 'type text') 
$(document).ready(function(){
  
    $('.searchContentLogo').click(function(){
        $('.searchContentLogo').toggleClass('active');
    });
    $('.searchContentLogo').click(function(){
        $('.searchDi').slideToggle()
    
    });

});

//Toggle show and hide mainlogo three bar with genres/news/dub/sub etc...
$(document).ready(function (){  
    $('.mainLogo').click(function(){
        $('.mainLogo').toggleClass('active')
        $('.menuMain').slideToggle()
        
        //change toggle the icon in men GENRES 
        if ($('active').length == 0 && $('.xclose').length > 0){
            $('.menuGen').toggleClass('activ')
            $('.deleteTxt').toggleClass('xclose')
            /*------------------------------------- */
            //drop toggle the sub men of genres
            $('.act').toggleClass('activv')
            $('.act').slideToggle()
            /*------------------------------------- */
            
        }
        //change the icon in men NEWS and toggle the submen of News
        if ($('active').length == 0 && $('.xcloseNews').length > 0){
            $('.menuNews').toggleClass('activNews')
            $('.deleteTxtNew').toggleClass('xcloseNews')
            /*------------------------------------- */
            //drop toggle the sub men of News
            $('.actNews').toggleClass('activeNews')
            $('.actNews').slideToggle()
            /*--------------------------------------*/
        }

    })
})
/*------------------------------------- */

//Toggle submen when clicked in genre icon
$(document).ready(function () {  
    $('.menuGen').click(function () { 
        $('.menuGen').toggleClass('activ')
        $('.deleteTxt').toggleClass('xclose')
        /*------------------------------------ */
        /* When menuNEWS is on after press menuGen, one of them will close*/
        if ($('.xcloseNews').length > 0 && $('.activNews').length > 0){
            $('.menuNews').toggleClass('activNews')
            $('.deleteTxtNew').toggleClass('xcloseNews')
            /*drop or pull the content inner submen NEWS  */
            $('.actNews').toggleClass('activeNews')
            $('.actNews').slideToggle()
        }
        /*--------------------------------------------------*/ 
    });
});
/*------------------------------------- */
//Toggle submen when clicked in news icon
$(document).ready(function () {  
    $('.menuNews').click(function () {  
        $('.menuNews').toggleClass('activNews')
        $('.deleteTxtNew').toggleClass('xcloseNews')

        /* When menuGenre is on after press menuNews, one of them will close*/
        if ($('.xclose').length > 0 && $('.activ').length > 0){
            $('.menuGen').toggleClass('activ')
            $('.deleteTxt').toggleClass('xclose')
            /*drop or pull the content inner submen Genres  */
            $('.act').toggleClass('activv')
            $('.act').slideToggle()
        }
        /*--------------------------------------------------*/ 
    });
    });
/*------------------------------------- */
//Toggle subMengen men when clicked in genres
$(document).ready(function () {  
    $('.menuGen').click(function () {
        $('.act').toggleClass('activv')
        $('.act').slideToggle()
        
    })
    
})
/*------------------------------------- */
//Toggle subMenNews men when clicked in News
$(document).ready(function () {  
    $('.menuNews').click(function () {
        $('.actNews').toggleClass('activeNews')
        $('.actNews').slideToggle()
        
    })
    
})
/*------------------------------------- */


