import dogController from "./controllers/dogController.js";

class App {
  constructor() {
    console.log("App created")
    this.controllers = {
      dogController: new dogController()
    }
  }
}

window["app"] = new App()