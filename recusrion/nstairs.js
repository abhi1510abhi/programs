
function nstairs(n) {

    if (n < 0)
        return 0;
     
    if (n == 1 || n == 0)
        return 1;
    
    return diff_ways = nstairs(n - 1) + nstairs(n - 2);
    
}


let r = nstairs(3);
console.log(r)