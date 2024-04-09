function addTwoNumbers(num1, num2){
    let sum = num1 + num2;
    return sum;
}

function getLastName(fullName) {
    // get lastname from  full name
    let names = fullName.split(' ');
    return names[names.length -  1];
}
   

let fullName = "Afeseh Ayafor Anumbosi"
let array = ['Afeseh','Ayafor', 'Anumbosi']
document.getElementById("root").innerHTML += `Last Name of ${fullName} is ${getLastName(fullName)}`;
// alert(addTwoNumbers(5, 7)); // Output: 12