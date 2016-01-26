angular.module("Vergaderen", [])
.controller('mainCtrl', function  ($scope){
             $scope.Vergaderingen = [];
            $scope.deleteVergadering = function(Vergaderingen,$index)
             {
               $scope.Vergaderingen.splice($index,1);
             };

             $scope.addVergadering = function(n,d,i,t)
             {
                 var Boeking={Name:n,Doel:d,Informatie:i,Tijd:t}
                   $scope.Vergaderingen.push(Boeking);





               }
             });
