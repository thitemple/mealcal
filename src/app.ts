import "bootstrap";
import {Router} from "aurelia-router";

export class App {
  router: Router;

  configureRouter(config, router: Router) {
    config.title = "MealCal";
    config.map([
      { route: ["", "welcome"], moduleId: "./welcome", nav: true, title: "Welcome" },
      { route: "calendar", moduleId: "./calendar", nav: true, title: "Calendar" },
      { route: "about", moduleId: "./about", nav: true, title: "About" }
    ]);

    this.router = router;
  }

}
