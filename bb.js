const greet = () => {
    console.log('Hello, world!');
};

greet();
// arrow function 
const createUser = (name, age) => ({
    name: name,
    age: age
});

console.log(createUser('Alice', 25));

