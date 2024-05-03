let a = {name : "Person 1", age : 5}
let b = {age : 5, name : "Person 1"}
var m = JSON.stringify(a,Object.keys(a).sort());
var n = JSON.stringify(b,Object.keys(b).sort());
if(m === n)
  console.log("TRUE");
else
  console.log("FALSE");
