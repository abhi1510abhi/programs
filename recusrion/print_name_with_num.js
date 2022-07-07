
let name = "abhijeet"

function printName(n,i){

    if(n == 0){
        return;
    }

    console.log(`${name}-${i}`);
    printName(n - 1,i+1)
    console.log(`${name}-${i}`);

}

printName(4, 1);
