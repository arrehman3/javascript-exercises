const findTheOldest = function(people) {
    return people.reduce((oldest,currentP)=>{
        const oldestAge = getAge(oldest.yearOfBirth,oldest.yearOfDeath);
        const currentAge =getAge(currentP.yearOfBirth,currentP.yearOfDeath);
        return oldestAge>currentAge? oldest:currentP;
        });
};

const getAge = function(birth,death){
    if(!death){
        death = new Date().getFullYear();

    }

    return death-birth;
}
// Do not edit below this line
module.exports = findTheOldest;
