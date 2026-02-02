const todo = document.getElementById('todo');
const title = document.getElementById('title');
const description = document.getElementById('description');
let list = [];
let display = document.querySelector('.display tbody');

todo.addEventListener('submit', (e) => {
    e.preventDefault();

    let obj = {
        id: Date.now(),
        title: title.value,
        description: description.value,
        isComplete: false
    }

    list.push(obj);
    // console.log(list);
    table();
})

const table = () => {
    display.innerHTML = "";
    list.forEach((data, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${data.title}</td>
            <td>${data.description}</td>
            <td><button class="btn btn-outline-danger delete">Delete</button><button class="btn btn-outline-warning ms-3">Edit</button></td>
        `;
        display.appendChild(row);
    });
}

// let deleteBtn = document.querySelector('tbody .delete');
// let handleDelete = (id) => {
//     let newList = list.filter(value => value.id != id);
//     list = newList;
//     table();
// }

