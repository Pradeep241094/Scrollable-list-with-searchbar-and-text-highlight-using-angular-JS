//angular code 
var application = angular.module('app', []);
application.controller('ListCtrl', function ($scope) {
     //first  scope object array
    $scope.systems= [{
    
        "id": 2168,
      "name": "API",
    }, {
      "id": 11955,
      "name": "Assets",

    }, {
        
       "id": 3179,
      "name": "Design",
    }, {
   
        "id": 207,
   "name": "Development",

    }, {
        "id": 70,
    "name": "Intranet",

    }, ];
    
    
    //second scope object array
     $scope.useragents= [{
      
        "id": 191599,
    "name": "Alchemy",

    }, {
       
       "id": 86822,
    "name": "Empathy",
    }, {
        "id": 86297,
     "name": "Epiphany",
    }, {
       
         "id": 131837,
      "name": "Harmony",
    }, {
      "id": 174338,
      "name": "Zagreb",

    },  ];
    
      $scope.Title1= [{
    
       "id": 736,
      "name": "SYSTEMS",
    },  ];
     $scope.Title2= [{
    
       "id": 723,
      "name": "USERAGENTS",
    },  ];
})

//highlighter function

 .filter('highlight', function($sce) {
    return function(name, phrase) {
      if (phrase) name = name.replace(new RegExp('('+phrase+')', 'gi'),
        '<span class="highlighted">$1</span>')

      return $sce.trustAsHtml(name)
    }
  });

