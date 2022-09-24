import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import db from '../../db/data'

const obras = db

export const getStaticPaths = async () => {   

  //creo un array con llamado paths, donde voy a hacer un map del listados de obras, y por cada obra retorno un objeto con params, que es un objeto con el id de la obra
  const paths = obras.map((obra) => {
    return {      
      params: {id: obra.id}       
    }
  })  

  return {
    //paths : paths
    paths, // --> esto es lo mismo que paths: paths
    //Incremetanl Static Regeneration
    fallback: false //si no encuentra el id, devuelve un 4
  }  

}

export const getStaticProps = async ({params}) => {  

  let id = params.id;   
  const obra = obras.find(obra => obra.id === id)   

  return {
    props: {
      obra  
    }
  }
}

const Obra = ( {obra} ) => {

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
        <div className=" px-md-5 px-3 row">
          <img src={obra.images[0]} alt="baner" className="obraBanner"></img>
          <div className="mainTitle text-center">
            <p className="h2">{obra.nombre.toUpperCase()}</p>            
          </div>

          <div className="sectionContainer">

            <div className='infoObraContainer borderBottom'>
              <p className='infoDescription'>{obra.descripcion}</p>              
              <div className='infoItem'><p><span>OBRA</span></p><p>{obra.nombre.toUpperCase()}</p></div>
              <div className='infoItem'><p><span>AÑO</span></p><p>{obra.año.toUpperCase()}</p></div>
              <div className='infoItem'><p><span>TIPO</span></p><p>{obra.tipo.toUpperCase()}</p></div>
              <div className='infoItem'><p><span>SUPERICIE</span></p><p>{obra.superficie.toUpperCase()}</p></div>
            </div>
            
            <div className='obraImages'>
              {obra.images.map((img, i) => {
                return (
                  <div className='obraImageContainer' key={i}>
                    <Image layout='fill' objectFit="cover" src={img} alt={obra.nombre} />
                  </div>
                )
              })}

            </div>
            <Link href={`/obras`}><div className="backToObras">Volver a Obras →</div></Link> 

          </div>


        </div>
      </main>     
      

    </Layout>
  )
    
}

export default obra