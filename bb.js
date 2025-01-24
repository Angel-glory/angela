const greet = () => {
    console.log('Hello, world!');
};

greet();
const createUser = (name, age) => ({
    name: name,
    age: age
});

console.log(createUser('Alice', 25));

