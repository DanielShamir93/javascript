// 1
const arr1 = new Array(100).fill(0, 0, 99);

// 2
const arr2 =  Array.from( { length: 100 }, (_, index) => {
    return index + 1;
})

// 3
const room_2_the_best_obj = {
    person1: 'Shaked',
    person2: 'Fida',
    person3: 'Svetlana',
    person4: 'Mati',
    person5: 'Omar',
    person6: 'Ernest',
    person7: 'Daniel'
}

const room2_the_best_arr = Object.values(room_2_the_best_obj);

// 4
Object.assign({}, room2_the_best_arr);
console.log()

// 5
Array.isArray(room2_the_best_arr);

// 6
// copy
const copyArr = [...room2_the_best_arr];

// effect
const effect = room2_the_best_arr;