$(document).ready(function(){

	$("#btnForcast").click(function(){

		return getForcast();

	}
	);

}
);

function getForcast(){

	var city = $("#city").val();
	var days = $("#days").val();

	if(city != '' && days != '')
	{
		$.ajax({
			url:'http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+"&units=metric&cnt="+days+"&APPID=9b5bfdc42b18a8d58f5de9456ca778ac",
			type:"GET",
			dataType:"jsonp",
			success:function(data){
				//console.log(data);

				var table = '';
				var header = '<h2 style="font-weight:bold; font-size:30px; margin-top:35px;">Weather Forcast '+data.city.name+', '+data.city.country+'</h2>';

				for (var i = 0; i < data.list.length; i++){
				
				table += "<tr>";
				table += "<td><img src='http://openweathermap.org/img/w/"+data.list[i].weather[0].icon+".png'></td>";
				table += "<td>"+data.list[i].weather[0].main+"</td>";
				table += "<td>"+data.list[i].weather[0].description+"</td>";
				table += "<td>"+data.list[i].temp.morn+" &deg;C</td>";
				table += "<td>"+data.list[i].temp.night+" &deg;C</td>";
				table += "<td>"+data.list[i].temp.min+" &deg;C</td>";
				table += "<td>"+data.list[i].temp.max+" &deg;C</td>";
				table += "<td>"+data.list[i].preasure+" hPa</td>";
				table += "<td>"+data.list[i].humidity+" %</td>";
				table += "<td>"+data.list[i].speed+" m/s</td>";
				table += "<td>"+data.list[i].deg+" &deg;</td>";
				table += "</tr>"

				};
				$("#forcastWeather").html(table);
				$("#header").html(header);
				$("#city").val("");
				$("#days").val("");

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