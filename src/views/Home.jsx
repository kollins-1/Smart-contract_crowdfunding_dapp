import { useEffect } from "react"
import AddProject from "../components/AddProject"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import { loadProjects } from "../services/blockchain"
import { useGlobalState } from "../store"

const Home = () => {

  const [projects] = useGlobalState('projects')

  useEffect(async () => {
    await loadProjects()
  }, [])
  return (
    <>
      <Hero />
      <Projects projects ={projects} />
      <AddProject />
    </>
  )
}

export default Home