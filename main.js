$(document).ready(()=>{
    
    /******************************************************
            HIDDEN ELEMENTS ON PAGE LOAD
    ******************************************************/
    $('.services').hide();
    $('#featuredWorks-container').children().addClass('hide-element');
    
    /******************************
            HOVER LISTENERS
    *******************************/
    
    //Changes font color of nav buttons to red when hovered over
    $('.nav-links').hover(function() {
        $(event.currentTarget).toggleClass("redFont", 400);
    });

    //Stretches services images when hovered over
    $('.services').hover(function(){
        $(event.currentTarget).children('.service-image').toggleClass('stretch-image', 500);
    });
    
    //Changes background color of READ MORE buttons to red
    $('.services-button').hover(function() {
        $(event.currentTarget).toggleClass('redBackground', 400);
    });
   
    //Initiates the transition of play button on Featured Works
    $('.testImage').hover(function() {
        $(event.currentTarget).next('img').toggleClass('hide-playButton', 400).toggleClass('transition');     
    });
    
    //Makes sure the play button does not reappear while hovering over Featured Works
    $('.play-button').hover(function(){
        $(this).toggleClass('hide-playButton', 200).toggleClass('transition');
    });
    
    //Changes background color of SEE ALL button to red
    $('.more-works').hover(function() {
        $('.more-works').toggleClass('redBackground', 400);
    });
    
    /******************************
            SCROLL LISTENER
    *******************************/
   
    //LISTENER FOR THE TOP OF ELEMENTS TO BE SCROLLED INTO VIEW
    $(document).scroll(function() {
        var pageTop = $(document).scrollTop(); 
        var pageBottom = pageTop + $(window).height();
        
        //THE 4 SERVICES WILL FADE IN LEFT TO RIGHT WHEN SCROLLED INTO VIEW 
        if ($('#services-container').position().top < pageBottom) {   
            $('#camera-column').fadeIn(400);
            $('#postproduction-column').fadeIn(800);
            $('#montage-column').fadeIn(1200);
            $('#lighting-column').fadeIn(1600);
        }
        
        //FADES IN "FEATURED WORKS" AND "SEE ALL" BUTTON WHEN SCROLLED INTO VIEW
        if ($('#featuredWorksTitle').position().top < pageBottom) {
            $('#featuredWorksTitle').addClass('show-element', 1000);
            $('.more-works').addClass('show-element', 1000); 
        }
        
        if ($('#works-list').position().top < pageBottom) {
            $('#works-list').addClass('show-element', 1000);
        }
        
        if ($('#columns-wrap').position().top < pageBottom) {
            $('#columns-wrap').addClass('show-element');
            $('.featured-columns').addClass('hide-element');
            $('#whyMeColumn').addClass('show-element', 400);
            $('#whatsNewColumn').addClass('show-element', 800);
            $('#shortlyAboutMeColumn').addClass('show-element', 1200);
        }
        
    });
    
    
    /******************************
            SCROLL ON CLICK
    *******************************/
    $('#services').click(function() {
         $('html,body').animate({scrollTop: $("#servicesSection").offset().top},'slow');
    });
    
    $('#works').click(function() {
         $('html,body').animate({scrollTop: $("#featuredWorks-container").offset().top},'slow');
    });    
    
    
    
    
});


