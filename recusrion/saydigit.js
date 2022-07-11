

let num_obj = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    
}
function sayDigit(n) {
    
    if (!n)
        return;
    
    let digit = n % 10;
    n = parseInt(n / 10);
    sayDigit(n)
    console.log(num_obj[digit]);
}

sayDigit(432)