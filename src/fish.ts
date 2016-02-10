
import Swimmer = require("./swimmer");
import Talker = require("./talker");

interface Fish extends Swimmer, Talker {
}

export = Fish;
