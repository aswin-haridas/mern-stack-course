class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        const newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
    }

    isEmpty() {
        return this.top === null;
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        const poppedNode = this.top;
        this.top = this.top.next;
        return poppedNode.data;
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        return this.top.data;
    }

    printStack() {
        let current = this.top;
        while (current) {
            process.stdout.write(current.data + " -> ");
            current = current.next;
        }
        console.log("null");
    }
}


const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.printStack()

stack.pop()
stack.printStack()

console.log(stack.peek());