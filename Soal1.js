// Soal 1
//Binary Tree (Inorder Traversal)
//Diberikan sebuah binary tree, tuliskan fungsi untuk melakukan inorder traversal (kiri, akar, kanan)
//dan kembalikan hasil traversal dalam bentuk list.

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = this.right = null;
    }
  }
  
  function inorderTraversal(root) {
    let result = [];
    function traverse(node) {
      if (node !== null) {
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
      }
    }
    traverse(root);
    return result;
  }
  
  // Membangun binary tree:
  const root = new TreeNode(1);
  root.right = new TreeNode(2);
  root.right.left = new TreeNode(3);
  
  console.log(inorderTraversal(root)); // Output: [1, 3, 2]
  
