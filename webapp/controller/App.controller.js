sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("com.app.Application.controller.App", {
    onInit: function () {},

    onSave: function () {
      if (this.validateCells()) {
        sap.m.MessageToast.show("Table Saved Successfully");
      } else {
        sap.m.MessageToast.show("Table cells are empty or invalid!");
      }
    },

    validateCells: function () {
      var oTable = this.getView().byId("idTable");
      var Flag = true;
      for (var i = 0; i < oTable.getItems().length; i++) {
        if (!oTable.getItems()[i].getCells()[0].getValue()) {
          oTable.getItems()[i].getCells()[0].setValueState("Error");
          Flag = false;
        } else {
          oTable.getItems()[i].getCells()[0].setValueState("None");
        }

        if (!oTable.getItems()[i].getCells()[1].getValue()) {
          oTable.getItems()[i].getCells()[1].setValueState("Error");
          Flag = false;
        } else {
          oTable.getItems()[i].getCells()[1].setValueState("None");
        }

        if (!oTable.getItems()[i].getCells()[2].getValue()) {
          oTable.getItems()[i].getCells()[2].setValueState("Error");
          Flag = false;
        } else {
          oTable.getItems()[i].getCells()[2].setValueState("None");
        }

        if (
          oTable.getItems()[i].getCells()[3].getSelectedKey() === "-Select-"
        ) {
          oTable.getItems()[i].getCells()[3].setValueState("Error");
          Flag = false;
        } else {
          oTable.getItems()[i].getCells()[3].setValueState("None");
        }

        if (!oTable.getItems()[i].getCells()[4].getValue()) {
          oTable.getItems()[i].getCells()[4].setValueState("Error");
          Flag = false;
        } else {
          oTable.getItems()[i].getCells()[4].setValueState("None");
        }

        if (!oTable.getItems()[i].getCells()[5].getValue()) {
          oTable.getItems()[i].getCells()[5].setValueState("Error");
          Flag = false;
        } else if (oTable.getItems()[i].getCells()[5].getValue().length < 10) {
          oTable.getItems()[i].getCells()[5].setValueState("Error");
          Flag = false;
        } else {
          oTable.getItems()[i].getCells()[5].setValueState("None");
        }
      }
      return Flag;
    },
  });
});
