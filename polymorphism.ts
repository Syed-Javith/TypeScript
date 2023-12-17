class A{
    someFunc() : void {
        console.log("from A");
    }
}

class B extends A {
    someFunc() : void{
        console.log("from B");
        
    }
}

const b = new B();
b.someFunc();