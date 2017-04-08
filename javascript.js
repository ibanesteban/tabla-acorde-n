 $(function() {
      $(".fila-proyecto tr:first-child").show();
      $(".fila-proyecto tr:not(.acordeon)").hide();
      

      $(".fila-proyecto tr.acordeon").click(function(){
          $(this).nextAll("tr").fadeToggle(250);
      }); //.eq(0).trigger('click'); //para ejecutar automaticamente al cargar la página
  });