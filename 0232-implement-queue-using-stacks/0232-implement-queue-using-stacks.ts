class MyQueue {
    outputStack = [];
    inputStack = [];

    push(x: number): void {
        this.inputStack.push(x);
    }

    pop(): number {
        if(!this.outputStack.length) {
            const firstElement = this.inputStack.shift()
            this.outputStack.push(firstElement);
        }
        const firstElement = this.outputStack.shift()
        return firstElement;
    }

    peek(): number {
        if(!this.outputStack.length) {
            const firstElement = this.inputStack.shift()
            this.outputStack.push(firstElement);
        }
        return this.outputStack[0];
    }

    empty(): boolean {
        return !this.inputStack.length && !this.outputStack.length;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */