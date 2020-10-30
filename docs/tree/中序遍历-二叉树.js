function Node(val) {
    this.value = val
    this.left = null
    this.right = null
}

var a = new Node('A')
var b = new Node('B')
var c = new Node('C')

var d = new Node('D')
var f = new Node('F')
var g = new Node('G')

var h = new Node('H')


a.left = c
a.right = b

c.left = d
c.right = f

b.left = g
b.right = h


// 中序遍历
function middle(root) {
    if (!root) return;
    middle(root.left)
    console.log(root.value)
    middle(root.right)
}

middle(a)