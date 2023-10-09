function sum(n1, n2, n3, n4) {
  return (n1 + n2 + n3 + n4);
}

console.log(sum(1, 2, 3, 4));
// -------------------------------------------

function conc(str1, str2) {
  return (str1 + str2);
}

console.log(conc("Mohammed ", "Heggy"));
// ------------------------------------------------

function search(name) {
  return (name);
}
console.log(search("ahmed".includes("h") ? 0 : -1));
console.log(search("ahmed".includes("y") ? 0 : -1));
// -------------------------------------------------

function conc(strn1, strn2, strn3, strn4) {
  return (strn1.concat(strn2).concat(strn3).concat(strn4));
}
console.log(conc("Allah ", "Save ", "The Great ", "palestine"));
// --------------------------------------------------

var str = "welcome mr ahmed";

console.log(str.length);
console.log(str.indexOf("ahmed"));
console.log(str.slice(11, 16));
console.log(str.substr(11, 6));
console.log(str.slice(11, 12));
console.log(str.replace("ahmed", "Mohammed"));
console.log(str.toUpperCase());
console.log(str.includes("yasser"));
console.log(str.trim());
// ---------------------------------------------
var num = "10.879879";

console.log(Number(num));
console.log(Number.isInteger(parseInt(num)));
console.log(parseFloat(num));
console.log(Number(num).toFixed())
console.log(Number(num).toFixed(1))
