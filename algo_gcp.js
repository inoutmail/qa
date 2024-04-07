var gcdOfStrings = (str1, str2) => {
    if (str1 + str2 !== str2 + str1) return '';
  
    const gcd = (a, b) => (0 === b ? a : gcd(b, a % b));
    // function gcd(a, b) {
    //   console.log(a,b);
    //   let result;
    //   if (0 === b) {
    //       result = a;
    //   } else {
    //       result = gcd(b, a%b);
    //   }
    //   return result;
    // }
    return str1.substring(0, gcd(str1.length, str2.length));
  };


console.log(gcdOfStrings('ABABAB','ABAB'));