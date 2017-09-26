angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.allapps = [{name:'MXPlayer',url:'https://app.box.com/s/d63snykl68hl3kg1tehj7w1m321ezgzg',icon:'https://i1.wp.com/alltipsfinder.com/wp-content/uploads/2016/02/mx-video-player-for-android.png'},
   {name:'Whatsapp',url:'https://app.box.com/s/84o2zms3f7x5fktw1b1vp3vue6afojcg',icon:'http://www.freepngimg.com/download/whatsapp/4-2-whatsapp-transparent.png'},
   {name:'Google translator',url:'https://app.box.com/s/004n2ih33shauhz1y3sowl45lylkdc1l',icon:'https://arb.rt.com/media/pics/2016.05/article/572afaa7c361889f358b45b1.png'},
   {name:'Cleaner Master',url:'https://app.box.com/s/miwvds4xecqw99usl0ck7wcjuir4iv0v',icon:'https://lh3.googleusercontent.com/aVB9ALYrWpngHRCJTBKNZQXIQtKjnwu7OM0UYcT2OJ2B11-9lHo5X5QbzK_Ph_axpwI1=w300'}
 ];
});


// angular.module('myApp', []).controller('namesCtrl', function($scope,$http) {
//     $http.get("https://apkpure.com/app").then(function(appdata) {
//     	$scope.apps=appdata.data.newData;
//     })
// });