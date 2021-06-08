var CoordToChunk = function(latlng) {
	var x = Math.floor(((latlng.lat + 16777216) / mapinfo.chunksize) - (16777216 / mapinfo.chunksize));
	var y = Math.floor(((latlng.lng + 16777216) / mapinfo.chunksize) - (16777216 / mapinfo.chunksize));
	return L.latLng(x, y);
}

var CoordToRegion = function(latlng) {
	var x = Math.floor(((latlng.lat + 16777216) / mapinfo.regionsize) - (16777216 / mapinfo.regionsize));
	var y = Math.floor(((latlng.lng + 16777216) / mapinfo.regionsize) - (16777216 / mapinfo.regionsize));
	return L.latLng(x, y);
}
var cookies = document.cookie.split(";")
var token = ''
if (cookies && cookies.length > 0) {
	var len = cookies.length
	for (var index = 0; index < len; index++) {
		if (cookies[index].split('=')[0] == 'Admin-Token') {
			token = cookies[index].split('=')[1]
		}
	}
}
function setHeader(xhr) {
	xhr.setRequestHeader('access-token', token);
}