$(function () {
    $('.pop').click(function () {
        $('.popRank').show()
        $('.loveRank').hide()
        $('.pop').css('background-color', '#e27c31')
        $('.pop').removeClass('sanjiao').addClass('pop-sanjiao')
        $('.love').removeClass('love-sanjiao').addClass('sanjiao')
        $('.love').css('background-color', 'rgba(255,255,255,0.4)')
    })
    $('.love').click(function () {
        $('.popRank').hide()
        $('.loveRank').show()
        $('.love').css('background-color', '#e27c31')
        $('.love').removeClass('sanjiao').addClass('love-sanjiao')
        $('.pop').removeClass('pop-sanjiao').addClass('sanjiao')
        $('.pop').css('background-color', 'rgba(255,255,255,0.4)')
    })
})
$(document).ready(function () {
    $(".gotop").hide();
    $(function () {
        var height = $(window).height();
        $(window).scroll(function () {
            if ($(window).scrollTop() > height) {
                $(".gotop").fadeIn(1000);
            } else {
                $(".gotop").fadeOut(1000);
            }
        });
    });
});  