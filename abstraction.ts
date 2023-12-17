abstract class Shape {
    abstract calculateArea(): number;

    displayArea(): void {
        console.log(`Area: ${this.calculateArea()}`);
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}


const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

circle.displayArea();    
rectangle.displayArea(); 