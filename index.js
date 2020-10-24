function createRange(start, end) {
    const range = Array.from({length: end - start + 1},
        function (item, index) {
            return index + start;
    });
    return range;
}

const myRange = createRange(3 , 13);

// Instance Methods
const toppings = ['lettuce', 'tomato', 'cucumber', 'avocado', 'chesse'];

// let newToppings = toppings.slice(1, toppings.length);
// console.log(newToppings)

// make a copy of toppings with slice()
const toppingsCopy = toppings.slice(0);
toppings[0] = 'Gabo Romero';
console.log(toppings);
console.log(toppingsCopy);

// make a copy of the toppings array with a spread
const toppingsCopy2 = [...toppings];

// take out items 3 to 5 of your new toppings array with splice()
toppingsCopy2.splice(3,5);
console.log(toppingsCopy2);

//find the index of avocado with indexof() / lastIndexof()
const avoIndex = toppings.indexOf('avocado');
console.log(avoIndex);

//check if hot sauce is in the toppings with includes()
const isSauceInclude = toppings.includes('hot sauce');
console.log(isSauceInclude);

const isAvocadoInclude = toppings.includes('avocado');
console.log(isAvocadoInclude);

// add it if is not 
if(!isSauceInclude) {
    toppings.push('hot sauce');
}

console.log(toppings);
 
//flip those toppings around with reverse(). Immmutable method
const toppingsReversed = [...toppings].reverse();
console.log(toppings);
console.log(toppingsReversed);

// add the sum of two intergers
function addTwoNumbers(textBox1, textBox2) {
    let x=document.getElementById('firstNumber').value;
    let y=document.getElementById('secondNumber').value;
    let sum = 0;
    sum = Number(x) + Number(y);
    alert(`Sum is ${sum}`)
}

// change the theme color
function setTheme(theme) {
    let root = document.documentElement;
    if (theme === 'light') {
        root.style.setProperty('--bg-color', '#ECF2FF');
        root.style.setProperty('--text-color', '#2B283A');
        root.style.setProperty('--title-color', '#4A4E74');        
    } else if (theme === 'dark') {
        root.style.setProperty('--bg-color', '#2B283A');
        root.style.setProperty('--text-color', '#ECF2FF');
        root.style.setProperty('--title-color', '#D5D4D8');
    }
}

// 1. Try to change the theme to 'dark'
// 2. Run the code to see that it works
setTheme('light');

 