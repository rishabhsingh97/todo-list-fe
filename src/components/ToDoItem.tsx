import React from 'react';
import toDoListApi from '../api/toDoListApi';

interface ToDo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

interface ToDoItemProps {
    todo: ToDo;
    setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ todo, setTodos }) => {

    const handleDelete = async () => {

        const response = await toDoListApi.deleteToDo(todo.id);
        if (response) {
            setTodos(prevTodos => prevTodos.filter(t => t.id !== todo.id));
        }
    };

    return (
        <div className='todoCard'>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
            <button onClick={handleDelete} style={{ color: 'red' }}>Delete</button>
        </div>
    );
};

export default ToDoItem;
