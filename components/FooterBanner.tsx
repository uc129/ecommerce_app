 import Link from "next/link";
 import {urlFor} from "../lib/client";
 // @ts-ignore

 const FooterBanner= ({footerBanner: {discount,image, largeText1, largeText2, saleTime,smallText,midText,buttonText,product,desc}}) => {
    // @ts-ignore
     return(
        <div className="footer-banner-container">
            <div className={'banner-desc'}>
                <div className={'left'}>
                    <p>{discount}</p>
                    <h3>{largeText1}</h3>
                    <h3>{largeText2}</h3>
                    <p>{saleTime}</p>
                </div>
                <div className={'right'}>
                    <p>{smallText}</p>
                    <p>{midText}</p>
                    <p>{desc}</p>
                    <Link href={`/product/${product}`}>
                        <button>{buttonText}</button>
                    </Link>
                </div>
                <img
                    className={'footer-banner-image'}
                    // @ts-ignore
                    src={urlFor(image)}
                    alt="footer-banner"
                />
            </div>
        </div>
    )
}

export default FooterBanner