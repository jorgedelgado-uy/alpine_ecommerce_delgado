import React,{ useState } from 'react'
import './ItemCounter.css'

export default function ItemCounter(props){

    const [ count, setCount ] = useState(props.initial);
    const stock = props.stock;

    const onAdd = ()=>{
        console.log(count);
    }

    const addItem = ()=>{
        if (count < stock)
            setCount(count + 1);
    }

    const decreseItem = ()=>{
        if (count > 1)
            setCount(count - 1)
    }

    return (
        <>        
        {
            stock < 1
            ?
            WithoutStock()
            :
            WithStock(addItem, decreseItem, count, onAdd)
        }       
        </>
    )
}

const WithoutStock = () =>{
    return(
        <div className='item-count-container'>
            <h2>No stock available</h2>
        </div>
    );
}

const WithStock = (add, decrease, count, onAdd) =>{
    return(
        <>
            <div className='item-count-container'>
                <button onClick={decrease} className='item-count'>-</button>
                <p>{count}</p>
                <button onClick={add} className='item-count'>+</button>
            </div>
            <button onClick={onAdd}>Add To Cart</button>
        </>      
    );
}