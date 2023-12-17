console.log("hello world");

//explicit type
let user : string = "Syed Javith";

//implicit type
let user2 = "user new";

console.log(typeof(user));


let str : string = "hello world";

let num : number = 100;

let arr : number[] = [ 1 , 2, 3, 4, 5, 6 ];

let obj = {
    name : "syed",
    age : 20
}

let tuple : [number,string] = [278,"Syed Javith"];

let anyValue : any = "anything number or string or null";

let noValue : null = null;

let some : undefined = undefined;

console.log(typeof(str));
console.log(typeof(num));
console.log(typeof(arr));
console.log(typeof(obj));
console.log(typeof(anyValue));
console.log(typeof(tuple));
console.log(typeof(noValue));
console.log(typeof(some));

console.log("\ntype casting");
console.log("\nbracket notation\n");

let a : unknown = "3";

// console.log(a?.length);
console.log((<string>a).length);

console.log("\nas keyword\n");

console.log( (a as string).length );