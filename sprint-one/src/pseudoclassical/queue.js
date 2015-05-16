var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
}

Queue.prototype.dequeue = function() {
  var results = this.storage[Object.keys(this.storage)[0]];
  delete this.storage[Object.keys(this.storage)[0]];
  return results;
}

Queue.prototype.size = function() {
  var length = Object.keys(this.storage).length;
  return (length >= 0)? length : 0;
}
