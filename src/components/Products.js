export const promiseProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([
          {id: '1234', title: 'Remera', description:'Adidas' , price:1100 , urlPicture: "/img/product_1.jpeg", type: '01', stock: 10},
          {id: '2345', title: 'Pantalon', description:'Narrow' , price:2200 , urlPicture: "/img/product_1.jpeg", type: '01', stock: 10},
          {id: '3457', title: 'Pulsera', description:'Biju' , price:150 , urlPicture: "/img/product_1.jpeg", type: '24', stock: 10},
          {id: '3458', title: 'Pulsera', description:'Biju' , price:150 , urlPicture: "/img/product_1.jpeg", type: '24', stock: 10},
          {id: '3459', title: 'Pulsera', description:'Biju' , price:150 , urlPicture: "/img/product_1.jpeg", type: 'ac', stock: 10},
        ]);
    }, 2000);
});