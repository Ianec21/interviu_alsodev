const numbers = [5, 4, 3, 2, 1];
const isConsecutive = (numbers) => {
    //only one number, so return true
    if (numbers.length <= 1){
        return true;
    }

    let check = true;

    //using js function array.sort in order to sort the array.
    numbers.sort();

    //now checking if the numbers are consecutive
    numbers.map((number, index) => {
        if(!(numbers[index + 1] && numbers[index + 1] === (number + 1)) && !(!numbers[index + 1] && numbers[index - 1] === number - 1)){
            check = false;
            return false;
        }
    });

    return check;
}

const notUniqueElements = [1, 3, 2, 2, 4, 3, 5, 6, 5];
const uniqueElements = (numbers) => {
    //convert array to set, so it leaves only unique elements.
    var set = new Set(numbers);
    //convert it back to array.
    var arr = Array.from(set);
    return arr.sort();
}

const repeatedNumbers = (numbers) => {
    const counts = {};
    //creating new set so I don't have multiple numbers the same.
    const uniqueNumbers = [...new Set(numbers)];

    //using filter to check if a numbers repeats several times in original array.
    for(const number of uniqueNumbers){
        const count = numbers.filter(num => num === number).length;
        counts[number] = count;
    }

    //now pushing objects in array with the number and how many times it repeats.
    const arr = [];
    for(const number in counts){
        const count = counts[number];
        arr.push({[number]: count});
    }

    return arr;
}