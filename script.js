let currentUser = null;

function generateRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            currentUser = user;
            displayUser(user);
        })
        .catch(error => console.error('Error fetching random user:', error));
}

function displayUser(user) {
    const userContainer = document.querySelector('.user-container');
    userContainer.innerHTML = ''; 

    const selectedFields = Array.from(document.querySelectorAll('.menu-toggle:checked'))
        .map(input => input.dataset.menu);

    selectedFields.forEach(field => {
        let content = '';

        switch (field) {
            case 'first-name':
                content = `First Name: ${user.name.first}`;
                break;
            case 'last-name':
                content = `Last Name: ${user.name.last}`;
                break;
            case 'picture':
                content = `<img src="${user.picture.medium}" alt="User Picture">`;
                break;
            case 'country':
                content = `Country: ${user.location.country}`;
                break;
            case 'city':
                content = `City: ${user.location.city}`;
                break;
            case 'street':
                content = `Street: ${user.location.street.name} ${user.location.street.number}`;
                break;
            case 'e-mail':
                content = `Email: ${user.email}`;
                break;
            case 'age':
                content = `Age: ${user.dob.age}`;
                break;
            case 'phone':
                content = `Phone: ${user.phone}`;
                break;
            default:
                break;
        }

        const div = document.createElement('div');
        div.className = field;
        div.innerHTML = content;
        userContainer.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.querySelector('.generate-button');
    generateButton.addEventListener('click', generateRandomUser);
});

