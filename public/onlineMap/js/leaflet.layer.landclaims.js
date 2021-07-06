
function GetLandClaimsLayer(map, mapinfo) {
	var landClaimsGroup = L.layerGroup();
	var landClaimsClusterGroup = L.markerClusterGroup({
		disableClusteringAtZoom: mapinfo.maxzoom,
		singleMarkerMode: true,
		maxClusterRadius: 50
	});
	var landClaimsRectGroup = L.layerGroup();
	landClaimsGroup.addLayer(landClaimsClusterGroup);
	landClaimsGroup.addLayer(landClaimsRectGroup);
	var maxZoomForCluster = -1;


	var setLandClaims = function (data) {
		landClaimsClusterGroup.clearLayers();
		landClaimsRectGroup.clearLayers();

		var claimPower = Math.floor(Math.log(data.claimsize) / Math.LN2);
		var maxClusterZoomUnlimited = mapinfo.maxzoom - (claimPower - 3);
		var maxClusterZoomLimitedMax = Math.min(maxClusterZoomUnlimited, mapinfo.maxzoom + 1);
		maxZoomForCluster = Math.max(maxClusterZoomLimitedMax, 0);

		checkClaimClustering({ target: map });

		var sizeHalf = Math.floor(data.claimsize / 2);

		$.each(data.claimOwners, function (key, val) {
			var steamId = val.steamId;
			var active = val.claimactive;
			var color = active ? "#55ff55" : "#ff0000";
			if (val.playerName) {
				var name = val.playerName;
			} else {
				var name = "&lt;unknown&gt;"
			}

			$.each(val.claims, function (key, val) {
				var pos = L.latLng(val.x, val.z);
				var bounds = L.latLngBounds(L.latLng(val.x - sizeHalf, val.z - sizeHalf), L.latLng(val.x + sizeHalf, val.z + sizeHalf));
				var r = L.rectangle(bounds, { color: color, weight: 1, opacity: 0.8, fillOpacity: 0.15 });
				var m = L.marker(pos, { clickable: false, keyboard: false, zIndexOffset: -1000, iconSize: [0, 0], icon: L.divIcon({ className: 'invisIcon', iconSize: [0, 0] }) });
				r.bindPopup("Owner: " + name + " (" + steamId + ")<br/>Position: " + val.x + " " + val.y + " " + val.z);
				landClaimsRectGroup.addLayer(r);
				landClaimsClusterGroup.addLayer(m);
			});
		});
	}

	var updateClaimsEvent = function () {
		// $.getJSON( "../api/getlandclaims")
		// .done(setLandClaims)
		// .fail(function(jqxhr, textStatus, error) {
		// 	console.log("Error fetching land claim list");
		// })
		var url = "/api/ServerManage/RetrieveLandClaims"

		$.ajax({
			url: url,
			type: 'GET',
			datatype: 'json',
			success: function (data) { setLandClaims(data.data); },
			error: function () { console.log("Error fetching players list"); },
			beforeSend: setHeader
		});
	}


	var checkClaimClustering = function (e) {
		if (e.target._zoom >= maxZoomForCluster) {
			landClaimsGroup.removeLayer(landClaimsClusterGroup);
		} else {
			landClaimsGroup.addLayer(landClaimsClusterGroup);
		}
	};

	map.on('zoomend', checkClaimClustering);

	map.on('overlayadd', function (e) {
		if (e.layer == landClaimsGroup) {
			updateClaimsEvent();
		}
	});

	return landClaimsGroup;
}

