import compose = require("./class-composer");
import Swimmer = require("./swimmer");
import Walker = require("./walker");
import Talker = require("./talker");

interface Duck extends Swimmer, Walker, Talker {
    // constructor signature the typescript way
    new(options?:DuckConstructorOptions):Duck;
    (options?:DuckConstructorOptions):void;
}

interface DuckConstructorOptions {
    sound:string
}

var Duck:Duck = compose({sound:"coin"}, [Swimmer, Walker, Talker]) as Duck;

export = Duck;