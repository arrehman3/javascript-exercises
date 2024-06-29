
const repeatString = function(string,numberOfTimes) {
    let newString='';
    if(numberOfTimes<0){
        return `ERROR`;
    }
    for(i=1;i<=numberOfTimes;i++){
        newString=newString.concat(string);
        
    }

    return newString;
};

// Do not edit below this line
module.exports = repeatString;
