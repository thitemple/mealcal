import "bootstrap";

export class App {

  configureRouter(config, router) {
    config.title = "MealCal";
    config.map([
      { route: ["", "welcome"], moduleId: "./welcome", nav: true, title: "Welcome" },
      { route: "calendar", moduleId: "./calendar", nav: true, title: "Calendar" },
      { route: "about", moduleId: "./about", nav: true, title: "About" }
    ]);

    this.router = router;
  }

}