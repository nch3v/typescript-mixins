import compose = require("./class-composer");
import Swimmer = require("./swimmer");
import Walker = require("./walker");
import Talker = require("./talker");

interface IDuck extends Swimmer, Walker, Talker {
    // constructor signature the typescript way
    new(options?:DuckConstructorOptions):IDuck;
    (options?:DuckConstructorOptions):void;
}

interface DuckConstructorOptions {
    sound:string
}

let IDuck = compose({sound:"coin"}, [Swimmer, Walker, Talker]) as IDuck;

// Duck class can add any custom methods
class Duck extends IDuck {
    constructor(options: DuckConstructorOptions) {
        super(options);
    }

    hasQuacked = false;

    quack() {
        this.hasQuacked = true;
    }
}

export = Duck;