//Una vez que nuestra pagina esta cargada ejecutara las siguientes funciones
$(function () {
  //nos sirve para activar los toltips
  $('[data-toggle="tooltip"]').tooltip();
  // Lo que hacemos es utilizar la función .animate() de jQuery para crear una animación suave que durará 800 milisegundos
  $("a").click(function (event) {
    if (this.hash !== "") event.preventDefault();
    var gato = this.hash;
    $("html,body").animate(
      {
        scrollTop: $(gato).offset().top,
      },
      800,
      function () {
        window.location.hash = gato;
      }
    );
  });

  //Activar clase active para cada link en el nav
  // elementos de la lista
  var menues = $(".navbar-nav a");
  // manejador de click sobre todos los elementos
  menues.click(function () {
    // eliminamos active de todos los elementos
    menues.removeClass("active");
    // activamos el elemento clicado.
    $(this).addClass("active");
  });
});
