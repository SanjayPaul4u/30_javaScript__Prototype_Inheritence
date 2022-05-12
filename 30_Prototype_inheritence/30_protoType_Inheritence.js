console.log("This tutorial is for protoType inheritece");

const proto = {
    slogan: function(){//📌📌📌
        return `This compani is best`;
    },
    changeName: function(newName){
        return this.name = newName;
    }
}
//This create sanjay object📌
const sanjay = Object.create(proto);
    sanjay.name = "Sanjay";
    sanjay.role = "Hacker";
    sanjay.changeName("ricky");
// console.log(sanjay2);



//This also create sanjay2 object but it's syntex is difficult because it is old way to write.📌
const sanjay2 = Object.create(proto, {
    name: {value : "Rahul", writable : true},
    role: {value : "doctor"}
}) 
sanjay2.changeName("Roni");
// console.log(sanjay2);




//------------------------------------------------------------------------------------------
//NEW CONSTRACTORS📌📌📌
function  employee(gName, gSalary, gExperience){
    this.name = gName,
    this.gSalary = gSalary,
    this.experience = gExperience

}
employee.prototype.slogan = function(){
    return `This compani is best, regard ${this.name}`
}

let  san = new employee("Sanjay", 1, 0);
// console.log(san);
// console.log(san.slogan());

//inherit programmer constractor
function programmer(gName, gSalary, gExperience, givenLanguage){
    employee.call(this, gName, gSalary, gExperience );
    this.language = givenLanguage;
}

//inherit the proto type
programmer.prototype = Object.create(employee.prototype);//This is for use proto type solgan()

//manually set the constructor
programmer.prototype.constructor = programmer;//for find the constructors in food constructors

let rohan = new programmer ("Rohan das", 20, 100, "c++");
// console.log(rohan);













//------------------------------------------------------------------------------------------
//QUICK QUIZE------Flour to cake inherit----------------------------------------------------

function Flour(gIngrientName){
    this.ingrientName = gIngrientName;
}

Flour.prototype.slogan = function(){
    return`${this.ingrientName} is the good for making cake`;
}

let ingrient1 = new Flour("flour");
console.log(ingrient1);

//inheriting in other constractor
function Cake(gIngrientName, gIngrientName2){
    Flour.call(this, gIngrientName);
    this.otherIngrientName = gIngrientName2;
}

Cake.prototype = Object.create(Flour.prototype);
Cake.prototype.constructor = Cake;

let ingrient2 = new Cake("flour", "Sugur");
console.log(ingrient2);
