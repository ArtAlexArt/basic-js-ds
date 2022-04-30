
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {

    constructor() {
        this._queue = []
    }
    getUnderlyingList() {
        let res = null
        this._queue.reverse().forEach( (elm,i) => {
            res = {
                value: elm,
                next: (i!==0)?res:null
            }
        } )
        return res
    }
    enqueue(elm) {
        this._queue.push( elm )
    }

    dequeue() {
        // returns the top element from queue and deletes it, returns 1
        const first = this._queue[0]
        this._queue = this._queue.filter((_, i) => i !== 0 )
        return first
    }
}

 module.exports = {
   Queue
 };

// const q = new Queue()
// q.enqueue( 5 );
// q.enqueue( 6 );
// q.enqueue( 86 );
// q.enqueue( 16 );
// q.enqueue( 7 );

// console.log(q.dequeue())
// console.log(q.dequeue())
// console.log( q.getUnderlyingList() )