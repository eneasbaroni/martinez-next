import { useEffect, useState } from "react"

const Obra = ({obra, id}) => {
  const [border, setBorder] = useState("")   

  useEffect(() => {
    if (id === 1 || id === 4 || id === 7) {
      setBorder("")
    }else {
      setBorder("bLeft")
    }// eslint-disable-next-line      
  }, [])
  
  return (
    <div className={`row obraContainer col-4 row ${border}`}>
      <img src={obra.images[0]} alt="Imagen de la Obra" className="obraImage col-12"></img>    
      <div className="obraNombre col-12">{obra.nombre}</div>
      <div className="obraTipo col-12">{obra.tipo}</div>
      <div className="obraAnio col-6">{obra.año}</div>
      <div className="col-6 text-end obraVer">Ver Galeria →</div>
  </div>
  )
}

export default Obra