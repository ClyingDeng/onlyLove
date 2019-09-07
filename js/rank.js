$(function () {
    $('.rankHot').click(function () {
        $('.hotRank').show()
        $('.beautRank').hide()
        $('.loveRank').hide()
        $('.rankHot').css('background-color', '#e27c31')
        $('.rankBeaut').css('background-color', 'rgba(255,255,255,0.4)')
        $('.rankLove').css('background-color', 'rgba(255,255,255,0.4)')
    })
    $('.rankBeaut').click(function () {
        $('.beautRank').show()
        $('.hotRank').hide()
        $('.loveRank').hide()
        $('.rankBeaut').css('background-color', '#e27c31')
        $('.rankHot').css('background-color', 'rgba(255,255,255,0.4)')
        $('.rankLove').css('background-color', 'rgba(255,255,255,0.4)')
    })
    $('.rankLove').click(function () {
        $('.loveRank').show()
        $('.beautRank').hide()
        $('.hotRank').hide()
        $('.rankLove').css('background-color', '#e27c31')
        $('.rankHot').css('background-color', 'rgba(255,255,255,0.4)')
        $('.rankBeaut').css('background-color', 'rgba(255,255,255,0.4)')
    })
})
var pager = jQuery('#ampagination').pagination({
    page: 5,
    totals: 100,
    pageSize: 10
});
var pager = jQuery('#ampagination1').pagination({
    page: 5,
    totals: 100,
    pageSize: 10
});
var pager = jQuery('#ampagination2').pagination({
    page: 5,
    totals: 100,
    pageSize: 10
});
