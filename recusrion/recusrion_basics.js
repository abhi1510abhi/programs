// print name 5 times
let c = 0;
let name = "Abhijeet";
function printName(c) {
   
    if (c == 5)
        return;
   
    console.log(name);
    c++;
    printName(c);
    
}

//printName(c);

// print 1 to n
let n = 10;
function printN(i, n) {

    if (i == 0)
        return;

 
    console.log(i);
    printN(i - 1,n);
}

//printN(n,n)


// ** factorial using function return 
function fact(a) {
    if (a == 0)
        return 1;
    
    return a * fact(a - 1);
}

//let r = fact(4);
//console.log(r)

// factorial using paramerter
function factparameter(num , res) {
    
    if (num == 0) {
        console.log(res)
        return;
    }
       
    factparameter(num -1, res * num )
}


//factparameter(4, 1);

// *** reverse arrar [2,4,3,4] op -> [4,3,4,2]


let array = [2, 4, 3, 4]
function reverseArray(n, newarr) {
    
    if (n < 1) {
        console.log("result" ,newarr)
        return
    }

    newarr.push(array[n - 1]);
    reverseArray(n-1 , newarr)

}

//reverseArray(array.length, [])


