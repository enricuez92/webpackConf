const kmlDisplay = (dataLayers) => {

  var map;
  console.log(dataLayers)
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(-19.257753, 146.823688),
    zoom: 2,
    mapTypeId: "roadmap",
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    rotateControl: true,
    fullscreenControl: true
    // disableDefaultUI: true
  });

  dataLayers.forEach(src => {
    var kmlLayer = new google.maps.KmlLayer(src, {
      suppressInfoWindows: true,
      preserveViewport: false,
      map: map
    });
    // kmlLayer.setMap(null)
  });

}

export default kmlDisplay