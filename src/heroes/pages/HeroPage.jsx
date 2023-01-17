import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPage = () => {

  const {id} = useParams();

  const hero = useMemo(() => getHeroById(id), [id]);
  
  const navigate = useNavigate();
  const onNavigateBack = () => {
    navigate(-1);     
  }

  if( !hero ) {
    return <Navigate to="/marvel" />
  }

  const { superhero, alter_ego, first_appearance, publisher, characters } = hero;

  return (
    <div className="mt-5 row animate__animated animate__fadeInLeftBig">
      <div className="col-4">
        <img src={`/assets/heroes/${hero.id}.jpg`} alt={hero.id} className="img-thumbnail"/>
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego:</b> {alter_ego}</li>
          <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
          <li className="list-group-item"><b>First appearance:</b> {first_appearance}</li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>
        <button
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }
        >Back</button>
      </div>
    </div>
  )
}
