import React, { useState } from 'react'
import Alltasks from '../Components/allTasks/Alltasks'
import { SingleTaskInterface, tasksDefault } from '../types/tasksType';

const Tasks = () => {
  const [searchObject, setSearchObject] = useState({inWork: '', done: '', filter: 'all'});
  const [task, setTask] = useState<SingleTaskInterface[] | []>(tasksDefault);
  const [visibleItems, setVisibleItems] = useState<SingleTaskInterface[] | []>(tasksDefault);
  const [textForSearch, setTextForSearch] = useState('');

  function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

const addNewTask = (subtitle: string) => {
    return {
        id: getRandomArbitrary(10, 100),
        subtitle,
        important: false,
        done: false
    }
}

  const generalToggle = (arr: SingleTaskInterface[], id: number, propertyName: keyof SingleTaskInterface) => {
    const idx = arr.findIndex((item) => item.id === id);
    const oldItem = arr[idx];

    const value = !oldItem[propertyName];

    const item = {...arr[idx], [propertyName]: value};

    let result = [...arr];
    result.splice(idx, 1, item);

    setTask(result);

};

const onToggleDone = (id: number) => {
    generalToggle(task, id, 'done');
}

const onToggleImportant = (id: number) => {
  generalToggle(task, id, 'important');
}

const deleteTask = (id: number) => {
  setTask((task) => {
      const newArray = task.filter(item => item.id !== id);
      return newArray
  })
}
  
  return (
    <div>
    <Alltasks
     onToggleDone={onToggleDone}
     onToggleImportant={onToggleImportant}
     onDelete={deleteTask}
     taskListArray={visibleItems}
    />
    </div>
  )
}

export default Tasks