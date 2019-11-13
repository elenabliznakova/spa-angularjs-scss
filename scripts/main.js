app.controller('MainCtrl', ['$scope', '$q', '$compile', '$window', '$http',
    function($scope) {
        $scope.myFunction = function() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            }
            else {
                x.className = "topnav";
            }
        }
    }
]);
