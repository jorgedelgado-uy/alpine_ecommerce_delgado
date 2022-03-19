import './CartWidget.css';

const CartWidget = (props) =>{
    return(
        <button className='cart-container'>
            <i class="fa-solid fa-cart-shopping"></i>
            <p className='cart-count'>{props.count}</p>
        </button>
    );
}

export default CartWidget;

