// N1
let json = ["user1", "user2", "user3", "user4", "user5"];
let jsonstr = JSON.stringify(json);

console.log(jsonstr);

// N2
// Получить коллекцию из списка элемента и приобразовать в массив (Array.from)
const items = Array.from(document.querySelectorAll('.cities li'));

// Перебрать все элементы списка и вернуть из текстового содержимое
const cities = items.map((item) => {
    return item.textContent
})

console.log(cities);


// N3
let json2 = '["user1", "user2", "user3", "user4", "user5"]';
let users = JSON.parse(json2);

let list3 = document.querySelector('#list')

for (let user of users) {
    let obj = document.createElement('li');
    list3.appendChild(obj);
    obj.textContent = user;
}


// N4
let jsonEmployees = `[
    {
    "name": "user1",
    "age": 25,
    "salary": 1000
    },
    {
    "name": "user2",
    "age": 26,
    "salary": 2000
    },
    {
    "name": "user3",
    "age": 27,
    "salary": 3000
    }
]`;

const employees = JSON.parse(jsonEmployees);
const tbody = document.querySelector('#employeeBody');

for(let employee of employees) {
    let tr = document.createElement('tr')

    tbody.appendChild(tr)
    tr.innerHTML = `
    <td>${employee.name}</td>
    <td>${employee.age}</td>
    <td>${employee.salary}</td>
    `
}