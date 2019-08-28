$(function () {
    var x = 10; var y = 20; var newtitle = '';
    $('.footer-mytooltip').mouseover(function (e) {
        newtitle = this.title; this.title = ''; $('body').append('<div id="footer-mytitle" >' + newtitle + '</div>');
        $('#footer-mytitle').css({ 'left': (e.pageX + x + 'px'), 'top': (e.pageY + y - 80 + 'px') }).show();
    }).mouseout(function () {
        this.title = newtitle; $('#footer-mytitle').remove();
    }).mousemove(function (e) { $('#footer-mytitle').css({ 'left': (e.pageX + x + 10 + 'px'), 'top': (e.pageY + y - 60 + 'px') }).show(); })
});