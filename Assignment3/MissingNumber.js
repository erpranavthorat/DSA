function missingnumber(arr) {
    const n = arr.length + 1;
    const totalSum = (n * (n + 1)) / 2; 
    
    let arrSum = 0;
    for (let num of arr) {
        arrSum += num;
    }
    
    const missingInteger = totalSum - arrSum;
    return missingInteger;
}

const arr = [1, 2, 4, 6, 3, 7,8];
const missing = missingnumber(arr);
console.log("The missing integer is:", missing);
