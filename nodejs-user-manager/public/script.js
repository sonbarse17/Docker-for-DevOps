async function addUser() {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    
    if (name && email) {
        try {
            const response = await fetch('/addUser', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name, email})
            });
            
            if (response.ok) {
                alert('User added successfully!');
                document.querySelector('form').reset();
                getUsers();
            }
        } catch (error) {
            alert('Error adding user');
        }
    }
}

async function getUsers() {
    try {
        const response = await fetch('/getUsers');
        const users = await response.json();
        
        const userList = document.getElementById('userList');
        if (users.length > 0) {
            userList.innerHTML = '<h3>Registered Users:</h3>' + 
                users.map(u => `<p>${u.name} - ${u.email}</p>`).join('');
        } else {
            userList.innerHTML = '<p>No users registered yet.</p>';
        }
    } catch (error) {
        document.getElementById('userList').innerHTML = '<p>Database connection error</p>';
    }
}

document.addEventListener('DOMContentLoaded', getUsers);