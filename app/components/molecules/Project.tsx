import {ProjectsDTO, TechnosDTO} from "@/app/data/projects";

interface ProjectProps {
    project: ProjectsDTO;
}

export function Project({project}: ProjectProps){

    const {title, year, technos, href, description, id} = project;

    return (
        <div className='border-t  border-t-gray-lighter flex items-center justify-between gap-4 py-8'>
            <div className='flex flex-col gap-4'>
                <div className={"flex flex-col gap-2"}>
                <div className='flex flex-wrap items-center gap-3'>
                    <p className='text-xl sm:text-2xl font-semibold'>{title}</p>
                    <span className='py-[1px] px-2 hover:bg-gray-lighter border-gray-light border rounded-full text-gray-light text-sm'>{year}</span>
                </div>
                <p className={"text-gray-400 text-sm"}>{description}</p>
                </div>
                <div className='flex flex-wrap items-center gap-4'>
                    {technos.map((techno, index) => (
                        <div key={index} className='flex items-center gap-1 text-xs'><span className={`w-3 h-3 rounded-full`} style={{backgroundColor: techno.color}}></span>{techno.label}</div>
                    ))}
                </div>
            </div>
            <a href={href} target="_blank" className='px-2.5 py-1.5 hover:bg-orange-light bg-orange rounded-md text-sm flex items-center gap-1'>Visiter <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fill-rule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clip-rule="evenodd" />
            </svg>
            </a>
        </div>
    )
}