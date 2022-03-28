import ItemCounter from '../ItemCounter/ItemCounter'
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    return(
        <div className='item-list-container'>
            <h2>{props.tittle}</h2>
            <div className='item-list-selection'>
                <ItemCounter stock={5} initial={1} onAdd={(count) => console.log(count)}/>
            </div>
        </div>
    )
    
}

export default ItemListContainer;