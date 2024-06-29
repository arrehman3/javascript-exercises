const removeFromArray = function(array,...item) {
        let newArray =  array.filter(element=>!item.includes(element));
        return newArray;
};


// Do not edit below this line
module.exports = removeFromArray;
