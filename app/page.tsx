"use client"; // This is a client component 👈🏽
import { useRef, useState } from 'react';
import { Sidebar } from './components/organisms/Sidebar/index'
import Projects from './components/organisms/Projects';
import Experiences from './components/organisms/Experiences';
import Stack from './components/organisms/Stack';
import Separator from './components/atoms/Separator';
import { Header } from './components/organisms/Header';
import { MutableRefObject } from 'react';

export default function Home() {

  const sectionRefs: MutableRefObject<HTMLDivElement | null>[] = [useRef(null), useRef(null), useRef(null)];


  const [tab, setTab] = useState(0)

  const handleTabClick = (index: number) => {
    setTab(index);
    const sectionPosition = sectionRefs[index]?.current?.offsetTop ?? 0 - 64;
    window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
  };

  const handleProjectClick = (index: number) => {
    localStorage.setItem('project_selected', JSON.stringify(index));
  };

  function getYear() {
    return new Date().getFullYear();
  }

  return (
    <main className='flex flex-col'>
      <Header tab={tab} handleTabClick={handleTabClick} />
      <section className='w-full m-auto flex justify-center'>
        <div className='w-full max-w-[1216px] xl:px-0 px-4 flex flex-col md:flex-row gap-5'>
          <Sidebar />
          <div className='grid grid-cols-1 '>
            <div ref={sectionRefs[0]} id="presentation" className='w-full border p-6 border-gray-border rounded-md'>
              <p className='text-sm'>
                Josue Savy <span className='text-gray-light'>/</span> portfolio<span className='text-gray-light'>.md</span>
              </p>
              <p className='text-4xl mt-4 uppercase font-semibold'>Bienvenue sur <span className='text-orange'>mon portfolio</span></p>
              <Separator />
              <p className='mt-4 mb-4 sm:text-base text-sm text-justify'>
                J&apos;accompagne plusieurs clients dans la conception, le développement et l&apos;intégration de solutions web et cloud modernes. Mon expertise couvre l&apos;ensemble du cycle de vie applicatif, de la phase de conception technique à l&apos;automatisation des déploiements et à la maintenance continue. J&apos;interviens sur différentes architectures basées sur des technologies modernes, en combinant performance, sécurité et évolutivité.
              </p>
              <p className='mt-4 mb-16 sm:text-base text-sm text-justify'>
                Mon approche se distingue par une vision à la fois technique et intégrative : concevoir des solutions robustes, automatisées et centrées sur l&apos;efficacité, tout en favorisant la pérennité et la simplicité de maintenance pour mes clients.
              </p>
              <Stack />
            </div>
            <Experiences sectionRef={sectionRefs[1]} />
            <Projects sectionRef={sectionRefs[2]} handleProjectClick={handleProjectClick} />
          </div>
        </div>
      </section>
      <footer className='h-20 mt-10 bg-black w-full flex justify-center items-center'>
        <p>Copyright © {getYear()} - Josué SAVY</p>
      </footer>
    </main>
  )
}