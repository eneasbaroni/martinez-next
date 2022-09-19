const SelectedWork = ({obra, id}) => {
  return (
    <div className="row workContainer">
      <div className="col-4 dataContainer row pb-1">
        <div className="col-12">
          <div className="obraNombre">{obra.nombre}</div>
          <div className="obraTipo">{obra.tipo}</div>
          <div className="obraAnio">{obra.año}</div>
        </div>
        <div className="col-12 workVer">Ver Galeria →</div>
      </div>
      <div className="col-8 row imagesContainer">
        <img src={obra.images[0]} alt="Imagen de la Obra" className="obraImg col-5"></img>
        <img src={obra.images[1]} alt="Imagen de la Obra" className="obraImg col-7"></img>        
      </div>

    </div>
  )
}

export default SelectedWork