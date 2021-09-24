app.scope('profile',($scope)=>{

    // Declaration for  all the components to be used in your project
    $scope.loader = '/components/loader.htm';

    // Get user and post
    app.$getCleint('user.json',(response)=>{
        $scope.user = JSON.parse(response);
        app.render($scope,'page');
    });

});
