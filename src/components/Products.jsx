export const promiseProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([
          {id: '1234', title: 'Remera', description:'Adidas' , price:1100 , urlPicture: "../img/product_1.jpg"},
          {id: '2345', title: 'Pantalon', description:'Narrow' , price:2200 , urlPicture: "../img/product_1.jpg"},
          {id: '3456', title: 'Pulsera', description:'Biju' , price:150 , urlPicture: "../img/product_1.jpg"},
        ]);
    }, 2000);
});