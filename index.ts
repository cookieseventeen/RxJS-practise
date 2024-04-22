
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

const even= anyNum=>anyNum%2===0?anyNum:0;//等價寫法


const oddSum=anySum(odd);

const evenSum=anySum(even);
const evenSumTwo=anySum(anyNum=>anyNum%2===0?anyNum:0);//等價寫法


let anyArray=[1,2,3,4,5,6,7,8,9];


const oddTotal=oddSum(anyArray);
const evenTotal=evenSum(anyArray);
const evenTotalTwo=evenSumTwo(anyArray);

console.log(oddTotal);
console.log(evenTotal);
console.log(evenTotalTwo);