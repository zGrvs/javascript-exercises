const findTheOldest = function(people) {
    const CURRENT_YEAR = 2024;
    people.sort((a, b) => {
        if (b.yearOfDeath === undefined) {
            b.yearOfDeath = 2024;
        } 
        let last_person = a.yearOfDeath - a.yearOfBirth;
        let current_person = b.yearOfDeath - b.yearOfBirth;

        return last_person > current_person ? -1 : 1;
    })
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
