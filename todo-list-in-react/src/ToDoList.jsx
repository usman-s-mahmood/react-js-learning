
import {useState} from 'react'

function ToDoList() {
    const [tasks, setTasks] = useState([
        'Wake up late',
        'do not have breakfast',
        'do exercise'
    ]);
    const [newTask, setNewTask] = useState('');

    let inputChange = (e) => {
        setNewTask(e.target.value);
    }
    let addTask = () => {
        if (newTask === '')
            return ;
        setTasks(t => [...t, newTask]);
        setNewTask('');
    }
    let deleteTask = (index) => {
        const updatedTasks = tasks.filter(
            (_, i) => (i !== index)
        );
        setTasks(updatedTasks);
    }
    let moveTaskUp = (index) => {
        if (index > 0)
        {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    let moveTaskDown = (index) => {
        if (index < tasks.length - 1)
        {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return (
        <>
        <div className='to-do-list'>
            <h1>To Do List</h1>
            <div>
                <input 
                    type="text" 
                    placeholder="Enter a Task"
                    value={newTask}
                    onChange={inputChange}
                />
                <button
                    className='add-button'
                    onClick={addTask}
                >Add</button>
            </div>
            <ol>
                {
                    tasks.map(
                        (task, index) => <li key={index}>
                            <span className="text">{task}</span>
                            <button
                                className='delete-button'
                                onClick={() => deleteTask(index)}
                            >Delete</button>
                            <button
                                className='move-button'
                                onClick={() => moveTaskUp(index)}
                            >UP</button>
                            <button
                                className='move-button'
                                onClick={() => moveTaskDown(index)}
                            >Down</button>
                        </li>
                    )
                }
            </ol>
        </div>
        </>
    );
}

export default ToDoList;