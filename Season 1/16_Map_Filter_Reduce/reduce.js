const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((acc, ele) => acc + ele, 0);

const max = arr.reduce((max_val, ele) => {

    if (ele > max_val)
        max_val = ele;

    return max_val;
}, Number.MIN_SAFE_INTEGER);

console.log(sum);
console.log(max);