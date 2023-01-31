import React from 'react'
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
  
  return (
    <div className='task-container'>
      <li className="task-item">
            <p className={`task-subtitle ${important ? 'task-subtitle__important' : ''} ${done ? 'task-subtitle__done' : ''}`} onClick={onToggleDone}>{name}</p>
            <div className="icon-container">
                <button type="button" className="btn btn-outline-success" onClick={onToggleImportant}>
                    <ImportantIcon/>
                </button>

                <button type="button" className="btn btn-outline-primary" onClick={onToggleDone}>
                    <DoneIcon/>
                </button>

                <button type="button" className="btn btn-outline-danger" onClick={onDelete}>
                    <DeleteIcon/>
                </button>
                
            </div>

        </li>
    </div>
  )
}

export default SingleTask