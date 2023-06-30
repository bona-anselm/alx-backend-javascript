export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Code must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Name must be a number');
    }
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._location = value;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
    return this;
  }
}
