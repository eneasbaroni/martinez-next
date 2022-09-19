import Image from 'next/image'

const Footer = () => {  
  return (
    <footer className="container-fluid row ">
      <div className="col-12 footer justify-content-between align-items-center row">
        <div className="col-4 row">
          <p className="col-12">Martinez Rubiano Construciones</p>
          <div className="col-12 mt-2">            
            <img className="mediaIcon me-3" src='/images/instaIcon.svg' alt="instaIcon"/>
            <img className="mediaIcon me-3" src='/images/faceIcon.svg' alt="faceIcon"/>
            <img className="mediaIcon me-3" src='/images/waIcon.svg' alt="waIcon"/>
          </div>
        </div>
        <div className="col-4 text-center">
          <img className="mailIcon" src='/images/mailIcon.svg' alt="mailIcon"/>
          <p className="col-12">© 2022. Todos los derechos reservados</p>
        </div>
        <div className="col-4 text-end">
          <p className="col-12">San Juan 462 (Local 1) - Villa Maria - CBA</p>
          <p className="col-12">3535085782 - 3534128373</p>
          <p className="col-12">info@martinezrubiano.com.ar</p>
        </div>       

      </div>
    </footer>
  )
}

export default Footer