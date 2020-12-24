var app = angular.module("myapp", []);
app.controller("appcontroller", ($scope, $http) => {
  var url = "https://www.omdbapi.com/?apikey=b8dda974&s=";
  $scope.showresults = true;
  $scope.showerror = true;
  var a = (keyboard) => {
    $http.get("https://www.omdbapi.com/?i=tt3896198&apikey=b8dda974").then(
      (response) => {
        $scope.movies = response.data;
      },
      (error) => {
        console.log(error.data);
      }
    );
  };
  $scope.search = (keyword) => {
    if (keyword == undefined || keyword == "" || keyword == " ") {
    } else {
      $http.get(`${url}${keyword}`).then(
        (response) => {
          $scope.results = response.data.Search;
          if (response.data.Response == "False") {
            $scope.showerror = false;
            $scope.hide = false;
          } else {
            $scope.showerror = true;
            $scope.showresults = false;
            $scope.hide = true;
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };
  $scope.showmovies = a;
});
