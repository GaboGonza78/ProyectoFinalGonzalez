const productos = [
    {
        id: 1,
        nombre: "Gibson Les Paul",
        precio: 2500,
        categoria: "Guitarra"
    },
    {
        id: 2,
        nombre: "Gibson SG",
        precio: 2000,
        categoria: "Guitarra"
    },
    {
        id: 3,
        nombre: "Fender Stratocaster",
        precio: 2300,
        categoria: "Guitarra"
    },
    {
        id: 4,
        nombre: "Ibanez JEM7V",
        precio: 2800,
        categoria: "Guitarra",
    },
    {
        id: 5,
        nombre: "Fender Precision Bass",
        precio: 1900,
        categoria: "Bajo"
    },
    {
        id: 6,
        nombre: "Yamaha Attitude II Ltd",
        precio: 1500,
        categoria: "Bajo"
    },
    {
        id: 7,
        nombre: "Bongo John Myung",
        precio: 1700,
        categoria: "Bajo"
    },
    {
        id: 8,
        nombre: "Tama M Master Signature",
        precio: 3000,
        categoria: "Bateria"
    },
];

export default function fetchData() {
     return new Promise(resolve => {
         setTimeout(() => {
             resolve(productos);
         }, 500);
     });
}

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productId))
        }, 500)
    })
}
