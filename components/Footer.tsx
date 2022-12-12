import {AiFillInstagram, AiFillTwitterCircle} from "react-icons/ai";

const Footer=()=>{
    return(
        <footer className={'footer-container'}>
            <p>© 2021  All rights reserved</p>
            <p className={'icons'}>
                <AiFillInstagram/>
                <AiFillTwitterCircle/>
            </p>
        </footer>
    )
}

export default Footer