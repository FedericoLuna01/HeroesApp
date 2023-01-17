import { HeroList } from "../components"

export const DCPage = () => {
  return (
    <>
      <h1 
      className="text-center my-4 fw-bold"
      >
        DC Comics
      </h1>
      <HeroList publisher='DC Comics'/>
    </>
  )
}
