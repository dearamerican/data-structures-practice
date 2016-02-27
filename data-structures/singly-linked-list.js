
//node constructor
var Node = function(value) {
    this.value = value;
    this.pointer = null;
};

//list constructor
var SinglyList = function() {
    this.length = 0;
    this.head = null;
};

SinglyLinkedList.prototype.add = function(value) {
    var newNode = new Node(value); //call node constructor to instatiate new node, thereby assigning the passed in value to the new node's value 
    var currentNode = this.head; //always begin with the head as current node, like a root node when traversing the DOM 
    if(!currentNode) { //check to see if the list has a head. If not, the list is empty and a head needs to be assigned
        this.head = newNode;
        this.length++;
        return newNode;
    } else { //if the list is not empty... 
        while(currentNode.next) { //traverse the nodes as long as there is a next node...
            currentNode = currentNode.next; // by resetting currentNode to be each successive node
        }
        //when there are no more "next" nodes, you've reached the end! here, set the currentNode's next value to the newly instantiated node, thereby adding it to the end of the list. 
        currentNode.next = node;
        this.length++;
        return node;
    }
};

SinglyLinkedList.prototype.searchNodeAt = function(position) {
    counter = 1;
    currentNode = this.head;
    
    if(position < 1 || this.length === 0 || position > this.length) {
        throw new Error ('Unable to retrieve node at the given position. Make sure it is a valid position within this Singly Linked List.');
    }
    while(counter < position) {
        currentNode = currentNode.next;
        counter++;
    }
    return currentNode;
};

SinglyLinkedList.prototype.remove = function(position){
    var currentNode = this.head;
    var counter = 0;
    var beforeNodeToDelete = null;
    var nodeToDelete = null;
    var deletedNode = null;
    if(position < 1 || position > this.length || this.length === 0) {
        throw new Error('Unable to delete node at the given position. Make sure it is a valid position within this Singly Linked List.');
    }
    if(position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this.length--;
        return deletedNode;
    }
    while(counter < position) { //set up a while loop wherein: 
        beforeNodeToDelete = currentNode; //the node's precursor is set to the current node 
        nodeToDelete = currentNode.next; //the current node is set to the next node
        counter++; 
    }
    
    beforeNodeToDelete.next = nodeToDelete.next;//set the .next property of the beforeNodeToDelete node to the node that comes after the node we're deleting 
    deletedNode = nodeToDelete; //set the deletedNode var to the currentNode 
    nodeToDelete = null;
    this.length--;//decrement the length 
    return deletedNode;//return the removed node 
};