class Person{
    name : string;
    age : number;
    gender : string;
    constructor(name : string ,age : number ,gender : string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    public getData() : string{
        return `${this.name} of age ${this.age}`
    }
}

class Student extends Person{
    sid : number;

    constructor(name : string ,age : number ,gender : string , sid : number ){
        super(name , age , gender);
        this.sid = sid;
    }

    public studentDetails() {
        return `${this.name} of ID : ${this.sid}`
    }
}

const s = new Student("Syed",20,"M",278);
console.log(s.studentDetails());
console.log(s.getData());
