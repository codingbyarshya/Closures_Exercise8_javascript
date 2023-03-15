function multiplyByTwo(num){
  function inner(){
  let result=num*2;
  return result;
  }
  return inner;
}
console.log(multiplyByTwo(4)());