function Func(n) {
    console.log(n)
    if(n == 0) return 0;
    return Func(n-1);
}
Func(10)
//---------------------------------------------------//
function numarVocale (str) {
   var voc="aeiou";

   var r = str.split('').reduce((sum, val) => {
      if (voc.indexOf (val) !==-1) { 
         sum++;
      }
      return sum;
   }, 0);
   return r;
}
console.log('numar vocale:',numarVocale('qwe'))
//----------------------------------------------------//

function returnString() {
    
}




