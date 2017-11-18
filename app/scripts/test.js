function sumStrings1(a,b) {
  let splitNumberArr = (number) => {
    let arr = [];
    // number = number.toString();
    number = number.split('').reverse();
    while(number.length>0) {
     // arr.unshift(number.splice(0, 3).reverse().join(''))
     arr.push(Number(number.splice(0, 3).reverse().join('')))
   }
   console.log("스플릿",number, arr)
   return arr;
 }
 let answerArr = [], remains = 0;
 a = splitNumberArr(a);
 b = splitNumberArr(b);
 let biggerLength = Math.max(a.length, b.length)
 for (var i = 0; i < biggerLength; i++) {
  let sum = (a[i] | 0) + (b[i] | 0);
  sum = splitNumberArr(sum.toString());
  console.log("sum",a, b, sum)
  let number = (sum[0] + remains).toString();

  while(number.length <3) {
    number = "0" + number;
  }
  answerArr.push(number);
  remains = sum[1] | 0;
}


console.log(a, b, answerArr)
return Number(answerArr.reverse().join(''))
  // return (Number(a) + Number(b)).toString();
}


function sumStrings(a,b) {
  a = a.split('').reverse();
  b = b.split('').reverse();
// let bArr = a.length > b.length? a: b;
// let sArr = a.length < b.length? b: a;
let biggerLength = Math.max(a.length, b.length)
let answerArr = [], remain = 0;

  for (var i = 0; i <= biggerLength; i++) {
    var sum = (a[i] | 0) + (b[i] | 0) + remain;
    console.log(sum)
    if(sum>=10) {
      sum = sum - 10;
      remain = 1;
      console.log("즉", sum, remain)
    } else {
      remain = 0;
    }
    answerArr.push(sum);
    // remain = sum>10? sum-10 : 0;
  }
  var answer = answerArr.reverse().join('');
  return answer.startsWith('0')? answer.splice(0, 1);
console.log(answerArr.reverse().join(''))
}






// console.log(sumStrings("123456789123", "923456789122")) //1046913578245
console.log(sumStrings("50095301248058391139327916261", "81055900096023504197206408605")) //1046913578245
// console.log(sumStrings("123456", "9890982")) // 10,014,438
// console.log(sumStrings("10", "20")) // 10,014,438
