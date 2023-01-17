import { useLocation, useNavigate } from "react-router-dom"
import queryString from 'query-string'
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroesByName } from "../helpers"

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse( location.search )
  
  const heroes = getHeroesByName(q)

  const { searchText, onInputChange} = useForm({
    searchText: q,
  })

  const handleForm = (e) => {
    e.preventDefault();

    navigate(`?q=${searchText}`)
  } 

  return (
    <>
      <div className="row flex-column flex-md-row mb-5 mt-3 animate__animated animate__fadeInLeft ">
        <div className="col-md-5 col-12 mb-4">
          <h2>Buscador</h2>
          <form 
            onSubmit={handleForm}
          >
            <input 
              type="text" 
              placeholder="Buscá un heroe"
              className="form-control"
              name="searchText"
              value={ searchText }
              onChange={ onInputChange }
            />
            <button className="btn btn-outline-primary mt-2">Buscar</button>
          </form>
        </div>
        <div className="col-md-7 col-12">
          <h2>Resultados</h2>
          {
            ( q === '' ) 
            ? <div className="alert alert-primary">Buscar un heroe</div>
            : (heroes.length === 0) 
            && <div className="alert alert-danger">No hay resultados para <b>{ q }</b></div>
          }
          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero}/>
            ))
          }
          
          
        </div>
      </div>
    </>
  )
}
