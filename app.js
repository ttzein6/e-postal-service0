var myApp = angular.module('myApp',['ngRoute','ngMaterial','ngAria']);
myApp.controller('appCtrl',function($scope,$mdSidenav){
  $scope.mailing={name: "Mailing", items: [],route:["post","EMS","clickship"],path:"mailing"};
  $scope.governmental={name: "Governmental", items: [],route:["huntinglicense","mod","residence"],path:"governmental"};
  $scope.nongovernmental={name: "Non-Governmental", items: [],route:["MVI","personalAccidentInsurance"],path:"nonGovernmental"};
  $scope.financial={name: "Financial", items: [],route:["carAlert","paymentParkMeter"],path:"financial"};
  $scope.onlineServices={name: "Online Services", items: [],route:["clickship","stamp"],path:"onlineServices"};
  $scope.mailing.items = ["postal registered mail","EMS","click&ship"];
  $scope.governmental.items = ["Hunting license","Ministry of defence","Annual Residency Permit "];
  $scope.nongovernmental.items = ["Mandatory Vehicular Insurance","Personal Accident Insurance Policy"];
  $scope.financial.items = ["Car Alert","Payment of Park Meter Tickets"];
  $scope.onlineServices.items = ["Click&ship","MyStamp"];

  $scope.navList= [$scope.mailing,$scope.governmental, $scope.nongovernmental, $scope.financial, $scope.onlineServices];
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
  .when('/new2',{
    templateUrl: 'new2.html',
  })
  .when('/post',{
    templateUrl: "post.html",
  })
  .when('/EMS',{
    templateUrl: "EMS.html",
  })
  .when('/clickship',{
    templateUrl: "ClickShip.html",
  })
  .when('/new',{
    templateUrl: "new.html",
  })
  .when('/huntinglicense',{
    templateUrl: "HuntingLicense.html",
  })
  .when('/mod',{
    templateUrl: "MOD.html",
  })
  .when('/MVI',{
    templateUrl: "insurePage.html",
  })
  .when('/login',{
    templateUrl: "signin1.html",
  })
  .when('/register',{
    templateUrl: "register.html",
  })
  .when('/residence',{
    templateUrl:"annualresidencypermit.html",
    
  })
  .when('/appResidence',{
    templateUrl:"appResidence.html",
    
  })
  .when('/stamp',{
    templateUrl:"stamp.html",
    
  })
  .when('/calculatePostalRate',{
    templateUrl: "calculatePostalRate.html",
  })
  .when('/tracking',{
    templateUrl: "tracking.html",
  })
  .when('/mailing',{
    templateUrl: "mailing.html",
  })
  .when('/governmental',{
    templateUrl: "governmental.html",
  })
  .when('/nonGovernmental',{
    templateUrl: "nongovernmental.html",
  })
  .when('/financial',{
    templateUrl: "financial.html",
  })
  .when('/onlineServices',{
    templateUrl: "onlineServices.html",
  })
  .when('/calculateYourMec',{
    templateUrl: "calculateMec.html",
  })
  .when('/paynow',{
    templateUrl: "paynow.html",
  })
  .when('/personalAccidentInsurance',{
    templateUrl: "personalaccidentinsurance.html",
  })
  .when('/carAlert',{
    templateUrl: "caralert.html",
  })
  .when('/paymentParkMeter',{
    templateUrl: "paymentmeter.html",
  })
  .when('/locateUs',{
    templateUrl: "locateUs.html",
  })
  .when('/contactUs',{
    templateUrl: "contactUs.html",
  })
  .otherwise({
    redirectTo:"/"
})
    
}]);

myApp.controller("modCtrl", function ($scope) {

  $scope.ministryOfDefenceServices = [
  { name: 'Plea Of Mercy', desc: 'fwe' },
  { name: 'Medication And Medical Care', desc: 'trc' },
  { name: 'Security Condition', desc: 'pfd' },
  { name: 'Family Conditions', desc: 'trj' },
  { name: 'Interview And Mines Related Operations', desc: 'trj' },
  { name: 'financial, birth and death aid', desc: 'trj' }
      , { name: 'financial rights ', desc: '' }
      , { name: ' honours laf personne', desc: '' }
      , { name: ' mandatory service', desc: '' }
      , { name: 'scholarships ', desc: '' }
      , { name: 'broadcast station and entry posts ', desc: '' }
      , { name: 'Sport Events And Borrow LAF Equipment ', desc: '' }
      , { name: ' Retirees Requests', desc: '' }
      , { name: 'Security Measures And Development Works ', desc: '' }
      , { name: 'Conferences College Researches ', desc: '' }
      , { name: 'Grant Entry for Equipment or Vehicles To Lebanon ', desc: '' }
      , { name: ' Various ', desc: '' }
  ];

  $scope.huntingLicenseServices = [
      { name: 'First-time wild bird hunting license', desc: 'fwe' },
      { name: 'First-time wild bird furry animal hunting license', desc: 'trc' },
      { name: 'Renewal of wild bird hunting license', desc: 'pfd' },
      { name: 'Renewal of wild furry animal hunting license', desc: 'trj' },
      ];


  $scope.clicme = function (name, desc) {
      $scope.updatname = name;
      $scope.updatdesc = desc;
  }
});


myApp.controller("mycarCtrl", function ($scope) {

  $scope.carInsuranceServices = [
  { name: 'Private Car', desc: 'fwe' },
  { name: 'Private Van or pick-up', desc: 'trc' },
  { name: 'Private Bus with maximu 11 seats', desc: 'pfd' },
  { name: 'Private 12 to 24 seater bus', desc: 'trj' },
  { name: 'Private 25 and above seater bus', desc: 'trj' },
  { name: 'Private Truck', desc: 'trj' }
      
  ];

  


  $scope.clicme = function (name, desc) {
      $scope.updatname = name;
      $scope.updatdesc = desc;
  }
});



var loadFile = function(event) {
  var image = document.getElementById('output');
  image.src = URL.createObjectURL(event.target.files[0]);
};
function submission(){
  document.getElementById('submittedAlert').style="display:auto;";
  var delayInMilliseconds = 5000; //5 second

  setTimeout(function() {
    //your code to be executed after 1 second
    document.getElementById('submittedAlert').style="display:none;";
    window.location.href = "#!";
  }, delayInMilliseconds);
 
}