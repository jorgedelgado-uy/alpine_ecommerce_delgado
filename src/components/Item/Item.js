import './Item.css'
import ItemCounter from '../ItemCounter/ItemCounter'

export default function Item(props) {
    const {id, title, price, pictureUrl, stock} = props.data;
    return(
        <div className='item-card'>
            <img src={pictureUrl} className='item-picture-container'></img>
            <p className='item-title'>{title}</p>
            <p className='item-price'>${price}</p>
            <ItemCounter stock={stock} initial={1}/>
        </div>
    )
}
