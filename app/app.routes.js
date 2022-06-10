angular.module('appModule')
  // .config(($locationProvider) => {
  //   $locationProvider.html5Mode({
  //     enabled: true,
  //   });
  // })
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state({
        name: 'app',
        url: '/',
        templateUrl: './pages/home-page/home-page.html',
        controller: 'homeController',
        controllerAs: 'homePageVm',
      })
      .state({
        name: 'team-performance',
        url: '/team-performance',
        template: '<v-performance-page></v-performance-page>',
      })
      .state({
        name: '404',
        url: '/404',
        template: '<v-error-page></v-error-page>',
      });
    $urlRouterProvider.otherwise('/404');
  });
