class minStack {
    constructor(){
        this.stack = [];
        this.minStack = []
    }
    getMin(){
        return this.minStack[this.minStack.length-1]
    }

    push(item){
        this.stack.push(item)
        if(this.minStack.length === 0 || item <=this.getMin()){
            this.minStack.push(item)
        }
    }
    pop(){
        const removedItem = this.stack.pop()
        if(removedItem === this.getMin()){
            this.minStack.pop
        }
        return removedItem;
    }
    peek(){
        return this.stack[this.stack.length-1]
    }


}

const ms = new minStack;

ms.push(13)
ms.push(4)
ms.push(5)
ms.push(11)
ms.push(17)
ms.push(4)
ms.push(2)


// console.log(ms.pop());
// console.log(ms.pop());
// console.log(ms.pop());
// console.log(ms.peek());


console.log(ms.getMin());



