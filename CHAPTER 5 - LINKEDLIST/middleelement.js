class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class singlelinkedlist {
    constructor() {
        this.head = null;
    }

    insertBeg(data) {
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode;
    }
    findMiddle() {
        if (!this.head) {
            return null
        }
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.data
    };
    printList() {
        let current = this.head;
        while (current) {
            process.stdout.write(current.data + "->");
            current = current.next;
        }
        console.log('null');
    }
}
const list = new singlelinkedlist

list.insertBeg(3);
list.insertBeg(2);
list.insertBeg(1);
console.log(list.findMiddle());