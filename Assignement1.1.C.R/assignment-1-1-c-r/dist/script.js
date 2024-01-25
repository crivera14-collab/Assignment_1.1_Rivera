var map = L.map("mapid").setView([51.505, -0.09], 13);
//STL
L.tileLayer("https://a.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "Map tiles by Stamen Design, under CC BY 3.0.",
  maxZoom: 18
}).addTo(map);

// Markers
var marker1 = L.marker([38.6355, -90.3782]).addTo(map);
var marker2 = L.marker([38.6355, -90.2906]).addTo(map);
var marker3 = L.marker([38.6369, -90.2333]).addTo(map);
var marker4 = L.marker([38.6557, -90.3033]).addTo(map);
var marker5 = L.marker([38.5865, -90.3589]).addTo(map);

// Popups

marker1.bindPopup("<br>Crestwood.").openPopup();
marker2.bindPopup("<br>STL Zoo.").openPopup();
marker3.bindPopup("<br>SLU.").openPopup();
marker4.bindPopup("<br>Clementine's.").openPopup();
marker5.bindPopup("<br>Dewey's.").openPopup();