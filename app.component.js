var myapp = angular.module('myapp');

myapp.component('studentDetails', {
    templateUrl: 'student-details.tp.html',
    bindings: {
        myTitle: '@',
        currentStudent: '<'
    },
    controller: [function(){
        this.myname = 'custom component';
    }]
});

myapp.component('home',{
    template: '<div>home</div>'
});

myapp.component('about',{
    template: '<div>about</div>'
});