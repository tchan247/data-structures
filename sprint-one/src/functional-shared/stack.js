var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = {};
  stackInstance.top = 0;
  stackInstance.storage = {};
  _.extend(stackInstance, stackMethods);

  return stackInstance;
};

var stackMethods = {
  push : function(value){
    this.storage[this.top] = value;
    this.top++;

    // storage[top] = value;
    // top++;
  },

  pop : function(){
    this.top--;

    var result = this.storage[this.top];

    delete this.storage[this.top];

    return result;
  },

  size : function(){
    // if(this.storage[0] === undefined){
    //   return 0;
    // }

    return Object.keys(this.storage).length;

    // return top;
  }

};


