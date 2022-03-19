import './ItemListContainer.css'

const ItemListContainer = (props) => {
    return(
        <div className='item-list-container'>
            <h2>{props.tittle}</h2>
            <div className='item-list-selection'>
                <p>Items go here</p>
            </div>
        </div>
    )
    
}

export default ItemListContainer;