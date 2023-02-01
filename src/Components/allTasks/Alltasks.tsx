import React, { FormEvent, useState } from 'react'
import {Stack, Input, Button} from '@mui/material/';

import { SingleTaskInterface, tasksDefault } from '../../types/tasksType'
import SingleTask from '../singleTask/SingleTask'

interface AllTasksInterface {
  taskListArray: SingleTaskInterface[],
  onDelete: (value : number) => void,
  onToggleDone: (value : number) => void,
  onToggleImportant: (value : number) => void
}

const ariaLabel = { 'aria-label': 'description' };

const Alltasks = ({taskListArray,onDelete,onToggleDone, onToggleImportant}: AllTasksInterface ) => {
  const [task, setTask] = useState<SingleTaskInterface[] | []>(tasksDefault);
  const [textForNewTask, setTextForNewTask] = useState('');

  const onSubmitTaskForm= (event : FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    addNewTask(textForNewTask);
    setTextForNewTask('');
}

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

const addNewTaskInState = (subtitle: string) => {
  setTask((task) => {
      const newTask = addNewTask(subtitle);
      return [...task, newTask]
  })

}
  return (
    <div>
      <section className="todolist">
            <h2 className="todolist__title">Tasks for today</h2>
            <ul className="todolist-ul">
                {taskListArray.map(item => {
                        const id = item.id;
                        return (<SingleTask
                            name={item.subtitle}
                            key={item.id}
                            important={item.important}
                            done={item.done}

                            onDelete={() => {
                                onDelete(id)}
                            }
                            onToggleDone={() => {
                                onToggleDone(id)}
                            }
                            onToggleImportant={() => {
                                onToggleImportant(id)}
                            }
                            addNewTask={addNewTaskInState}
                        />)
                    }
                )}
            </ul>
        </section>
        <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
      onSubmit={onSubmitTaskForm}
    >
<Input
        placeholder="What do you want to do?" inputProps={ariaLabel}
        type="text"
        value={textForNewTask}
        onChange={(e) => {setTextForNewTask(e.target.value)}}
      />
      
      <Button variant="contained" color="success" type='submit'>
      Add new task
      </Button>
       
    </Stack>
      
    </div>
  )
}

export default Alltasks