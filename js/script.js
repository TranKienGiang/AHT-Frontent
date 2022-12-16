$(document).ready(function () {
    $(".slider").slick({
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        adaptiveHeight: false,
        speed: 1000,
        autoplaySpeed: 4000,
    });
    //topseller///
    $(".topseller").click(function(){
        $(".topseller").addClass("active-tabbar");
        $(".feature").removeClass("active-tabbar");
        $(".reviews").removeClass("active-tabbar");
        $(".list-selling").removeClass("hidden-list");
        $('.list-feature').addClass("hidden-list");
        $('.list-reviews').addClass("hidden-list");

    })
    ////feature///
    $(".feature").click(function(){
        $(".topseller").removeClass("active-tabbar");
        $(".feature").addClass("active-tabbar");
        $(".reviews").removeClass("active-tabbar");
        $(".list-selling").addClass("hidden-list");
        $('.list-feature').removeClass("hidden-list");
        $('.list-reviews').addClass("hidden-list");
    })
    ////reviews///
    $(".reviews").click(function(){
        $(".topseller").removeClass("active-tabbar");
        $(".feature").removeClass("active-tabbar");
        $(".reviews").addClass("active-tabbar");
        $(".list-selling").addClass("hidden-list");
        $('.list-feature').addClass("hidden-list");
        $('.list-reviews').removeClass("hidden-list");
    })
    $(".slider-client").slick({
        slidesToScroll: 1,
        // autoplay: true,
        dots: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 4000,
    });

    $('.menu-mobile').click(function(){
        $(".menu-position-mobile").addClass("open");
    });

    $('.close-menu').click(function(){
        $(".menu-position-mobile").removeClass("open");
    });
})