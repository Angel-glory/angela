let users = []; // Store users
let editUserId = null; // Track user being edited



function editUser(id) {
    const user = users.find(user => user.id === id);
    if (user) {
        document.getElementById('name').value = user.name;
        document.getElementById('email').value = user.email;
        document.getElementById('phone').value = user.phone;
        editUserId = id; // Set edit mode
    }
}


function addUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (!name || !email || !phone) {
        alert("All fields are required!");
        return;
    }

    if (editUserId) {
        // Update existing user
        const userIndex = users.findIndex(user => user.id === editUserId);
        if (userIndex !== -1) {
            users[userIndex] = { id: editUserId, name, email, phone };
        }
        editUserId = null; // Reset after update
    } else {
        // Create a new user
        const newUser = { id: Date.now(), name, email, phone };
        users.push(newUser);
    }

    clearFields();
    renderUserList();
}

function renderUserList() {
    const tableBody = document.querySelector('#userTable tbody');
    tableBody.innerHTML = '';
    
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>
                <button class="edit" onclick="editUser(${user.id})">Edit</button>
                <button class="delete" onclick="deleteUser(${user.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    renderUserList();
}

function clearFields() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}

window.onload = renderUserList;
