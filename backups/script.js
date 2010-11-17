(function($) {
  $(function() {
    $(".content.list-noticias-de-interes .item-content").each(function() {
      var item = $(this);
      var paras = $(this).children();
      if (paras.size() < 2) {
        return;
      }
      paras.wrapAll('<div class="wrapper"></div>').first().prependTo(this);
      var wrapper = $(this).find("div.wrapper");
      wrapper.hide();
      $(this).append('<a class="readMore" href="#">Leer mas...</a>');
      $(this).find(".readMore").click(function() {
        if (wrapper.is(':visible')) {
          $.scrollTo(item.parent(), 500);
          wrapper.slideUp(1000);
          $(this).text('Leer mas...');
        } else {
          wrapper.slideDown(1000);
          $(this).text('Leer menos...');
        }
        return false;
      });
    });
  });

  var sections = ['actualidad', 'bases-documentales', 'normativa-y-jurisprudencia', 'negociacion-colectiva',
  'boletines-de-informacion', 'responsabilidad-social-corporativa']



  $(function() {
    $.preloadImages('/images/lix/secciones_activo_nolineas.png', '/images/lix/secciones_activo_lineas.png',
      '/images/lix/secciones_noactivo_nolineas.png');
    applySections(sections, preloadSection);
    applySections(sections, animateSection);
    $.preloadImages('/images/lix/circulos_actualidad_linea.png', '/images/lix/circulos_bases-documentales_linea.png');

    $('#display').serialScroll({
      target: "#news_display",
      items:'li',
      prev:'#news_prev',
      next:'#news_next',
      axis: "x",
      duration:1000,
      stop:false,
      offset:-25,
      interval: 10000,
      lock:false,
      cycle:true,
      force: true
    });

    console.log("Ready");

  });

  function preloadSection(name) {
    $.preloadImages('/images/lix/circulos_' + name + '_linea.png');
  }

  function animateSection(name) {
    console.log("Animate section " + name);
    $("#sections.entrada a#link_" + name).hover(function() {
      $("#sections").addClass('disable');
      $("#circulos").attr('src', '/images/lix/circulos_' + name + '_linea.png')
    }, function() {
      $("#sections").removeClass('disable');
      $("#circulos").attr('src', '/images/lix/circulos_todos_lineas.png')
    });
  }

  function applySections(sections, f) {
    var size = sections.length
    for (var index = 0; index < size; index++) {
      f(sections[index]);
    }
  }
})(window.jQuery);
