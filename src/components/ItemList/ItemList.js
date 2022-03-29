import React,{ useEffect, useState } from 'react'
import Item from '../Item/Item'

const mockProducts = [
    {
        id: 1,
        title: 'Ekko',
        price: 300,
        pictureUrl: 'https://cdn.lolalytics.com/generated/champion280px/ekko.jpg',
        stock: 3
    },
    {
        id: 2,
        title: 'Vi',
        price: 400,
        pictureUrl: 'https://earlygame.com/uploads/images/_body/arcane-vi.jpg',
        stock: 5
    },
    {
        id: 3,
        title: 'Jinx',
        price: 200,
        pictureUrl: 'https://www.esportmaniacos.com/wp-content/uploads/2021/06/jinx-arcane-780x470.png',
        stock: 0
    }
];

export default function ItemList(props){

const [products, setProducts] = useState([]);

const getProducts = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            return resolve(mockProducts)
        }, 2000);
    });
}

useEffect( () => {
    getProducts().then( (products) =>{
        setProducts(products);
    }).finally( () =>{
        console.log('Call ended');
    });
})


return (
    <>
    {
        products.map((product) =>{
            return(
                <Item data={product}/>
            )
        })
    }
    </>
    )

}



