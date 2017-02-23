function routerConfig ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state ("root", {
      abstract: true,
      templateUrl: "templates/layout.tpl.html"
    })
    .state ("root.home", {
      url: "/",
      templateUrl: "templates/home.tpl.html"
    })
    .state ("root.football", {
      url: "/football",
      templateUrl: "templates/football.tpl.html"
    })
    .state ("root.soccer", {
      url: "/soccer",
      templateUrl: "templates/soccer.tpl.html"
    })
    .state ("root.basketball", {
      url: "/basketball",
      templateUrl: "templates/basketball.tpl.html"
    })
    .state ("root.tennis", {
      url: "/tennis",
      templateUrl: "templates/tennis.tpl.html"
    })
    .state ("root.baseball", {
      url: "/baseball",
      templateUrl: "templates/baseball.tpl.html"
    })
    .state ("root.track", {
      url: "/track",
      templateUrl: "templates/track.tpl.html"
    })
    .state ("root.billiards", {
      url: "/billiards",
      templateUrl: "templates/billiards.tpl.html"
    })
    .state ("root.swim", {
      url: "/swim",
      templateUrl: "templates/swim.tpl.html"
    })

  $urlRouterProvider.otherwise("/");
}

routerConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
export { routerConfig };
