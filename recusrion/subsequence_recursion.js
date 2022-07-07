
// "abc" op "" "a" "b" "c" "ab" "ac" "bc" "abc" 
// eigther take it or dont take it
 // best tuorial geekforgeeks self placed course

function subsequence(str,curr, counter) {

    if (counter >= str.length) {
        console.log(curr)
        return;
    }

    subsequence(s, curr, counter + 1); // take nothing
    subsequence(s,curr+str[counter],counter+1) // take charater

}

let s = "abc"
subsequence(s, "" ,0)