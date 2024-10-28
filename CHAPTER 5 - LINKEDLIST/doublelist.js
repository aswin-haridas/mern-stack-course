class DoubleNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = this.tail = null;
    }
    insertAtBeg(data) {
        const newNode = new DoubleNode(data)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    insertAtEnd(data) {
        const newNode = new DoubleNode(data);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    deleteNode(data) {
        if (!this.head) {
            console.log('list is empty');
            return
        }
        let current = this.head;
        while (current && current.data !== data) {
            current = current.next
        }
        if (!current) {
            console.log('node not found');
            return
        }
        if (this.head === this.tail && current.data === data) {
            this.head = this.tail = null;
        } else if (current === this.head) {
            this.head = current.next
            this.head.prev = null
        } else if (current === this.tail) {
            this.tail = current.prev
            this.tail.next = null
        } else {
            
        }
    }
    printList() {
        let current = this.head;
        while (current) {
            process.stdout.write(current.data + "--")
            current = current.next
        }
        console.log('null');
    }
    printrev() {
        let current = this.tail;
        while (current) {
            process.stdout.write(current.data + "--")
            current = current.prev
        }
        console.log('null');
    }
}
const list = new DoubleLinkedList();

list.insertAtBeg(1);
list.insertAtBeg(2);
list.insertAtBeg(3);
list.insertAtEnd(9);
list.insertAtEnd(8);
list.insertAtEnd(7);
list.printList()
list.printrev()
