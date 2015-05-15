var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  var first = 0;
  var last = 0;

  list.addToTail = function(value){
    var obj = new Node(value);
    if(last > 0) {
      list[last-1].next = obj;
    }
    list[last] = obj;
    list.tail = obj;
    last++;
    list.head = list[first];
  };

  list.removeHead = function(){
    var obj = list[first];
    delete list[first];
    first++;
    list.head = list[first];
    return obj.value;
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
 */


 // linkedList.addToTail(4);
 // linkedList.addToTail(5);
 // expect(linkedList.head.value).to.equal(4);
 // linkedList.removeHead();
 // expect(linkedList.head.value).to.equal(5);

