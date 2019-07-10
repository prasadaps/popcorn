//reverse function                              
function reverseString(str) {
    str = str.split(''); //string to array
    str = str.reverse(); //reverse the order 
    str = str.join(''); //then join the reverse order values
    return str;
}
reverseString("prasad");