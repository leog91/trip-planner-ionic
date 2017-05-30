angular.module('starter.services', [])




  .service('userService', function () {

    var auth = {};

    var country = "ARS";

    var bundle = {};

    var email = "leog91";

    var name = "";

    var imageUrl = "";

    //m
    var profile = {};

    var isLogged = false;



    return {

      setProfile: function (user) {
        profile = user;
      },

      getProfile: function () {
        return profile;
      },


      setUser: function (user) {
        //var userNameWithoutMail = userService.getEmail().slice(0, userService.getEmail().indexOf("@"));
        //email = user.email;
        email = user.email.slice(0, user.email.indexOf("@"));
        name = user.name;
        imageUrl = user.imageUrl;
        isLogged = true;
      },



      //removeU

      getEmail: function () {
        return email;
      },

      getName: function () {
        return name;
      },

      getImage: function () {
        return imageUrl;
      },

      setCountry: function (newCountry) {
        country = newCountry;
      },

      getCountry: function () {
        return country;
      },



      isLoggedIn: function () {
        return isLogged;
      },

      logOut: function () {
        email = "";
        name = "";
        imageUrl = "";
        isLogged = false;
      },

    };

  })



  .service('apiService', function ($http, userService) {

    var auth = {};

    var country = "ARS";

    var bundle = {};

    var currentGroupSize = 0;

    return {


      url: function () {
        return "http://localhost:8080/";
      },



      saveItem: function (item, date) {
        return $http({
          method: 'get',
          url: this.url() + "item/add/" + userService.getEmail() + "/" + this.dateUrl(date) + this.itemUrl(item) + "/" + currentGroupSize
        });
      },

      updateItem: function (item, date, id) {
        return $http({
          method: 'get',
          url: this.url() + "item/update/" + id + "/" + userService.getEmail() + "/" + this.dateUrl(date) + this.itemUrl(item) + "/" + currentGroupSize
        });
      },

      deleteItem: function (id) {
        return $http({
          method: 'get',
          url: this.url() + "item/delete/" + id
        });
      },


      itemUrl: function (item) {
        return item.name + "/" + item.ammount + "/" + item.currency + "/" + item.category
      },

      dateUrl: function (date) {
        return date.getDate() + "/" + (date.getMonth() + + 1) + "/" + date.getFullYear() + "/";
      },


      getItems: function () {
        return $http({
          method: 'get',
          url: this.url() + "item/user/" + userService.getEmail()
        });
      },

      getBetweenDates: function (dateFrom, dateTo) {
        return $http({
          method: 'get',
          url: this.url() + "item/betweendates/" + userService.getEmail() + "/" + this.dateUrl(dateFrom) + this.dateUrl(dateTo)
        });
      },


      byCategory: function (category) {
        return $http({
          method: 'get',
          url: this.url() + "item/categoryuser/" + userService.getEmail() + "/" + category
        });
      },

      getCountry: function () {
        return country;
      },


      saveSettings: function (countryCode, groupSize) {
        return $http({
          method: 'get',
          url: this.url() + "user/saveSettings/" + userService.getEmail() + "/" + countryCode + "/" + groupSize
        });
      },


      addRatio: function () {
        return $http({
          method: 'post',
          url: this.url() + "currency/add/20/4/2017/USD/ARS/16"
        });
      },

      getProfile: function () {
        return $http({
          method: 'get',
          url: this.url() + "user/read/" + userService.getEmail()
        });
      },

      logIn: function () {
        return $http({
          method: 'get',
          url: this.url() + "user/logIn/" + userService.getEmail()
        });
      },



      coefByCodeAndDate: function (date, code) {
        return $http({
          method: 'get',
          url: this.url() + "currency/coef/" + code + "/" + this.dateUrl(date)
        });
      },

      addCategory: function (category) {
        return $http({
          method: 'get',
          url: this.url() + "user/addCategory/" + userService.getEmail() + "/" + category
        });
      },

      itemById: function (id) {
        return $http({
          method: 'get',
          url: this.url() + "item/readId/" + id
        });
      },



    };


  })

.service('apiService', function ($http, userService) {

        var auth = {};

        var country = "ARS";

        var bundle = {};

        var currentGroupSize = 0;

        return {


            url: function () {
                return "http://localhost:8080/";
            },



            saveItem: function (item, date) {
                return $http({
                    method: 'get',
                    url: this.url() + "item/add/" + userService.getEmail() + "/" + this.dateUrl(date) + this.itemUrl(item) + "/" + currentGroupSize
                });
            },

            updateItem: function (item, date, id) {
                return $http({
                    method: 'get',
                    url: this.url() + "item/update/" + id + "/" + userService.getEmail() + "/" + this.dateUrl(date) + this.itemUrl(item) + "/" + currentGroupSize
                });
            },

            deleteItem: function (id) {
                return $http({
                    method: 'get',
                    url: this.url() + "item/delete/" + id
                });
            },


            itemUrl: function (item) {
                return item.name + "/" + item.ammount + "/" + item.currency + "/" + item.category
            },

            dateUrl: function (date) {
                return date.getDate() + "/" + (date.getMonth() + + 1) + "/" + date.getFullYear() + "/";
            },


            getItems: function () {
                return $http({
                    method: 'get',
                    url: this.url() + "item/user/" + userService.getEmail()
                });
            },

            getBetweenDates: function (dateFrom, dateTo) {
                return $http({
                    method: 'get',
                    url: this.url() + "item/betweendates/" + userService.getEmail() + "/" + this.dateUrl(dateFrom) + this.dateUrl(dateTo)
                });
            },


            byCategory: function (category) {
                return $http({
                    method: 'get',
                    url: this.url() + "item/categoryuser/" + userService.getEmail() + "/" + category
                });
            },

            getCountry: function () {
                return country;
            },


            saveSettings: function (countryCode, groupSize) {
                return $http({
                    method: 'get',
                    url: this.url() + "user/saveSettings/" + userService.getEmail() + "/" + countryCode + "/" + groupSize
                });
            },


            addRatio: function () {
                return $http({
                    method: 'post',
                    url: this.url() + "currency/add/20/4/2017/USD/ARS/16"
                });
            },

            getProfile: function () {
                return $http({
                    method: 'get',
                    url: this.url() + "user/read/" + userService.getEmail()
                });
            },

            logIn: function () {
                return $http({
                    method: 'get',
                    url: this.url() + "user/logIn/" + userService.getEmail()
                });
            },



            coefByCodeAndDate: function (date, code) {
                return $http({
                    method: 'get',
                    url: this.url() + "currency/coef/" + code + "/" + this.dateUrl(date)
                });
            },

            addCategory: function (category) {
                return $http({
                    method: 'get',
                    url: this.url() + "user/addCategory/" + userService.getEmail() + "/" + category
                });
            },

            itemById: function (id) {
                return $http({
                    method: 'get',
                    url: this.url() + "item/readId/" + id
                });
            },



        };
    })




  .factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'img/ben.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'img/max.png'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'img/adam.jpg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'img/perry.png'
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'img/mike.png'
    }];

    return {
      all: function () {
        return chats;
      },
      remove: function (chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function (chatId) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i];
          }
        }
        return null;
      }
    };
  });
