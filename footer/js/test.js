  // Docs at http://simpleweatherjs.com

  /* Does your browser support geolocation? */
  if ("geolocation" in navigator) {
    $('.js-geolocation').show(); 
  } else {
    $('.js-geolocation').hide();
  }

  /* Where in the world are you? */
  $('.js-geolocation').on('click', function() {
    navigator.geolocation.getCurrentPosition(function(position) {
      loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
    });
  });

  /* 
  * Test Locations
  * Austin lat/long: 30.2676,-97.74298
  * Austin WOEID: 2357536
  */
  $(document).ready(function() {
    loadWeather('Seoul','1132599'); //@params location, woeid
  });

  function loadWeather(location, woeid) {
    $.simpleWeather({
      location: location,
      woeid: woeid,
      unit: 'c',
      success: function(weather) {
        html = '<p class="number"><i id="weather_icon" class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</p>';
        html += '<p>'+weather.city+', '+weather.country+', '+weather.alt.temp+'&deg;F</p>' ;
        /*html += '<li class="currently">'+weather.currently+'</li>';*/
        /*html += '<p>'+weather.alt.temp+'&deg;F</p>';*/

        
        $("#weather").html(html);
      },
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }
    });
  }