import Image from "next/image"
import Link from "next/link"

const SelectedWork = ({obra}) => {
  return (
    <div className="row workContainer">
      <div className="dataContainer row pb-1">
        <div className="col-12">
          <div className="obraNombre">{obra.nombre}</div>
          <div className="obraTipo">{obra.tipo}</div>
          <div className="obraAnio">{obra.año}</div>
        </div>
        <Link href={`/obras/${obra.id}`}><div className="col-12 workVer">Ver Galeria →</div></Link>
      </div>
      <div className="row imagesContainer">
        <div className="obraImg"><Image src={obra.images[0]} layout='fill' objectFit="cover" alt="Imagen de la Obra"/></div>
        <div className="obraImg"><Image src={obra.images[1]} layout='fill' objectFit="cover" alt="Imagen de la Obra"/></div>
      </div>

    </div>
  )
}

export default SelectedWork