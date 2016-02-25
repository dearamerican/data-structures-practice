var Queue = function() {
  this.oldest = 0;
  this.newest = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
  return this.newest - this.oldest;
};

Queue.prototype.enqueue = function(data) {
  this.storage[this.newest] = data;
  this.newest++;
};

Queue.prototype.dequeue = function() {
  if(this.oldest === this.newest) {
    return null;
  } else {
    var dequeuedItem = this.storage[this.oldest];
    delete this.storage[this.oldest];
    this.oldest++;
    return dequeuedItem;
  }
};