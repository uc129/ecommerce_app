import Link from "next/link";
import {AiOutlineShopping} from "react-icons/ai";
import {Cart} from "./index";

import {useStateContext} from "../context/StateContext";

const Navbar = () => {

    // @ts-ignore
    const {showCart,setShowCart,totalQuantities} = useStateContext();

    return (
        <nav className={'navbar-container'}>

                <p className={'logo'}>
                    <Link href={'/'}>
                        Shop Headphones
                    </Link>
                </p>
                <button onClick={()=>{setShowCart(!showCart)}} className={'cart-icon'}>
                    <AiOutlineShopping/>
                    <span className={'cart-item-qty'}>{totalQuantities}</span>
                </button>
            {showCart&& <Cart/>}

        </nav>
    )
}

export default Navbar