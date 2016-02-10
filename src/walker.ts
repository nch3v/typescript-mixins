class Walker {

    //initialize value when declaring property
    // when transpiled the assigment is made in the constructor function
    public hasWalked:boolean = false;

    walk() {
        this.hasWalked = true;
    }
}

export = Walker;