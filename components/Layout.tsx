// @ts-ignore
 import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

// @ts-ignore
const Layout = ({children}) => {
  return (
    <>


         <Head>
             <title> Shop Headphones</title>
         </Head>

        <header>
            <Navbar/>
        </header>

         <main>
             <div className={'main-container'}>{children}</div>
         </main>

         <footer>
             <Footer/>

         </footer>



    </>
  );
};

export  default  Layout;