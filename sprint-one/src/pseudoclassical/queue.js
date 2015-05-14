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
  // debugger;
  delete this.storage[Object.keys(this.storage)[0]];
  // this.count--;
  return results;
}

Queue.prototype.size = function() {
  // if(Object.keys(this.storage).length < 0) ? 0
  var length = Object.keys(this.storage).length;
  // debugger;
  return (length >= 0)? length : 0;
}

// queue.enqueue('a');
// queue.enqueue('b');
// queue.dequeue();
// expect(queue.size()).to.equal(1);

// queue.enqueue('a');
// queue.enqueue('b');
// queue.dequeue();
// queue.enqueue('c');
// expect(queue.dequeue()).to.equal('b');
