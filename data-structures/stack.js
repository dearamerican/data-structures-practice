var Stack = function() {
  this.size = 0;
  this.storage = {};
};

Stack.prototype.push = function(data) {
  this.storage[this.size] = data;
  this.size++;
};

Stack.prototype.pop = function() {
  if(this.size) {
    var dataToDelete = this.storage[this.size - 1];
    delete this.storage[this.size - 1];
    this.size--;
    return dataToDelete;
  } else {
    return null;
  }
};