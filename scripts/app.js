angular.module("Vergaderen", ['ngResource','lbServices'])
.controller('mainCtrl', function  ($scope,Booking){
              $scope.bookings = Booking.find();
            $scope.deleteVergadering = function($index)
             {

               Booking.deleteById({ id: $scope.bookings[$index].id })
                 .$promise
                 .then(function() { console.log('deleted'); });
                 $scope.bookings.splice($index,1);

           }

             $scope.addVergadering = function(n,p,i,d)
             {
               var tijd= new Date(d).toISOString();
               console.log(d);
                  Booking.create({
                   "name":n,
                   "purpose":p,
                   "information":i,
                   "time": tijd
                 });
                  $scope.bookings = Booking.find();
             }


           });
