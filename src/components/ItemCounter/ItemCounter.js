import React,{ useState } from 'react'
import './ItemCounter.css'

export default function ItemCounter(props){

    const [ count, setCount ] = useState(props.initial);
    const stock = props.stock;
    const onAdd = props.onAdd;

    const addItem = ()=>{
        if (count < stock)
            setCount(count + 1);
    }

    const decreseItem = ()=>{
        if (count > 1)
            setCount(count - 1)
    }

    return (
        <div className='item-count-container'>
        {
            onAdd(count)
        }
        {
            stock < 1
            ?
            WithoutStock()
            :
            WithStock(addItem, decreseItem, count)
        }
        </div>
    )
}

const WithoutStock = () =>{
    return(
        <h2>No stock available</h2>
    );
}

const WithStock = (add, decrease, count) =>{
    return(
        <>
            <button onClick={decrease} className='item-count'>-</button>
            <p>{count}</p>
            <button onClick={add} className='item-count'>+</button>
        </>      
    );
}