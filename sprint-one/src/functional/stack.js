var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0; 

  var setLength = function() {
    length = Object.keys(storage).length;
  }

  // Implement the methods below
  someInstance.push = function(value){
    storage[length] = value;
    setLength();
  };

  someInstance.pop = function(){
    var last = storage[length-1];
    delete storage[length-1];
    setLength()
    return last;
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
