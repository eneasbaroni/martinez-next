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
      nombre: "Cristian Velazquez",
      cargo: "Arquitecto",
      comentario: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis magni eum fugit exercitationem id rerum alias officiis in provident explicabo?",
      img: "/images/equipo/Juan.jpg",
    },
    {
      nombre: "Fernando Brussa",
      cargo: "Director Comercial",
      comentario: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis magni eum fugit exercitationem id rerum alias officiis in provident explicabo?",
      img: "/images/equipo/Juan.jpg",
    },
    {
      nombre: "Edgar García",
      cargo: "Supervisor General de Obras",
      comentario: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis magni eum fugit exercitationem id rerum alias officiis in provident explicabo?",
      img: "/images/equipo/Juan.jpg",
    },
    {
      nombre: "Hugo Quevedo",
      cargo: "Encargado de Logística y Post Venta",
      comentario: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis magni eum fugit exercitationem id rerum alias officiis in provident explicabo?",
      img: "/images/equipo/Juan.jpg",
    },
    
  ]
  
  const tareas = [
    {
      nombre: 'CONSTRUCCION DE VIVIENDA',
      descripcion: 'Gestionamos soluciones integrales con opción de construcción por etapas o llave en mano.'
    },
    {
      nombre: 'PROYECTO DE INVERSIÓN',
      descripcion: 'Evaluamos el mercado de acuerdo al proyecto a desarrollar, con el objetivo de lograr un balance óptimo en relación precio calidad.'
    },
    {
      nombre: 'PROYECTO LLAVE EN MANO PARA MUNICIPIOS O GRANDES EMPRESAS',
      descripcion: 'Ofrecemos nuestros servicios para la construcción de tandas de viviendas de calidad estandarizada.'
    }
  ]
  
  
  return {
    props: {
      equipo, 
      tareas
    },
    revalidate: 3600
  } 
}


const Nosotros = ({equipo, tareas}) => {

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
            <p className="h2">LIDERES EN CONSTRUCCION LLAVE EN MANO</p>            
          </div>

          
          <div  className="mainBanner"><Image src='/images/nosotrosBanner.jpg' layout="fill" alt="baner"/></div>

          <div className="sectionContainer mision">
            <div>              
              <p>Bienvenido a Martinez Rubiano.</p>
              <p>Somos una empresa constructora con sede en Villa María, Córdoba, Argentina que cumple sueños de grandes y pequeños inversores desde el año 2020.</p>
              <p>Nuestra experiencia es el resultado de ofrecer calidad y el mejor servicio a cada paso, haciendo de la experiencia de construir, una experiencia transparente y placentera.</p>
              <p>La mejora continua, la innovación y la confianza son nuestros motores para construir un futuro mejor para todos.</p>
            </div>
            
          </div>
          

          <div className="sectionContainer equipo borderBottom">

            <p className="h2 equipoContainerTitle">QUE HACEMOS</p>

            {tareas.map ((el, i) => {
                return (
                  <div className="equipoItem" key={i} >                    
                    <div className="equipoInfo">
                      <p className="equipoTitle">{el.nombre.toUpperCase()}</p>
                      <p className="equipoP">{el.descripcion}</p>                      
                    </div>
                  </div> 
                )
            })}

          </div>

          <div className="sectionContainer equipo borderBottom">

            <p className="h2 equipoContainerTitle">EQUIPO</p>

            {equipo.map ((el, i) => {
                return (
                  <div className="equipoItem" key={i} >                    
                    <div className="equipoInfo">
                      <p className="equipoTitle">{el.nombre.toUpperCase()}</p>
                      <p className="equipoP">{el.cargo}</p>
                      {/* <p className="equipoP">{el.comentario}</p> */}
                    </div>
                  </div> 
                )
            })}

          </div>

          {/* <div className="comentarios">
            <div className="comentariosTitle">
              <p className="h2">LO QUE DICEN </p>
              <p className="h2">NUESTROS CLIENTES</p>
            </div>
            <div className="comentariosContainer">
              <p>&quot;ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit&quot;</p>
              <p>&quot;sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur&quot;</p>
              <p>&quot;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.&quot;</p>
              <p>&quot;sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur&quot;</p>
          </div>
        </div> */}
          
        </div> 
      </main>
    </Layout>
  )
}

export default Nosotros
