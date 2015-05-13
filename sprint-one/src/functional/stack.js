var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var top = 0;

  someInstance.push = function(value){
    storage[top] = value;
    top++;
  };

  someInstance.pop = function(){
    top--;

    var result = storage[top];

    delete storage[top];

    return result;
  };

  someInstance.size = function(){
    if(storage[0] === undefined){
      return 0;
    }

    return top;
  };

  return someInstance;
};
