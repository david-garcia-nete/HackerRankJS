class Node{
    constructor(val, depth){
        this.val = val;
        this.left;
        this.right;
        this.depth = depth;
    }
}

class Tree{
    constructor(indexes){
        this.root = new Node(1, 1);
        this.indexes = indexes;
        this.addChildren(this.root, 2);
    }
    addChildren(root, depth){
        if(this.indexes[root.val-1][0] != -1) root.left = new Node(this.indexes[root.val-1][0], depth);
        if(this.indexes[root.val-1][1] != -1) root.right = new Node(this.indexes[root.val-1][1], depth);
        if(root.left) this.addChildren(root.left, depth+1);
        if(root.right) this.addChildren(root.right, depth+1); 
    }

    swapNodes(root, level){
        if(root.depth % level == 0){
            var temp = root.left;
            root.left = root.right;
            root.right = temp;
        }
        if(root.left) this.swapNodes(root.left, level);
        if(root.right) this.swapNodes(root.right, level);
    }
    inOrder(root, arr){
        if(root.left) this.inOrder(root.left, arr);
        arr.push(root.val);
        if(root.right) this.inOrder(root.right, arr);
    }
}

/*
 * Complete the swapNodes function below.
 */
function swapNodes(indexes, queries) {
    var tree = new Tree(indexes);
    var result = [];
    for(var i = 0; i < queries.length; i++){
        tree.swapNodes(tree.root, queries[i]);
        var arr = [];
        tree.inOrder(tree.root, arr);
        result.push(arr);
    }
    return result;
}



var indexes = [[2, 3], [4, -1], [5, -1], [6, -1], [7, 8], [-1, 9], [-1, -1], [10, 11], [-1, -1], [-1, -1], [-1, -1]];
var queries = [2, 4];

swapNodes(indexes, queries);

