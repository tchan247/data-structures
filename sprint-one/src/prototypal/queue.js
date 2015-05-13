var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var obj = Object.create(queueMethods);
  return obj;

};

var queueMethods = {
  head: 0,
  tail: 0,
  storage: {},
  enqueue: function (value) {
    this.storage[this.tail] = value;
    this.tail++;
  },
  dequeue: function () {
    if(this.head < this.tail){
      var temp = this.storage[this.head]
      this.head++;
      return temp;
    }
  },
  size: function () {
    return this.tail - this.head;
  }
};


