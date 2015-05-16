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

  for(var i = 0; i < this.graph.length; i++) {
    if(this.graph[i].value === value) {
      bool = true;
    }
  }

  return bool;
};

Graph.prototype.removeNode = function(value){
  for(var i = 0; i < this.graph.length; i++) {
    if(this.graph[i].value === value) {
      this.graph.splice(i, 1);
    }
  }
};

Graph.prototype.hasEdge = function(fromValue, toValue){
  for(var i = 0; i < this.graph.length; i++) {
    if((this.graph[i].value === fromValue) && (this.graph[i].edges.indexOf(toValue) > -1)) {
      return true
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromValue, toValue){
  for(var i = 0; i < this.graph.length; i++) {
    if(this.graph[i].value === fromValue) {
      this.graph[i].edges.push(toValue);
    }
    if(this.graph[i].value === toValue) {
      this.graph[i].edges.push(fromValue);
    }
  }
};

Graph.prototype.removeEdge = function(fromValue, toValue){

  // FIGURE THIS OUT:

  for(var i = 0; i < this.graph.length; i++) {
    if(this.graph[i].value === fromValue) {
      this.graph[i].edges.splice(this.graph[this.graph.indexOf(toValue)], 1);
    }
    if(this.graph[i].value === toValue) {
      this.graph[i].edges.push(fromValue);
    }
  }
};

Graph.prototype.forEachNode = function(cb){
  for(var i = 0; i < this.graph.length; i++) {
    cb(this.graph[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



