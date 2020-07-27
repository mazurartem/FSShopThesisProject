var map = L.map("map").setView([49.068, 33.4204], 10);

L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=EA3jla9XBTGO9g76nilk",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(map);

var marker = L.marker([49.068, 33.4204]).addTo(map);
