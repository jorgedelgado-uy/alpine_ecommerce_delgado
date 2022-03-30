import Item from '../Item/Item'

export default function ItemList(props){

return (
    <>
    {
        props.productList.map((product) =>{
            return(
                <Item data={product}/>
            )
        })
    }
    </>
    )
}



