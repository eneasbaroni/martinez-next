import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Layout from "../components/Layout/Layout"

export const getStaticProps = async () => {
  const equipo = [
    {
      nombre: "Nicolas Martinez",
      cargo: "Gerente General",
      comentario: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis magni eum fugit exercitationem id rerum alias officiis in provident explicabo?",
      img: "/images/equipo/Nicolas.jpg",
    },
    {
      nombre: "Carlos Rubiano",
      cargo: "Gerente General",
      comentario: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis magni eum fugit exercitationem id rerum alias officiis in provident explicabo?",
      img: "/images/equipo/Carlos.jpg",
    },
    {
      nombre: "Juan Lopez",
      cargo: "Gerente General",
      comentario: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis magni eum fugit exercitationem id rerum alias officiis in provident explicabo?",
      img: "/images/equipo/Juan.jpg",
    }
  ]   
  
  
  return {
    props: {
      equipo
    },
    revalidate: 3600
  } 
}


const Nosotros = ({equipo}) => {

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
        <div className="main px-md-5 px-3 row">

          <div className="mainTitle">
            <p className="h2">NOSOTROS</p>            
          </div>

          <div className="sectionContainer borderBottom">
            {equipo.map ((el, i) => {
                return (
                  <div className="equipoItem" key={i} >
                    <div className="equipoImg ">
                      <Image layout="fill" objectFit="cover" src={el.img} alt={el.nombre} />
                    </div>
                    <div className="equipoInfo">
                      <p className="equipoTitle">{el.nombre}</p>
                      <p className="equipoP">{el.cargo}</p>
                      <p className="equipoP">{el.comentario}</p>
                    </div>
                  </div> 
                )
            })}
          </div>

          <div className="sectionContainer mision">
            <div>
              <p className="h2">NUESTRA MISION</p>
              <p>Texto que hable de la mision y los objetivos de la empresa ... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus iste aut nam accusamus itaque nemo sequi dolore tenetur, quibusdam quidem amet quis incidunt! Iste sapiente quia modi iure quis voluptates, quisquam eveniet suscipit dolor quaerat aspernatur accusamus, libero impedit veritatis laboriosam blanditiis commodi. Dolores odio voluptate in, soluta nobis omnis!</p>
            </div>

            <div className="misionImg">
              <Image layout="fill" objectFit="cover" src='/images/equipo/equipo.jpg' alt='Imagen equipo de trabajo' />              
            </div>
          </div>
          
        </div> 
      </main>
    </Layout>
  )
}

export default Nosotros
