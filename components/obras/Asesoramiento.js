
const Asesoramiento = () => {
  return (
    <div className="asesoramientoContainer">
      <div>
        <p className="h2">ASESORAMIENTO ESPECIALIZADO RAPIDO </p>              
        {/* <p className="h2">ESPECIALIZADO </p>              
        <p className="h2">RÁPIDO</p>  */}             
      </div>
      <div className=""> 
        <div className="mainContactContainer row">            
          <p className="selectedText pb-3">¿Necesita una respuesta rápida? Nuestros asesores están para ayudarle. ¡Contáctenos!</p>   
          <div className="astoBtns">
            <div className="pb-1">
            <a href={"https://wa.me/+5493535085782"} target="_blank">
              <div className="mediaButton"> whatsapp →</div> 
            </a>      
            </div>
            <div className="pb-1 ms-2">
            <a href="mailto:info@martinezrubiano.com.ar">
              <div className="mediaButton"> email →</div> 
              </a>      
            </div>
                  
          </div>
        </div>    
      </div>
    </div>
  )
}

export default Asesoramiento