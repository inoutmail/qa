// Add any extra import statements you may need here


class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

/*
  // Add any helper functions you may need here
  function sort(stack, targetNode, nextSeqNode) {
    let runningNode = null;
    while (stack.length > 0) {
        runningNode = stack.pop();
        if (!targetNode) {
          targetNode = runningNode;
          runningNode = stack.pop();
        }
        targetNode.next = runningNode;
        targetNode = runningNode;
    }
    runningNode.next = nextSeqNode;
  }

  function isOdd(num) {
    return (num % 2 === 1) ? true : false;
  }
  
  function reverse(head) {
    let currNode = head;
    let open = false;
    let refStack = [];
    let oddOpenRef = null;
    while (currNode) {
        if (isOdd(currNode.data)) {
          if (refStack.length > 0) {
            if (!oddOpenRef) {
              oddOpenRef = refStack.pop();
              head = oddOpenRef;
            }
            sort(refStack,oddOpenRef, currNode);
          }
          refStack = [];
          oddOpenRef = currNode;
        } else {
          refStack.push(currNode);
        }
        currNode = currNode.next;
    }
    if (refStack.length > 0) {
      sort(refStack,oddOpenRef, currNode);
    }
    return head;
  }
  
  
*/


function reverse(head) {
    if (!head || !head.next) return head;

    let prev = null;
    let current = head;

    while (current) {
        if (current.data % 2 === 0) {
            const evenSubListStart = current;
            while (current && current.data % 2 === 0)
                current = current.next;

            const reversedSubList = reverseSubList(evenSubListStart, current);
            if (!prev) {
                head = reversedSubList;
            } else {
                prev.next = reversedSubList;
            }
        } else {
            prev = current;
            current = current.next;
        }
    }

    return head;
}

function reverseSubList(start, end) {
    // let prev = null;
    // let current = start;

    // while (current !== end) {
    //     const nextNode = current.next;
    //     current.next = prev;
    //     prev = current;
    //     current = nextNode;
    // }

    // start.next = end; // Reconnect the reversed sublist
    // return prev;
    let prev = null;
    let current = start;
    while (current != end) {
      let next = current.next;
      current.next = next.next;
      next.next = current;
      prev = next;
      current = current.next;
    }
    
    return prev;
    
}





// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
var test_case_number = 1;

function printLinkedList(head) {
  var out = '[';
  while (head != null) {
    out += head.data;
    head = head.next;
    if (head != null) {
      out += ' ';
    }
  }
  out += ']';
  return out;
}

function check(expectedHead, outputHead) {
  var result = true;
  var tempExpectedHead = expectedHead;
  var tempOutputHead = outputHead;
  while (expectedHead != null && outputHead != null) {
    result &= (expectedHead.data == outputHead.data);
    expectedHead = expectedHead.next;
    outputHead = outputHead.next;
  }
  if (!(expectedHead == null && outputHead == null)) result = false;

  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  } else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printLinkedList(tempExpectedHead);
    out += ' Your output: ';
    out += printLinkedList(tempOutputHead);
    console.log(out);
  }
  test_case_number++;
}

function createLinkedList(arr) {
  var head = null;
  var tempHead = head;
  for (var v of arr) {
    if (head == null) {
      head = new Node(v);
      tempHead = head;
    } else {
      head.next = new Node(v);
      head = head.next;
    }
  }
  return tempHead;
}

var head_1 = createLinkedList([1, 2, 8, 9, 12, 16]);
var expected_1 = createLinkedList([1, 8, 2, 9, 16, 12]);
var output_1 = reverse(head_1);
check(expected_1, output_1);

var head_2 = createLinkedList([2, 18, 24, 3, 5, 7, 9, 6, 12]);
var expected_2 = createLinkedList([24, 18, 2, 3, 5, 7, 9, 12, 6]);
var output_2 = reverse(head_2);
check(expected_2, output_2);

// Add your own test cases here
