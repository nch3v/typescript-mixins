class Talker {
    public hasTalked:boolean = false;

    // default value which will be overriden in constructor
    private sound:string = "";

    // constructor can take a config object
    // the same object will be given to all mixins
    constructor(options:{sound:string}) {
        this.sound = options.sound;
    }

    talk() {
        this.hasTalked = true;
        return this.sound;
    }
}

export = Talker;