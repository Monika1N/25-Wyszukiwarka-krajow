var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList,
  	error: function() {
  		countriesList.empty();
  		$('<li>').text('COUNTRY DOES NOT EXIST').css('color', 'red').appendTo(countriesList);
  	}
  	});	
}

function showCountriesList(resp) {
  		countriesList.empty();
  		resp.forEach(function(item){
  			var capital = item.capital;
  			var region = item.region;
   			$('<li>').text(item.name + ' (region: ' + item.region + ', capital: ' + item.capital +')').appendTo(countriesList);
	});
}

