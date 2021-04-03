function initMap() {
  let pos = {lat: 59.93882396867257, lng: 30.323101042787066};
  let opt = {
    center: pos,
    zoom: 17,
  };
  let map = new google.maps.Map(document.getElementById("map"), opt);
  let marker = new google.maps.Marker({
    position: pos,
    map: map,
    title: "ул. Большая Конюшенная, д. 19/8 Санкт-Петербург",
    icon: "img/content/map-marker.png"
  });
  let info = new google.maps.InfoWindow({
    content: "<h3>Компания Cat Energy</h3><p>Еда для котов</p><p>ул. Большая Конюшенная, д. 19/8 Санкт-Петербург</p>"
  });

  marker.addListener("click", function() {
    info.open(map, marker);
  });
}
