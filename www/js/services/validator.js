



'use strict';

angular.module('starter')
    .service('validator', function () {


        return {


            minimunLength: function (n, prop, msg) {
                return (this.checkNull(prop, msg)) && (this.checkLength(n, prop, msg));
            },

            checkSelectors: function (prop1, prop2) {
                if (this.checkSelector(prop1) && this.checkSelector(prop2)) {
                    return true
                } else {

                    return false;
                }
            },


            checkSelector: function (prop) {
                return prop != null && prop != undefined && prop != "";
            },


            checkNull: function (prop, msg) {
                if (prop != null) {
                    return true;
                } else {

                    return false;
                }
            },

            checkLength: function (n, prop, msg) {
                if (prop.length > n) {
                    return true;
                } else {

                    return false;
                }
            },


            checkSingleSelector: function (prop) {
                if (this.checkSelector(prop)) {
                    return true
                } else {

                    return false;
                }
            },


            checkPrice: function (price, msg) {
                if ((price != null) && !(price === "")) {
                    return true;
                } else {

                    return false;
                }
            },

            checkDateRange: function (date1, date2) {
                if (date1 <= date2) {
                    return true;
                } else {

                    return false;
                }
            }

        };
    });


