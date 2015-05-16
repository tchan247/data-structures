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


/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail: Constant Time O(1)
 * removeHead: Constant Time O(1)
 * contains: Linear Time O(n)
 */


