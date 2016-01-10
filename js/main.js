var app2 = angular.module("weather-site", []);

app2.controller('MainController', ['$http', '$scope', function($http, $scope) {
    $scope.showing = false;
  	var weather = $scope;
  	var weatherKey = "2e7a5a530bee1dfaa57faff67c1bda35";
  	weather.forecast = {};
  	weather.region = {};

    $http.get("http://ip-api.com/json").success(function(data) {
        weather.region = data;
        $http.get( "http://api.openweathermap.org/data/2.5/forecast?q=" + data.city + ",us&mode=json&APPID=" + weatherKey).success(function( data ) {
            weather.forecast = data;
        });
    });

    $scope.newLocation = function(town) {
      $http.get( "http://api.openweathermap.org/data/2.5/forecast?q=" + town + ",us&mode=json&APPID=" + weatherKey).success(function( data ) {
          weather.forecast = data;
          console.log(town);
      });
    };

    $scope.getFullDate = function(UNIX_timestamp){
      var a = new Date(UNIX_timestamp * 1000);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      var month = months[a.getMonth()];
      var day = days[a.getDay()];
      var hour = a.getHours();
      var min = a.getMinutes();
      var time = day + ' ' + month + ' ' + hour + ':' + min ;
      return time;
    };

    $scope.getDate = function(UNIX_timestamp){
      var a = new Date(UNIX_timestamp * 1000);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var month = months[a.getMonth()];
      var date = a.getDate();
      var time = month + ' ' + date;
        console.log(time);
      return time;
    };

       $scope.toFahrenheit = function(temp) {
      var newTemp = Math.round((temp - 273.15)* 1.8000 + 32.00);
      return newTemp;
    };

    $scope.toCelsius = function(temp) {
      var newTemp = (temp - 32) * 5/9;
      return newTemp;
    };
}]);

$('#switchAddr').on('click', function(){
  $('.ui.basic.modal').modal('show');
});

$('#modalClose').on('click', function(){
  $('.ui.basic.modal').modal('hide');
});

// stats = $.getJSON( "data/nydataset.json", function(data) {
//   console.log(data.length);
//  });

    var $dt32 = $('#dt32').text();
    $dt32 = $dt32.split("    ");
    console.log($dt32)
$.getJSON( "data/nydataset.json")
.done(function(data) {
    stats = data;


   var ctx = document.getElementById("myChart").getContext("2d");
   var DT32 = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
        datasets: [
            {
                label: "Total Precipitation",
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,0.8)",
                highlightFill: "rgba(151,187,205,0.75)",
                highlightStroke: "rgba(151,187,205,1)",
                data: $dt32
            }
        ]
   };
   var myBarChart = new Chart(ctx).Bar(DT32);
}).fail(function() {

}).always(function(data) {

});
