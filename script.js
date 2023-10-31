//Q1. Creating class Movie

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

// Create an instance of the Movie class
const movieInstance = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log("Movie Title:", movieInstance.title);
console.log("Studio:", movieInstance.studio);
console.log("Rating:", movieInstance.rating);

// Q2.
class Circle //class 
    {
        constructor(radius, colour) // constructor rad & colour 
        {
         this.radius = radius; 
         this.colour = colour;
        }
        get radiuscircle()
        {
         return this.radius;
        }
        set radiuscircle(radius)
        {
         this.radius = radius 
        }
        get colourcircle()
        {
            return this.colour
        }
        set colourcircle(colour)
        {
            this.colour = colour;
        }
        get toString()
        {
            return`circle[radius= ${this.radius} , colour = ${this.colour}]" ]`
        }
        get areaCircle()
        {
            return Math.PI*this.radius *this.radius; //pir2
        }
        get circumCircle()
        {
            return 2* Math.PI * this.radius;
        }
    }
    var obj = new Circle (1.0,"red");

console.log(obj.radiuscircle) // get radius circle 
obj.radiuscircle = 2.3
console.log(obj.radiuscircle) // set radius circle 

console.log(obj.colourcircle) // get colour circle 
obj.colourcircle = "blue" // set colour circle 
console.log(obj.colourcircle);

console.log(obj.toString);

console.log("Area:", obj.areaCircle);

console.log("Circumference:", obj.circumCircle);

//Q3.
class Person {
    constructor(firstname, age, gender, salary = 50) // constant value set 
     {
        this.firstname = firstname;
        this.age = age;
        this.gender = gender;
        this.salary = salary;
    }
}

const obj1 = new Person("John", "27", "male", "40000 INR");
const obj2 = new Person("Mike", "35", "male", "50000 INR");
const obj3 = new Person("Elsa", "29", "female"); 
const obj4 = new Person("Sarah", "31", "female", "45000 INR");
const obj5 = new Person("David", "42", "male", "60000 INR");

console.log("Person 1:", obj1);
console.log("Person 2:", obj2);
console.log("Person 3:", obj3);
console.log("Person 4:", obj4);
console.log("Person 5:", obj5);

console.log("First Names:");
console.log(obj1.firstname, obj2.firstname, obj3.firstname, obj4.firstname, obj5.firstname);

//Q4.class UberPriceCalculator 
    class UberPriceCal
     {
        constructor(baseFare, costPerMile, costPerMinute) 
        {
            this.baseFare = baseFare;
            this.costPerMile = costPerMile;
            this.costPerMinute = costPerMinute;
        }

        calculatePrice(distance, duration) {
            const fare = this.baseFare + (distance * this.costPerMile) + (duration * this.costPerMinute);
            return fare;
        }
    }
    const calculator = new UberPriceCal(2.5, 1.5, 0.25);
    const distance = 20; // 20 miles
    const duration = 25; // 25 minutes
    const totalPrice = calculator.calculatePrice(distance, duration);
    console.log("Total Uber Price:", totalPrice);

