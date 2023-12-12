require([
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/layers/GraphicsLayer"
], function (Map, MapView, Graphic, GraphicsLayer) {

  // Create a basemap for the map view
  var myMap = new Map({
    basemap: "satellite"
  });

  // Create a map view for the HTML using the basemap
  var myView = new MapView({
    container: "mapDiv",
    map: myMap,
    zoom: 12, // Adjust the zoom level accordingly
    center: [-111.789027, 43.823110] // Adjust the center based on the coordinates of Rexburg
  });

  // Create a Graphics Layer for church buildings
  var graphicsLayer = new GraphicsLayer();
  myMap.add(graphicsLayer);

  // Add church buildings to the map
  //EX coordinates: [Longitude, Latitude]
  var churchBuildingLocations = [
    { name: "Rexburg Temple ", coordinates: [-111.7790882, 43.8109096] },
    { name: "Cedars", coordinates: [-111.7870737, 43.8219346] },
    { name: "Test3", coordinates: [-111.779, 43.835] },
    { name: "Test4", coordinates: [-111.769, 43.845] },
    { name: "Test5", coordinates: [-111.759, 43.825] },
    { name: "Test6", coordinates: [-111.749, 43.815] },
    { name: "Test7", coordinates: [-111.739, 43.865] },
    { name: "Test8", coordinates: [-111.729, 43.875] },
    { name: "Test9", coordinates: [-111.719, 43.845] },
    { name: "Test10", coordinates: [-111.699, 43.865] },
    { name: "Test11", coordinates: [-111.689, 43.845] },
    { name: "Test12", coordinates: [-111.679, 43.895] },
    { name: "Test13", coordinates: [-111.669, 43.835] },
    { name: "Test14", coordinates: [-111.659, 43.815] },
    { name: "Test15", coordinates: [-111.649, 43.865] },
    { name: "Test16", coordinates: [-111.639, 43.835] },
    { name: "Test17", coordinates: [-111.859, 43.845] },
    { name: "Test18", coordinates: [-111.959, 43.835] },
    { name: "Test19", coordinates: [-111.789, 43.835] },
    { name: "Test20", coordinates: [-111.779, 43.825] },
    
  ];
  
//   var buildingLocations = [
    
//     { name: "Cedars", coordinates: [-111.7870737, 43.8219346] },
//   ];
  
//   buildingLocations.forEach(function (church) {
//     var marker = {
//       type: "simple-marker",
//       style: "square",
//       color: [76, 115, 5], // Color 
//       size: 8
//     };

  churchBuildingLocations.forEach(function (church) {
    var marker = {
      type: "simple-marker",
      style: "square",
      color: [76, 115, 0], // Color Green
      size: 8
    };

    var location = {
      type: "point",
      longitude: church.coordinates[0],
      latitude: church.coordinates[1]
    };

    var popupTemplate = {
      title: church.name,
      content: "Location: " + church.coordinates[1] + ", " + church.coordinates[0]
    };

    var graphic = new Graphic({
      geometry: location,
      symbol: marker,
      popupTemplate: popupTemplate
    });

    graphicsLayer.add(graphic);
  });

});