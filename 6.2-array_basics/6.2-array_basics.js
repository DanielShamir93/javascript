let people = ['Greg', 'Mary', 'Devon', 'James'];

// 1.
for (person of people) {
    console.log(person);
}

// 2. shift

// 3. pop

// 4. unshift('Matt')

// 5. push('Daniel')

// 6. `
for (person of people) {
    console.log(person);
    if (person === 'Mary') {
        return;
    }
}

// 7. slice(2, people.length-1)

// 8. indexOf('Marry')

// 9. indexOf('Foo)


// people = ['Greg', 'Mary', 'Devon', 'James'];

// 10.
people.splice(3, 1, 'Artie', 'Elizabeth');

// 11
const withBob = people.concat(['Bob']);

