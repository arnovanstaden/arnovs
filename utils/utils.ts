import fs from 'fs';

export const getFileCount = (project): number => {
    const path = `public/images/projects/${project.type.toLowerCase()}/${project.name.replace(/ /g, "-")}/`
    return fs.readdirSync(path).length;
}