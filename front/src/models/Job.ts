export interface Job
{
    title: string,
    description: string,
    salary: number,
    isRemote: boolean,
    professionLevel: ProfessionLevel,
    type?: string,
    skills:string[],
    requirements:string[]
}

export enum ProfessionLevel{
    JUNIOR, MIDDLE, SENIOR, LEAD
}