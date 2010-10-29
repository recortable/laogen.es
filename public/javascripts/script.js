(function($) {

  var sections = ['actualidad', 'bases-documentales', 'normativa-y-jurisprudencia', 'negociacion-colectiva',
  'boletines-de-informacion', 'responsabilidad-social-corporativa']



  $(function() {
    $.preloadImages('/images/lix/secciones_activo_nolineas.png', '/images/lix/secciones_activo_lineas.png');
    applySections(sections, preloadSection);
    applySections(sections, animateSection);
    $.preloadImages('/images/lix/circulos_actualidad_linea.png', '/images/lix/circulos_bases-documentales_linea.png')
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
