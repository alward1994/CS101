```
 function sh (){
  console.log('=================================');
}

let n=prompt('enter your name');
let p=prompt('enter your age');

console.log( 'your name  '+n+ '  and your age :' + p);
sh();

if(n>=18&&p=='Ярополк'){
  console.log('Hello');
}
sh();

let whitelist =['ali','anna','anton','azmat'];
if( !whitelist.includes(n)){
  console.log('you win');
}
sh();

let blacklist =[];
if(p<18){
  blacklist.push(n);
  console.log(blacklist);
}
sh();

let arr=[];
for(let i=0;i<3;i++){
  let n=prompt('enter your name');
  let p=prompt('enter your age');
  if(p%2 !=0){
    arr.push(n);
    console.log(arr);
     }
}

let s="#";
let st;
for(let i=1;i<=5;i++){
  st=s.repeat(i)
  console.log(st);
}
let st1;
for(let j=5;j>0;j--){
  st1=s.repeat(j)
  console.log(st1);
}


let hh=[12,43,11,27,18];
let s="#";
let st;
for(let i=0;i<43;i++){
  st=s.repeat(hh[i])
  console.log(st);
  }


function srd(a){
  let s=0;
  let sr=0;
  for(let i=0;i<a.length;i++){
    s=sr+a[i];
    sr=sr+a.length
  }
  console.log(s/sr);
   return s/sr
}
let pp=[];
for(let i=0;i<3;i++){
  let n=prompt('enter your name');
  let p=prompt('enter your age');
  pp.push(p);
}
  srd(pp);

let sk=[34,1,41,22,98];
function tt(a){
  let ss=[];
  for(let i=0 ;i<a.length;i++){
     if(a[i]%2 !=0){
       ss.push(a[i]**2);
       }
     }
  return ss;
}
function sum(a){
  let s=0;
  for(let i=0;i<a.length;i++){
    s= s+a[i];
  }
  return s;
}
let f = tt(sk);
console.log(f);
let sum0=sum(f);
console.log(sum0);


let ttk=[45,44,77,22,11];
function tpt(a,b){
  let s=[];
  for(let i=0 ;i<a.length;i++){
     if(a[i]%2 ==0){
       s.push(a[i]**b);
       console.log(s);
       }
     }
  return s;
}
tpt(ttk,2);


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
```