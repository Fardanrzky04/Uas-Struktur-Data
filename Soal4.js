// Soal 4: Linked List (Reverse Linked List)
//Diberikan head dari sebuah singly linked list, balikkan (reverse) linked list tersebut dan kembalikan
//head dari linked list yang sudah dibalik.

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function reverseList(head) {
    let prev = null;
    let current = head;
  
    while (current !== null) {
      let next = current.next; // Simpan referensi ke node berikutnya
      current.next = prev;     // Balikkan arah node
      prev = current;          // Pindahkan prev ke node saat ini
      current = next;          // Pindahkan current ke node berikutnya
    }
  
    return prev; // prev sekarang menjadi head baru
  }
  
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);
  
  // Membalikkan linked list
  const reversedHead = reverseList(head);
  
  let current = reversedHead;
  while (current !== null) {
    console.log(current.val); // Output: 5, 4, 3, 2, 1
    current = current.next;
  }
