//fetch API (método, url, body) //método: GET, POST, PUT, DELETE - si no se define, por defecto http toma GET //url: dirección del servidor //body: datos que se envían al servidor (opcional) //devuelve una promesa

const listProducts = () => {
    return fetch('https://api.escuelajs.co/api/v1/products/')
        .then(response => response.json())
        .catch(error => console.log(error));
};

const authentication = (username, password) => {
    return fetch('https://fakestoreapi.com/auth/login', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ 
            username,
            password,
        }),
    })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Error de autenticación');
            }

        })
        .catch(error => console.log(error))
}; 
// authentication('mor_2314', '83r5^_');

const createProduct = (title, price, images) => {
    return fetch('https://api.escuelajs.co/api/v1/products', {
        method:'POST',
        body: JSON.stringify({
            "title": title,
            "price": price,
            "description": "A description",
            "categoryId": 1,
            "images": [images]
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}

// id: uuid.v4()

const deleteProduct = (id) => {
    return fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
        method:'DELETE',
    })
        .then(response => response.json())
        .catch(error => console.log(error))
};

const updateClient = (id, nombre, email) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method:'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, email }),
    })
        .then(response => response)
        .catch(error => console.log(error))
};


export const productsServices = {
    listProducts,
    deleteProduct,
    authentication,
    createProduct,
    // updateClient,
};
