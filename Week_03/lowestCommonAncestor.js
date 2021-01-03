/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root === null) {
        return false;
    }
    let res;
    // Q0. 二叉树的遍历 后序遍历
    dfs=(root, p, q) => {
        if(root === null) {
            return false;
        }
        let l_son = dfs(root.left, p, q);
        let r_son = dfs(root.right, p, q);
        // Q1. 何时能得到结果： 左、右字数分别包含p、q节点
        if((l_son && r_son) || ((root.val === p.val || root.val === q.val) && (l_son || r_son))) {
            res = root;
        }
        // Q2. 返回的是当前子树中是否存在p/q节点的布尔值
        return l_son || r_son || (root.val=== p.val || root.val === q.val);
    }
    dfs(root, p, q);
    return res;
};