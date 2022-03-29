import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

export default function ItemListContainer(props) {
    return(
        <div className='item-list-container'>
            <h2>{props.tittle}</h2>
            <div className='item-list-selection'>
                <ItemList/>
            </div>
        </div>
    )
    
}