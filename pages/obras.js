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
      <div className="obrasContainer align-items-end col-12 px-md-5 px-3 row">
        <div className="obrasTitle col-12 row">
          <p className="h2">NUESTRAS</p>
          <p className="h2">OBRAS</p>
        </div>
        <div className="obras col-12 row">
        {obras.map ((el, i) => {
          return (
            <Obra obra={el} key={i} id={i+1}/>
          )
        })}
        </div>
        <div className="comentarios col-12">
          <div className="comentariosTitle col-12 row">
            <p className="h2">COMENTARIO </p>
            <p className="h2">DE CLIENTES</p>
          </div>
          <div className="col-12 mt-5 row">
            <p className="col-4 pe-3 ">ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
            <p className="col-4 px-3 bLeft">sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
            <p className="col-4 ps-3 bLeft">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
          </div>
        </div>
        <Asesoramiento/>

      </div>
    </main>
    </Layout>
  )
}

export default Obras
