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

function returnLongestWord(arr) {
   return arr.reduce((longest,currentWord)=>currentWord.length > longest.length ? currentWord : longest)
}

console.log(returnLongestWord(['1','123','12','122345566677']))

//----------------------------------------------------//

//var el = document.getElementsByClassName('element')[0];
//var el = document.getElementById('element');
//var el = document.querySelector('.element');
var el = document.querySelectorAll('.element')[0];
el.addEventListener('click',()=>{
   el.style.backgroundColor='green';
})








