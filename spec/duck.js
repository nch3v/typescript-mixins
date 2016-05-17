"use strict";

var lib = __dirname+'/../lib';
var Duck = require(lib+'/duck');

describe("Duck", function() {

	it("can walk", function() {
		var duck = new Duck();
		expect(duck.hasWalked).toBe(false);
		duck.walk();
		expect(duck.hasWalked).toBe(true);
	});

	it("can swim", function() {
		var duck = new Duck();
		expect(duck.hasSwimmed).toBe(false);
		duck.swim();
		expect(duck.hasSwimmed).toBe(true);
	});

	it("can talk", function() {
		var duck = new Duck();
		expect(duck.hasTalked).toBe(false);
		var sound = duck.talk();
		expect(duck.hasTalked).toBe(true);
		expect(sound).toBe("coin");
	});

	it("can talk with another sound", function() {
		var duck = new Duck({sound:"coin coin"});
		expect(duck.hasTalked).toBe(false);
		var sound = duck.talk();
		expect(duck.hasTalked).toBe(true);
		expect(sound).toBe("coin coin");
	});

	it("can quack", function() {
		var duck = new Duck();
		expect(duck.hasQuacked).toBe(false);
		duck.quack();
		expect(duck.hasQuacked).toBe(true);
	});
});


