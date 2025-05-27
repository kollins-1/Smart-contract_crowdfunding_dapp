import BackProject from "../components/BackProject"
import DeleteProject from "../components/DeleteProject"
import EditProject from "../components/EditProject"
import ProjectDetails from "../components/ProjectDetails"
import ProjectFunders from "../components/ProjectFunders"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { getBackers, loadProject } from "../services/blockchain"
import { useGlobalState } from "../store"

const Project = () => {

  const { id } = useParams()
  const [loaded, setLoaded] = useState(false)
  const [project] = useGlobalState('project')
  const [backers] = useGlobalState('backers')

  useEffect(async () => {
    await loadProject(id)
    await getBackers(id)
    setLoaded(true)
  }, [])

  return loaded ? (
    <>
      <ProjectDetails project={project} />
      <ProjectFunders backers={backers} />
      <EditProject project={project} />
      <BackProject project={project} />
      <DeleteProject project={project} />
    </>
  ) : null
}

export default Project