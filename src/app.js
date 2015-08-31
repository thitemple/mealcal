System.register(['bootstrap'], function(exports_1) {
    var App;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            App = (function () {
                function App() {
                }
                App.prototype.configureRouter = function (config, router) {
                    config.title = "MealCal";
                    config.map([
                        { route: ["", "welcome"], moduleId: "./welcome", nav: true, title: "Welcome" },
                        { route: "calendar", moduleId: "./calendar", nav: true, title: "Calendar" },
                        { route: "about", moduleId: "./about", nav: true, title: "About" }
                    ]);
                    this.router = router;
                };
                return App;
            })();
            exports_1("App", App);
        }
    }
});
