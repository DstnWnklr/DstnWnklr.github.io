<!-- osm -->
    <script>/*#### KartenScript der Seite ####*/
		
	/*Initialisierung der Custom Marker*/
	var iconInactiv = L.icon({
		iconUrl:'marker_inactiv.png',

		iconSize:     [51, 72], // size of the icon
		/*shadowSize:   [50, 64], // size of the shadow*/
		iconAnchor:   [25.5, 72], // point of the icon which will correspond to marker's location
		/*shadowAnchor: [4, 62],  // the same for the shadow*/
		popupAnchor:  [0, -65] // point from which the popup should open relative to the iconAnchor
	});

	var iconActiv = L.icon({
		iconUrl:'marker_activ.png',

		iconSize: [51, 72], // size of the icon
		/*shadowSize:   [50, 64], // size of the shadow*/
		iconAnchor: [25.5, 72], // point of the icon which will correspond to marker's location
		/*shadowAnchor: [4, 62],  // the same for the shadow*/
		popupAnchor: [0, -65] // point from which the popup should open relative to the iconAnchor
	});
		
		/*#########################################
		Testbereich verschiedene Ebenen der Karte und Graustufen
		#########################################*/
		
		/*
		var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
			denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
			aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
			golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');
		
		var cities = L.layerGroup([littleton, denver, aurora, golden]);
		
		var grayscale = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution}),
    		streets   = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution});

		var testMap = L.map('map', {
			center: [39.73, -104.99],
			zoom: 10,
			layers: [grayscale, cities]
		});
		
		var baseMaps = {
			"Grayscale": grayscale,
			"Streets": streets
		};

		var overlayMaps = {
			"Cities": cities
		};
		
		L.control.layers(baseMaps, overlayMaps).addTo(testMap);
		
		var baseMaps = {
			"<span style='color: gray'>Grayscale</span>": grayscale,
			"Streets": streets
		};
		*/

	/*####################################################
	Definition des aktiven Markers für den Geschichtspunkt
	#####################################################*/	
	
	//Marker Einbindung des aktiven Geschichtspunktes
    var gp01 = L.marker([51.903534, 10.427719]);
		
    gp01.bindPopup('<h3>Geschichtspunkt 01</h3><br><a href="gp01.html">ehemaliges Gerichtsgefängnis</a>').closePopup();
    gp01.bindTooltip("click für mehr Info").openTooltip();
	
	//Gruppe mit eingetragenen Geschichtspunkten -> Punkte müssen vorangegangen initialisiert werden
	var points = L.layerGroup([gp01]);

	/*var marker2 = L.marker([51.906873, 10.430059], {icon: iconInactiv}).addTo(gp01_map);
	marker2.bindPopup("<h3>Marktplatz Goslar</h3>").closePopup();*/

		
	//https://stackoverflow.com/questions/37166172/mapbox-tiles-and-leafletjs
	
	/*Dunkle Karte*/
	var darkMap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{tileSize}/{z}/{x}/{y}?		access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
						{maxZoom: 18,
						attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
							  '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
							  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
						 //Hier können Mapstiles vergeben werden: verfügbare siehe https://docs.mapbox.com/api/maps/styles/
						  id: 'mapbox/dark-v10',
							//streets-v11
						  tileSize: 512,
						  zoomOffset: -1
						});
	/*Goslar Custom Karte*/	
	var lightMap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{tileSize}/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibHVjYXNrYWhsIiwiYSI6ImNsMTNsNnBhdjAwOTQzbG52enR5dTlpZ2QifQ.KSOQ6JpnfYScnvn3J1-C_Q',
						{maxZoom: 18,
						attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
							  '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
							  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
						 //Hier können Mapstiles vergeben werden: verfügbare siehe https://docs.mapbox.com/api/maps/styles/
						  id: 'lucaskahl/cl13ld29f004b14ny86sjkzu0',
							//streets-v11  light-v10
						  tileSize: 512,
						  zoomOffset: -1
						});
		
	/*#####################
	Karte initialisieren
	#####################*/
	var screenwidth = screen.width;
	console.log("Breite " + screenwidth);
	var zoomlevel = 15;
		
	if(screenwidth < 900) {
	   	zoomlevel = 16;
	   }
	   
	var gp01_map = L.map('map', {
	//Mittelpunkt der Karte	
    center: [51.903534, 10.427719],
	//Zoomstufe -> je größer, desto näher dran
    zoom: zoomlevel,
	//Deaktiviert scroll-Zoom der Karte
    scrollWheelZoom: false,
	//Default-Ebenen anfügen
	layers: [lightMap, points]
	});
		
	// Switch zwischen den Ebenen	
	var baseMaps = {
			"Dark-Mode": darkMap,
			"Original": lightMap
		};
		//checkbox für Geschichtspunkte an-aus
		var overlayMaps = {
			"Geschichtspunkte": points
		};
		//Layer-Controller wird der Karte hinzugefügt
		L.control.layers(baseMaps, overlayMaps).addTo(gp01_map);
		
		var baseMaps = {
			"<span style='color: gray'>Dark</span>": darkMap,
			"Light": lightMap
		};
		
</script> <!--Ende KartenScript--><!-- osm -->
    <script>/*#### KartenScript der Seite ####*/
		
	/*Initialisierung der Custom Marker*/
	var iconInactiv = L.icon({
		iconUrl:'marker_inactiv.png',

		iconSize:     [51, 72], // size of the icon
		/*shadowSize:   [50, 64], // size of the shadow*/
		iconAnchor:   [25.5, 72], // point of the icon which will correspond to marker's location
		/*shadowAnchor: [4, 62],  // the same for the shadow*/
		popupAnchor:  [0, -65] // point from which the popup should open relative to the iconAnchor
	});

	var iconActiv = L.icon({
		iconUrl:'marker_activ.png',

		iconSize: [51, 72], // size of the icon
		/*shadowSize:   [50, 64], // size of the shadow*/
		iconAnchor: [25.5, 72], // point of the icon which will correspond to marker's location
		/*shadowAnchor: [4, 62],  // the same for the shadow*/
		popupAnchor: [0, -65] // point from which the popup should open relative to the iconAnchor
	});
		
		/*#########################################
		Testbereich verschiedene Ebenen der Karte und Graustufen
		#########################################*/
		
		/*
		var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
			denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
			aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
			golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');
		
		var cities = L.layerGroup([littleton, denver, aurora, golden]);
		
		var grayscale = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution}),
    		streets   = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution});

		var testMap = L.map('map', {
			center: [39.73, -104.99],
			zoom: 10,
			layers: [grayscale, cities]
		});
		
		var baseMaps = {
			"Grayscale": grayscale,
			"Streets": streets
		};

		var overlayMaps = {
			"Cities": cities
		};
		
		L.control.layers(baseMaps, overlayMaps).addTo(testMap);
		
		var baseMaps = {
			"<span style='color: gray'>Grayscale</span>": grayscale,
			"Streets": streets
		};
		*/

	/*####################################################
	Definition des aktiven Markers für den Geschichtspunkt
	#####################################################*/	
	
	//Marker Einbindung des aktiven Geschichtspunktes
    var gp01 = L.marker([51.903534, 10.427719]);
		
    gp01.bindPopup('<h3>Geschichtspunkt 01</h3><br><a href="gp01.html">ehemaliges Gerichtsgefängnis</a>').closePopup();
    gp01.bindTooltip("click für mehr Info").openTooltip();
	
	//Gruppe mit eingetragenen Geschichtspunkten -> Punkte müssen vorangegangen initialisiert werden
	var points = L.layerGroup([gp01]);

	/*var marker2 = L.marker([51.906873, 10.430059], {icon: iconInactiv}).addTo(gp01_map);
	marker2.bindPopup("<h3>Marktplatz Goslar</h3>").closePopup();*/

		
	//https://stackoverflow.com/questions/37166172/mapbox-tiles-and-leafletjs
	
	/*Dunkle Karte*/
	var darkMap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{tileSize}/{z}/{x}/{y}?		access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
						{maxZoom: 18,
						attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
							  '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
							  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
						 //Hier können Mapstiles vergeben werden: verfügbare siehe https://docs.mapbox.com/api/maps/styles/
						  id: 'mapbox/dark-v10',
							//streets-v11
						  tileSize: 512,
						  zoomOffset: -1
						});
	/*Goslar Custom Karte*/	
	var lightMap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{tileSize}/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibHVjYXNrYWhsIiwiYSI6ImNsMTNsNnBhdjAwOTQzbG52enR5dTlpZ2QifQ.KSOQ6JpnfYScnvn3J1-C_Q',
						{maxZoom: 18,
						attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
							  '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
							  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
						 //Hier können Mapstiles vergeben werden: verfügbare siehe https://docs.mapbox.com/api/maps/styles/
						  id: 'lucaskahl/cl13ld29f004b14ny86sjkzu0',
							//streets-v11  light-v10
						  tileSize: 512,
						  zoomOffset: -1
						});
		
	/*#####################
	Karte initialisieren
	#####################*/
	var screenwidth = screen.width;
	console.log("Breite " + screenwidth);
	var zoomlevel = 15;
		
	if(screenwidth < 900) {
	   	zoomlevel = 16;
	   }
	   
	var gp01_map = L.map('map', {
	//Mittelpunkt der Karte	
    center: [51.903534, 10.427719],
	//Zoomstufe -> je größer, desto näher dran
    zoom: zoomlevel,
	//Deaktiviert scroll-Zoom der Karte
    scrollWheelZoom: false,
	//Default-Ebenen anfügen
	layers: [lightMap, points]
	});
		
	// Switch zwischen den Ebenen	
	var baseMaps = {
			"Dark-Mode": darkMap,
			"Original": lightMap
		};
		//checkbox für Geschichtspunkte an-aus
		var overlayMaps = {
			"Geschichtspunkte": points
		};
		//Layer-Controller wird der Karte hinzugefügt
		L.control.layers(baseMaps, overlayMaps).addTo(gp01_map);
		
		var baseMaps = {
			"<span style='color: gray'>Dark</span>": darkMap,
			"Light": lightMap
		};
		
</script> <!--Ende KartenScript--><!-- osm -->
    <script>/*#### KartenScript der Seite ####*/
		
	/*Initialisierung der Custom Marker*/
	var iconInactiv = L.icon({
		iconUrl:'marker_inactiv.png',

		iconSize:     [51, 72], // size of the icon
		/*shadowSize:   [50, 64], // size of the shadow*/
		iconAnchor:   [25.5, 72], // point of the icon which will correspond to marker's location
		/*shadowAnchor: [4, 62],  // the same for the shadow*/
		popupAnchor:  [0, -65] // point from which the popup should open relative to the iconAnchor
	});

	var iconActiv = L.icon({
		iconUrl:'marker_activ.png',

		iconSize: [51, 72], // size of the icon
		/*shadowSize:   [50, 64], // size of the shadow*/
		iconAnchor: [25.5, 72], // point of the icon which will correspond to marker's location
		/*shadowAnchor: [4, 62],  // the same for the shadow*/
		popupAnchor: [0, -65] // point from which the popup should open relative to the iconAnchor
	});
		
		/*#########################################
		Testbereich verschiedene Ebenen der Karte und Graustufen
		#########################################*/
		
		/*
		var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
			denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
			aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
			golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');
		
		var cities = L.layerGroup([littleton, denver, aurora, golden]);
		
		var grayscale = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution}),
    		streets   = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution});

		var testMap = L.map('map', {
			center: [39.73, -104.99],
			zoom: 10,
			layers: [grayscale, cities]
		});
		
		var baseMaps = {
			"Grayscale": grayscale,
			"Streets": streets
		};

		var overlayMaps = {
			"Cities": cities
		};
		
		L.control.layers(baseMaps, overlayMaps).addTo(testMap);
		
		var baseMaps = {
			"<span style='color: gray'>Grayscale</span>": grayscale,
			"Streets": streets
		};
		*/

	/*####################################################
	Definition des aktiven Markers für den Geschichtspunkt
	#####################################################*/	
	
	//Marker Einbindung des aktiven Geschichtspunktes
    var gp01 = L.marker([51.903534, 10.427719]);
		
    gp01.bindPopup('<h3>Geschichtspunkt 01</h3><br><a href="gp01.html">ehemaliges Gerichtsgefängnis</a>').closePopup();
    gp01.bindTooltip("click für mehr Info").openTooltip();
	
	//Gruppe mit eingetragenen Geschichtspunkten -> Punkte müssen vorangegangen initialisiert werden
	var points = L.layerGroup([gp01]);

	/*var marker2 = L.marker([51.906873, 10.430059], {icon: iconInactiv}).addTo(gp01_map);
	marker2.bindPopup("<h3>Marktplatz Goslar</h3>").closePopup();*/

		
	//https://stackoverflow.com/questions/37166172/mapbox-tiles-and-leafletjs
	
	/*Dunkle Karte*/
	var darkMap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{tileSize}/{z}/{x}/{y}?		access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
						{maxZoom: 18,
						attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
							  '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
							  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
						 //Hier können Mapstiles vergeben werden: verfügbare siehe https://docs.mapbox.com/api/maps/styles/
						  id: 'mapbox/dark-v10',
							//streets-v11
						  tileSize: 512,
						  zoomOffset: -1
						});
	/*Goslar Custom Karte*/	
	var lightMap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{tileSize}/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibHVjYXNrYWhsIiwiYSI6ImNsMTNsNnBhdjAwOTQzbG52enR5dTlpZ2QifQ.KSOQ6JpnfYScnvn3J1-C_Q',
						{maxZoom: 18,
						attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
							  '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
							  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
						 //Hier können Mapstiles vergeben werden: verfügbare siehe https://docs.mapbox.com/api/maps/styles/
						  id: 'lucaskahl/cl13ld29f004b14ny86sjkzu0',
							//streets-v11  light-v10
						  tileSize: 512,
						  zoomOffset: -1
						});
		
	/*#####################
	Karte initialisieren
	#####################*/
	var screenwidth = screen.width;
	console.log("Breite " + screenwidth);
	var zoomlevel = 15;
		
	if(screenwidth < 900) {
	   	zoomlevel = 16;
	   }
	   
	var gp01_map = L.map('map', {
	//Mittelpunkt der Karte	
    center: [51.903534, 10.427719],
	//Zoomstufe -> je größer, desto näher dran
    zoom: zoomlevel,
	//Deaktiviert scroll-Zoom der Karte
    scrollWheelZoom: false,
	//Default-Ebenen anfügen
	layers: [lightMap, points]
	});
		
	// Switch zwischen den Ebenen	
	var baseMaps = {
			"Dark-Mode": darkMap,
			"Original": lightMap
		};
		//checkbox für Geschichtspunkte an-aus
		var overlayMaps = {
			"Geschichtspunkte": points
		};
		//Layer-Controller wird der Karte hinzugefügt
		L.control.layers(baseMaps, overlayMaps).addTo(gp01_map);
		
		var baseMaps = {
			"<span style='color: gray'>Dark</span>": darkMap,
			"Light": lightMap
		};
		
</script> <!--Ende KartenScript--><!-- osm -->
    <script>/*#### KartenScript der Seite ####*/
		
	/*Initialisierung der Custom Marker*/
	var iconInactiv = L.icon({
		iconUrl:'marker_inactiv.png',

		iconSize:     [51, 72], // size of the icon
		/*shadowSize:   [50, 64], // size of the shadow*/
		iconAnchor:   [25.5, 72], // point of the icon which will correspond to marker's location
		/*shadowAnchor: [4, 62],  // the same for the shadow*/
		popupAnchor:  [0, -65] // point from which the popup should open relative to the iconAnchor
	});

	var iconActiv = L.icon({
		iconUrl:'marker_activ.png',

		iconSize: [51, 72], // size of the icon
		/*shadowSize:   [50, 64], // size of the shadow*/
		iconAnchor: [25.5, 72], // point of the icon which will correspond to marker's location
		/*shadowAnchor: [4, 62],  // the same for the shadow*/
		popupAnchor: [0, -65] // point from which the popup should open relative to the iconAnchor
	});
		
		/*#########################################
		Testbereich verschiedene Ebenen der Karte und Graustufen
		#########################################*/
		
		/*
		var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
			denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
			aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
			golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');
		
		var cities = L.layerGroup([littleton, denver, aurora, golden]);
		
		var grayscale = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution}),
    		streets   = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution});

		var testMap = L.map('map', {
			center: [39.73, -104.99],
			zoom: 10,
			layers: [grayscale, cities]
		});
		
		var baseMaps = {
			"Grayscale": grayscale,
			"Streets": streets
		};

		var overlayMaps = {
			"Cities": cities
		};
		
		L.control.layers(baseMaps, overlayMaps).addTo(testMap);
		
		var baseMaps = {
			"<span style='color: gray'>Grayscale</span>": grayscale,
			"Streets": streets
		};
		*/

	/*####################################################
	Definition des aktiven Markers für den Geschichtspunkt
	#####################################################*/	
	
	//Marker Einbindung des aktiven Geschichtspunktes
    var gp01 = L.marker([51.903534, 10.427719]);
		
    gp01.bindPopup('<h3>Geschichtspunkt 01</h3><br><a href="gp01.html">ehemaliges Gerichtsgefängnis</a>').closePopup();
    gp01.bindTooltip("click für mehr Info").openTooltip();
	
	//Gruppe mit eingetragenen Geschichtspunkten -> Punkte müssen vorangegangen initialisiert werden
	var points = L.layerGroup([gp01]);

	/*var marker2 = L.marker([51.906873, 10.430059], {icon: iconInactiv}).addTo(gp01_map);
	marker2.bindPopup("<h3>Marktplatz Goslar</h3>").closePopup();*/

		
	//https://stackoverflow.com/questions/37166172/mapbox-tiles-and-leafletjs
	
	/*Dunkle Karte*/
	var darkMap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{tileSize}/{z}/{x}/{y}?		access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
						{maxZoom: 18,
						attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
							  '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
							  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
						 //Hier können Mapstiles vergeben werden: verfügbare siehe https://docs.mapbox.com/api/maps/styles/
						  id: 'mapbox/dark-v10',
							//streets-v11
						  tileSize: 512,
						  zoomOffset: -1
						});
	/*Goslar Custom Karte*/	
	var lightMap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{tileSize}/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibHVjYXNrYWhsIiwiYSI6ImNsMTNsNnBhdjAwOTQzbG52enR5dTlpZ2QifQ.KSOQ6JpnfYScnvn3J1-C_Q',
						{maxZoom: 18,
						attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
							  '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
							  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
						 //Hier können Mapstiles vergeben werden: verfügbare siehe https://docs.mapbox.com/api/maps/styles/
						  id: 'lucaskahl/cl13ld29f004b14ny86sjkzu0',
							//streets-v11  light-v10
						  tileSize: 512,
						  zoomOffset: -1
						});
		
	/*#####################
	Karte initialisieren
	#####################*/
	var screenwidth = screen.width;
	console.log("Breite " + screenwidth);
	var zoomlevel = 15;
		
	if(screenwidth < 900) {
	   	zoomlevel = 16;
	   }
	   
	var gp01_map = L.map('map', {
	//Mittelpunkt der Karte	
    center: [51.903534, 10.427719],
	//Zoomstufe -> je größer, desto näher dran
    zoom: zoomlevel,
	//Deaktiviert scroll-Zoom der Karte
    scrollWheelZoom: false,
	//Default-Ebenen anfügen
	layers: [lightMap, points]
	});
		
	// Switch zwischen den Ebenen	
	var baseMaps = {
			"Dark-Mode": darkMap,
			"Original": lightMap
		};
		//checkbox für Geschichtspunkte an-aus
		var overlayMaps = {
			"Geschichtspunkte": points
		};
		//Layer-Controller wird der Karte hinzugefügt
		L.control.layers(baseMaps, overlayMaps).addTo(gp01_map);
		
		var baseMaps = {
			"<span style='color: gray'>Dark</span>": darkMap,
			"Light": lightMap
		};
		
</script> <!--Ende KartenScript--><!-- osm -->
    <script>/*#### KartenScript der Seite ####*/
		
	/*Initialisierung der Custom Marker*/
	var iconInactiv = L.icon({
		iconUrl:'marker_inactiv.png',

		iconSize:     [51, 72], // size of the icon
		/*shadowSize:   [50, 64], // size of the shadow*/
		iconAnchor:   [25.5, 72], // point of the icon which will correspond to marker's location
		/*shadowAnchor: [4, 62],  // the same for the shadow*/
		popupAnchor:  [0, -65] // point from which the popup should open relative to the iconAnchor
	});

	var iconActiv = L.icon({
		iconUrl:'marker_activ.png',

		iconSize: [51, 72], // size of the icon
		/*shadowSize:   [50, 64], // size of the shadow*/
		iconAnchor: [25.5, 72], // point of the icon which will correspond to marker's location
		/*shadowAnchor: [4, 62],  // the same for the shadow*/
		popupAnchor: [0, -65] // point from which the popup should open relative to the iconAnchor
	});
		
		/*#########################################
		Testbereich verschiedene Ebenen der Karte und Graustufen
		#########################################*/
		
		/*
		var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
			denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
			aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
			golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');
		
		var cities = L.layerGroup([littleton, denver, aurora, golden]);
		
		var grayscale = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution}),
    		streets   = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution});

		var testMap = L.map('map', {
			center: [39.73, -104.99],
			zoom: 10,
			layers: [grayscale, cities]
		});
		
		var baseMaps = {
			"Grayscale": grayscale,
			"Streets": streets
		};

		var overlayMaps = {
			"Cities": cities
		};
		
		L.control.layers(baseMaps, overlayMaps).addTo(testMap);
		
		var baseMaps = {
			"<span style='color: gray'>Grayscale</span>": grayscale,
			"Streets": streets
		};
		*/

	/*####################################################
	Definition des aktiven Markers für den Geschichtspunkt
	#####################################################*/	
	
	//Marker Einbindung des aktiven Geschichtspunktes
    var gp01 = L.marker([51.903534, 10.427719]);
		
    gp01.bindPopup('<h3>Geschichtspunkt 01</h3><br><a href="gp01.html">ehemaliges Gerichtsgefängnis</a>').closePopup();
    gp01.bindTooltip("click für mehr Info").openTooltip();
	
	//Gruppe mit eingetragenen Geschichtspunkten -> Punkte müssen vorangegangen initialisiert werden
	var points = L.layerGroup([gp01]);

	/*var marker2 = L.marker([51.906873, 10.430059], {icon: iconInactiv}).addTo(gp01_map);
	marker2.bindPopup("<h3>Marktplatz Goslar</h3>").closePopup();*/

		
	//https://stackoverflow.com/questions/37166172/mapbox-tiles-and-leafletjs
	
	/*Dunkle Karte*/
	var darkMap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{tileSize}/{z}/{x}/{y}?		access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
						{maxZoom: 18,
						attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
							  '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
							  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
						 //Hier können Mapstiles vergeben werden: verfügbare siehe https://docs.mapbox.com/api/maps/styles/
						  id: 'mapbox/dark-v10',
							//streets-v11
						  tileSize: 512,
						  zoomOffset: -1
						});
	/*Goslar Custom Karte*/	
	var lightMap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{tileSize}/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibHVjYXNrYWhsIiwiYSI6ImNsMTNsNnBhdjAwOTQzbG52enR5dTlpZ2QifQ.KSOQ6JpnfYScnvn3J1-C_Q',
						{maxZoom: 18,
						attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
							  '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
							  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
						 //Hier können Mapstiles vergeben werden: verfügbare siehe https://docs.mapbox.com/api/maps/styles/
						  id: 'lucaskahl/cl13ld29f004b14ny86sjkzu0',
							//streets-v11  light-v10
						  tileSize: 512,
						  zoomOffset: -1
						});
		
	/*#####################
	Karte initialisieren
	#####################*/
	var screenwidth = screen.width;
	console.log("Breite " + screenwidth);
	var zoomlevel = 15;
		
	if(screenwidth < 900) {
	   	zoomlevel = 16;
	   }
	   
	var gp01_map = L.map('map', {
	//Mittelpunkt der Karte	
    center: [51.903534, 10.427719],
	//Zoomstufe -> je größer, desto näher dran
    zoom: zoomlevel,
	//Deaktiviert scroll-Zoom der Karte
    scrollWheelZoom: false,
	//Default-Ebenen anfügen
	layers: [lightMap, points]
	});
		
	// Switch zwischen den Ebenen	
	var baseMaps = {
			"Dark-Mode": darkMap,
			"Original": lightMap
		};
		//checkbox für Geschichtspunkte an-aus
		var overlayMaps = {
			"Geschichtspunkte": points
		};
		//Layer-Controller wird der Karte hinzugefügt
		L.control.layers(baseMaps, overlayMaps).addTo(gp01_map);
		
		var baseMaps = {
			"<span style='color: gray'>Dark</span>": darkMap,
			"Light": lightMap
		};
		
</script> <!--Ende KartenScript-->// JavaScript Document
var iconInactiv = L.icon({
	iconUrl:'marker_inactiv.png',
	iconSize:     [51, 72], // size of the icon
	/*shadowSize:   [50, 64], // size of the shadow*/
	iconAnchor:   [25.5, 72], // point of the icon which will correspond to marker's location
	/*shadowAnchor: [4, 62],  // the same for the shadow*/
	popupAnchor:  [0, -65] // point from which the popup should open relative to the iconAnchor
});

var iconActiv = L.icon({
	iconUrl:'marker_activ.png',
	iconSize: [51, 72], // size of the icon
	/*shadowSize:   [50, 64], // size of the shadow*/
	iconAnchor: [25.5, 72], // point of the icon which will correspond to marker's location
	/*shadowAnchor: [4, 62],  // the same for the shadow*/
	popupAnchor: [0, -65] // point from which the popup should open relative to the iconAnchor
});


var screenwidth = screen.width;
	console.log("Breite " + screenwidth);
	var zoomlevel = 15;
		
	if(screenwidth < 900) {
	   	zoomlevel = 14;
	   }
	   
var landingMap = L.map('map', {
    center: [51.905913, 10.429114],
    zoom: zoomlevel,
    scrollWheelZoom: false
});

var marker = L.marker([51.905913, 10.429114]).addTo(landingMap);

marker.bindPopup("<h3>Marktplatz Goslar</h3><p>Lorem Ipsum<br>Lorem Ipsum<br>Lorem Ipsum</p>").closePopup();
marker.bindTooltip("click für mehr Info").openTooltip();

var marker2 = L.marker([51.906873, 10.430059], {icon: iconInactiv}).addTo(landingMap);

marker2.bindPopup("<h3>Marktplatz Goslar</h3>").closePopup();

/*var GPmap = L.map('GP_map').setView([50.905913, 11.429114], 15);
var markerGP01 = L.marker([50.905913, 11.429114]).addTo(GPmap);*/
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{tileSize}/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibHVjYXNrYWhsIiwiYSI6ImNsMTNsNnBhdjAwOTQzbG52enR5dTlpZ2QifQ.KSOQ6JpnfYScnvn3J1-C_Q',
						{maxZoom: 18,
						attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
							  '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
							  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
						 //Hier können Mapstiles vergeben werden: verfügbare siehe https://docs.mapbox.com/api/maps/styles/
						  id: 'lucaskahl/cl13ld29f004b14ny86sjkzu0',
							//streets-v11  light-v10
						  tileSize: 512,
						  zoomOffset: -1
						}).addTo(landingMap);