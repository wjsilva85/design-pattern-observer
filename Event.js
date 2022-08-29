"use strict";

exports.Event = class Event {
  constructor() {
    this.handlers = new Map();
    this.count = 0;
  }

  subscribe(handler) {
    this.handlers.set(++this.count, handler);
    return this.count;
  }

  unsubscribe(idx) {
    this.handlers.delete(idx);
  }
  //1) Who fired
  //2) Additional Data (event args)
  fire(sender, args) {
    this.handlers.forEach((v, k) => {
      v(sender, args);
    });
  }
};
