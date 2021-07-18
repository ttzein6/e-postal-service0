
app.controller("modCtrl", function ($scope) {

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
