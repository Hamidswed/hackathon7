export const tasksDefault = [
    {id: 1, subtitle: 'Read Typescript documentation', important: false, done: false},
    {id: 2, subtitle: 'Finish the hackathon project', important: false, done: false},
    {id: 3, subtitle: 'Make a ToDo List', important: true, done: false},
    {id: 4, subtitle: 'Start to work in Jira', important: false, done: false},
]

export const buttonFilterArray = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'},
]


export interface SingleTaskInterface  {
    id: number,
    subtitle: string,
    important: boolean,
    done: boolean,

};

