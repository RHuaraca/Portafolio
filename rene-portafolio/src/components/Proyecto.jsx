export default function Proyecto ({imagen, titulo, descripcion}){
  const parrafos = descripcion.split("\n");
  //console.log(parrafos)
  return(
    <div className="proyecto_container" >
      <img src={imagen} alt={`imagen de ${titulo}`} />
      <div className="visible_container">
        <div className="proyecto_text_container">
          <h6>{titulo}</h6>
          {parrafos?.map((parrafo,i)=>(<p key={i}>{parrafo}{"\n"}</p>))}
        </div>
        <div className="botones">
          <button>ver vídeo</button>
          <button>ver código</button>
          <button>visitar página</button>
        </div>
      </div>
    </div>
  )
}
    
