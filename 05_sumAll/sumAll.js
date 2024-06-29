const sumAll = function(startingNumber,endingNumber) {
    if(!Number.isInteger(startingNumber) || !Number.isInteger(endingNumber) ){
        return 'ERROR';
    }
    if (startingNumber<0 || endingNumber<0) return 'ERROR';
    let totalSum = 0;
    if(startingNumber<endingNumber){
        
        for(i=startingNumber;i<=endingNumber;i++){
            totalSum+=i;
        }

        return totalSum;
    }
    else if(startingNumber>endingNumber){
        for(i=endingNumber;i<=startingNumber;i++){
            totalSum+=i;
        }

        return totalSum;

       
    }
    

    
};

// Do not edit below this line
module.exports = sumAll;
