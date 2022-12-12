import Link from "next/link";
import {urlFor} from "../lib/client";


// @ts-ignore
export const Product = ({product: {image, name, slug, price}}) => {
    // let href=''
    // if(link){
    //   href = `${slug.current}`
    // }else
    let href = `/product/${slug.current}`

    return (
        <div>
            <Link href={href}>
                <div className={'product-card'}>
                    <img
                        // @ts-ignore
                        src={urlFor(image && image[0])}
                        width={250}
                        height={250}
                        className={'product-image'}
                        alt={'image'}
                    />
                    <p>{name}</p>
                    <p className={'product-price'}>${price}</p>
                </div>
            </Link>

        </div>)
}

export default Product