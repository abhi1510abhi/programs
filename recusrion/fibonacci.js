
function fibo(n) {

    if (n == 0) {
        return 0
    }

    if (n == 1) {
        return 1
    }
    let last = fibo(n - 1);
    let second_last = fibo(n - 2);

    return last + second_last;

}

let result = fibo(4);
console.log(result)