
import Duck = require("./duck");

class MyApp {
    duck:Duck;

    constructor() {
        this.duck = new Duck({sound:"puiock"});
    }

    manageDuck() {
        this.duck.talk();
        this.duck.swim();
        this.duck.walk();
    }
}

export = MyApp;
