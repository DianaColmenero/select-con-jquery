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
	  data[selectedState].forEach((element, i) => {
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
	if (newArray.length > 9) {
		newArray.shift();
		// console.log('TEST');
	}

	cityContainer(mensaje);
	// getDuplicatedValues(newArray);
	paintList();
}
  var newArray = [];
  
  var cityContainer = function(mensaje){
	  //inserto elementos seleccionados en el array vacio
	  newArray.push(mensaje);
	  
	  myFunction(newArray);
	  
	}
	
// 	getDuplicatedValues = function(newArray) {
// 		// console.log('prub');
		
// 		var current = null;
// 		var count = 0;

// 		for(var i = 0; i < newArray.length; i++){
//     		if(newArray[i] !== current){
//     		if(count > 0){
				
// 				$('#elemDup').html(current + " " + count);
//     }
//     	current = newArray[i];
// 		count = 1;
	
//   	}else{
// 		count++;
		
//   	}
			
// 	}

// }

Array.prototype.getDuplicatedValues = function(newArray) {

	var counter = 0;
	for (var i = 0; i < this.length; i++) {
		// console.log(this);
		
		for (var j = 0; j < i; j++) {
			// console.log(this);
			
			if (i != j && this[i] === this[j]) {
				counter++;
				break;
			}
		}
	}
	return counter;
}


function paintList() {
	// console.log('prub');
	
	var lista = newArray;
	var total = lista.getDuplicatedValues();
	$('#elemDup').text(total);
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




