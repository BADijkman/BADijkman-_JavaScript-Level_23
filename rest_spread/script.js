sum = (a, b) => a + b;
console.log(sum(3, 1));


sum2 = (...num) =>{
  return num.reduce ((tot,num)=>{
  return tot + num
  })
}

console.log(sum2( 1,2,3,4,5,6));



sum3 = (num1, num2, num3) =>{
  return num1+num2+num3
}

let array = [1,2,3]
console.log (sum3(...array))
console.log (sum3(...[4,6,7]));
