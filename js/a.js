$(function() { reder() })

function reder() {
    var option = { url: "js/data.json", navkey: { "keyarr": ["男", "状况"], "allkey": "未婚" }, callback: { selectorsure: selectorsure, abiqiancli: abiqiancli, }, }

    function selectorsure(arr) { console.log(arr); }

    function abiqiancli(navarr) { console.log("nav关键字" + navarr) }
    $("#searchcon").SEarch(option);
}