import React, { useState } from 'react';
import style from '../styles/Cart.module.css'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {toggleCartDisplay} from '../../Action/action'
import { CSSTransition } from 'react-transition-group'
import { replaceCart,deleteCart } from '../../Action/action';


const Cart = ({className}) => {
    const class1= style[className] ? style[className] : "" // adding styles based on parent components props
    let cartDisplay = useSelector(state => state.cartDisplay)
    let cartProducts = useSelector(state => state.cartProducts)
    let total = cartProducts.reduce((acc, item) => acc = (item.price*item.count) + acc ,0)//calculating total price by subscribing to store
    let dispatch = useDispatch()
    const [checkoutClick,setCheckoutClick] = useState(false)
    let stylePropCart = {}
    cartDisplay ? stylePropCart = {transform: "translateX(0px)"} : stylePropCart = {transform: "translateX(100%)"}
    
    const hideCart = () =>{
        dispatch(toggleCartDisplay())
        setCheckoutClick(false)
    }
    //Used CSS Transition  to transition cart effects, or the cart component dies before the transition's over
    return ( 
        <CSSTransition in = {cartDisplay} timeout={500} unmountOnExit classNames={{
            enter: style["transition-enter"],
            enterActive : style["transition-enter-active"],
            exit: style["transition-exit"],
            exitActive: style["transition-exit-active"]
        }}>
            <div className = {style.CartOverlay} onClick={hideCart}>
            <CSSTransition in = {cartDisplay} timeout={500} unmountOnExit classNames={{
                enter: style["cart-enter"],
                enterActive : style["cart-enter-active"],
                exit: style["cart-exit"],
                exitActive: style["cart-exit-active"]
                }}>
                <div className={`${style.Cart} ${class1}`} style = {stylePropCart} onClick = {(e) => e.stopPropagation()}>
                    <div className={style.CartHead}>
                        <h4>Your Cart</h4>
                        <i onClick =  {hideCart} className="fas fa-times"></i>
                    </div>
                    {cartProducts.length === 0 ? <div className={style.NoItems}>No Items found.</div> :
                    <>
                        <div className={style.CartContent}>
                            <div className={style.ContentWrapper}>
                                {cartProducts.map(item => <CartListItem key = {item.id} item={item}/>)}
                            </div>
                        </div>
                        <div className={style.SubtotalSection}>
                            <div className={style.SubtotalText}>
                                <div>Subtotal</div>
                                <p className={style.TotalPrice}>{`Rs. ${total}`}</p>
                            </div>
                            <div className={style.CheckoutBtnWrapper}>
                                <button className={style.CheckoutBtn} onClick={(() => setCheckoutClick(true))} >Continue to Checkout</button>
                                {checkoutClick ? <div className={style.CheckoutClicked}>Checkout is disabled on this site.</div> : ""}
                            </div>
                        </div>
                    </>
                    }
                </div>
            </CSSTransition>
            </div>
        </CSSTransition>
    );
}
 
export default Cart;

const CartListItem = ({item}) =>{
    let dispatch = useDispatch()
    return (
        <div className={style.CartListItem}>
            <div className={style.ListImage}>
                <img src={item.preview} alt={item.name}></img>
            </div>
            <div className={style.ListDetails}>
                <div>{item.name}</div>
                <div>{`Rs. ${item.price}`}</div>
                <button onClick={() => {dispatch(deleteCart(item))}}>Remove</button>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="number" required inputMode = "numeric" defaultValue={item.count} onChange={(e) => {
                e.target.value && dispatch(replaceCart(item,parseInt(e.target.value))) 
                }}/>
            </form>
        </div>
    )
}