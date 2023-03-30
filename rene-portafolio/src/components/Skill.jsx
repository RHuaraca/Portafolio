export default function Skill ({logo, title, nivel}){
  console.log(logo)
  return(
    <div className="skill_container">
      <img src={logo} alt={title} />
      <h6>{title}</h6>
      {/* <label>Nivel:{nivel}</label> */}
    </div>
  )
}
