"use strict";
module.exports = class Vertex {
  constructor(data) {
    this.data = data;
    this.nextElement = null;
  }
}