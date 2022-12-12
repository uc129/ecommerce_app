import React,{ createContext, useContext,useState} from 'react';
import {toast}from "react-hot-toast";


const Context= createContext({});

export const StateContext=({children}:any)=>{

    const[showCart, setShowCart]=useState(false);
    const[cartItems, setCartItems]=useState([]);
    const[totalPrice, setTotalPrice]=useState(0);
    const[totalQuantities, setTotalQuantities]=useState(0);
    const[qty, setQty]=useState(1);

    let foundProduct:any;
    let index;


   function onAdd (product:any, quantity:any){
        // @ts-ignore
        setCartItems({product:product});
        // console.log('cartItems',cartItems)
        const checkProductInCart= cartItems.find((item:any)=>item._id===product._id);
        setTotalPrice((prevTotalPrice)=>prevTotalPrice+product.price*quantity);
        setTotalQuantities((prevTotalQuantities)=>prevTotalQuantities+quantity);
        // @ts-ignore

        if(checkProductInCart){
            const updatedCartItems= cartItems?.map((cartProduct:any)=>{
                if(cartProduct._id === product._id){
                    return{
                        ...cartProduct,
                        quantity: cartProduct.quantity+quantity
                    }
                }
            })
            // @ts-ignore
             setCartItems(updatedCartItems);
            console.log('updatedCartItems',updatedCartItems)
    } else{
            product.quantity =quantity;

            console.log('product',product)
            // @ts-ignore
             setCartItems([...cartItems, {product}]);
            console.log('cart items set',[...cartItems, {product}])
            console.log('cart items',cartItems)
        }
        toast.success(`${qty} ${product.name} added to cart`,)

    }


    const toggleCartItemQuantity=(id:any, value:any)=>{
        console.log(id,value)
        console.log('cart items', cartItems)
       foundProduct = cartItems.find((item:any)=>item._id===id);
        console.log('found',foundProduct)
        index= cartItems.findIndex((item:any)=>item._id===id);
        let newCartItems= cartItems.splice(index,1);

        if (value ==='inc'){
            // foundProduct.quantity++;
            // @ts-ignore

            // @ts-ignore
            setCartItems([...newCartItems,{...foundProduct,quantity:foundProduct.quantity+1}])
            setTotalPrice((prevTotalPrice)=>prevTotalPrice+foundProduct?.price);
            setTotalQuantities((prevTotalQuantities)=>prevTotalQuantities+1);
        }
        else if(value==='dec') {
            // @ts-ignore
            if (foundProduct&& foundProduct.quantity > 1) {
                // @ts-ignore
                foundProduct.quantity++;
                 // @ts-ignore
                newCartItems = [...newCartItems, ({...foundProduct, quantity: foundProduct.quantity - 1})];
                // @ts-ignore
                setCartItems(newCartItems)
                setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct?.price);
                setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
            }
        }


    }


    const incQty=()=> {  //increase qty of product outside the cart
        setQty((prevQty) => prevQty + 1);
    }

    const decQty=()=> {   //decrease qty of product outside the cart
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;
            return prevQty - 1;
        });
    }



    return(
        <Context.Provider value={{
            setShowCart,showCart,cartItems,totalPrice,totalQuantities,qty,incQty,decQty,onAdd,
            toggleCartItemQuantity
        }}>
           <div>{children}</div>
            </Context.Provider>
    )

}

export const useStateContext=()=> useContext(Context);