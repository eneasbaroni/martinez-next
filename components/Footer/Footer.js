import Image from 'next/image'

const Footer = () => {  
  return (
    <footer className="container-fluid row ">
      <div className="col-12 footer justify-content-between align-items-center row">
        <div className="col-12 row">
          <p className="col-12 text-center footerTitle"><span>Martinez Rubiano</span> Construciones</p>         
        </div>
        <div className="col-12 text-center mt-2">
          <p className="col-12">San Juan 462 (Local 1) - Villa Maria - CBA</p>
          <p className="col-12">3535085782 - 3534128373</p>
          <p className="col-12">info@martinezrubiano.com.ar</p>
        </div>       
        <div className="col-12 text-center mt-2">
          <div className="mailIcon"><Image layout='fill'  src='/images/mailIcon.svg' alt="mailIcon"/></div>
          <p className="col-12">© 2022. Todos los derechos reservados</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer