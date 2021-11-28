const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];


const ol = document.createElement('ol');
document.body.appendChild(ol);

// 1
users.forEach(user => {
    const li = document.createElement('li');
    li.textContent += user.firstName + ' ' + user.lastName;
    ol.appendChild(li);    
});

// 2
ol.style.listStyle = 'none';

// 3
const liList = ol.children;
users.forEach((user, index) => {
    const attr = document.createAttribute('data-id');
    attr.value = user.id;
    liList[index].setAttributeNode(attr);
})