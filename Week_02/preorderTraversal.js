/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let res = [];
    perorder(root, res); // 递归
    return res;
};

var perorder = function(root, res) {
    if (root == null) {return;}
    res.push(root.val);
    perorder(root.left, res);
    perorder(root.right, res);
}