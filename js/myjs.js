function init(){
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(41.8664, -87.6068);
  
  var mapOptions = {
    center: myLocation,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    
	mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
  }
};

var myMap = new google.maps.Map(el, mapOptions);

var marker = new google.maps.Marker({
  position: myLocation,
  map: myMap,
  animation: google.maps.Animation.DROP,
  icon: 'images/icon.jpg'
});

var contentString = '<h1>Adler Planetarium</h1><p>The Adler Planetarium is a museum that is located in Chicago. It is dedicated to showing exhibits about space.</p>';

var infowindow = new google.maps.InfoWindow ({
  content: contentString
});

google.maps.event.addListener(marker, 'mouseover', function() {
  infowindow.open(myMap, marker);
});


}

google.maps.event.addDomListener(window, 'load', init);