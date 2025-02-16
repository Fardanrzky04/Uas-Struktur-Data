// Soal 2: Stack (Valid Parentheses)
//Diberikan sebuah string yang hanya berisi karakter (, ), {, }, [, dan ], tentukan apakah string tersebut
//valid. String dianggap valid jika:
//1. Setiap buka kurung harus ditutup dengan kurung yang sesuai.
//2. Kurung harus ditutup dalam urutan yang benar..

 function isValid(s) {
    let stack = [];
    let mapping = {
      ')': '(',
      '}': '{',
      ']': '['
    };
  
    for (let char of s) {
      if (char in mapping) {
        let topElement = stack.length === 0 ? '#' : stack.pop();
        if (topElement !== mapping[char]) {
          return false;
        }
      } else {
        stack.push(char);
      }
    }
  
    return stack.length === 0;
  }
  
  console.log(isValid("()[]{}")); // Output true
  console.log(isValid("(]")); // Output false
  console.log(isValid("([{}])")); // Output true
  console.log(isValid("({[}]")); // Output false
  
