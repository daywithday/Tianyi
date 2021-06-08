function DayName(days) {
	var daynames = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Bloodday"];
	return daynames[DayOfWeek(days)];
}

function DayOfWeek(days) {
	return days % 7 > 0 ? days % 7 : 7;
}

function GetDayStat(days) {
	var daynames = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Bloodday"];
	var dayOfWeek = days % 7 > 0 ? days % 7 : 7;
	var result = "";
	// Show days til blood moon:
	result += " (" + (7 - dayOfWeek) + " til blood moon)";
	// Show day of week (number):
	result += " (DoW: " + dayOfWeek + ")";
	// Show day of week (name):
	result += " (" + daynames[dayOfWeek] + ")";
	return result;
}

function FormatServerTime(gametime) {
	var time = "Day " + gametime.days;
	time += " (" + DayName(gametime.days) + "), ";
	if (gametime.hours < 10)
		time += "0";
	time += gametime.hours;
	time += ":";
	if (gametime.minutes < 10)
		time += "0";
	time += gametime.minutes;
	return time;
}

function TimeTitle(gametime) {
	var daynames = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Bloodday"];
	var dayOfWeek = DayOfWeek(gametime.days);
	var result = "";
	// Show days til blood moon:
	result += (7 - dayOfWeek) + " days til blood moon\n";
	// Show day of week (number):
	result += "Day of week: " + dayOfWeek + "\n";
	// Show day of week (name):
	//result += daynames[dayOfWeek];
	return result;
}

function StartStatsModule() {
	var updateGameTimeEvent = function () {
		$.getJSON("../api/getstats")
			.done(function (data) {
				var time = FormatServerTime(data.gametime);

				$("#stats_time").html(time);
				$("#stats_time").prop("title", TimeTitle(data.gametime));
				$("#stats_players").html(data.players);
				$("#stats_hostiles").html(data.hostiles);
				$("#stats_animals").html(data.animals);
			})
			.fail(function (jqxhr, textStatus, error) {
				console.log("Error fetching game stats");
			})
			.always(function () {
			});
		window.setTimeout(updateGameTimeEvent, 2000);
	};
	updateGameTimeEvent();
}

function StartUIUpdatesModule() {
	var updateGameTimeEvent = function () {
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
		var url = "/api/RetrieveServerStats"

		$.ajax({
			url: url,
			type: 'GET',
			datatype: 'json',
			success: function (data) {
				var time = FormatServerTime(data.data.gametime);

				$("#stats_time").html(time);
				$("#stats_time").prop("title", TimeTitle(data.data.gametime));
				$("#stats_players").html(data.data.players);
				$("#stats_hostiles").html(data.data.hostiles);
				$("#stats_animals").html(data.data.animals);
			},
			error: function () { console.log("Error fetching players list"); },
			beforeSend: setHeader
		});

		window.setTimeout(updateGameTimeEvent, 2000);



	};
	updateGameTimeEvent();
}

