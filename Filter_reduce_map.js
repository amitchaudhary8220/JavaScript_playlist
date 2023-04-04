var a = [1, 2, 3, 4, 5];
//so filter method basically filter the array on given condition 
var b = a.filter(a => a % 2 == 0)

//where as , if we want to create new array without modifying the original array and want the element of new array to be in somecalculation of original array ,we can use map

// in this case map will return boolean valause if  we try to filter the original arrray with map
var c = a.map(a => a % 2 == 0);
console.log("c", c);

var d = a.map(a => a * a);

//reduce -- reduces the whole array into a single by doing desired computation

// it takes call back as argument and call back expect two arguments , ie - a[0] and a[1] then (a[0],a[1]) and a[2] and so on

var e = a.reduce((c, d) => c + d);
console.log("output of reduce",e);
console.log(d);
console.log(c);
console.log(b);

//we can also do chaining

var l = a.filter(a => a % 2 != 0).map(a => a * 2).reduce((c, d) => c + d);
console.log(l);