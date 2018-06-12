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
  var $contenedorLista = $('<ul class="jumbo"/>');//Creo elementos HTML desde el DOM
  var $crearLi = $('<li class="lista" />');//Creo elementos HTML desde el DOM
  var $list = $("#lista");

  if (mensaje.value !== " ") {
  
  $crearLi.text(mensaje);
  $contenedorLista.append($crearLi);
  $list.append($contenedorLista);
  }
  
}

console.log(data.length);

var newArray = [];
newArray[0] = 'elemento1';
newArray[1] = 'elemento2';
newArray[2] = 'elemento3';
newArray[3] = 'elemento4';

console.log(newArray.length);

newArray.push('otro elemento mas')

console.log(newArray);
//or (mismo resultado)
//console.log(data['Jalisco']);

//log de object con map
var otherData = (data['Aguascalientes']).map(function(city) {
  return [city]; //devuelve todos los municipios
});
//console.log(otherData);


//esto no se puede ya que .map() esta esperando una funcion:
//var otherData = (data['Aguascalientes']).map(newArray);


//log de object con push
var otherData = (data['Jalisco']).push(function(city) {
  return [(city)];
});
//console.log(otherData);  me devve el numero 9
//or
var otherData = (data['Jalisco']).push(newArray);
//console.log(otherData); me devve el numero 10

var ejemplo = 'este es un ejemplo de string';
//console.log(ejemplo.length);
//console.log(ejemplo.toUpperCase());




var resultArr = Object.keys(data).map(function(key) {
  return [data[key]];
});

//console.log(resultArr);

//var prub = data.sort();
//console.log(prub);



