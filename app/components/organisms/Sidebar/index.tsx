/* eslint-disable @next/next/no-img-element */
import { InfoSection } from "./_components";
import { sidebarData } from "@/app/data/sidebar";
export function Sidebar() {
    return (
        <div className='md:min-w-[289px] md:w-[289px] md:max-w-[289px]  flex flex-col '>
            <div className="flex md:flex-col items-center md:items-start md:gap-0 gap-6 md:mb-0 mb-4 ">

                <img src="/profile-pic.jpg" alt={sidebarData.name} className='w-full max-w-[120px] md:max-w-full md:w-full border border-gray-border aspect-square bg-black rounded-full' />
                <div className='py-3'>
                    <h1 className='text-2xl font-semibold'>{sidebarData.name}</h1>
                    <h2 className='text-xl text-gray-light'>{sidebarData.job}</h2>
                </div>
            </div>
            <a href='mailto:josue.savy@gmail.com' className='w-full rounded-md py-2 font-medium text-sm bg-orange text-center hover:bg-orange-light'>josue.savy@gmail.com</a>
            <div className='my-4'>
                <p className='text-sm'> {sidebarData.age} · {sidebarData.location}</p>
            </div>
            <div className='flex items-center gap-1'>
                <svg viewBox="0 0 16 16" fill='#7d8590' version="1.1" width="16" height="16" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg>
                <p className='text-sm'>{sidebarData.enterprise}</p>
            </div>
            <div className='flex items-center gap-1 pt-1'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={2} stroke="#7d8590" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                <p className='text-sm'>{sidebarData.school}</p>
            </div>
            <InfoSection title="Langues">
                {sidebarData.languages.map((link, index) => (
                    <p key={index} >{link}</p>
                ))}
            </InfoSection>
            <InfoSection className="mb-8" title="Liens utiles">
                <div className='flex items-center gap-5'>
                    {sidebarData.links.map((link, index) => (
                        <a href={link.href} target="_blank" key={index}>
                            {link.icon}
                        </a>
                    ))}
                </div>
            </InfoSection>
        </div>
    );
}