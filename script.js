var map = L.map('map').setView([37.78,-122.429], 12);

var Stamen_Terrain = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var geojsonFeature = 
   
$.getJSON("https://raw.githubusercontent.com/gbrunner/adv-programming-for-gis-and-rs/master/Web%20Development%20Module/Unit%201%20-%20GitHub%20and%20Leaflet/sf_crime.geojson",function(data){
    var Icon = L.icon({
      iconUrl: 'https://th.bing.com/th/id/R.439bbbd74baa60138ddf0e1d1e769f7e?rik=iM7Wl%2fO45JAikA&riu=http%3a%2f%2fgetdrawings.com%2fcliparts%2fhandcuffs-clipart-19.jpg&ehk=%2bfkNwrykhvO7yHahzHXm1kacdFT%2boX8isIxzx85Xri4%3d&risl=&pid=ImgRaw&r=0',
      iconSize: [60,60]
    });
    var crime = L.geoJson(data,{
      pointToLayer: function(feature,latlng){
       var marker = L.marker(latlng,{icon: Icon});
        marker.bindPopup(feature.properties.Location + '<br/>' + feature.properties.OPEN_DT + '<br/>' + feature.properties.SUBJECT);
        return marker;
      }
    });
    var clusters = L.markerClusterGroup();
    clusters.addLayer(crime);
    map.addLayer(clusters);
});
