let currentUser = null;

function generateRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            currentUser = user;
            displayUser(user);

            document.querySelectorAll('.menu').forEach(menu => {
                menu.innerHTML = '';
            });
        })
        .catch(error => console.error('Error fetching random user:', error));
}

function displayUser(user) {
    const userContainer = document.querySelector('.user-container');
    userContainer.innerHTML = `
        <h2>${user.name.first} ${user.name.last}</h2>
        <img src="${user.picture.medium}" alt="User Picture">`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('gender').addEventListener('click', () => {
        if (!currentUser) return;
        const menu = document.querySelector('#gender + .menu');
        if (menu.innerHTML) {
             menu.innerHTML = ''; 
        } else {
            menu.innerHTML = `<li>${currentUser.gender}</li>`; 
        }

    });

    document.getElementById('name').addEventListener('click', () => {
        const menu = document.querySelector('#name + .menu');
        if (menu.innerHTML) {
            menu.innerHTML = '';
        } else {
            menu.innerHTML = `<li>${currentUser.name.first} ${currentUser.name.last}</li>`;
        }
    });

    document.getElementById('country').addEventListener('click', () => {
        const menu = document.querySelector('#country + .menu');
        if (menu.innerHTML) {           
            menu.innerHTML = '';
        } else {
            menu.innerHTML = `<li>${currentUser.location.country}</li>`;
        }
    }); 

    document.getElementById('age').addEventListener('click', () => {
        const menu = document.querySelector('#age + .menu');
        if (menu.innerHTML) {
            menu.innerHTML = '';
        } else {
            menu.innerHTML = `<li>${currentUser.dob.age}</li>`;
        }
    });
});