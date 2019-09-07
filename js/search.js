;
(function($, window, document, undefined) {
    $.fn.SEarch = function(opt) {
        var argument = { url: '', data: data, callback: { selectorsure: selectorsure, abiqiancli: abiqiancli, }, };
        var selecty = new SElecty(this, opt);
        if (opt && $.isEmptyObject(opt) == false) { selecty.options = $.extend(argument, opt); } else { selecty.options = argument; }

        function selectorsure(arr) { console.log(arr); }

        function abiqiancli(navarr) { console.log(navarr) }
        selecty.render();
    }
    var SElecty = function(vessel, opt) {
        this.$vessel = vessel;
        this.options = opt;
    };
    SElecty.prototype = {
            render: function() {
                var self = this;
                this.lastmore = "";
                self.lastmore = this.lastmore;
                self.wrap = this.$vessel;
                $(self.wrap).html("<div class='w'></div>");
                this.searcon = $(self.wrap).children(".w");
                this.searcon.append("<div class='searchcon-w'></div>");
                this.seartextcon = this.searcon.children(".searchcon-w");
                self.navrende();
                self.rootrender();
                self.chilrender();
                self.advanrender();
                self.moremulti();
                self.ongkey = [];
                $(".w").on("click", ".rlogoul li", function() {
                    self.ongkey.push($(this).children("a").attr("title"));
                    var navaa = self.ongkey;
                    self.options.callback.abiqiancli(navaa);
                })
                $(".w").on("click", ".selecbaseul li", function() {
                    self.ongkey.push($(this).children("a").attr("title"));
                    var navaa = self.ongkey;
                    self.options.callback.abiqiancli(navaa);
                })
            },
            datatalke: function() {
                var self = this;
                var url = self.options.url;
                $.ajax({
                    type: "GET",
                    url: url,
                    dataType: "json",
                    success: function(data) {
                        var musjsdata = JSON.stringify(data);
                        var desjsdata = jQuery.parseJSON(musjsdata);
                        var key = "rootconditions";
                        var keyb = "childconditions";
                        var keyc = "advancecondition"
                        self.options.data = {};
                        self.options.data.rootconditions = desjsdata[key];
                        self.options.data.childconditions = desjsdata[keyb];
                        self.options.data.advancecondition = desjsdata[keyc];
                        console.log(self.options.data)
                        if (self.options.data) { self.render(); }
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        console.log(XMLHttpRequest.status);
                        console.log(XMLHttpRequest.readyState);
                        console.log(textStatus);
                    }
                });
            },
            navrende: function() {
                var self = this;
                self.wrap = this.$vessel;
                var keyarr = self.options.navkey.keyarr;
                var $navsr = $("<div class='crumbs-nav'></div>");
                var olstr = "<ol class='crumb'><li><a href='#'>全部结果</a></li>"
                    // keyarr.length = 4
                    // console.log(keyarr.length)

                if (keyarr.length > 0) { for (var i = 0; i < keyarr.length; i++) { olstr += "<li>" + keyarr[i] + "</li>" } }
                olstr += "<li class='active'>" + self.options.navkey.allkey + "</li></ol>"
                $navsr.append(olstr);
                self.searcon.prepend($navsr);
            },
            rootrender: function() {
                var rootdata = this.options.data.rootconditions;
                var $padiv = $("<div></div>");
                $padiv.addClass('yseach sele-r');
                var $subpardiv = $("<div class='con-wrap'></div>");
                $subpardiv.append("<div class='con-key'><strong>" + rootdata.value.title + "：</strong></div>")
                var Econvalue = $("<div class='con-value'></div>");
                var letterse = "<div class='r-letter'><ul class='ys-letteul'>" +
                    "<li>所有结果</li>" +
                    "<li data-initial='A'>A</li><li data-initial='B'>B</li>" +
                    "<li data-initial='C'>C</li><li data-initial='D'>D</li>" +
                    "<li data-initial='E'>E</li><li data-initial='F'>F</li>" +
                    "<li data-initial='G'>G</li><li data-initial='H'>H</li>" +
                    "<li data-initial='I'>I</li><li data-initial='J'>J</li>" +
                    "<li data-initial='K'>K</li><li data-initial='L'>L</li>" +
                    "<li data-initial='M'>M</li><li data-initial='N'>N</li>" +
                    "<li data-initial='O'>O</li><li data-initial='P'>P</li>" +
                    "<li data-initial='Q'>Q</li><li data-initial='R'>R</li>" +
                    "<li data-initial='S'>S</li><li data-initial='T'>T</li>" +
                    "<li data-initial='U'>U</li><li data-initial='V'>V</li>" +
                    "<li data-initial='W'>W</li><li data-initial='X'>X</li>" +
                    "<li data-initial='Y'>Y</li><li data-initial='Z'>Z</li>" +
                    "</ul></div>"
                Econvalue.append(letterse);
                var val = rootdata.value.val;
                var rlogo = "<div class='r-logo'><ul class='rlogoul'>"
                for (var i = 0; i < val.length; i++) {
                    rlogo += "<li data-initial=" + val[i].lettercategary + " >" +
                        "<a href=" + val[i].aurl + " title=" + val[i].conditionname + ">" +
                        "<img src=" + val[i].imgsrc + ">" + val[i].conditionname +
                        "</a></li>"
                }
                rlogo += "</ul></div>"
                Econvalue.append(rlogo);
                var selectedcon = "<div class='rooche rselelcted clear'><span class='ysselected-span'>已选条件:</span><ul class='yss-nopwidth normalseliuw'></ul></div>";
                var editbtn = "<div class='ybtnwrap'> <button type='button' class='ybtn ybtn-sure'>确定</button>" +
                    "<button type='button' class='ybtn ybtncancel'>取消</button></div>";
                var showm, multi;
                if (rootdata.showmore || rootdata.showmore == undefined) {} else { showm = "display:none"; }
                if (rootdata.multiselect || rootdata.multiselect == undefined) { Econvalue.append(selectedcon + editbtn); } else { multi = "display:none"; }
                var rightext = "<div class='yseah-ext'>" +
                    "<a class='ys-e-more' style=" + showm + ">更多<i></i></a>" +
                    "<a class='ys-e-multi multichoose multiposition' style=" + multi + ">多选<i></i></a>" +
                    "</div>"
                $subpardiv.append(Econvalue);
                $subpardiv.append(rightext);
                $padiv.append($subpardiv); //昵称
                this.seartextcon.append($padiv);
                rootcustomhanshu();

                function rootcustomhanshu() {
                    $(".rlogoul").children("li").children("a").hover(function() { $(this).children("img").hide(); }, function() { $(this).children("img").show(); })
                    $(".ys-letteul").children("li").hover(function() {
                        console.log();
                        $(this).addClass("categary");
                        $(this).siblings("li").removeClass("categary");
                        if ($(this).index() > 0) {
                            var condi = $(this).attr("data-initial");
                            $(".rlogoul li").each(function() {
                                console.log($(this).attr("data-initial"));
                                console.log(condi);
                                $(this).show();
                                if ($(this).attr("data-initial") !== condi) { $(this).hide(); }
                            })
                        } else { $(".rlogoul li").each(function() { $(this).show() }) }
                    })
                }
            },
            chilrender: function() {
                var self = this;
                var childconditionsdata = this.options.data.childconditions;
                for (var i = 0; i < childconditionsdata.length; i++) {
                    var uldata = childconditionsdata[i].value;
                    var wfi = childconditionsdata[i].wfixed;
                    var showmore = childconditionsdata[i].showmore;
                    var multi = childconditionsdata[i].multiselect;
                    var $div = $("<div class='yseach sele-chil'></div></div>");
                    var $conva = $("<div class='con-wrap btn" + i + "'></div>");
                    $conva.append("<div class='con-key'>" + uldata.title + ":</div>")
                    var $chconva = $("<div class='con-value'></div>")
                    if (wfi == false || wfi == undefined) { var str = "<div class='y-list'><ul class='selecbaseul h-fixed'>" } else { var str = "<div class='y-list'><ul class='selecbaseul w-fixed h-fixed'>" }
                    for (var j = 0; j < uldata.val.length; j++) {
                        str += "<li class=''>" +
                            "<a title=" + uldata.val[j] + "><i></i>" + uldata.val[j] + "</a>" +
                            "</li>"
                    }
                    str += "</ul></div>";
                    var shows, muls = '';
                    if (childconditionsdata[i].showmore || childconditionsdata[i].showmore == undefined) {

                    } else {
                        shows = "display:none";

                    }
                    if (childconditionsdata[i].multiselect || childconditionsdata[i].multiselect == undefined) {
                        str += "<div class='ybtnwrap'>" +
                            "<button type='button' class='ybtn ybtn-sure'>确定</button>" +
                            "<button type='button' class='ybtn ybtncancel'>取消</button>" +
                            "</div>"
                    }
                    // else { muls = "display:none"; }
                    $chconva.append(str);
                    var ext = "<div class='yseah-ext'>" +
                        "<a class='ys-e-more' style=" + shows + ">更多 <i></i></a>" +
                        "<a  class='ys-e-multi multiposition' style=" + muls + ">多选 <i></i></a>" +
                        "</div>";
                    $conva.append($chconva);
                    $conva.append(ext);
                    $div.append($conva);
                    self.seartextcon.append($div);
                }
            },
            advanrender: function() {
                var self = this;
                var advancecondition = this.options.data.advancecondition;
                var $div = $("<div class='yseach sele-advencesele'></div>");
                var $conwe = $("<div class='con-wrap ovefl-visi'></div>");
                $conwe.append("<div class='con-key'>" + advancecondition.title + "</div>")
                var conva = $("<div class='con-value'></div>");
                var nomust = $("<div class='sele-adve-tab'></div>")
                var $triggxuwr = $("<div class='seleadve-itemwrap'></div>");
                var $traggconwrap = $("<div class='sele-adve-con'></div>")
                var advancedata = advancecondition.val;
                for (var i = 0; i < advancedata.length; i++) {
                    var title = advancedata[i].value.title;
                    $triggxuwr.append("<a class='seleadve-itemaaa' href='#' title=" + title + ">" + title + "<i class='arrow'></i></a>");
                    var str = "<div class='seleadvecon-item' data-title=" + title + "><ul class='selecbaseul'>"
                    var subdataadve = advancedata[i].value.val;
                    for (var j = 0; j < subdataadve.length; j++) {
                        str += "<li>" +
                            "<a href='#' title=" + subdataadve[j] + ">" +
                            "<i></i>" + subdataadve[j] + "</a>" +
                            "</li>"
                    }
                    str += "</ul>";
                    if (advancedata[i].multiselect || advancedata[i].multiselect == undefined) {
                        str += "<div class='yseah-ext'>" +
                            "<a href='#'class='ys-e-multi multiposition single'>多选<i></i>" + "</a></div>";
                        str += "<div class='ybtnwrap'>" +
                            "<button type='button' class='ybtn ybtn-sure'>确定</button>" +
                            "<button type='button' class='ybtn snb ybtncancel'>取消</button></div>"
                    } else {}
                    $traggconwrap.append(str + "</div> ");
                }
                nomust.append($triggxuwr);
                conva.append(nomust);
                $conwe.append(conva);
                $conwe.append($traggconwrap);
                $div.append($conwe);
                self.seartextcon.append($div);
                advcustom();

                function advcustom() {
                    var t, t1;
                    $(".seleadve-itemwrap a").hover(function() {
                        clearTimeout(t);
                        clearTimeout(t1);
                        $(this).addClass("tre-acrr")
                        $(this).siblings("a").removeClass("tre-acrr");
                        var title = $(this).attr("title");
                        $(".sele-adve-con .seleadvecon-item").each(function() { $(this).hide(); if ($(this).attr("data-title") == title) { $(this).show(); } })
                    }, function() {
                        var sea;
                        var title = $(this).attr("title");
                        $(".sele-adve-con .seleadvecon-item").each(function() { if ($(this).attr("data-title") == title) { sea = $(this); } })
                        var se = $(this);
                        $(sea).children(".ybtnwrap").children(".ybtncancel").trigger("click");

                        function settim(op, opa) {
                            var opl = op;
                            t = setTimeout(function() {
                                console.log($(opl))
                                $(opl).removeClass("tre-acrr");
                                $(opa).hide();
                            }, 500);
                        }
                        settim(se, sea)
                    })
                    $(".sele-adve-con .seleadvecon-item").hover(function() {
                        clearTimeout(t);
                        var title = $(this).attr("data-title");
                        $(".seleadve-itemwrap .seleadve-itemaaa").each(function() { if ($(this).attr("title") == title) { $(this).addClass("tre-acrr"); } })
                    }, function() {
                        var sea;
                        var title = $(this).attr("data-title");
                        $(".seleadve-itemwrap .seleadve-itemaaa").each(function() { if ($(this).attr("title") == title) { sea = $(this); } })
                        var se = $(this);
                        $(se).children(".ybtnwrap").children(".ybtncancel").trigger("click");

                        function setbbbtime(op, opa) {
                            t1 = setTimeout(function() {
                                $(op).removeClass("tre-acrr");
                                $(opa).hide();
                            }, 500);
                        }
                        setbbbtime(sea, se);
                    })
                }
            },
            moremulti: function() {
                var self = this;
                $(".ys-e-more").on("click", function() {
                    if ($(this).hasClass("opened")) {
                        $(this).removeClass("opened");
                        $(this).html("更多<i></i>");
                        if ($(this).parent().parent().parent().hasClass("sele-r")) {
                            $(".rlogoul").scrollTop(0);
                            $(this).parent().siblings(".con-value").children(".r-letter").hide();
                            $(".rlogoul").removeClass("more");
                            $(".rlogoul").children("li").show();
                            $(".ys-letteul").children("li").removeClass("categary");
                        } else { $(this).parent().siblings(".con-value").children(".y-list").children("ul").removeClass("more"); }
                    } else {
                        $(this).html("收起<i></i>")
                        $(this).addClass("opened");
                        if ($(this).parent().parent().parent().hasClass("sele-r")) {
                            console.log("aaa")
                            $(this).parent().siblings(".con-value").children(".r-letter").show();
                            $(".rlogoul").addClass("more");
                        } else { $(this).parent().siblings(".con-value").children(".y-list").children("ul").addClass("more"); }
                    }
                });
                $(".ys-e-multi").on("click", function() {
                    if (self.lastmore == "") { if ($(this).hasClass("single")) { self.lastmore = $(this).parent().siblings(".ybtnwrap").children(".ybtncancel"); } else { self.lastmore = $(this).parent().siblings(".con-value").children(".ybtnwrap").children(".ybtncancel") }; } else {
                        if ($(this).hasClass("single")) {
                            self.lastmore.trigger("click");
                            self.lastmore = $(this).parent().siblings(".ybtnwrap").children(".ybtncancel");
                        } else {
                            self.lastmore.trigger("click");
                            self.lastmore = $(this).parent().siblings(".con-value").children(".ybtnwrap").children(".ybtncancel");
                        }
                    }
                    if ($(this).hasClass("single")) {
                        $(this).parent().siblings(".ybtnwrap").show();
                        $(this).parent().siblings(".selecbaseul").addClass("selector");
                        nlliselcli();
                        $(this).parent().hide();
                        return false;
                    } else { nlliselcli(); }
                    $(this).siblings("a").html("更多<i></i>");
                    $(this).siblings("a").removeClass("opened");
                    if ($(this).parent().parent().parent().hasClass("sele-r")) {
                        $(this).parent().siblings(".con-value").children(".r-letter").show();
                        $(this).parent().siblings(".con-value").children(".ybtnwrap").show();
                        $(".rlogoul").addClass("more");
                    } else {
                        if ($(this).hasClass("single")) {
                            $(this).parent().siblings(".ybtnwrap").show();
                            $(this).parent().siblings(".selecbaseul").addClass("selector");
                        }
                        $(this).parent().siblings(".con-value").children(".y-list").children("ul").addClass("selector");
                        $(this).parent().siblings(".con-value").children(".y-list").children("ul").addClass("more");
                        $(this).parent().siblings(".con-value").children(".ybtnwrap").show();
                        nlliselcli();
                    }
                    if ($(this).parent().parent().parent().hasClass("sele-r")) {
                        $(".rlogoul").children("li").each(function() { $(this).children("a").click(function(event) { event.preventDefault(); }); })
                        liselected();
                    }
                    $(this).parent().hide();
                })
                btn();

                function nlliselcli() {
                    var seachkey = {};
                    seachkey.val = [];
                    $(".selector li").on("click", function() {
                        console.log("aaa")
                        seachkey.key = $(this).parent().parent().parent().siblings(".con-key").html();
                        if ($(this).hasClass("selected")) {
                            $(this).removeClass("selected");
                            var title = $(this).children("a").attr("title");
                            $.each(seachkey.val, function(i, og) { if (title == og) { seachkey.val.splice(i, 1); } })
                            self.filter = seachkey;
                        } else {
                            console.log("bb");
                            var title = $(this).children("a").attr("title");
                            seachkey.val.push(title);
                            $(this).addClass("selected");
                            self.filter = seachkey;
                        }
                    })
                }

                function liselected() {
                    var passcondition = {};
                    passcondition.val = [];
                    $(".rlogoul").children("li").on("click", function() {
                        if ($(this).hasClass("selected")) {
                            var title = $(this).children("a").attr("title");
                            $(this).removeClass("selected");
                            $(".normalseliuw li").each(function() { if ($(this).children("a").attr("title") == title) { $(this).remove(); return false; } })
                            for (var i = 0; i < passcondition.val.length; i++) {
                                if (passcondition.val[i] == title) {
                                    console.log(i);
                                    passcondition.val.splice(i, 1);
                                    break;
                                }
                            }
                            self.filter = passcondition;
                            if ($(".normalseliuw li").length == 0) { $(".rooche").hide(); }
                        } else {
                            $(".rooche").show();
                            $(this).addClass("selected");
                            var title = $(this).children("a").attr("title");
                            $(".normalseliuw").append("<li class='selected'><a href='#' title=" + title + "><i></i>" + title + "</a></li>")
                            passcondition.key = self.options.data.rootconditions.value.title;
                            passcondition.val.push(title);
                            self.filter = passcondition;
                        }
                    })
                }

                function btn() {
                    $(".ybtn-sure").on("click", function() {
                        var arr = self.filter;
                        self.options.callback.selectorsure(arr);
                    })
                    $(".ybtncancel").on("click", function() {
                        if ($(this).hasClass("snb")) {
                            $(this).parent().hide();
                            $(this).parent().siblings('.yseah-ext').show();
                            $(".selector li").each(function() { $(this).unbind("click"); })
                            $(this).parent().siblings(".selecbaseul").removeClass("selector");
                            $(this).parent().siblings(".selecbaseul").children("li").each(function() { $(this).removeClass("selected"); })
                            return false;
                        }
                        if ($(this).parent().parent().parent().parent().hasClass("sele-r")) {
                            $(".rlogoul").scrollTop(0);
                            $(this).parent().siblings(".r-letter").hide();
                            $(this).parent().siblings(".r-logo").children("ul").removeClass("more");
                            $(this).parent().hide();
                            $(this).parent().siblings(".rooche").hide();
                            $(".rlogoul").children("li").show();
                            $(".ys-letteul").children("li").removeClass("categary");
                            $(".normalseliuw").html("");
                            self.filter = "";
                            $(".rlogoul").children("li").each(function() {
                                $(this).children("a").unbind("click");
                                $(this).removeClass("selected");
                                $(this).unbind("click");
                            });
                        } else {
                            self.filter = "";
                            $(".selector li").each(function() { $(this).unbind("click"); })
                            $(this).parent().siblings(".y-list").children("ul").removeClass("selector");
                            $(this).parent().siblings(".y-list").children("ul").children("li").each(function() { $(this).removeClass("selected"); })
                            $(this).parent().siblings(".y-list").children("ul").removeClass("more");
                            $(this).parent().hide();
                        }
                        $(this).parent().parent().siblings(".yseah-ext").show();
                    })
                }
            }
        }
        // $('.con-wrap:eq(1)').css('display', 'none');
        // document.querySelector('.ys-e-more').style.display = 'none'
        // .searchcon-w>.sele-chil .ys-e-more {
        //     display: none;
        // }
})(jQuery, window, document);