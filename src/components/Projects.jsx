import { Link } from "react-router-dom"
import { truncate, daysRemaining } from "../store"
import { useState, useEffect } from "react"

const Projects = ({ projects }) => {

    const [end, setEnd] = useState(4)
    const [count] = useState(4)
    const [collection, setCollection] = useState([])

    const getCollection = () => projects.slice(0, end)

    useEffect(() => {
        setCollection(getCollection())
    }, [projects, end])

  return (
    <div className="flex flex-col px-6">
        <div className="flex justify-center items-center flex-wrap">
            {collection.map((project, i) => (<ProjectCard key={i} project= {project} />))}
        </div>

        {projects.length > collection.length ? (

            <div className="flex justify-center items-center my-5">
            <button
                type="button"
                className="inline-block px-6 py-2.5 bg-green-600
            text-white font-medium text-xs leading-tight uppercase
            rounded-full shadow-md hover:bg-green-700"
                onClick={() => setEnd(end + count)}
            >
                Load more
            </button>
            </div>

        ) : null}
    </div>
  )
}

const ProjectCard = ({ project }) => (
    <div id="projects" className="flex justify-center m-4 rounded-lg shadow-lg bg-white">
        <Link to={'/projects/' + project.id} >
            <img src={project.imageURL} alt={project.title} className="rounded-xl h-64 w-full object-cover"/> 
            <div className="p-4">
                <h4>{project.title}</h4>
                <div className="flex flex-col">
                    <div className="flex justify-start space-x-2 items-center mb-4">
                        <small className="text-gray-700">{truncate(project.owner, 4, 4, 11)}</small>
                    </div>

                    <small className="text-gray-500">
                        {expired ? 'Expired' : daysRemaining(project.expiresAt) + ' left'}
                    </small>
                </div>
                <div className="w-full bg-gray-300 overflow-hidden">
                    <div className="bg-red-600 text-xs font-medium text-green-100 text-center p-0.5 leading-none rounded-l-full h-1" style={{ width: `${(project.raised / project.cost) * 100}%` }}>
                    </div>
                </div>
                
                <div className="flex justify-between items-center font-bold mt-1 mb-2 text-gray-700">
                    <small>{project.raised} ETH Raised</small>
                    <small className="flex justify-start items-center">
                        <span>{project.cost} ETH</span>
                    </small>
                </div>

                <div className="flex justify-between items-center flex-wrap mt-4 mb-2 text-gray-500 font-bold">
                    <small>
                        {project.backers} Funder{project.backers == 1 ? '' : 's'}
                    </small>
                    <div>
                        {expired ? (
                            <small className="text-red-500">Expired</small>
                        ) : project?.status == 0 ? (
                            <small className="text-gray-500">Open</small>
                        ) : project?.status == 1 ? (
                            <small className="text-green-500">Accepted</small>
                        ) : project?.status == 2 ? (
                            <small className="text-gray-500">Reverted</small>
                        ) : project?.status == 3 ? (
                            <small className="text-red-500">Deleted</small>
                        ) : (
                            <small className="text-orange-500">Paid</small>
                        )}
                    </div>
                </div>
            </div> 
        </Link>
    </div>
)

export default Projects