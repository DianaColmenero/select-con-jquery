$(document).ready(function() {
  //eventos
  $('#state').change(paintSelect);
  $('#add').click(addCity);
});

var paintSelect = function() {
	if ($(this).val() !== ' ') {
		loadStates($(this).val());
	}
}

var loadStates = function(selectedState) {
	cleanSelect();
	  data[selectedState].forEach((state, i) => {
		$('#city').append('<option value="">' + data[selectedState][i] + '</option>');
	});
}

var cleanSelect = function() {
	$('#city').empty();
	$('#city').prepend('<option value="">' + '-' + '</option>');
}

var addCity = function(e) {
  e.preventDefault();
  
  var mensaje = $('#city').find(':selected').html();
  console.log(mensaje);
  var $contenedorLista = $("<ul class='jumbo'/>");//Creo elementos HTML desde el DOM
  var $crearLi = $("<li class'lista' />");//Creo elementos HTML desde el DOM
  var $list = $("#lista");
  
  $crearLi.text(mensaje);
  $contenedorLista.append($crearLi);
  $list.append($contenedorLista);
  
}


var prub = data.sort();
console.log(prub);



