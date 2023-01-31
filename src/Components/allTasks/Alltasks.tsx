import React, { useState } from 'react'
import { SingleTaskInterface, tasksDefault } from '../../types/tasksType'
import SingleTask from '../singleTask/SingleTask'

interface AllTasksInterface {
  taskListArray: SingleTaskInterface[],
  onDelete: (value : number) => void,
  onToggleDone: (value : number) => void,
  onToggleImportant: (value : number) => void
}

const Alltasks = ({taskListArray,onDelete,onToggleDone, onToggleImportant}: AllTasksInterface ) => {
  const [task, setTask] = useState<SingleTaskInterface[] | []>(tasksDefault);
  
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
    </div>
  )
}

export default Alltasks