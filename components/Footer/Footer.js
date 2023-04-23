import Image from 'next/image'

const Footer = () => {  
  return (
    <footer className="container-fluid row ">
      <div className="col-12 footer justify-content-between align-items-center row">
        <div className="col-12 row">
          <p className="col-12 text-center footerTitle"><span>Martinez Rubiano</span> Constructora</p>         
        </div>
        <div className="col-12 text-center mt-2">
          <p className="col-12">Tucumán 1597 - Villa María - Córdoba</p>
          <p className="col-12">3535085782 - 3534128373</p>
          <p className="col-12">info@martinezrubiano.com.ar</p>
        </div>       
        <div className="col-12 text-center mt-2">
          <div className="mailIcon">
            <a href="mailto:info@martinezrubiano.com.ar">
              <Image layout='fill'  src='/images/mailIcon.svg' alt="mailIcon"/>
            </a>
          </div>
          <p className="col-12">© 2022. Todos los derechos reservados</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer