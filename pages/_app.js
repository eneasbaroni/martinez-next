import '../styles/globals.css'
import '../styles/grid.css'
import '../styles/header.css'
import "../styles/footer.css" 
import "../styles/selectedWork.css" 
import "../styles/home.css" 
import "../styles/obras.css" 
import "../styles/nosotros.css" 
import "../styles/contacto.css" 
import "../styles/obra.css" 
import "../styles/socials.css" 
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  const { pathname } = router;
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  
  return <Component {...pageProps} />
}

export default MyApp
