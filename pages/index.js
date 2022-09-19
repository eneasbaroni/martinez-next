import Layout from "../components/Layout/Layout"
import SelectedWork from "../components/home/SelectedWork/SelectedWork";
import Orgullo from "../components/home/Orgullo/Orgullo";
import {server} from '../config/index'

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
      <main className="divContainer row" style={{opacity: `${opacity}`}}>
        <h1 className="col-12 h1 px-md-5 px-3 mainh1">DESARROLLAMOS PROYECTOS LLAVE EN MANO ACORDES A TUS NECESIDADES</h1>
        <p className="col-12  px-md-5 px-3 mb-5 mainP">Desarollando el sueño de la casa propia desde 2000</p>
        <img src='/images/mainBanner.png' alt="baner" className="mainBanner"></img>
        <div className="col-12 px-md-5 px-3 row">
          <div className="selectedContainer col-12 row pt-5">
            <div className="col-4">
              <p className="h2">OBRAS</p>
              <p className="h2">SELECCIONADAS</p>
            </div>
            <div className="col-8 row justify-content-end ">          
              <p className="col-4 selectedText pb-3">Contamos con la experiencia,  de un proceso eficiente y el coraje para afrontar cualquier reto con la alegría, responsabilidad y la determinación que nos define.</p>          
            </div>
          </div>
          
          {obrasSeleccionadas.map ((el, i) => {
            return (
              <SelectedWork obra={el} key={i} id={i}/>
            )
          })}
          
          <Orgullo/>
          
        </div>
      </main> 
    </Layout>
  )
}

export default Home
