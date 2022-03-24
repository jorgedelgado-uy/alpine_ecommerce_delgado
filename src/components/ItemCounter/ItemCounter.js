import React,{ useState } from 'react'
import './ItemCounter.css'

export default function ItemCounter(props){

    const [ count, setCount ] = useState(props.initial);

    const addItem = ()=>{
        if (count < props.stock)
            setCount(count + 1);
    }

    const decreseItem = ()=>{
        if (count > 1)
            setCount(count - 1)
    }

    return (
        <div className='item-count-container'>
            <button onClick={decreseItem} className='item-count'>-</button>
            <p>{count}</p>
            <button onClick={addItem} className='item-count'>+</button>
        </div>       
    )
}