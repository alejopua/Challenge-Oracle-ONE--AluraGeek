import { productsServices } from "../services/products-service.js";

const loginButton = document.querySelector('[data-submit]');
const errorData = document.querySelector('[data-error]');

loginButton.addEventListener('click', (e) => {
    e.preventDefault();

    const username = document.querySelector('[data-username]').value;
    const password = document.querySelector('[data-password]').value;

    productsServices.authentication(username, password)
    .then((response) => {
        console.log(response);

        if (response.token) {
            window.location.href = '../screens/createProduct.html';
        }
    })
    .catch((error) => {
        errorData.style.display = 'flex';
        console.error('Error al autenticar',error);
        });

});


// mor_2314
// 83r5^_