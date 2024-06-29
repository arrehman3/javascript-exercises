const reverseString = function(string) {
    let newString='';
    let lengthOfTheString = string.length-1;
    for(i=lengthOfTheString;i>=0;i--){
        let theCharacter=string.charAt(i);
        newString=newString.concat(theCharacter);
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
