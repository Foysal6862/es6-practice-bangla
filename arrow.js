// one parameter for arrow function

const doubleIt = num => num*2;
const result = doubleIt(50);
console.log(result);

// multiple parameters for arrow function

const addNumber = (x,y) => x+y;
const result2 = addNumber(50, 30);
console.log(result2);

// no parameters for arrow function

const give5 = () => 105;
console.log(give5());

// long or big function, for arrow function

const doMath = (x, y) =>{
    const sum = x + y;
    const diff = x - y;
    const result = sum*diff;
    return result;
}
const result3 = doMath(100, 50);
console.log(result3);