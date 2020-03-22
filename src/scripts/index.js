
import kmlDisplay from '@global-scripts/kmlDisplay'
import '../kml/Itinerary.kml'
import '../kml/Zealand.kml'
import '@global-scripts/adder'

// Log message to console
console.log('Its finished!!')

if (module.hot)       // eslint-disable-line no-undef
  module.hot.accept() // eslint-disable-line no-undef

var dataLayers = [
  'https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml',
  'http://openscholarship.wustl.edu/gis_poster/images.kml',
  'http://localhost:8080/kml/Zeeland.kml'
]

kmlDisplay(dataLayers)
