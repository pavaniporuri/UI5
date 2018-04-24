/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 CarrierCollection in the list
// * All 3 CarrierCollection have at least one carrierFlights

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
		"com/sap/training/test/integration/MasterJourney",
		"com/sap/training/test/integration/NavigationJourney",
		"com/sap/training/test/integration/NotFoundJourney",
		"com/sap/training/test/integration/BusyJourney",
		"com/sap/training/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});