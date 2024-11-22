class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class Queue{
    constructor(){
        this.front=null;
        this.rear=null;
    }
    enqueue(data){
        const newNode=new Node(data);
        if(this.rear===null){
            this.front=newNode;
            this.rear=newNode;
            return;
        }
        this.rear.next=newNode;
        this.rear=newNode;
    }
    isEmpty(){
        return this.front===null;
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("queue is empty");
            return null;
        }
        let dequeueNode=this.front;
        this.front=this.front.next;
        if(this.front===null){
            this.rear===null;
        }
        return dequeueNode.data;
    }
    peek(){
        if(this.isEmpty()){
            console.log("queue is empty");
            return null;
        }
        return this.front.data;
    }
    printQueue() {
        let current = this.front;
        while (current) {
            process.stdout.write(current.data + "->");
            current = current.next;
        }
        console.log('null');
    }
}
const queue=new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.printQueue();

queue.dequeue();

console.log(queue.peek());
