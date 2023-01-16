import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import sanityClient from "../client.js"
import {FaRegHandPointRight} from 'react-icons/fa'

export default function Project() {

    const [projectData , setProjectData] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            data,
            place,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data))
        .catch(console.log(Error))
    }, [])


    return (
        <main className=' bg-green-100 min-h-screen p-12'>
            <section className=' container mx-auto'>
                <h1 className='text-5xl flex justify-center cursive'>My Projects</h1>
                <h2 className=' text-lg text-gray-600 flex justify-center mb-12'>Welcome to my projects</h2>
                <section className=' grid grid-cols-2 gap-8'>
                    {projectData && projectData.map((project , index)=>(
                    <article className=' relative rounded-lg shadow-xl bg-white p-16'>
                        <h3 className=' text-gray-800 text-3xl font-bold mb-2 hover:text-red-700'>
                            <a href={project.link} alt={project.title} target="_blank" rel='noopener noreferrer'>{project.title}</a>
                        </h3>
                        <div className=' text-gray-500 text-xs space-x-4'>
                            <span>
                                <strong className=' font-bold'>Finished on</strong>:{" "}
                                {new Date(project.data).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className=' font-bold'>Company</strong>:{" "}
                                {project.place}
                            </span>
                            <span>
                                <strong className=' font-bold'>Type</strong>:{" "}
                                {project.projectType}
                            </span>
                                <p className=' my-6 text-lg text-gray-700 leading-relaxed'>{project.description}</p>
                            <a href={project.link} alt={project.title} target="_blank" rel='noopener noreferrer' className=' text-red-500 font-bold hover:underline hover:text-red-400'>
                                <p><FaRegHandPointRight className=' relative right-5 top-4'></FaRegHandPointRight>{" "}Viev The Project</p>
                            
                            </a>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}
