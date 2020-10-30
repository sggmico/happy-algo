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


// 后序遍历
function end(root) {
    if (!root) return;
    end(root.left)
    end(root.right)
    console.log(root.value)
}

end(a)