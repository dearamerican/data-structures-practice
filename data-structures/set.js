//NOTE: ES6 has native Set functionality: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set
//so the below code is just an exercise in implementing the logic of retaining and removing items from a set based on the passed in collection
var Set = function() {
  this.storage = [];
};

Set.prototype.addItem = function(data) {
  if(this.storage.indexOf(data) !== -1) {
    return 'Error: a set cannot contain duplicate elements. ' + data + ' already exists within this set.'
  } else {
    this.storage.push(data);
  }
};

Set.prototype.removeItem = function(data) {
  if(this.storage.indexOf(data) === -1) {
    return 'Error: the set does not contain the data you are attempting to remove.';
  } else {
    this.storage.splice(this.storage.indexOf(data), 1);
  }
};

Set.prototype.retainAll = function(collection) {
  var toBeRemoved = [];
  for(var i = 0; i < this.storage.length; i++) {
    if(collection.indexOf(this.storage[i]) === -1) {
      toBeRemoved.push(this.storage[i]);
    }
  }
  for(var j = 0; j < toBeRemoved.length; j++) {
    this.storage.splice(this.storage.indexOf(toBeRemoved[j]), 1);
  }
};

Set.prototype.removeAll = function(collection) {
  for(var i = 0; i < collection.length; i++) {
      if(this.storage.indexOf(collection[i]) !== -1) {
        this.storage.splice(this.storage.indexOf(collection[i]), 1);          
      }
  }
};