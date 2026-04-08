                        
                        // Uyga vazifa
// 1-masala 

//  function power(a, n){
//   return Math.pow(a, n);
//  }                       
// console.log(power(3, 5));
 
//  2-masala
// function mean(a, b){
//     let orta = (a + b) / 2;
//     let son = Math.sqrt(a * b);
//     return[orta, son]
   
// }
// console.log(mean(12, 48));

//  3-masala
// function sign(n){
//     if (n < 0) {
//         return("-1 chiqsin");
//     } else if (n > 0) {
//          return("1 chiqsin");
//     } else{
//          return("hech qanday son chiqmasin ");
//     }
    
// }
// console.log(sign(10));

// 4-masala
// function numbers(A, B, C){
//    let D = Math.pow(B, 2) - 4 * A * C;
//    if (D > 0) {
//       return("2 hosil bo'lsin");
//    } else if (D === 0){
//       return("1 hosil bo'lsin");
//    } else{
//       return("0 hosil bo'lsin");
//    }
// }
// console.log(numbers(1, -6, 9));

// 5-masala

// function areaCircle(R){
//     let S = 3.14 * Math.pow(R, 2);
//    return S ;
// }
// console.log(areaCircle(5));

// 6-masala
// function sumRange(A, B) {
//     if ( A > B ){
//     return 0;
//     } 
//     let result = 0 ;
//     for (let i= A;  i <= B; i ++) {
//          result += i;
//     }
//     return result;
// }
// console.log(sumRange(8, 10));

// 7-masal

// function calc(A, B, S){
//   if ( S === "-") {
//      return A - B;
//   } else if ( S === "*") {
//      return A * B;
//   }
//   else if ( S === "/") {
//      return B !== 0 ?  A / B : 0;
//   }
//   else if ( S === "+") {
//      return A + B ;
//   }else{
//     return 0 ;
//   }
// }
// console.log(calc(10, 15, "*"));
// console.log(calc(7, 8, "+"));

// 8-masala
// let K = +prompt("son yozing")
// function isEvent(K){
//     if (K % 2 === 0) {
//          return true;
//     } else {
//           return False;
//     }
    
    
// }
// console.log(isEvent(K));

// 9-masala
//   function sort(A, B, C){
//     let kichik = Math.min(A, B, C);
    
//     let katta = Math.max(A, B, C);
//     let result = (A + B + C) - (katta + kichik);
//      return kichik + " ," + result + " ," + katta;
    
// }
// console.log(sort(10, 5, 8) );

// 10-masala

function isPower(K, N){
    if (K <= 0 || N <= 1)
        return false;
    if (K === 1)
     return true;
    let number = N;
    while(number < K){
        number *= N;
    }
    return number === K;
}
console.log(isPower());
