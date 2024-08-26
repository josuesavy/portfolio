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

const SYMFONY_COLOR = "#FFFFFF";
const CODEIGNITER_COLOR = "#EE4323";
const LARAVEL_COLOR = "#F72C1F";
const REACT_COLOR = "#62D5FA";
const NODE_COLOR = "#669C4F";
const NEXT_COLOR = "#FFFFFF";
const TAILWINDCSS_COLOR = "#37B2AC";

const REACT_NAME = "ReactJS";
const NEXT_NAME = "NextJS";
const NODE_NAME = "NodeJS";
const SYMFONY_NAME = "Symfony";
const CODEIGNITER_NAME = "Codeigniter";
const LARAVEL_NAME = "Laravel";
const TAILWINDCSS_NAME = "TailwindCSS";

export const projects: ProjectsDTO[] = [
    {
        id: 1,
        year: 2024,
        title: "Portfolio",
        description: "Site internet contenant mon portfolio actuelle.",
        href: "https://google.fr",
        technos: [
            {color: SYMFONY_COLOR, label: SYMFONY_NAME},
            {color: CODEIGNITER_COLOR, label: CODEIGNITER_NAME},
            {color: LARAVEL_COLOR, label: LARAVEL_NAME},
            {color: REACT_COLOR, label: REACT_NAME},
            {color: NODE_COLOR, label: NODE_NAME},
            {color: NEXT_COLOR, label: NEXT_NAME},
            {color: TAILWINDCSS_COLOR, label: TAILWINDCSS_NAME},
        ],
    },
];