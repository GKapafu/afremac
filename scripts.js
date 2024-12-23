$(document).ready(function(){
    $('.menu-toggle').on('click', function() {
    $('.nav').toggleClass('showing');
  
    // max-height for both ul is 0px in css. 
    // for the child element ul to open on the responsive nav add ul to .nav 
    $('.nav ul').toggleClass('showing');
    });
});