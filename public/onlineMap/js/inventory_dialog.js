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
				qual.attr("style", "background-color: #" + itemdata.qualitycolor);
				qual.addClass("visible");
			} else {
				cell.attr("title", itemdata.itemName);
				text.text(itemdata.count);
				text.addClass("visible");
			}
			getLocalization(itemdata.itemName, function(name){
				if (itemdata.quality >= 0) {
					cell.attr("title", itemdata.itemName + " (quality: " + itemdata.quality + ")");
				} else {
					cell.attr("title", itemdata.itemName);
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
					SetCellItem("equipment", count, data.data.equipment[x]);
					count++
				}
			}

			SetEquipmentItem(data.data, "head", "0_0");
			SetEquipmentItem(data.data, "eyes", "0_1");
			SetEquipmentItem(data.data, "face", "0_2");
			SetEquipmentItem(data.data, "armor", "1_0");
			SetEquipmentItem(data.data, "jacket", "1_1");
			SetEquipmentItem(data.data, "shirt", "1_2");
			SetEquipmentItem(data.data, "legarmor", "2_0");
			SetEquipmentItem(data.data, "pants", "2_1");
			SetEquipmentItem(data.data, "boots", "2_2");
			SetEquipmentItem(data.data, "gloves", "0_4");
			SetEquipmentItem(data.data, "backpack", "2_4");

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

