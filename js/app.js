$(document).ready(function() {
  //eventos
  $('#state').change(paintSelect);
  $('#add').click(addCity);
  $('#orderByName').click(orderByName);
  $('#orderByLength').click(orderByLength);
});

var paintSelect = function() {
	if ($(this).val() !== ' ') {
		loadStates($(this).val());
	}
}

var loadStates = function(selectedState) {
	cleanSelect();
	  data[selectedState].forEach((state, i) => {
		$('#city').append('<option value="">' + data[selectedState][i] + '</option>');//Creo elementos HTML desde el DOM
	});
}

var cleanSelect = function() {
	$('#city').empty();
	$('#city').prepend('<option value=" ">' + '-' + '</option>');//Creo elementos HTML desde el DOM
}


var addCity = function(e) {
  e.preventDefault();

  var mensaje = $('#city')
		.find(':selected')
		.text();
	if (newArray.length > 4) {
		newArray.shift();
		// console.log('TEST');
	}

	cityContainer(mensaje);
	// getDuplicatedValues(newArray);
}
  var newArray = [];

  var cityContainer = function(mensaje){
		//inserto elementos seleccionados en el array vacio
		newArray.push(mensaje);

		myFunction(newArray);
  
  }

  var myFunction = function(newArray){
		
    var $contenedorLista = $('#lista');
    $contenedorLista.empty();
    for (var i = 0; i < newArray.length; i++){
      var $crearLi = $('<p class="lista" />');//Creo elementos HTML desde el DOM
      $contenedorLista.append($crearLi);
      $crearLi.text(newArray[i]);
  
    }
  
  }

	// Array.prototype.getDuplicatedValues = function(newArray) {
	// 	console.log('prub');
		
	// 	var counter = 0;
	// 	for (var i = 0; i < newArray.length; i++) {
			
	// 	}
	// 	return counter;
	// 	console.log(counter);
		
	// }

var orderByName = function() {
newArray = newArray.sort();
myFunction(newArray);

}


var orderByLength = function(arr, asc) {
  var byLength = newArray.sort(function(a,b){
    if (asc) return b.length - a.length;
    else return a.length - b.length
  });
  myFunction(newArray);
  
}




//$('#lista li').each(function(i, v){
 // console.log($(v).text());
  
//});

//console.log(data.length);

// var items = $('#lista li');

//   for(var i = 0; i < items.length; i++){
//     newArray.push(items[i].html);
//   }

//console.log(newArray.length);


//console.log(newArray);
//or (mismo resultado)
//console.log(data['Jalisco']);

//log de object con map
// var otherData = (data['Aguascalientes']).map(function(city) {
//   return [city]; //devuelve todos los municipios
// });
//console.log(otherData);


//esto no se puede ya que .map() esta esperando una funcion:
//var otherData = (data['Aguascalientes']).map(newArray);


//log de object con push
// var otherData = (data['Jalisco']).push(function(city) {
//   return [(city)];
// });
//console.log(otherData);  me devve el numero 9
//or
// var otherData = (data['Jalisco']).push(newArray);
//console.log(otherData); me devve el numero 10

// var ejemplo = 'este es un ejemplo de string';
//console.log(ejemplo.length);
//console.log(ejemplo.toUpperCase());

// var resultArr = Object.keys(data).map(function(key) {
//   return [data[key]];
// });

//console.log(resultArr);

//var prub = data.sort();
//console.log(prub);


// var otroArr = ['Diana', 29, 'Java Script']


