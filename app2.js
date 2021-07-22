var myApp = angular.module('myApp',['ngRoute','ngMaterial','ngAria']);
myApp.controller('appCtrl',function($scope,$mdSidenav){
  $scope.cad={name: "Collection and Disbursement", items: [],route:["postOC","postOD","HCS"],path:"cad"};
  $scope.governmental={name: "Governmental Formalities", items: [],route:["realEA","civilStatus"],path:"governmentalB"};
  $scope.directM={name: "Direct Marketing", items: [],route:["directMail","dataRental"],path:"directMarketing"};
  $scope.mailingS={name: "Mailing Solutions", items: [],route:["LVMail","EMS"],path:"mailingSolutions"};
  $scope.mailingM={name: "Mailing Management", items: [],route:["mailRoom","wareHouse"],path:"mailingManagement"};

  $scope.cad.items = ["Post Office collection","Post Office Disbursement","Home Collection Service"];
  $scope.governmental.items = ["Real Estate Affairs Formalities", "Civil Status"];
  $scope.directM.items = ["Direct Mail","Data Rental"];
  $scope.mailingS.items = ["Large Volume Mail","EMS"];
  $scope.mailingM.items = ["Mail Room","Warehousing Service"];

  $scope.navList= [$scope.cad,$scope.governmental, $scope.directM, $scope.mailingS, $scope.mailingM];
  //$scope.navList= ["mailing","governmental", "nongovernmental", "financial", "onlineServices"];
  $scope.openMenu = function() {
    $mdSidenav('left').toggle();
  };
  $scope.orderId;
  $scope.carNum;
  $scope.setOrderId = function(x){
    $scope.orderId = x;
  };
  $scope.setCarNum = function(x){
    $scope.carNum = x;
  };
  $scope.makeStamp = function(choice){
   
    var x = document.getElementById('output');
    var y = document.getElementById('imgW');
   
    y.style="min-width:310px;min-height:510px; padding-left: 0px;padding-right: 0px;"
    
    x.style="width:300px;height:500px;padding:0px;";
    if(choice==1)
      x.style="border-style: groove;";
    else if(choice==2)
      x.style="border-style: solid;";
    else if(choice==3)
      x.style="border-style: dotted;";
  
};
});
myApp.controller("trackingCtrl",function($scope){
  $scope.orderId ;
});
myApp.config(function($sceProvider) {
  // ngMaterial $mdIconProvider will be updated  to mark urls as safe.
  // Meanwhile, disable $sce for ngMaterial CodePen Demos that using external SVGs
  $sceProvider.enabled(false);
  })
myApp.config(function($mdIconProvider){
    var rootURL = "https://rawgit.com/angular/material-start/es5-tutorial/app/";

    // Register the user `avatar` icons
    $mdIconProvider
        .defaultIconSet(rootURL + "assets/svg/avatars.svg", 128)
        .icon("menu"       , rootURL + "assets/svg/menu.svg"        , 24)});
myApp.config(['$routeProvider',function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'new.html',
  })
  .when('/postOC',{
    templateUrl: "postoffice.html",
  })
  .when('/postOD',{
    templateUrl: "postofficedisbursement.html",
  })
  .when('/HCS',{
    templateUrl:"homecollectionservice.html",
  })
  .when('/realEA',{
    templateUrl: "realestateaffairsformalities.html",
  })
  .when('/EMS',{
    templateUrl: "EMS.html",
  })
  .when('/cad',{
    templateUrl: "cad.html",
  })
  .when('/governmentalB',{
    templateUrl: "governmentalB.html",
  })
  .when('/directMarketing',{
    templateUrl: "directMarketing.html",
  })
  .when('/mailingSolutions',{
    templateUrl: "mailingSolutions.html",
  })
  .when('/calculateYourMec',{
    templateUrl: "calculateMec.html",
  })
  .when('/paynow',{
    templateUrl: "paynow.html",
  })
  .when('/mailingManagement',{
    templateUrl: "mailingManagement.html",
  })
  .when('/new',{
    templateUrl: "new.html",
  })
  .when('/directMail',{
    templateUrl: "directmail.html",
  })
  .when('/dataRental',{
    templateUrl: "dataRental.html",
  })
  .when('/LVMail',{
    templateUrl: "largevolumemail.html",
  })
  .when('/login',{
    templateUrl: "signin1.html",
  })
  .when('/register',{
    templateUrl: "register.html",
  })
  .when('/calculatePostalRate',{
    templateUrl: "calculatePostalRate.html",
  })
  .when('/tracking',{
    templateUrl: "tracking.html",
  })
  .when('/mailRoom',{
    templateUrl: "mailroom.html",
  })
  .when('/wareHouse',{
    templateUrl: "warehouse.html",
  })
  .when('/civilStatus',{
    templateUrl: "CivilStatus.html",
  })
  .otherwise({
    redirectTo:"/"
})
    
}]);
function submission(){
  document.getElementById('submittedAlert').style="display:auto;";
  var delayInMilliseconds = 2000; //1 second

  setTimeout(function() {
    //your code to be executed after 1 second
    document.getElementById('submittedAlert').style="display:none;";
    window.location.href = "#!";
  }, delayInMilliseconds);
 
}