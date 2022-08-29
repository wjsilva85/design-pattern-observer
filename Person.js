"use strict";
const { Event } = require("./Event");
const { FallsIllArgs } = require("./FallsIllArgs");

exports.Person = class {
  constructor(address) {
    this.address = address;
    this.fallsIll = new Event();
  }

  catchCold() {
    this.fallsIll.fire(this, new FallsIllArgs(this.address));
  }
};
