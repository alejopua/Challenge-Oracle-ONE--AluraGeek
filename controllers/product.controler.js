import { productsServices } from "../services/products-service.js";

const contentCard =document.querySelector('[data-contentCard]');
const createCard = (images, title, price, id) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const content = `
    <div class="card-img">
        <img class="img--link" src="${images}" alt="product image">
    </div>
    <div class="card-info">
        <p class="text-title">${title.substring(0, 10)}</p>
    </div>
    
    <div class="card-footer text-title">
        <span class="pricing">$${price}</span>
        <a class="viewProduct card-button" href="../screens/viewProduct.html?id=${id}">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" transform: ;msFilter:;"><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg>
        </a>
    </div>
    `;
    card.innerHTML = content;

    return card;
}

//CRUD: create(POST), read(GET), update(PUT), delete(DELETE)
//fetch API (método, url, body) //método: GET, POST, PUT, DELETE - si no se define, por defecto http toma GET //url: dirección del servidor //body: datos que se envían al servidor (opcional) //devuelve una promesa

productsServices.listProducts()
    .then(data => {
        // Filtrar los productos con IDs del 10 al 20
        const filteredData = data.filter(product => {
            const id = parseInt(product.id);
            return (id >= 100) ;
        });

        filteredData.forEach( ({id, title, images, price}) => { //recorrer la respuesta)
            const card = createCard(images, title, price, id);
            contentCard.appendChild(card);
        });
    })
    .catch(error => alert('Ocurrió un error'));
