interface Carnivore{
    order : string ;
    eatMeat() : void;
}

interface Animal{
    moveAndMakeSound() : void ;
}

class Cat implements Carnivore , Animal{
    species : string;
    order: string = "Carnivora";
    constructor( species : string){
        this.species = species;
    }

    eatMeat(): void {
        console.log(`${this.species} eats meat`);
    }

    moveAndMakeSound(): void {
        console.log(`the cat species of carnivore ${this.species} make sound`);
    }
}

const cat = new Cat("felis");
cat.eatMeat();
cat.moveAndMakeSound();