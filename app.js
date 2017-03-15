/**
 * Created by freya on 2017/3/15.
 */
var AppComponent = ng
    .Component({
        selector: 'my-app',
        template: '<h1>My First Angular</h1>'
    })
    .Class({
        constructor: function () { }
    });


(function() {
    var AppComponent = ng
        .Component({
            selector: 'my-app',
            template: '<h1>My First Angular 2 App</h1>'
        })
        .Class({
            constructor: function () { }
        });
    document.addEventListener('DOMContentLoaded', function() {
        ng.bootstrap(AppComponent);
    });
})();
