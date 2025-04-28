import { Pic } from "./Pictures";
import { Tag } from "./Tag";


export interface Project{
    id: number;
    name: string;
    summary: string;
    description: string;
    projectLink: string;
    pictures: Pic[];
    tags: Tag[];
    customButtonLabel?: string; // <-- costume title for that optional button
    customButtonAction?: string; // <-- Optional pop up button for eqecutable projects
}