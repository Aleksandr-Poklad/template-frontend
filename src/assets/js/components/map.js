export default function initMaps() {


function map1() {
	var overlay;
      USGSOverlay.prototype = new google.maps.OverlayView();
      var mapBlock = document.getElementById("map");
    function initMap() {
        var mapBlock = document.getElementById("map");

        if (!mapBlock) return;

        var styleMap = [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#378b90"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#31b9c1"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#46bcec"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#31b9c1"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#31b9c1"
                    }
                ]
            }
        ],
            center = new google.maps.LatLng(49.096440615094906, 24.69179978594184);


        var mapOptions = {
            center: center,
            maxZoom: 30,
            minZoom: 3,
            zoom: 8,
            styles: styleMap
        };

        var map = new google.maps.Map(mapBlock, mapOptions);

        


    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            icon: props.image
        });

        if (props.image) {
            marker.setIcon(props.image);
        }
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });
            marker.addListener('mouseover', function() {
                infoWindow.open(map, marker);
                overlay.setMap(map);
            });

            marker.addListener('mouseout', function(){
                infoWindow.close();
                overlay.setMap(null);
            });
        }

        marker.addListener('mouseover', function() {
            overlay.setMap(map);
        });

        marker.addListener('mouseout', function(){
            overlay.setMap(null);
        });
    }

    addMarker({
            coords: {
                lat: 48.2622,
                lng: 23.9229
            },
            image: 'assets/img/marker_map.png',
            content: `
                        <div class="ifo_window_wr">
                            <div class="ifo_window_in">
                                <img src="assets/img/tourist_icon.png" alt="">
                                <i class="fas fa-map-marker-alt"></i>
                                <p>Carpathian Mountains</p>
                            </div>
                        </div>
                    `
            });

    //Yaremche 
    addMarker({
                coords: {
                    lat: 48.47333,
                    lng: 24.57972
                },
                image: 'assets/img/marker_map2.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Yaremche</p>
                                </div>
                            </div>
                        `
            });
    //Bukovel 
    addMarker({
                coords: {
                    lat: 48.346438,
                    lng: 24.445438
                },
                image: 'assets/img/marker_map3.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Bukovel</p>
                                </div>
                            </div>
                        `
            });
    //Mykulychyn 
    addMarker({
                coords: {
                    lat: 48.39528,
                    lng: 24.59806
                },
                image: 'assets/img/marker_map4.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Mykulychyn</p>
                                </div>
                            </div>
                        `
            });
    //Tatar 
    addMarker({
                coords: {
                    lat: 48.349784,
                    lng: 24.5534
                },
                image: 'assets/img/marker_map5.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Tatar</p>
                                </div>
                            </div>
                        `
            });
    //Yablunitsa
    addMarker({
                coords: {
                    lat: 48.3225,
                    lng: 24.48722
                },
                image: 'assets/img/marker_map2.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Yablunitsa</p>
                                </div>
                            </div>
                        `
            });
    //Vorokhta 
    addMarker({
                coords: {
                    lat: 48.283511,
                    lng: 24.567001
                },
                image: 'assets/img/marker_map4.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Vorokhta</p>
                                </div>
                            </div>
                        `
            });
    //Verkhovyna 
    addMarker({
                coords: {
                    lat: 48.15528,
                    lng: 24.81806
                },
                image: 'assets/img/marker_map5.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Verkhovyna</p>
                                </div>
                            </div>
                        `
            });
    //Kosiv  
    addMarker({
                coords: {
                    lat: 48.32583,
                    lng: 25.13306
                },
                image: 'assets/img/marker_map5.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Kosiv</p>
                                </div>
                            </div>
                        `
            });
    //Huta   
    addMarker({
                coords: {
                    lat: 48.65222,
                    lng: 24.21528
                },
                image: 'assets/img/marker_map5.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Huta</p>
                                </div>
                            </div>
                        `
            });
    //Sheshory    
    addMarker({
                coords: {
                    lat: 48.33639,
                    lng: 24.99111
                },
                image: 'assets/img/marker_map5.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Sheshory</p>
                                </div>
                            </div>
                        `
            });
    //Lviv    
    addMarker({
                coords: {
                    lat: 49.84306,
                    lng: 24.01778
                },
                image: 'assets/img/marker_map5.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Lviv</p>
                                </div>
                            </div>
                        `
            });
    //Truskavets    
    addMarker({
                coords: {
                    lat: 49.27667,
                    lng: 23.51167
                },
                image: 'assets/img/marker_map5.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Truskavets</p>
                                </div>
                            </div>
                        `
            });
    //Slavsky    
    addMarker({
                coords: {
                    lat: 48.8350065204454,
                    lng: 23.4456825256347
                },
                image: 'assets/img/marker_map5.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Slavsky</p>
                                </div>
                            </div>
                        `
            });
    //Zholkwa    
    addMarker({
                coords: {
                    lat: 50.05646,
                    lng: 23.97303
                },
                image: 'assets/img/marker_map5.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Zholkwa</p>
                                </div>
                            </div>
                        `
            });
    //Pidhirtsi    
    addMarker({
                coords: {
                    lat: 49.94316,
                    lng: 24.98480
                },
                image: 'assets/img/marker_map5.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Pidhirtsi</p>
                                </div>
                            </div>
                        `
            });
    //Olesko    
    addMarker({
                coords: {
                    lat: 49.96479,
                    lng: 24.89399
                },
                image: 'assets/img/marker_map5.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Olesko</p>
                                </div>
                            </div>
                        `
            });
    //Skhodnitsa    
    addMarker({
                coords: {
                    lat: 49.23094,
                    lng: 23.33788
                },
                image: 'assets/img/marker_map5.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Skhodnitsa</p>
                                </div>
                            </div>
                        `
            });
    //Zolochiv    
    addMarker({
                coords: {
                    lat: 49.79433,
                    lng: 24.89382
                },
                image: 'assets/img/marker_map5.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Zolochiv</p>
                                </div>
                            </div>
                        `
            });
    //Drogobych    
    addMarker({
                coords: {
                    lat: 49.35316,
                    lng: 23.51006
                },
                image: 'assets/img/marker_map5.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Drogobych</p>
                                </div>
                            </div>
                        `
            });
    //Morshin    
    addMarker({
                coords: {
                    lat: 49.15334,
                    lng: 23.87133
                },
                image: 'assets/img/marker_map5.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Morshin</p>
                                </div>
                            </div>
                        `
            });
    //Uzhgorod    
    addMarker({
                coords: {
                    lat: 48.6166700,
                    lng: 22.3000000
                },
                image: 'assets/img/marker_map5.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Uzhgorod</p>
                                </div>
                            </div>
                        `
            });
    //Mukacheve    
    addMarker({
                coords: {
                    lat: 48.4391900,
                    lng: 22.7177900
                },
                image: 'assets/img/marker_map5.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Mukacheve</p>
                                </div>
                            </div>
                        `
            });
    //Beregovo    
    addMarker({
                coords: {
                    lat: 48.20546,
                    lng: 22.64387
                },
                image: 'assets/img/marker_map5.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Beregovo</p>
                                </div>
                            </div>
                        `
            });
    //Rakhiv    
    addMarker({
                coords: {
                    lat: 48.0546,
                    lng: 24.2129
                },
                image: 'assets/img/marker_map5.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Rakhiv</p>
                                </div>
                            </div>
                        `
            });
    //Khust    
    addMarker({
                coords: {
                    lat: 48.1735,
                    lng: 23.2972
                },
                image: 'assets/img/marker_map5.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Khust</p>
                                </div>
                            </div>
                        `
            });
    //Pylypets    
    addMarker({
                coords: {
                    lat: 48.6706,
                    lng: 23.3332
                },
                image: 'assets/img/marker_map5.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Pylypets</p>
                                </div>
                            </div>
                        `
            });
    //Yasinya    
    addMarker({
                coords: {
                    lat: 48.2596,
                    lng: 24.3451
                },
                image: 'assets/img/marker_map5.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Yasinya</p>
                                </div>
                            </div>
                        `
            });
    //Solotvyno    
    addMarker({
                coords: {
                    lat: 47.9557,
                    lng: 23.8776
                },
                image: 'assets/img/marker_map5.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Solotvyno</p>
                                </div>
                            </div>
                        `
            });
    //Volovets    
    addMarker({
                coords: {
                    lat: 48.7115,
                    lng: 23.1850
                },
                image: 'assets/img/marker_map5.png',
                content: `
                            <div class="ifo_window_wr">
                                <div class="ifo_window_in">
                                    <img src="assets/img/tourist_icon.png" alt="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Volovets</p>
                                </div>
                            </div>
                        `
            });


        var markerCircle = new google.maps.Circle({
            strokeWeight: 0,
            fillColor: '#11607c',
            fillOpacity: 0,
            center: center,
            radius: 50000000
        });


    var bounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(0, 0),
                new google.maps.LatLng(0, 0));

            var srcImage = 'assets/img/map_overlay.png';
            var overlayDefault = new USGSOverlay(bounds, false, map);

            var overlay = new USGSOverlay(bounds, srcImage, map);
            markerCircle.setMap(map);

            overlayDefault.setMap(map);
            overlay.setMap(null);

    }

    /** @constructor */
        function USGSOverlay(bounds, image, map) {

            // Initialize all properties.
            this.bounds_ = bounds;
            this.image_ = image;
            this.map_ = map;
            this.div_ = null;
            this.setMap(map);
        }

        USGSOverlay.prototype.onAdd = function () {

            var div = document.createElement('div');
            div.style.borderStyle = 'none';
            div.style.borderWidth = '0px';
            div.style.position = 'absolute';
            div.style.opacity = '0.5';

            if(this.image_){
                // Create the img element and attach it to the div.
                var img = document.createElement('img');
                img.src = this.image_;
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.position = 'absolute';
                div.appendChild(img);
            }


            this.div_ = div;

            var panes = this.getPanes();
            panes.overlayLayer.appendChild(div);
        };
        USGSOverlay.prototype.draw = function () {

            var overlayProjection = this.getProjection();
            var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
            var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

            // Resize the image's div to fit the indicated dimensions.
            var div = this.div_;
            div.style.left = '-50vw';
            div.style.top = '-50vh';
            div.style.width = '100vw';
            div.style.height = '100vh';

            if(!this.image_){
                div.style.background = '#11607c';

            }
        };
        USGSOverlay.prototype.onRemove = function () {
            this.div_.parentNode.removeChild(this.div_);
            this.div_ = null;
        };

    initMap();
}

map1();


function map2() {
	var overlay;
      USGSOverlay.prototype = new google.maps.OverlayView();
      var mapBlock = document.getElementById("map2");
    function initMap() {
        var mapBlock = document.getElementById("map2");

        if (!mapBlock) return;

        var styleMap = [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#378b90"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#31b9c1"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#46bcec"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#31b9c1"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#31b9c1"
                    }
                ]
            }
        ],
            posMerker = new google.maps.LatLng(48.1622, 24.2229),
            center = new google.maps.LatLng(48.18, 24.3),
            image  = 'assets/img/marker_map.png';

        var mapOptions = {
            center: center,
            maxZoom: 30,
            minZoom: 3,
            zoom: 12,
            styles: styleMap
        };

        var map = new google.maps.Map(mapBlock, mapOptions);

        var marker = new google.maps.Marker({
            position: posMerker,
            icon: image,
            map: map
        });
        var markerCircle = new google.maps.Circle({
            strokeWeight: 0,
            fillColor: '#11607c',
            fillOpacity: 0.35,
            center: center,
            radius: 50000000
        });

        var infoWindow = new google.maps.InfoWindow({
            content: `
                        <div class="ifo_window_wr">
                            <div class="ifo_window_in">
                                <img src="assets/img/tourist_icon.png" alt="">
                                <i class="fas fa-map-marker-alt"></i>
                                <p>Carpathian Mountains</p>
                            </div>
                        </div>
                    `
         });

    var bounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(0, 0),
                new google.maps.LatLng(0, 0));

            var srcImage = 'assets/img/map_overlay.png';

            var overlayDefault = new USGSOverlay(bounds, false, map);
            var overlay = new USGSOverlay(bounds, srcImage, map);

        // function addOverlay() {
        //     overlay.setMap(map);
        // }
        // function removeOverlay() {
        //     overlay.setMap(null);
        // }

            // markerCircle.setMap(map);
        overlayDefault.setMap(map);
        overlay.setMap(null);

        marker.addListener('mouseover', function() {
            markerCircle.setMap(null);
            // infoWindow.open(map, marker);
            overlay.setMap(map);

        });

        marker.addListener('mouseout', function(){
            // markerCircle.setMap(map);
            // infoWindow.close();
            overlay.setMap(null);

        });

    }

    /** @constructor */
        function USGSOverlay(bounds, image, map) {

            // Initialize all properties.
            this.bounds_ = bounds;
            this.image_ = image;
            this.map_ = map;
            this.div_ = null;
            this.setMap(map);
        }

        USGSOverlay.prototype.onAdd = function () {

            var div = document.createElement('div');
            div.style.borderStyle = 'none';
            div.style.borderWidth = '0px';
            div.style.position = 'absolute';
            div.style.opacity = '0.5';

            if(this.image_){
                // Create the img element and attach it to the div.
                var img = document.createElement('img');
                img.src = this.image_;
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.position = 'absolute';
                div.appendChild(img);
            }

            this.div_ = div;

            var panes = this.getPanes();
            panes.overlayLayer.appendChild(div);
        };
        USGSOverlay.prototype.draw = function () {

            var overlayProjection = this.getProjection();
            var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
            var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

            // Resize the image's div to fit the indicated dimensions.
            var div = this.div_;
            div.style.left = '-50vw';
            div.style.top = '-50vh';
            div.style.width = '100vw';
            div.style.height = '100vh';

            if(!this.image_) {
                div.style.background = '#11607c';
            }
            };
        USGSOverlay.prototype.onRemove = function () {
            this.div_.parentNode.removeChild(this.div_);
            this.div_ = null;
        };

    initMap();
}
map2();

}