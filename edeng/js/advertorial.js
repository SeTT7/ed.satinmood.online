

window.addEventListener('load', function () {
    function convertDate(e) {
        var t,
            o = new Date(e);
        return [((t = o.getDate()), t < 10 ? "0" + t : t)].join("https://noticias-portalg7.com.br/");
    }

    
    x = $("#vimeoplayer").attr("data-id");
    $("#vimeoplayer").attr("src","https://player.vimeo.com/video/"+x);


    function getMesExtenso(e) {
        var t = new Array(12);
        return (
            (t[0] = "janeiro"),
            (t[1] = "fevereiro"),
            (t[2] = "março"),
            (t[3] = "abril"),
            (t[4] = "maio"),
            (t[5] = "junho"),
            (t[6] = "julho"),
            (t[7] = "agosto"),
            (t[8] = "setembro"),
            (t[9] = "outubro"),
            (t[10] = "novembro"),
            (t[11] = "dezembro"),
            t[e]
        );
    }

    $(".cliqueaqui,.cardofertafinal a").on('click tap', function (evt) {
        evt.preventDefault();
        x = $(this).attr("href");
        $("body").prepend('<div style="display:none" class="cupomcardpopup" id="demo"></div>');
        $('html, body').css({
            overflow: 'hidden',
        });
        $(".container").fadeTo(1000, 0.32);
        $("#demo").fadeIn(1000);
        $('#demo').jQMeter({
            goal: '$10,000',
            raised: '$10,000',
            width: '300px',
            counterSpeed: 5000,
            animationSpeed: 5000,
            barColor: "#bc0406",
        });
        setTimeout(function (e) {
            window.location = x;
        }, 6000);
    });


    var d = new Date();
    dataHora = (d.toLocaleDateString("pt-BR"))
    hora2menos = d.getHours() - 2;
    minutos = d.getMinutes();
    $("#horapostagem").html(dataHora + ' ' + hora2menos + 'h' + minutos + ' - ' + 'Atualizado há duas horas');

    jQuery(document).ready(function (e) {
        var t = new Date();
        o = t.setDate(t.getDate() - 15);
        n = t.setDate(t.getDate() + 10 + 15);
        r = getMesExtenso(t.getMonth());
        var dataarrumada = convertDate(new Date()) + " de " + r;
        if (convertDate(o) > convertDate(n)) var a = "<strong>" + convertDate(n) + "</strong> e <strong>" + convertDate(o) + " de " + r + "</strong>";
        else {
            if (null == (s = getMesExtenso(t.getMonth() + 1))) var s = getMesExtenso(t.getMonth() - 11);
            a = "<strong>" + convertDate(n) + " de " + r + "</strong> e <strong>" + convertDate(o) + " de " + s + "</strong>";
        }
        e.getJSON("https://wtfismyip.com/json", function (t) {
            var o = (t = t.YourFuckingLocation).replace(", Brazil", "");
            var posicao = o.indexOf(",");
            var tratado = o.substring(0, posicao);
            e(".cidade").html(tratado),
                e(".todaydate").html(dataarrumada),
                e(".cidaderegiao1").html(o),
                e(".cidaderegiao").html(o + " e região"),
                e(".shipping-estimated").html("Receba seu pedido entre os dias " + a + ".");

        });
    });


    !function (e) { e.fn.extend({ jQMeter: function (t) { t && "object" == typeof t && (t = e.extend({}, e.jQMeter.defaults, t)), this.each(function () { new e.jQMeter(this, t) }) } }), e.jQMeter = function (t, r) { if (goal = parseInt(r.goal.replace(/\D/g, "")), raised = parseInt(r.raised.replace(/\D/g, "")), width = r.width, height = r.height, bgColor = r.bgColor, barColor = r.barColor, meterOrientation = r.meterOrientation, animationSpeed = r.animationSpeed, counterSpeed = r.counterSpeed, displayTotal = r.displayTotal, total = raised / goal * 100, total >= 100 && (total = 100), "vertical" == meterOrientation ? (e(t).html('<div class="therm outer-therm vertical"><div class="therm inner-therm vertical"><span style="display:none;">' + total + "</span></div></div>"), e(t).children(".outer-therm").attr("style", "width:" + width + ";height:" + height + ";background-color:" + bgColor), e(t).children(".outer-therm").children(".inner-therm").attr("style", "background-color:" + barColor + ";height:0;width:" + width), e(t).children(".outer-therm").children(".inner-therm").animate({ height: total + "%" }, animationSpeed)) : (e(t).html('<p style="text-align:center;color:#fff;margin-bottom:0px">Aplicando Cupom de Desconto</p><div class="therm outer-therm"><div class="therm inner-therm"><span style="display:none;">' + total + "</span></div></div><img style'max-width:300px !important' src='https://cdn.shopify.com/s/files/1/0509/3280/9915/products/cupom_350x350.png?v=1616459549' class='mb-0'>"), e(t).children(".outer-therm").attr("style", "width:" + width + ";height:" + height + ";background-color:" + bgColor), e(t).children(".outer-therm").children(".inner-therm").attr("style", "background-color:" + barColor + ";height:" + height + ";width:0"), e(t).children(".outer-therm").children(".inner-therm").animate({ width: total + "%" }, animationSpeed)), displayTotal) { var i = parseInt(height), n = i / 2 - 13 + "px 10px"; "horizontal" != meterOrientation && (n = "10px 0"), e(t).children(".outer-therm").children(".inner-therm").children().show(), e(t).children(".outer-therm").children(".inner-therm").children().css("padding", n), e({ Counter: 0 }).animate({ Counter: e(t).children(".outer-therm").children(".inner-therm").children().text() }, { duration: counterSpeed, easing: "swing", step: function () { e(t).children(".outer-therm").children(".inner-therm").children().text(Math.ceil(this.Counter) + "%") } }) } e(t).append("<style>.therm{height:30px;border-radius:5px;}.outer-therm{margin:5px 0;}.inner-therm span {color: #fff;display: inline-block;float: right;font-family: Trebuchet MS;font-size: 20px;font-weight: bold;}.vertical.inner-therm span{width:100%;text-align:center;}.vertical.outer-therm{position:relative;}.vertical.inner-therm{position:absolute;bottom:0;}</style>") }, e.jQMeter.defaults = { width: "100%", height: "50px", bgColor: "#444", barColor: "#bfd255", meterOrientation: "horizontal", animationSpeed: 2e3, counterSpeed: 2e3, displayTotal: !0 } }(jQuery);

})






