// Найти число которое встречается в массиве нечётное количество раз
function findOdd(a) {
  let count = {}

   a.filter(item=>{
    if(count[item]===undefined){
      count[item]=1;
    }
    else {
      count[item]++
    }
  })
  
for (const key in count) {
  if (count[key]%2!==0) {
    return key;
}}
return key;
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))