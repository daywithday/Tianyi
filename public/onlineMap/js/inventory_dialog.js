var ITEMICONBASEURL = "/itemicons/";

var BAG_COLS = 9;
var BAG_ROWS = 5;
var BELT_COLS = 8;
var INV_ITEM_WIDTH = 60;
var INV_ITEM_HEIGHT = 60;

function ShowInventoryDialog(steamId) {
	var SetCellItem = function (containerTypeName, cellIdent, itemdata) {
		var cell = $("#" + containerTypeName + "Field" + cellIdent);
		var text = $("#" + containerTypeName + "FieldText" + cellIdent);
		var qual = $("#" + containerTypeName + "FieldQuality" + cellIdent);

		cell.attr("style", "background-image: none;");
		cell.removeAttr("title");
		text.removeClass("visible");
		qual.removeClass("visible");

		if (itemdata !== null && itemdata !== undefined) {
			cell.attr("style", "background-image: url(" + ITEMICONBASEURL + itemdata.icon + "__" + itemdata.iconcolor + ".png);");
			if (itemdata.quality >= 0) {
				cell.attr("title", itemdata.itemName + " (quality: " + itemdata.quality + ")");
				switch (itemdata.quality) {
				case 0:
					itemdata.qualitycolor = '#909090';
					break;
				case 1:
					itemdata.qualitycolor = '#FFFFFF';
					break;
				case 2:
					itemdata.qualitycolor = '#3DD20D';
					break;
				case 3:
					itemdata.qualitycolor = '#2F78FF';
					break;
				case 4:
					itemdata.qualitycolor = '#9132C8';
					break;
				case 5:
					itemdata.qualitycolor = '#F39C12';
					break;
				case 6:
					itemdata.qualitycolor = '#FFFFFF';
					break;
				default:
					itemdata.qualitycolor = 'transparent';
					break;
				}
				itemdata.qualitycolor
				qual.attr("style", "background-color: " + itemdata.qualitycolor);
				qual.addClass("visible");
			} else {
				cell.attr("title", itemdata.itemName);
				text.text(itemdata.count);
				text.addClass("visible");
			}
			getLocalization(itemdata.itemName, function(name){
				if (itemdata.quality >= 0) {
					cell.attr("title", name + " (quality: " + itemdata.quality + ")");
				} else {
					cell.attr("title", name);
				}
			});
		}
	}

	var SetEquipmentItem = function (data, name, cellIdent) {
		if (data.equipment[name] == false) {
			SetCellItem("equipment", cellIdent, null);
		} else {
			SetCellItem("equipment", cellIdent, data.equipment[name]);
		}
	}

	var url = `/api/RetrieveInventory?steamId=${steamId}`

	$.ajax({
		url: url,
		type: 'GET',
		datatype: 'json',
		success: function (data) {
			
			var bagNum = data.data.bag.length;
			BAG_COLS = parseInt(Math.sqrt(bagNum/0.4));
			BAG_ROWS = Math.ceil(bagNum/BAG_COLS);
			BELT_COLS = data.data.belt.length;

			if(!isInventoryDialogSetup){
				SetupInventoryDialog();
			}
			
			$("#invPlayerName").text($("#playerName").text());
			$("#invSteamId").text(steamId);

			for (var y = 0; y < data.data.bag.length; y++) {
				for (var x = 0; x < BAG_COLS; x++) {
					SetCellItem("bag", x + "_" + y, data.data.bag[y * BAG_COLS + x]);
				}
			}

			for (var x = 0; x < BELT_COLS; x++) {
				SetCellItem("belt", x, data.data.belt[x]);
			}
			let count = 0
			for (var x = 0; x < data.data.equipment.length; x++) {
				if (data.data.equipment[x]) {
					let str = ''
					switch (count) {
						case 0:
							str = '0_0'
							break;
						case 1:
							str = '0_1'
							break;
						case 2:
							str = '0_2'
							break;
						case 3:
							str = '1_0'
							break;
						case 4:
							str = '1_1'
							break;
						case 5:
							str = '1_2'
							break;
						case 6:
							str = '2_0'
							break;
						case 7:
							str = '2_1'
							break;
						case 8:
							str = '2_2'
							break;
						case 9:
							str = '0_4'
							break;
						case 10:
							str = '2_4'
							break;
						default:
							break;
					}
					SetCellItem("equipment", str, data.data.equipment[x]);
					count++
				}
			}

			$("#playerInventoryDialog").css("z-index", "1010").dialog({
				dialogClass: "playerInventoryDialog",
				modal: true,
				width: BAG_COLS * (INV_ITEM_WIDTH + 5 ) + 3 * (INV_ITEM_WIDTH + 5) + 3,
				buttons: {
					Ok: function () {
						$(this).dialog("close");
					}
				}
			});
		},
		error: function () { console.log("Error fetching players list"); },
		beforeSend: setHeader
	});
}

function getLocalization(itemName, callBack){
	var url = `/api/RetrieveLocalization?language=${language}&itemName=${itemName}`;
	$.ajax({
		url: url,
		type: 'GET',
		datatype: 'json',
		success: function (data) {
			callBack(data.data);
		},
		error: function () { console.log("Error fetching Localization"); },
		beforeSend: setHeader
	});
}

var isInventoryDialogSetup = false;
function SetupInventoryDialog() {
	isInventoryDialogSetup = true;
	var CreateInvCell = function (containerTypeName, cellIdent) {
		return "<td class=\"invField\" id=\"" + containerTypeName + "Field" + cellIdent + "\">" +
			"<div class=\"invFieldQuality\" id=\"" + containerTypeName + "FieldQuality" + cellIdent + "\"></div>" +
			"<span class=\"invFieldText\" id=\"" + containerTypeName + "FieldText" + cellIdent + "\"></span>" +
			"</td>";
	}

	for (var y = 0; y < BAG_ROWS; y++) {
		$("#bagTable").append("<tr id=\"bagRow" + y + "\"></tr>");
		for (var x = 0; x < BAG_COLS; x++) {
			$("#bagRow" + y).append(CreateInvCell("bag", x + "_" + y));
		}
	}

	$("#beltTable").append("<tr id=\"beltRow0\"></tr>");
	for (var x = 0; x < BELT_COLS; x++) {
		$("#beltRow0").append(CreateInvCell("belt", x));
	}

	for (var y = 0; y < 5; y++) {
		$("#equipmentTable").append("<tr id=\"equipmentRow" + y + "\"></tr>");
		if (y == 3) {
			$("#equipmentRow" + y).append("<td colspan=\"3\"></td>");
		} else {
			for (var x = 0; x < 3; x++) {
				if (y == 4 && x == 1) {
					$("#equipmentRow" + y).append("<td></td>");
				} else {
					$("#equipmentRow" + y).append(CreateInvCell("equipment", x + "_" + y));
				}
			}
		}
	}
}

