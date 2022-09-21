import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout"

/* const Input = ({placeholder, name, label, foo}) => { 
  return (
    <>
        <label htmlFor={name}>{label}</label>
        <input required placeholder={placeholder} className="userInput py-1 ps-1 col-12 mb-3" type="text" name={name} id={name} onChange={foo}></input>
    </>
  )
} */


const Contacto = () => {

  /* const [contact, setContact] = useState({
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
  } */

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
        <div className="main align-items-end col-12 px-md-5 px-3 row">
          <div className="mainTitle col-12 row">
            <p className="h2">CONTACTANOS</p>            
          </div>

          <div className="sectionContainer">
       {/*    <form className="formulario col-12 col-md-8" onSubmit={sendData}>
            
            <legend className="mb-2"><strong>Formulario de Contacto</strong></legend>        
            <Input placeholder="Nombre" name="nombre" label="Nombre" foo={handleInputChange}/>        
            <Input placeholder="Apellido" name="apellido" label="Apellido" foo={handleInputChange}/>
            <Input placeholder="Telefono (sin guiones, sin 0 y sin 15)" name="telefono" label="Telefono" foo={handleInputChange}/>
            <Input placeholder="E-mail" name="email" label="Email" foo={handleInputChange}/> 
            <Input placeholder="Dejanos un Mensaje" name="comentario" label="Dejanos un mensaje" foo={handleInputChange}/> 

            {nombreRegex.test(contact.nombre) && apellidoRegex.test(contact.apellido) && telefonoRegex.test(contact.telefono) && emailRegex.test(contact.email) && comentarioRegex.test(contact.descripcion)
              ?<button className="col-2 enviarBtn" type="submit">Enviar</button>        
              :<button className="col-2 enviarBtnDesabilitado" disabled type="submit">Enviar</button>
            }       
        
          </form>  */}    
          
          </div>

        </div>

      </main>
    </Layout>
  )
}

export default Contacto
