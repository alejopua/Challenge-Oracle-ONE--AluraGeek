import { productsServices } from "../services/products-service.js";

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const image = document.querySelector('[data-image]').value;
    const title = document.querySelector('[data-title]').value;
    const price = document.querySelector('[data-price]').value;


    productsServices.createProduct(title, price, image)
        .then(response => {
            console.log(response);
            if (response) {
                alert('Producto creado');
                location.reload();
            } else {
                alert('Error al crear el producto');
            }
        })
        .catch(error => console.log(error))
});