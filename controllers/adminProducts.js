import { productsServices } from "../services/products-service.js";

const table = document.querySelector('[data-table]');
const createNewLine = (title, price, id) => {
    const line = document.createElement('tr');
    const content = `
    <td class="table__column--1 td" data-td> ${title}</td>
    <td class="table__column--2">${price}</td>
    <td>
        <ul class="table__button-control">
        <li>
            <button class="simple-button simple-button--delete" type="button" id="${id}">
            Eliminar
            </button>
        </li>
        </ul>
    </td>
    `;
    line.innerHTML = content;

    const buttonDelete = line.querySelector('.simple-button--delete');

    buttonDelete.addEventListener('click', (e) => {
        productsServices.deleteProduct(id)
            .then((response) => {
                console.log(response);
                line.remove();
            })
            .catch((error) => alert('Ocurrió un error', error));
    });

    return line;
}

productsServices.listProducts()
    .then(data => {
        // Filtrar los productos con IDs del 10 al 20
        const filteredData = data.filter(product => {
            const id = parseInt(product.id);
            return (id >= 100) ;
        });

        filteredData.forEach( ({id, title, price}) => { //recorrer la respuesta)

            const line = createNewLine(title, price, id);
            table.appendChild(line);
        });
    })
    .catch(error => alert('Ocurrió un error'));