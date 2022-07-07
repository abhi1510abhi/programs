
function palimdrome(left, right ,sarray) {
    
    if (left >= right) {
        return true; 
    }

    if (sarray[left] != sarray[right]) {
        return false;
    }

    return palimdrome(++left, --right,sarray)
} 


let s = "abhijeet";
let s1 = "madam";
let s2  = "aiia"
let is_palindrone = palimdrome(0, s.length - 1, s)
console.log(is_palindrone)