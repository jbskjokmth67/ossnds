$(window).on("load", function () {
    $(".loader").fadeOut("slow");
});
jQuery(document).ready(function ($) { $("nav.sujit-nav").prepend("<a id='pull' href='#'>Menu</a>"); $('nav.sujit-nav ul li:has(ul)').addClass('hassub'); var subnav = $('ul li.hassub>a'); submenu = $('ul li.hassub ul'); $(subnav).on('click', function (e) { e.preventDefault(); }); var pull = $('#pull'); menu = $('nav>ul'); $(pull).on('click', function (e) { e.preventDefault(); menu.slideToggle(); }); $(window).resize(function () { var w = $(window).width(); if (w > 320 && menu.is(':hidden')) { menu.removeAttr('style'); } }); $(".loginhelp h4").click(function () { $(".help_options").slideToggle(); }); $('.main_content a').click(function () { $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top() }, 500); return false; }); $('#minus').click(function () { $('body').animate({ 'font-size': '-=1px', }); $('.biglabel').animate({ 'height': '-=12px' }); }); $('#plus').click(function () { $('body').animate({ 'font-size': '+=1px', }); $('.biglabel').animate({ 'height': '+=12px' }); }); $('#normal').click(function () { $('body').removeAttr("style"); }); $(".accordion_script").accordion({ collapsible: true, heightStyle: "content" }); })
/*--------- Sticky Header ---------*/
jQuery(window).scroll(function () {
    if ($(this).scrollTop() >= 50)
    { $(".myheader").addClass("sticky") }
    else
    { $(".myheader").removeClass("sticky") }
});
document.oncontextmenu=RightMouseDown;document.onmousedown=mouseDown;function mouseDown(e){if(e.which==3)
{}}
function RightMouseDown(){return false;}