import { HeroList } from "../components"

export const MarvelPage = () => {
  return (
    <>
      <h1 
      className="text-center my-4 fw-bold"
      >
        Marvel
      </h1>
      <HeroList publisher='Marvel Comics'/>
    </>
  )
}
