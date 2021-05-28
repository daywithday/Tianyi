var mapinfo = {
	regionsize: 512,
	chunksize: 16,
	tilesize: 128,
	maxzoom: 4
}
function GetSdtdTileLayer(mapinfo, initTime, isMiniMap) {
	if (typeof isMiniMap == 'undefined') isMiniMap = false;

	var tileLayer = L.tileLayer('http://www.laiyunyang.top:8888/map/{z}/{x}/{y}', {
		maxZoom: isMiniMap ? mapinfo.maxzoom : mapinfo.maxzoom + 1,
		minZoom: isMiniMap ? -1 : Math.max(0, mapinfo.maxzoom - 5),
		maxNativeZoom: mapinfo.maxzoom,
		minNativeZoom: 0,
		tileSize: mapinfo.tilesize,
		time: initTime
	});

	tileLayer.getTileUrl = function (coords) {
		coords.y = (-coords.y) - 1;
		return L.TileLayer.prototype.getTileUrl.bind(tileLayer)(coords);
	};


	return tileLayer;
}


function InitMap() {
	// ===============================================================================================
	// 7dtd coordinate transformations

	SDTD_Projection = {
		project: function (latlng) {
			return new L.Point(
				(latlng.lat) / Math.pow(2, mapinfo.maxzoom),
				(latlng.lng) / Math.pow(2, mapinfo.maxzoom));
		},

		unproject: function (point) {
			return new L.LatLng(
				point.x * Math.pow(2, mapinfo.maxzoom),
				point.y * Math.pow(2, mapinfo.maxzoom));
		}
	};

	SDTD_CRS = L.extend({}, L.CRS.Simple, {
		projection: SDTD_Projection,
		transformation: new L.Transformation(1, 0, -1, 0),

		scale: function (zoom) {
			return Math.pow(2, zoom);
		}
	});

	// ===============================================================================================
	// Map and basic tile layers

	map = L.map('tab_map', {
		zoomControl: false, // Added by Zoomslider
		zoomsliderControl: true,
		attributionControl: false,
		crs: SDTD_CRS
	}).setView([0, 0], Math.max(0, mapinfo.maxzoom - 5));
	var initTime = new Date().getTime();
	var tileLayer = GetSdtdTileLayer(mapinfo, initTime);
	tileLayer.addTo(map);

}
InitMap();

