
import Swimmer = require("./swimmer");
import Walker = require("./walker");
import Talker = require("./talker");

interface Penguin extends Swimmer, Walker, Talker {
}

export = Penguin;
