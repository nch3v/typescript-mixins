class Swimmer {
    public hasSwimmed:boolean;

    constructor() {
        // initialize value in constructor
        // the constructor is transpiled in a constructor function
        this.hasSwimmed = false;
    }

    swim() {
        this.hasSwimmed = true;
    }
}

export = Swimmer;