console.log("Hello World!");
console.info("Hello info");
console.warn("Hello warn");
console.error("Hello error");

//-------------------------------------

var myName = "Almar";   // var is global, even if it s inside brackets
let secondName = "Eran";
const pi = 3.14;

//--------------------------------------

// primitives
let undef
console.log(typeof undef)

let bool = true
console.log(typeof bool)

let num = 123
console.log(typeof num)

let str = "hi"
console.log(typeof str)

// refs (objects)
let nothing = null
console.log(typeof nothing)

let person = {
    firstName: "Almar",
    secondName: "Feta",
    age: 21
}
console.log(person)
console.log(typeof person)
console.log(person.firstName)

let arr = ["One", "Two", "Three", 4, true, person, null, undefined]
console.log(arr)
console.log(typeof arr)
console.log(arr[1])
console.log(arr.length)

//---------------------------------------

console.log(12 == "12")
console.log(12 === "12") // === evaluates type first
console.log(12 != "12")
console.log(12 !== "12")

//---------------------------------------

function displayName(name) {
    console.log(name);
}

displayName("Almar Feta");

function function1(function2) {
    function2();
}

function1(function () {
    console.log("Anonymous functions inside a function");
});

((name) => {
    console.log(name);
}) ();

function1(() => console.log("Lambda function passed as argument"));

//-----------------------------------------

class Person {
    #firstName; // # in front makes it private
    #lastName;
    #dob;

    constructor(firstName, lastName, dob) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#dob = dob;
    }

    calculateAge() {
        return new Date().getFullYear() - this.#dob.getFullYear();
    }
}

let person1 = new Person("Almar",
    "Feta",
    new Date("2001-07-05")
);
console.log(person1.calculateAge() + " de ani")

//-----------------------------------------------------

let h1 = document.querySelector("#firstH1");
console.log(h1.outerText);
console.log(h1.outerHTML);

let h1s = document.querySelectorAll(".an-h1");
console.log(h1s);

let query1 = document.getElementById("firstH1");
console.log(query1.innerText);

let query2 = document.getElementsByClassName("an-h1");


h1.append(" Salut")
h1.innerHTML += " <p id='text'>Paragraf in H1</p>";
console.log(h1.innerHTML);


h1.removeChild(document.getElementById("text"))
console.log(h1.innerHTML)


h1.style.color = "red";

//------------------------------------------

let button = document.getElementById("btn");
button.addEventListener("click", function(e) {
   alert("You have pressed the button")
});


