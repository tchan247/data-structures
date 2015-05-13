var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var counter = 0; 

  // Implement the methods below
  someInstance.enqueue = function(value){
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function(){
    var firstKey = +Object.keys(storage)[0];
    var firstValue = storage[firstKey];
    delete storage[firstKey];
    return firstValue;
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};
