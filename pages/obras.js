import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout"
import Asesoramiento from "../components/obras/Asesoramiento";
import Obra from "../components/obras/Obra";
import { server } from "../config/index";

//TENGO QUE TRAER LA DB PORQUE EN BUILD NO FUNCIONA LA API
import db from '../db/data'

export const getStaticProps = async () => {
  //NO FUNCIONA YA QUE NO PUEDE GENERAR UNA CONSULTA EN TIEMPO DE BUILD YA QUE NO ESTÁ DISPONIBLE LA API
  /* const res = await fetch(`${server}/api/obras`);
  const obras = await res.json(); */ 
  
  const obras = db
  
  
  return {
    props: {
      obras
    },
    revalidate: 3600
  } 
}


const Obras = ({obras}) => {
  const [opacity, setOpacity] = useState(0)

  const router = useRouter()
  const { pathname } = router;
  

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpacity(1)
  }, [pathname]);



  return (
    <Layout>
      <main className="divContainer row" style={{opacity: `${opacity}`}}>
      <div className="main col-12 px-md-5 px-3 row">
        <div className="mainTitle">
          <p className="h2">NUESTRAS<br/>OBRAS</p>          
        </div>
        <div className="obras">
          {obras.map ((el, i) => {
            return (
              <Obra obra={el} key={i} id={i+1}/>
            )
          })}
        </div>        
        <Asesoramiento/>

      </div>
    </main>
    </Layout>
  )
}

export default Obras
