
const anySum=prcessFn=>{
    return anyArray=>{
      let result=0
      for(let i=0;i<=anyArray.length;++i){
        result+=prcessFn(anyArray[i])
      } 
      return result
    }   
}


const odd= oddNum=>{
  return oddNum%2 === 1 ? oddNum:0;
}


const oddSum=anySum(odd);

let anyArray=[1,2,3,4,5,6,7,8,9];


const oddTotal=oddSum(anyArray);

console.log(oddTotal);
