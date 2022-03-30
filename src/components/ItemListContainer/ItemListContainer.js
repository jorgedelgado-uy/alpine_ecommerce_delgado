import ItemList from '../ItemList/ItemList'
import React,{ useEffect, useState } from 'react'
import './ItemListContainer.css'
import {mockProducts} from '../../utils/Mock'

export default function ItemListContainer(props) {

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

    return(
        <div className='item-list-container'>
            <h2>{props.tittle}</h2>
            <div className='item-list-selection'>
                <ItemList productList={products}/>
            </div>
        </div>
    )
    
}