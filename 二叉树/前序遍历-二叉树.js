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


// 前序遍历
function front(root) {
    if (!root) return;
    console.log(root.value)
    front(root.left)
    front(root.right)
}

front(a)