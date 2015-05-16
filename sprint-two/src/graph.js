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

  this.forEachNode(function(val, node){
    if(val === value) {
      bool = true;
    }
  });

  return bool;
};

Graph.prototype.removeNode = function(value){
  this.forEachNode(function(val, node, index, graph){
    if(val === value) {
      graph.splice(index, 1);
    }
  });

};

Graph.prototype.hasEdge = function(fromValue, toValue){
  var bool = false;

  this.forEachNode(function(val, node, index){
    if(val === fromValue && node.edges.indexOf(toValue) > -1){
      bool = true;
    }
  });

  return bool;

};

Graph.prototype.addEdge = function(fromValue, toValue){

  this.forEachNode(function(val, node){
    if(val === fromValue) {
      node.edges.push(toValue);
    }
    if(val === toValue) {
      node.edges.push(fromValue);
    }
  });

};

Graph.prototype.removeEdge = function(fromValue, toValue){

  // FIGURE THIS OUT:
  this.forEachNode(function(val, node){
    if(val === fromValue){
      node.edges.splice(node.edges.indexOf(toValue), 1);
    }
    if(val === toValue){
      node.edges.splice(node.edges.indexOf(fromValue), 1);
    }

  });

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



