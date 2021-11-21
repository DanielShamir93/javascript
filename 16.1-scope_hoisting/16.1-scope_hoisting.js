// Block 1

// undefined   -->   a is global(var) but defined later in the code
// 2           -->   result of calling foo

// function funcA() {
//   console.log(a);
//   console.log(foo());
//   var a = 1;
//   function foo() {
//     return 2;
//   }
// }

// funcA()

// Block 2

// Aurelio De Rosa   -->   result of: obj.prop.getFullName()
// undefined         -->   this is undefined out of the object

// var fullName = "John Doe";
// var obj = {
//   fullName: "Colin Ihrig",
//   prop: {
//     fullName: "Aurelio De Rosa",
//     getFullName: function () {
//       return this.fullName;
//     },
//   },
// };

// console.log(obj.prop.getFullName());
// let test = prop.getFullName();
// console.log(test());

// Block 3

// undefined   -->   a isn't exists
// number      -->   b global

// function funcB() {
//   let a = (b = 0);
//   c = 3;
//   console.log();
//   a++;
//   return a;
// }
// funcB();
// console.log(typeof a);
// console.log(typeof b);

// Block 4

// 2          -->     funcC finally defined at the second declaration and override the first declaration
// 2

// function funcC() {
//   console.log("1");
// }
// funcC();
// function funcC() {
//   console.log("2");
// }
// funcC();

// Block 5

// 1         -->     d is global
// error     -->    e is not defined in funcD1

// function funcD1() {
//   d = 1;
// }
// funcD1();
// console.log(d);
// function funcD2() {
//   var e = 1;
// }
// funcD2();
// console.log(e);
// function funcE() {
//   console.log("Value of f in local scope: ", f);
// }
// console.log("Value of f in global scope: ", f);
// var f = 1;
// funcE();

// Block 6


// function funcE() {
//     console.log("Value of f in local scope: ", f);
// }
// var f = 1;
// console.log("Value of f in global scope: ", f);
// funcE();
