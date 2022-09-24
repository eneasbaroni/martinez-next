import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout"

const Input = ({placeholder, name, label, foo}) => { 
  return (
    <div className="formGroup">
        {<label htmlFor={name}>{label}</label>}
        <input required placeholder={placeholder} className="userInput" type="text" name={name} id={name} onChange={foo}></input>
    </div>
  )
}


const Contacto = () => {

  const [contact, setContact] = useState({
    nombre:"",
    apellido:"",
    telefono:"",
    email:"",
    comentario:""
  }) 

  // Expresiones regulares para los campos del formulario
  // const nombreRegex = /^[\s\S]{2,25}$/i   
  const nombreRegex = /^[a-zA-ZÀ-ÿ\s]{2,25}$/i
  const apellidoRegex = /^[a-zA-ZÀ-ÿ\s]{2,25}$/i // eslint-disable-next-line
  const telefonoRegex = /^[\+]?[0-9]{3,20}$/im // eslint-disable-next-line
  const emailRegex = /^[\w_\.-]+@[\w\.-]+\.[a-z\.]{2,6}$/i 
  const comentarioRegex = /^[\s\S]{1,300}$/i
  
  const handleInputChange = (event) => {
    setContact({
      ...contact,
      [event.target.name] : event.target.value
    })
  } 

  const sendData = (e) => {
    e.preventDefault();   
    console.log('SUCCESS!', contact);    
  }

/*   const sendData = (e) => {
    e.preventDefault();    
    send(
      //los keys de emailJS https://www.emailjs.com/
      process.env.REACT_APP_JS_SERVICE_ID,
      process.env.REACT_APP_JS_TEMPLATE_IDB,
      user,
      process.env.REACT_APP_JS_USER_ID 
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      //navigate("/success")
    })
    .catch((err) => {
      
      console.log('FAILED...', err);
    });
  } */




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
        <div className="main contactoContainer align-items-end col-12 px-md-5 px-3 row">
          {/* <div className="mainTitle col-12 row">
            <p className="h2">CONTACTANOS</p>            
          </div> */}

          <div className="sectionContainer">
            <div className='contacDataContainer'>
            <h3 className="contacTitle">Contacto</h3>
            <p className="contacData">San Juan 462 (Local 1) - Villa Maria - CBA</p>
            <p className="contacData">3535085782 - 3534128373</p>
            <p className="contacData">info@martinezrubiano.com.ar</p>
            </div>
            
            <form className="formulario" onSubmit={sendData}>
              
              <legend className="formTitle">Formulario de Contacto</legend>        
              <Input placeholder="Nombre" name="nombre" label="Nombre" foo={handleInputChange}/>        
              <Input placeholder="Apellido" name="apellido" label="Apellido" foo={handleInputChange}/>
              <Input placeholder="Telefono (sin guiones, sin 0 y sin 15)" name="telefono" label="Telefono" foo={handleInputChange}/>
              <Input placeholder="E-mail" name="email" label="Email" foo={handleInputChange}/> 
              <Input placeholder="Dejanos un Mensaje" name="comentario" label="Mensaje" foo={handleInputChange}/> 

              {nombreRegex.test(contact.nombre) && apellidoRegex.test(contact.apellido) && telefonoRegex.test(contact.telefono) && emailRegex.test(contact.email) && comentarioRegex.test(contact.descripcion)
                ?<button className="enviarBtn" type="submit">Enviar</button>        
                :<button className="enviarBtnDesabilitado" disabled type="submit">Enviar</button>
              }       
          
            </form>     
          
          </div>

        </div>

      </main>
    </Layout>
  )
}

export default Contacto
