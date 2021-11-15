const school = {teachers: [{id: 1,name: "Pinchas",subjects: ["chemistry", "biology", "physics"],students: [],capacityLeft: 3,},{id: 2,name: "Williams",subjects: ["history", "ethics"],students: [],capacityLeft: 2,},],students: [{id: 10,name: "Jennifer",age: 20,},{id: 11,name: "Howard",age: 23,},{id: 12,name: "Old-Timmy",age: 86,},{id:13,name: "Houston",age: 21,},],};

// 1 
const findPerson = (type, id) => {
    return school[type].filter((person) => {
        return person.id === id;
    })[0];
}

// console.log(findPerson('students', 12));

// 2
const assignStudent = (id, subject) => {
    const student = findPerson('students', id);
    school.teachers.forEach((teacher => {
        if (teacher.subjects.includes(subject)) {
            if (teacher.capacityLeft > 0) {
                teacher.students.push(student);
                teacher.capacityLeft--;
                console.log(teacher);
            } else {
                console.log('Sorry, no available teachers left');
            }
        }
    }));
}

// assignStudent(12, 'physics');

// 3 
const assignTeachersSubject = (id, subject) => {
    school.teachers.forEach((teacher) => {
        if (teacher.id === id) {
            if (!teacher.subjects.includes(subject)) {
                teacher.subjects.push(subject);
            }
        }
    })
}

// assignTeachersSubject(1, 'computers');
// console.log(school.teachers);

// 4
const removePerson = (type, id) => {
    school[type] = school[type].filter((person) => {
        return person.id !== id;
    });
}

// removePerson('teachers', 1);
// console.log(school);