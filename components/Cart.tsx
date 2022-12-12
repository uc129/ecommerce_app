import React from "react";
// import Link from 'next/link';
// import toast from "react-hot-toast";
import {AiOutlineLeft, AiOutlineShopping} from "react-icons/ai";

import {useStateContext} from "../context/StateContext";
import {urlFor} from "../lib/client";
import {TiDeleteOutline} from "react-icons/ti";
// import {randomInt} from "crypto";

const Cart = () => {
    // const cartRef = useRef(null);
    // @ts-ignore
    const {totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity,
    }
        = useStateContext();
    // console.log(cartItems)
    //
    function handleCartClose() {
        setShowCart(false)
    }

    return (
        <div className={'cart-wrapper'}>
            <div className={'cart-container'}>
                <button className={'cart-heading'} onClick={handleCartClose}>
                    <AiOutlineLeft/>
                    <span className={'cart-heading'}>Your Cart</span>
                    <span className={'cart-num-items'}> {totalQuantities} items</span>
                </button>

                {cartItems.length < 1 ?
                    <div>
                        <div className={'empty-cart'}>
                            <AiOutlineShopping size={150}/>
                            <button className={'btn'} onClick={handleCartClose}>Continue Shopping</button>
                        </div>
                    </div>
                    :
                    <div className={'product-container'}>
                        {cartItems && cartItems.map((item: any, index: number) => {
                            console.log(item.product.quantity)
                            return (

                                <div className={'product'} key={item.product._id}>
                                    {/*// @ts-ignore*/}
                                    <img key={index} className={'cart-product-image'} alt={'product'} src={urlFor(item && item.product?.image[0])}/>

                                    <div className={'item-desc'}>
                                        <h5>{item.product.name}</h5>
                                        <h4>${item.product.price}</h4>
                                    </div>

                                    <div className={'flex bottom'}>
                                        <div>
                                            <p className={'quantity-desc'}>
                                            <span className={'minus'}
                                                onClick={()=>{toggleCartItemQuantity(item.product._id,'dec')}}
                                            >
                                                {/*<AiOutlineMinus/> */}
                                                -
                                            </span>
                                                <span className={'num'}> {item.quantity}</span>
                                                <span className={'plus'}
                                                    onClick={()=>{toggleCartItemQuantity(item.product._id,'inc')}}
                                                >
                                                {/*<AiOutlinePlus/>*/}
                                                    +
                                            </span>
                                            </p>
                                        </div>
                                        <button className={'remove-item'}><TiDeleteOutline/></button>
                                    </div>

                                </div>
                            )
                        })}
                    </div>

                }
                {cartItems.length >= 1 &&
                <div className={'cart-bottom'}>
                    <div className={'total'}>
                        <h3>Subtotal:</h3>
                        <h3>$ {totalPrice}</h3>
                    </div>
                </div>}
            </div>


        </div>)
}


export default Cart