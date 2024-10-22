class node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class singlelinkedlist {
    constructor() {
        this.head = null;
    }


    insertAtBeg(data) {
        const newNode = new node(data);
        newNode.next = this.head;
        this.head = newNode;
    };
    insertAtEnd(data) {
        const newNode = new node(data);
        if (!this.head) {
            this.head = newNode;
        }else{
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
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

const list = new singlelinkedlist();

list.insertAtBeg(100);
list.insertAtBeg(400);
list.insertAtBeg(200);
list.insertAtEnd(600);

list.printList();