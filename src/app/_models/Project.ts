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
}