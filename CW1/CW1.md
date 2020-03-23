let arr=[24,'text',16,45,'e','PAX ROMANA'];
function tk(a , b){
  let newarr=[];
  for(let i=0;i<arr.length;i=i+1){
    if(typeof arr[i] == 'number'){
    newarr.push(arr[i]**b); 
    console.log(newarr);
    }
  }
  return newarr;

}
tk(arr,2);