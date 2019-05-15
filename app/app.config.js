console.log('in config');
angular.
    module('phonecatApp').
    config(['$routeProvider',
        function config($routeProvider){
            console.log('configuring');
            $routeProvider.
                when('/phones', {
                    template: '<phone-list></phone-list>'
                }).
                when('/phones/:phoneId',{
                    template: '<phone-detail></phone-detail>'
                }).
                otherwise('/phones');
        }
    ]);
