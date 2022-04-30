class ListNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        this.head = null
    }
    root() {
        return this.head
    }

    add(data) {
        const insNode=(listNode, val)=>{
            if (!listNode) return new ListNode( val )
            if (listNode.data === val) return listNode
            val < listNode.data?listNode.left = insNode( listNode.left, val ):listNode.right = insNode( listNode.right, val )
            return listNode
        }
        this.head = insNode( this.head, data )
    }

    has(data) {
        const hasNode=(listNode, val)=>{
            if (!listNode) return false
            if (listNode.data === val) return true
            return (val < listNode.data) ? hasNode( listNode.left, val ) : hasNode( listNode.right, val )
        }
        return hasNode( this.head, data )
    }

    find(data) {
        const findNode=(listNode, val)=> {
            if (!listNode) return null
            if (listNode.data === val) return listNode
            return (val < listNode.data) ? findNode( listNode.left, val ) : findNode( listNode.right, val )
        }
        return findNode( this.head, data )
    }

    remove(data) {
        const delNode=(listNode, val)=> {
            if (!listNode) return null
            if (val === listNode.data) {
                if (!listNode.left && !listNode.right) return null
                if (!listNode.left) { listNode = listNode.right; return listNode }
                if (!listNode.right) {listNode = listNode.left; return listNode}
                let min = listNode.right
                while (min.left) min = min.left
                listNode.data = min.data
                listNode.right = delNode( listNode.right, min.data )
                return listNode
            }
            val < listNode.data?
                listNode.left = delNode( listNode.left, val ):listNode.right = delNode( listNode.right, val )
           return listNode
        }
        
        return delNode( this.head, data )
    }

    min() {
        if (!this.head) return null
        let listNode= this.head
        while (listNode.left) listNode = listNode.left
        return listNode.data
    }

    max() {
        if (!this.head) return null
        let listNode = this.head
        while (listNode.right) listNode = listNode.right
        return listNode.data
    }
}

module.exports = {
    BinarySearchTree
};