import {projects, ProjectsDTO} from "@/app/data/projects";
import { Project } from "../molecules/Project";

interface Props {
    sectionRef: any;
}

export default function Projects({ sectionRef }: Props){
    return (
        <div ref={sectionRef} className='mt-16 w-full mb-32' id="projets">
            <h3 className='text-3xl uppercase font-semibold mb-2 '>Projets</h3>
            {projects.map((project: ProjectsDTO, index) => (
                <Project key={index} project={project} />
                ))}
        </div>
    )
}