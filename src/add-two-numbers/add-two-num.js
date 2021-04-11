class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const arrToLink = (arr) => {
  let link;
  for (let i = arr.length - 1; i >= 0; i--) {
    let val = arr[i];
    let node = new ListNode(val, link);
    link = node;
  }
  return link;
};

const linkToArr = (list) => {
  const arr = [];
  let node = list;
  while (node.next) {
    arr.push(node.val);
    node = node.next;
  }
  arr.push(node.val);
  return arr;
};

const arr1 = [2, 4, 3, 1, 2];
const arr2 = [5, 6, 4, 1, 0, 2];

var addTwoNumbers = function (l1, l2) {
  let arr = [];
  let node1 = l1;
  let node2 = l2;
  let carried = 0;
  while (node1 || node2) {
    let a = node1 === null ? 0 : node1.val;
    let b = node2 === null ? 0 : node2.val;
    let sum = a + b + carried;
    if (sum >= 10) {
      sum = sum % 10;
      carried = 1;
    } else {
      carried = 0;
    }
    arr.push(sum);
    if (node1) node1 = node1.next;
    if (node2) node2 = node2.next;
  }
  if (carried > 0) arr.push(carried);
  return arrToLink(arr);
};

const link1 = arrToLink(arr1);
const link2 = arrToLink(arr2);
addTwoNumbers(link1, link2);
