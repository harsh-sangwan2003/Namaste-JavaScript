const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "sunil", lastName: "shetty", age: 26 }
]

const fullNames = users.map(obj => obj.firstName + obj.lastName);
console.log(fullNames);

const output = users.reduce((acc, curr) => {

    if (acc[curr.age])
        acc[curr.age] = ++acc[curr.age]

    else
        acc[curr.age] = 1;

    return acc;

}, {});
console.log(output);