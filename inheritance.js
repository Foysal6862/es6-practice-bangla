class Parent{
    constructor(){
        this.fatherName = "kamrul";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName() {
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child('Khalid');
const baby2 = new Child('Olid');
console.log(baby);
console.log(baby2);
console.log(baby.getFullName());
console.log(baby2.getFullName());