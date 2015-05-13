var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = {};
  queueInstance.head = 0;
  queueInstance.tail = 0;
  queueInstance.storage = {};
  _.extend(queueInstance, queueMethods);

  return queueInstance;
};

var queueMethods = {
  enqueue: function(value){
    this.tail++;
    this.storage[this.tail] = value;
  },
  dequeue: function(){
    if(this.head < this.tail) {
      this.head++;
      return this.storage[this.head];
    }
  },
  size: function(){
    return this.tail - this.head;
  }
};


