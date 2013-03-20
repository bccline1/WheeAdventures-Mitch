//--------------------------------------------------------------------
//Program: WheeAdventures - Main.js 
//Author: Mitch Odom
//Date: 3/5/2013
//Description: Javascript for all client-side pages in app. Allows for
//             quick javascript changes to be made across application.
//--------------------------------------------------------------------

$(document).ready(function () {
    $('.nav-bar').hide();
    $('.togglenav').click(function () {
        $('.shownav').toggle();
        $('.hidenav').toggle();
        $('.nav-bar').slideToggle();
    });

    $('a#icon-back').click(function () {
        parent.history.back();
        return false;
    });
});