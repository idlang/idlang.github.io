    $(document).ready(function() {
      $('body').append($('<div><dt/><dd/></div>').attr('id', 'progress'))
      $('#progress').width(100 + '%')
      $('#progress').width('101%').delay(800).fadeOut(400, function() {
        $(this).remove()
      })
      $(".apps").each(function() {
        var d = $(this);
        $(".drop", d).click(function(n) {
          return n.preventDefault(), $div = $(".gb_fa", d), $div.toggle(), $(".gb_fa").not($div).hide(), !1
        })
      }), $("html,.drops,.dropsss,.dropss,.tt_tg,.dropdown-link,.dropdwn,.Label button,.bg_Se input").click(function() {
        $(".gb_fa").hide()
      }), $(".au").each(function() {
        var d = $(this);
        $(".dropss", d).click(function(n) {
          return n.preventDefault(), $div = $(".au-menu", d), $div.toggle(), $(".au-menu").not($div).hide(), !1
        })
      }), $("html,.drop,.drops,.dropsss,.tt_tg,.dropdown-link,.dropdwn,.Label button,.bg_Se input").click(function() {
        $(".au-menu").hide()
      }), $(".tb").each(function() {
        var d = $(this);
        $(".dropsss", d).click(function(n) {
          return n.preventDefault(), $div = $(".tb-menu", d), $div.toggle(), $(".tb-menu").not($div).hide(), !1
        })
        $('.tb-menu,.au-menu').click(function(e) {
          e.stopPropagation()
        })
      }), $("html,.drop,.drops,.dropss,.tt_tg,.dropdown-link,.dropdwn,.Label button,.bg_Se input").click(function() {
        $(".tb-menu").hide()
        $('.recent-comments ul').empty()
        $('#numcomments').attr('value', '0')
        $('#allcomments').attr('value', '')
        $('.loading').removeClass('spinner').removeClass('load')
      }), $("html").click(function() {
        $(".tg-menu").hide()
      }), $(".tg").each(function() {
        var d = $(this);
        $(".tt_tg", d).click(function(n) {
          return n.preventDefault(), $div = $(".tg-menu", d), $div.toggle(), $(".tg-menu").not($div).hide(), !1
        })
      }), $("html,.drop,.drops,.dropss,.dropsss,.dropdown-link,.dropdwn,.Label button,.bg_Se input").click(function() {
        $(".tg-menu").hide()
      }), $(".dropdown").each(function() {
        var d = $(this);
        $(".dropdown-link", d).click(function(n) {
          return n.preventDefault(), $div = $(".dropdown-container", d), $div.toggle(), $(".dropdown-container").not($div).hide(), !1
        })
      }), $("html,.drop,.drops,.dropss,.dropsss,.tt_tg,.dropdwn,.Label button,.bg_Se input").click(function() {
        $(".dropdown-container").hide()
      }), $(".dd").each(function() {
        var d = $(this);
        $(".drops", d).click(function(n) {
          return n.preventDefault(), $div = $(".dd-menu", d), $div.toggle(), $(".dd-menu").not($div).hide(), !1
        })
      }), $("html,.drop,.dropss,.dropsss,.tt_tg,.dropdown-link,.dropdwn,.Label button,.bg_Se input").click(function() {
        $(".dd-menu").hide()
      }), $(".dds").each(function() {
        var d = $(this);
        $(".dropdwn", d).click(function(n) {
          return n.preventDefault(), $div = $(".dds-menu", d), $div.toggle(), $(".dds-menu").not($div).hide(), !1
        })
      }), $("html,.drop,.drops,.dropss,.dropsss,.tt_tg,.dropdown-link,.Label button,.bg_Se input").click(function() {
        $(".dds-menu").hide()
      })
     
      $('html,.drop,.drops,.dropss,.dropsss,.tt_tg,.dropdown-link,.dropdwn,.Label button').click(function() {
        $('.gb_Se').removeClass('gb_af')
      })
 
    })
