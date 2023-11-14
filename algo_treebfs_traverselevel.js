//https://leetcode.com/problems/binary-tree-level-order-traversal/description/

var levelOrder = function(root) {
    let result = [];
    root && traverse(root, 0);
    return result;
    
    function traverse(node, level) {
        result[level] && result[level].push(node.val) || (result[level] = [node.val]);
        node.left && traverse(node.left, level + 1);
        node.right && traverse(node.right, level + 1);
    };
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if (!root) return [];
    let queue = [root];
    let nextLevel = [];
    let result = [[root.val]];
    
    while (queue.length > 0){
        const current = queue.shift();
        if (current.left) nextLevel.push(current.left);
        if (current.right) nextLevel.push(current.right);
        if (queue.length === 0 && nextLevel.length > 0) {
            queue = nextLevel.slice();
            result.push(queue.map(q => q.val));
            nextLevel = [];
        }
    }
    return result;
};