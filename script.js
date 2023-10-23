let count=0
let str="Previous entries:"
function increment(){
  count+=1;
  document.querySelector(".displaycount").innerText=count;
}
function save(){
  str+=count+"-"
  document.querySelector(".String").innerText=str;
  count=0;
}