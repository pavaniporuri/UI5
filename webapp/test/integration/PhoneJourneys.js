/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/sap/training/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/sap/training/test/integration/pages/App",
	"com/sap/training/test/integration/pages/Browser",
	"com/sap/training/test/integration/pages/Master",
	"com/sap/training/test/integration/pages/Detail",
	"com/sap/training/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.sap.training.view."
	});

	sap.ui.require([
		"com/sap/training/test/integration/NavigationJourneyPhone",
		"com/sap/training/test/integration/NotFoundJourneyPhone",
		"com/sap/training/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});