import { Link } from "react-router-dom"

export const HeroCard = ({ 
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
 }) => {

    const heroImgUrl = `/heroes/${id}.jpg`
  return (
    <div className="col mb-3">
        <div className="card animate__animated animate__fadeIn">
            <div className="row no-gutters">
                <div className="col-4 ">
                    <img src={heroImgUrl} alt={superhero} className="card-img"/>
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>    
                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>
                        <Link to={`/hero/${id}`}>Mas informacion</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
