// 1
// const array2 = ['apple', 'banana', 'orange', 'banana', 'grape', 'apple', 'kiwi'];

// function workDeadlines (arr) {
//     const arr2 = arr;
//     arr2.join;
//      arr2.slice(0, 3);
//      const arr1 = [];
//     return arr1.push(arr2);
// };

// console.log(workDeadlines(array2));

// 2


const people = [
    { name: 'John', surname: 'Doe', age: 32, occupation: 'programmer' },
    { name: 'Jane', surname: 'Lee', age: 26, occupation: 'teacher' },
    { name: 'Mike', surname: 'Watson', age: 42, occupation: 'engineer' },
    { name: 'Emily', surname: 'Brad', age: 29, occupation: 'designer' }
];

const fullName = people.flatMap(peopl => peopl.name && peopl.surname);
console.log(fullName);