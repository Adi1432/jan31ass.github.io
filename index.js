let arr =  [2,7,11,15,14,5,9,6]
document.write("arr:", arr);
document.write("<br>");
const target = 19;
document.write("target:", target);
document.write("<br>");

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] + arr[j] === target && i < j) {
      document.write("output :" + " ", i, ",", j);
      break;
    }
  }
}
