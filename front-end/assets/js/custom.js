$(document).ready(function(){
    $('.toggle-menu').click(function(){
        $('.bottom-header-content ul').slideToggle();
    });
    $('.toggle-menu').click(function(){
        $('.toggle-menu').toggleClass('active');
    });
    $('.toggle-search').click(function(){
        $('.header-search').toggleClass('active');
    });
});