var Graph = function(){
  this.graph = [];
};

Graph.prototype.addNode = function(value){
  var node = {};
  node.value = value;
  node.edges = [];

  this.graph.push(node);
};

Graph.prototype.contains = function(value){
  var bool = false;


  this.forEachNode(function (val, item) {
    if(item.value === value) {
      bool = true;
    }
  })

  return bool;
};

Graph.prototype.removeNode = function(value){
  this.forEachNode(function (val, item, index, collection) {
    if(item.value === value) {
      collection.splice(index, 1);
    }
  })
};

Graph.prototype.hasEdge = function(fromValue, toValue){
  var presence = false;
  this.forEachNode(function (val, item) {
    if((item.value === fromValue) && (item.edges.indexOf(toValue) > -1)) {
      presence = true;
    }
  });
  return presence;
};

Graph.prototype.addEdge = function(fromValue, toValue){
  this.forEachNode(function (val, item) {
    if(item.value === fromValue) {
      item.edges.push(toValue);
    }
    if(item.value === toValue) {
      item.edges.push(fromValue);
    }
  });
};

Graph.prototype.removeEdge = function(fromValue, toValue){

  this.forEachNode(function (val, item, index, collection) {
      if(val === fromValue) {
        item.edges.splice(collection[collection.indexOf(toValue)], 1);
      }
      if(val === toValue) {
        item.edges.splice(collection[collection.indexOf(fromValue)], 1);
      }
  })
};

Graph.prototype.forEachNode = function(cb){
  for(var i = 0; i < this.graph.length; i++) {
    cb(this.graph[i].value, this.graph[i], i, this.graph);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 *  addNode: O(1)
 *  contains: O(n)
 *  removeNode: O(n)
 *  hasEdge: O(n)
 *  addEdge: O(n)
 *  removeEdge: O(n)
 *  forEachNode: O(n)
 */



