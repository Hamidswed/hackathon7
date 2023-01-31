import React, { FormEvent, useState } from 'react'
import DeleteIcon from '../../images/icons/DeleteIcon'
import DoneIcon from '../../images/icons/DoneIcon'
import ImportantIcon from '../../images/icons/ImportantIcon'

import './singleTask.css'

interface SingleTaskInterface {
  name: string,
  onDelete: () => void,
  onToggleDone: () => void,
  onToggleImportant: () => void,
  addNewTask: (text : string) => void,
  important: boolean,
  done: boolean,
}

const SingleTask = ({name,onDelete,onToggleDone, onToggleImportant, addNewTask, important, done}: SingleTaskInterface)  => {
  const [textForNewTask, setTextForNewTask] = useState('');

  const onSubmitTaskForm= (event : FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    addNewTask(textForNewTask);
    setTextForNewTask('');
}
  
  return (
    <div>
      <li className="task-item">
            <p className='status' onClick={onToggleDone}>{name}</p>
            <div className="icon-container">
                <button type="button" className="btn btn-outline-success" onClick={onToggleImportant}>
                    <ImportantIcon/>
                </button>

                <button type="button" className="btn btn-outline-primary ms-1" onClick={onToggleDone}>
                    <DoneIcon/>
                </button>

                <button type="button" className="btn btn-outline-danger ms-1" onClick={onDelete}>
                    <DeleteIcon/>
                </button>
            </div>

        </li>
    </div>
  )
}

export default SingleTask