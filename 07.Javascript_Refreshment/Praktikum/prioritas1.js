// Soal Prioritas 1

// 1. Variable dan Tipe Data
function swapValues(a, b) {
    console.log(`Sebelum ditukar: a = ${a}, b = ${b}`);
    
    let temp = a;
    a = b;
    b = temp;

    console.log(`Setelah ditukar: a = ${a}, b = ${b}`);
    
    return [a, b];
}

swapValues(5, 10);

// 2. Destructuring
const reverseFirstTwo = ([a, b]) => {
    return [b, a]
};

console.log(reverseFirstTwo([1, 2, 3, 4])); //output: [2, 1]

// 3. Control Flow
function findLargest(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined untuk array kosong
    }
    
    let largest = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    
    return largest;
}

console.log(findLargest([10, 5, 9, 13, 1])); //output: 13

// 4. Method
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        if (b === 0) {
            return "Error"; // Error jika dibagi dengan 0
        }
        return a / b;
    }
};

console.log(calculator.add(3, 2)); // output: 5
console.log(calculator.subtract(10, 4)); // output: 6
console.log(calculator.multiply(2, 6)); // output: 12
console.log(calculator.divide(15, 3));  // output: 5
console.log(calculator.divide(10, 0)); // output: Error

// 5. Function

// Function declaration
function greetUser(name) {
    return `Hello guys, my name is ${name}`;
}

// Arrow function
const greetUserArrow = (name) => {
    return `Hello, my name is ${name}`;
};

console.log(greetUser("Arjun Nafi' Mahardika"));
console.log(greetUserArrow("Arjun Nafi' Mahardika"));