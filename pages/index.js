import Layout from "../components/Layout/Layout"
import SelectedWork from "../components/home/SelectedWork/SelectedWork";
import Orgullo from "../components/home/Orgullo/Orgullo";
import Image from 'next/image'


//TENGO QUE TRAER LA DB PORQUE EN BUILD NO FUNCIONA LA API
import db from '../db/data'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const getStaticProps = async () => {
  //NO FUNCIONA YA QUE NO PUEDE GENERAR UNA CONSULTA EN TIEMPO DE BUILD YA QUE NO ESTÁ DISPONIBLE LA API
  /* const res = await fetch(`${server}/api/obras`);
  const data = await res.json()      
  const obrasSeleccionadas = data.filter(el => el.seleccionada === true) */

  const obras = db
  const obrasSeleccionadas = obras.filter(el => el.seleccionada === true)

  
  
  return {
    props: {
      obrasSeleccionadas
    },
    revalidate: 3600
  } 
}

const Home = ({obrasSeleccionadas}) => {

  const [opacity, setOpacity] = useState(0)

  const router = useRouter()
  const { pathname } = router;

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpacity(1)
  }, [pathname]);
  
  return (
    <Layout>
      <main className="divContainer" style={{opacity: `${opacity}`}}>
        <h1 className="h1 px-md-5 px-3 mainh1">TU PROYECTO LLAVE EN MANO<br/>EN NUESTRAS MANOS</h1>
        <p className="px-md-5 px-3 mb-5 mainP">Construyendo el sueño de la casa propia desde el año 2020</p>
        <div className="mainBanner"><Image layout="fill" objectFit="cover" src='/images/mainBanner.png' alt="baner"/></div>
        <div className="px-md-5 px-3 row">
          <div className="mainTitle pt-5"> 
            <div>
              <p className="h2">OBRAS</p>              
            </div>
            <div>          
              {/* <p className="selectedText pb-3">Contamos con la experiencia,  de un proceso eficiente y el coraje para afrontar cualquier reto con la alegría, responsabilidad y la determinación que nos define.</p>           */}
              <p className="selectedText pb-3">Desarrollamos tu proyecto con la responsabilidad y la determinación que nos define.</p>          
            </div>
          </div>
          
          {obrasSeleccionadas.map ((el, i) => {
            return (
              <SelectedWork obra={el} key={i}/>
            )
          })}
          
          <Orgullo/>
          
        </div>
      </main> 
    </Layout>
  )
}

export default Home
