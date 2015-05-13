
var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var head = 0;
  var tail = 0;

  someInstance.enqueue = function(value){
    tail++;
    return storage[tail] = value;
  };

  someInstance.dequeue = function(){
    if(head < tail) {
      head++;
      return storage[head];
    }
  };

  someInstance.size = function(){
    return tail - (head);
  };

  return someInstance;
};


// var Queue = function(){
//   var someInstance = {};

//   // Use an object with numeric keys to store values
//   var storage = {};

//   // Implement the methods below
//   var head = -1;
//   var tail = 0;

//   someInstance.enqueue = function(value){
//     tail++;
//     return storage[tail] = value;
//   };

//   someInstance.dequeue = function(){
//     if(head < tail-1) {
//       head++;
//       return storage[head+1];
//     }
//   };

//   someInstance.size = function(){
//     return tail - (head + 1);
//   };

//   return someInstance;
// };
