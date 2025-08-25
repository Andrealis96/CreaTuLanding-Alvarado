import pruebaImg from '../prueba.jpg';

const products = [
    // HAMBURGUESAS
    {
        id: 1,
        title: "Hamburguesa Clásica",
        description: "Jugosa carne, queso, lechuga y tomate",
        price: 3.50,
        pictureUrl: pruebaImg,
        category: "hamburguesas"
    },
    {
        id: 2,
        title: "Hamburguesa Doble Queso",
        description: "Carne doble, queso doble y cebolla caramelizada",
        price: 4.50,
        pictureUrl: pruebaImg,
        category: "hamburguesas"
    },

    // SALCHIPAPAS
    {
        id: 3,
        title: "Salchipapa Sencilla",
        description: "Papas, salchicha, salsa de la casa",
        price: 3.00,
        pictureUrl: pruebaImg,
        category: "salchipapas"
    },
    {
        id: 4,
        title: "Salchipapa Especial",
        description: "Papas, salchicha, huevo, queso y salsa especial",
        price: 4.00,
        pictureUrl: pruebaImg,
        category: "salchipapas"
    },

    // BEBIDAS
    {
        id: 5,
        title: "Agua",
        description: "Agua natural",
        price: 2.00,
        pictureUrl: pruebaImg,
        category: "bebidas"
    },
    {
        id: 6,
        title: "Gaseosa 500ml",
        description: "Refresco de cola",
        price: 2.50,
        pictureUrl: pruebaImg,
        category: "bebidas"
    },

    // SANDUCHES
    {
        id: 7,
        title: "Sanduche de Lomo",
        description: "Lomo, lechuga, tomate",
        price: 3.50,
        pictureUrl: pruebaImg,
        category: "sanduches"
    },
    {
        id: 8,
        title: "Sanduche de Pollo",
        description: "Pollo a la plancha, lechuga y mayonesa",
        price: 3.50,
        pictureUrl: pruebaImg,
        category: "sanduches"
    },

    // COMBOS
    {
        id: 9,
        title: "Combo Hamburguesa + Papas",
        description: "Hamburguesa clásica + papas medianas + bebida",
        price: 6.00,
        pictureUrl: pruebaImg,
        category: "combos"
    },
    {
        id: 10,
        title: "Combo Salchipapa",
        description: "Salchipapa especial + bebida",
        price: 5.50,
        pictureUrl: pruebaImg,
        category: "combos"
    },

    // ADICIONALES
    {
        id: 11,
        title: "Porción de papas",
        description: "Papas medianas",
        price: 2.00,
        pictureUrl: pruebaImg,
        category: "adicionales",
    },
    {
        id: 12,
        title: "Tocino extra",
        description: "Añade tocino a tu hamburguesa",
        price: 1.50,
        pictureUrl: pruebaImg,
        category: "adicionales",
    },
];

/** llama getProducts para listar**/
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(products);
        }, 500);
    });
}

/** llama getProductsById para detalle**/
export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(products.find((prod) => prod.id === id));
        }, 2000);
    });
}
