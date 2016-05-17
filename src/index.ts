import Duck = require("./duck");

class MyApp {
    duck: Duck;

    constructor() {
        this.duck = new Duck({sound: "puiock"}) as Duck;
    }

    manageDuck() {
        this.duck.talk();
        this.duck.swim();
        this.duck.walk();
        this.duck.quack();
    }
}

export = MyApp;
