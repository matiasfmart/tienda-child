import CartImg from '../img/cartWidget.png';

function CartWidget() {

    return(
        <>
            <button className='btn-cart'><img src={CartImg} className="cartWidget"/></button>
        </>
    )
}

export default CartWidget;