const products = [
    {
        id: 1,
        title: "Hamburguesa Clásica",
        description: "Jugosa carne, queso, lechuga y tomate",
        price: 1500,
        pictureUrl: "/img/hamburguesa1.jpg",
    },
    {
        id: 2,
        title: "Hamburguesa Doble",
        description: "Doble carne, doble queso, doble felicidad",
        price: 2000,
        pictureUrl: "/img/hamburguesa2.jpg",
    },
    {
        id: 3,
        title: "Hamburguesa Veggie",
        description: "A base de vegetales, deliciosa y saludable",
        price: 1700,
        pictureUrl: "/img/hamburguesa3.jpg",
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
};

