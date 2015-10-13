
function goToByScroll(id){
    $('html,body').animate({scrollTop: $(id).offset().top},'slow');
    }
$(document).ready(function(){
    $('.navbar a').click(function(){
        goToByScroll($(this).attr('href'));
        return false;


    });

$('#Amenu').hide();
    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $('#Amenu').fadeIn("slow");
            $('#Bmenu').fadeOut("slow");

        }

    });

    $(window).scroll(function(){
        if($(window).scrollTop()<100){
            $('#Amenu').fadeOut("slow");
            $('#Bmenu').fadeIn("slow");

        }

    });


    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });


    document.onkeypress = function(event) {
        event = (event || window.event);
        if (event.keyCode === 123) {
            return false;}};
    document.onmousedown = function(event) {
        event = (event || window.event);
        if (event.keyCode === 123) {
            return false;}};
    document.onkeydown = function(event) {
        event = (event || window.event);
        if (event.keyCode === 123) {
            return false;}};
    function cp() {return false;}
    function mousehandler(e) {
        var myevent = (isNS) ? e : event;
        var eventbutton = (isNS) ? myevent.which : myevent.button;
        if ((eventbutton == 2) || (eventbutton == 3))
            return false;}
    document.oncontextmenu = cp;
    document.onmouseup = cp;
    var isCtrl = false;
    window.onkeyup = function(e)
    {if (e.which == 17)
        isCtrl = false;}
    window.onkeydown = function(e)
    {if (e.which == 17)
        isCtrl = true;
        if (((e.which == 85) || (e.which == 65) || (e.which == 88) || (e.which == 67) || (e.which == 86) || (e.which == 83)) && isCtrl == true){
            return false;}}
    document.ondragstart = cp;


});

