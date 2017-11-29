// 这里只讨论有序二叉树，如果无序，二叉树无法手动建立，并且只能通过轮询检索
class tree{
  constructor(){
    //初始化二叉树
    this.tree = {};
  }
  // 对二叉树插入节点
  insert(data){
    let root = this.tree;
    if(root.hasOwnProperty('value') == false || root.value == null){
      this.root = data;
      return root.value = data;
    }
    var current = root;
    while (current){
      if(data < current.value){
        if(current.left){
        current = current.left
      }else{
        current.left = {value:data};
        break;
       }
     }
     if(data > current.value){
       if(current.right){
        current = current.right;
       }else{
         current.right = {value:data};
         break;
       }
     }
     if(data === current.value){
       console.log('Each node of the binary tree must be diffent.');
       break;
     }
   }
  }
  // 寻找最小值的节点
  min(){
    let tree = this.tree;
    let node = tree;
    let parent;
    while(node.value){
      parent = node;
      node = node.left;
      if(!node){
        return parent.value;
      }
    }
  }
  // 寻找最大值节点
  max(){
    let tree = this.tree;
    let node = tree;
    let parent;
    while(node.value){
      parent = node;
      node = node.right;
      if(!node){
        return parent.value;
      }
    }
  }
  // 查找指定值的节点
  find(data){
    let tree = this.tree;
    let node = tree;
    while(node.value){
      if(data < node.value && node.left){
          node = node.left;
      }else if(data > node.value && node.right){
          node = node.right;
      }else if(data === node.value){
        return node;
      }else{
        console.log('Data no found');
        break;
      }
    }
  }
  // 先序递归遍历
  preTraverse(){
    let tree = this.tree;
    let root = this.root;
    let nodeArray = [];
    let traverse = function(tree){
      if(tree && tree.value !== null){
        nodeArray.push(tree.value);
        traverse(tree.left);
        traverse(tree.right);
      }
      return nodeArray;
    };
    return traverse(tree);
  }
  // 中序递归遍历（正序排列）
  orderTraverse(){
    let tree = this.tree;
    let root = this.root;
    let nodeArray = [];
    let traverse = function(tree){
      if(tree && tree.value !== null){
        traverse(tree.left);
        nodeArray.push(tree.value);
        traverse(tree.right);
        if(tree.value === root){
          return nodeArray;
        }
      }
    };
    return traverse(tree);
  }
  // 后序递归遍历（倒序排列）
  afterTraverse(){
    let tree = this.tree;
    let root = this.root;
    let nodeArray = [];
    let traverse = function(tree){
      if(tree && tree.value !== null){
        traverse(tree.left);
        traverse(tree.right);
        nodeArray.push(tree.value);
        if(tree.value === root){
          return nodeArray;
        }
      }
    };
    return traverse(tree);
  }
  // 使用栈进行非递归深度遍历，（非递归广度使用队列），使用该方法时很消耗内存
  // 先序
  noRecPreTra(){
    let root = this.root;
    let tree = this.tree;
    let nodeArray = [];
    let stact = [];
    stact.push(tree);
    while(stact.length){
      let node = stact.pop();
      nodeArray.push(node.value);
      node.right && stact.push(node.right);
      node.left && stact.push(node.left);
    }
    return nodeArray;
  }
  // 中序
  noRecOrdTra(){
    let root = this.root;
    let tree = this.tree;
    let nodeArray = [];
    let stact = [];
    var node = tree;
    if(tree.hasOwnProperty('value')===false){
      return 'tree is null';
    }
    while (node || stact.length){
      while(node){
        stact.push(node);
        node = node.left;
      }
      if(stact.length){
        node = stact.pop();
        nodeArray.push(node.value);
        node = node.right;
      }
    }
    return nodeArray;
  }
  // 后续非递归遍历
  nodeRecAferTra(){
    let tree = this.tree;
    let nodeArray = [];
    let stact = [];
    let node = tree;
    if(tree.hasOwnProperty('value')===false){
      return 'tree is null';
    }
    stact.push(node);
    let tmp = null;
    while(stact.length){
      tmp = stact[stact.length - 1];
      if(tmp.left && node.value !== tmp.left.value && ((tmp.right && node.value !== tmp.right.value) || !tmp.right)){
        stact.push(tmp.left);
      }else if(tmp.right && node.value !== tmp.right.value){
        stact.push(tmp.right);
      }else{
        nodeArray.push(stact.pop().value);
        node = tmp;
      }
    }
    return nodeArray;
  }
  // 双栈后序方法
  twoStactAfterTra(){
    const tree = this.tree;
    let node = null;
    let nodeArray = [];
    let stact1 = [];
    let stact2 = [];
    stact1.push(tree);
    while(stact1.length){
      node = stact1.pop();
      stact2.push(node);
      if(node.left){
        stact1.push(node.left);
      }
      if(node.right){
        stact1.push(node.right);
      }
    }
    while(stact2.length){
      nodeArray.push(stact2.pop().value);
    }
    return nodeArray;
  }
}

var myTree = new tree();
myTree.insert(10);
myTree.insert(5);
myTree.insert(7);
myTree.insert(6);
myTree.insert(11);
myTree.insert(15);
myTree.insert(4);
myTree.insert(3);
myTree.insert(13);
myTree.insert(14);

var nodeArr = myTree.nodeRecAferTra();
console.log(nodeArr);
// 数据格式
// var myTree = {
//   value:10,
//   left:{
//     value:5,
//     left:{
//       value:4,
//       left:{
//         value:3,
//       }
//     },
//     right:{
//       value:7,
//       left:{
//         value:6
//       },
//       right:{
//         value:9
//       }
//     }
//   },
//   right:{
//     value:11,
//     right:{
//       value:15,
//       left:{
//         value:13,
//         right:{
//           value:14
//         }
//       }
//     }
//   }
// };




