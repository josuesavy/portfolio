"use client"; // This is a client component 👈🏽
import { useRef, useEffect, useState } from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {images} from "@/app/gallery/data/gallery";

const getIntFromLocalStorage = (): number | null => {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem('project_selected');
    return value ? JSON.parse(value) : null; // Convertir la chaîne en int
  }
  return null; // Retourne null si côté serveur
};

export default function Gallery() {

  const [projectSelected, setProjectSelected] = useState<number | null>(null);
  
  useEffect(() => {
    const storedProject = getIntFromLocalStorage();
    setProjectSelected(storedProject);
  }, []);

  return (
    <ImageGallery 
      items={images.find(item=>item.id===projectSelected)?.pictures || []} 
      showBullets={true} 
      infinite={false}
      showPlayButton={false}
      showFullscreenButton={false}
    />
  )
}