import React, {useState} from "react";
import {client, urlFor} from "../../lib/client";
import {AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar} from "react-icons/ai";
import {Product} from "../../components";
import {useStateContext} from "../../context/StateContext";
// import {randomInt} from "crypto";

const ProductDetails = ({product, products}) => {

    const {decQty, incQty, qty, onAdd} = useStateContext();

    const [index, setIndex] = useState(0)
    const {name, details, price, image} = product;

    return (
        <div>
            <div className={'product-detail-container'}>
                <div className={'product-detail-lg-image-container'}>
                    <img className={'product-detail-image'} src={urlFor(image[0])} alt={'product-detail'}/>
                </div>

                <div className={'small-images-container'}>
                    {image?.map((img, i) => (
                        <img src={urlFor(img)}
                             className={i === index ? 'small-image selected-image' : 'small-image'}
                             onMouseEnter={() => setIndex(i)}
                             alt={'product-detail'}
                             key={i}

                        />
                    ))}
                </div>

                <div className={'product-details-desc'}>
                    <h1>{name}</h1>
                    <div className={'reviews'}>
                        <div>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiOutlineStar/>
                        </div>
                        <p>(20)</p>
                    </div>
                    <h4>Details</h4>
                    <p>{details}</p>
                    <p>${price}</p>
                    <h3>Quantity:</h3>
                    <p className={'quantity-desc'}>
                        <span className={'minus'} onClick={() => decQty()}> <AiOutlineMinus/> </span>
                        <span className={'num'}> {qty}</span>
                        <span className={'plus'} onClick={() => incQty()}> <AiOutlinePlus/> </span>
                    </p>
                    <div className={'buttons'}>
                        <button className={'add-to-cart'} onClick={function () {onAdd(product,qty)}}>Add to Cart
                        </button>
                        <button className={'buy-now'}>Buy Now</button>

                    </div>

                </div>


            </div>

            <div className={'maylike-products-wrapper'}>

                <div>
                    <h2 className={'maylike-products-container'}>May Also Like</h2>
                    <div className={'marquee'}>
                        <div className={'maylike-products-container track'}>
                            {products?.map((product) => (
                                <Product product={product} link={`product/${product.slug.current}`}
                                         key={product._id}
                                />

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )


}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"]{
    slug{
        current}
}`
    const products = await client.fetch(query);
    const paths = products.map((product) => ({
        params: {slug: product.slug.current}
    }))
    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({params: {slug}}) => {
    const query = `*[_type == "product" && slug.current =='${slug}'][0]`;
    const productsQuery = `*[_type == "product"]`;
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);


    return {
        props: {products, product}
    }
}


export default ProductDetails;