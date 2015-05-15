var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var obj = new Node(value);
    if(!list.head) {
      list.head = obj;
    } else {
      list.tail.next = obj;
    }

    list.tail = obj;
  };

  list.removeHead = function(){
    var original = list.head;
    list.head = original.next;
    return original.value;
  };

  list.contains = function(target){
    var current = list.head;
    while(current.next !== null) {
      if(current.value === target) {
        return true;
      }
      current = current.next;
    }
    return (current.value === target) ? true : false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


// var LinkedList = function(){
//   var list = {};
//   list.head = null;
//   list.tail = null;
//   var first = 0;
//   var last = 0;

//   list.addToTail = function(value){
//     var obj = new Node(value);
//     if(last > 0) {
//       list[last-1].next = obj;
//     }
//     list[last] = obj;
//     list.tail = obj;
//     last++;
//     list.head = list[first];
//   };

//   list.removeHead = function(){
//     var obj = list[first];
//     delete list[first];
//     first++;
//     list.head = list[first];
//     return obj.value;
//   };

//   list.contains = function(target){
//     var current = list.head;
//     while(current.next !== null) {
//       if(current.value === target) {
//         return true;
//       }
//       current = current.next;
//     }
//     return (current.value === target) ? true : false;
//   };

//   return list;
// };

// var Node = function(value){
//   var node = {};

//   node.value = value;
//   node.next = null;

//   return node;
// };

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail: Constant Time O(1)
 * removeHead: Constant Time O(1)
 * contains: Linear Time O(n)
 */

// Removing Node from Reverse Linked List
 // find the element I want to delete
 // store element.next in a var
 // element.previous.next = var
 // //



