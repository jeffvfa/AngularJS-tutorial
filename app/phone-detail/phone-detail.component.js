angular
    //register the 'phoneDetail' component on the 'phoneDetail' module
    .module('phoneDetail')
    .component('phoneDetail', {
        templateUrl: 'phone-detail/phone-detail.template.html',
        controller: ['$http','$routeParams',
            function phoneDetailController($http, $routeParams) {
                var self = this;

                self.setImage = function setImage(imageUrl) {
                    self.mainImageUrl = imageUrl;
                }

                $http.get('phones/' + $routeParams.phoneId + '.json').then(function (response) {
                    self.phone = response.data;
                    self.setImage(self.phone.images[0]);
                });
            }]
    });
