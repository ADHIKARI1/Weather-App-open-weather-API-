$(document).ready(function(){

	$("#btnSubmit").click(function(){
		return getWeather();
	});

});


function getWeather(){

	var city = $("#city").val();
	if(city != "")
	{
		$.ajax({
			//if anything wrong check extra spaces in api request code
			url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=9b5bfdc42b18a8d58f5de9456ca778ac",
			type:"GET",
			dataType:"jsonp",
			success:function(data){
				//console.log(data);
				var widget = showResult(data)
				$("#show_weather").html(widget);
				$("#city").val("");
				//if not workm check for semicolans

			}

		});
	}
	else
	{
		$("#error").html(
			"<div class='alert alert-danger alert-dismissable' id='errorCity'><a href='#' class='close' data-dismiss='alert'>&times;</a><strong>City</strong> field can not be empty !</div>"
			);
	}
}

function  showResult(data){

	return '<h2 class="h2 text-center" style="font-weight:bold; padding-top:20px; padding-left:40px;"> Current Weather For  : ' +data.name+','+data.sys.country+'</h2>'+
			"<h3 class='h3' style='padding-left:40px;'><strong>Weather</strong> : " +data.weather[0].main+"</h3>"+
			"<h3 class='h3' style='padding-left:40px;'><strong> Weather Description</strong> : <img style='display:inline' src='http://openweathermap.org/img/w/"+ data.weather[0].icon +".png' >" +data.weather[0].description+"</h3>"+
			"<h3 class='h3' style='padding-left:40px;'><strong>Temperaure</strong> : " +data.main.temp+"&deg;C</h3>"+
			"<h3 class='h3' style='padding-left:40px;'><strong>Pressure</strong></strong> : " +data.main.pressure+" hPa</h3>"+
			"<h3 class='h3' style='padding-left:40px;'><strong>Humidity</strong> : " +data.main.humidity+" %</h3>"+
			"<h3 class='h3' style='padding-left:40px;'><strong>Min Temperature</strong> : " +data.main.temp_min+"&deg;C</h3>"+
			"<h3 class='h3' style='padding-left:40px;'><strong>Max Temperaure</strong> : " +data.main.max_temp+"&deg;C</h3>"+
			"<h3 class='h3' style='padding-left:40px;'><strong>Wind Speed :</strong> " +data.wind.speed+" m/s</h3>"+
			"<h3 class='h3' style='padding-left:40px; padding-bottom:25px'><strong>Wind Direction</strong> : " +data.wind.deg+"&deg;</h3>"


}