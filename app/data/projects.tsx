export interface ProjectsDTO {
    id: number;
    year: number;
    title: string;
    description: string;
    href: string;
    technos: TechnosDTO[];
}

export interface TechnosDTO {
    color: string;
    label: string;
}

const CSHARP_COLOR = "#178600";
const CPP_COLOR = "#f34b7d";
const LUA_COLOR = "#000080";
const SQLITE_COLOR = "#e38c00";
const JAVASCRIPT_COLOR = "#f1e05a";
const QML_COLOR = "#44a51c";
const HTML_COLOR = "#e34c26";
const REACT_COLOR = "#00ADD8";
const NEXT_COLOR = "#4B6C4B";
const ACTIONSCRIPT_COLOR = "#882B0F";
const TAILWINDCSS_COLOR = "#563d7c";
const XML_COLOR = "#8a1267";
const JSON_COLOR = "#40d47e";

const CSHARP_NAME = "C#";
const CPP_NAME = "C++";
const LUA_NAME = "Lua";
const SQLITE_NAME = "SQLite";
const JAVASCRIPT_NAME = "JavaScript";
const QML_NAME = "QML";
const HTML_NAME = "HTML";
const REACT_NAME = "ReactJS";
const NEXT_NAME = "NextJS";
const ACTIONSCRIPT_NAME = "ActionScript";
const TAILWINDCSS_NAME = "TailwindCSS";
const XML_NAME = "XML";
const JSON_NAME = "JSON";

export const projects: ProjectsDTO[] = [
    {
        id: 1,
        year: 2024,
        title: "Portfolio",
        description: "Site web présentant les compétences, les projets et l’expérience d’un développeur. Il sert à montrer concrètement son savoir-faire à des recruteurs ou clients potentiels.",
        href: "https://stackover.fr",
        technos: [
            {color: HTML_COLOR, label: HTML_NAME},
            {color: REACT_COLOR, label: REACT_NAME},
            {color: NEXT_COLOR, label: NEXT_NAME},
            {color: TAILWINDCSS_COLOR, label: TAILWINDCSS_NAME},
        ],
    },
    {
        id: 2,
        year: 2022,
        title: "Bot Dofus",
        description: "Logiciel permettant d’automatiser toutes les tâches répétitive dans un jeu, sans prise de tête et tout en étant polyvalent et adapté à des situations aussi diverses que variées.",
        href: "/gallery",
        technos: [
            {color: CPP_COLOR, label: CPP_NAME},
            {color: LUA_COLOR, label: LUA_NAME},
            {color: QML_COLOR, label: QML_NAME},
            {color: JAVASCRIPT_COLOR, label: JAVASCRIPT_NAME},
            {color: SQLITE_COLOR, label: SQLITE_NAME},
            {color: ACTIONSCRIPT_COLOR, label: ACTIONSCRIPT_NAME},
        ],
    },
    {
        id: 3,
        year: 2017,
        title: "Arsenic",
        description: "Outils permettant de créer un itinéraire sur une carte afin que le bot puisse se déplacer et exécuter des actions automatiquement dans le jeu, en générant un fichier en langage Lua lisible par le bot.",
        href: "/gallery",
        technos: [
            {color: CPP_COLOR, label: CPP_NAME},
            {color: LUA_COLOR, label: LUA_NAME},
            {color: JSON_COLOR, label: JSON_NAME},
        ],
    },
    {
        id: 4,
        year: 2015,
        title: "Easy Pro Update",
        description: "Utilitaire qui a pour but de mettre à jour vos application sur plusieurs plateformes (C#, VB.NET..) mais il peut être utilisé sur plusieurs type d'application (WindowsForm, WPF, Console..).",
        href: "/gallery",
        technos: [
            {color: CSHARP_COLOR, label: CSHARP_NAME},
            {color: XML_COLOR, label: XML_NAME},
        ],
    },
];