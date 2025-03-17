import React, { useState, useEffect } from 'react';

export default function ToDoList() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState(() => {
        let savedTask = localStorage.getItem('tapsyrma');
        return savedTask == null ? [
            { taskName: 'Гүл суару', completed: true },
            { taskName: 'Күнделікті үй тапсырмасын орындау', completed: false }
        ] : JSON.parse(savedTask);
    });
    const [filter, setFilter] = useState('all');
    const [editIndex, setEditIndex] = useState(null); 
    const [editText, setEditText] = useState('');
    const a="";
    function handleSubmit(e) {
        e.preventDefault();
        if (!task.trim()) return;
        setTasks([...tasks, { taskName: task, completed: false }]);
        setTask('');
    }

    const toggleComplete = (index) => {
        setTasks(
            tasks.map((task, i) => 
                i === index ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const handleRemove = (id) => {
        setTasks(tasks.filter((_, index) => index !== id));
    };

    const handleEdit = (index, text) => {
        setEditIndex(index);
        setEditText(text);
    };

    const handleEditSave = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].taskName = editText;
        setTasks(updatedTasks);
        setEditIndex(null);
        setEditText('');
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'complete') return task.completed;
        if (filter === 'incomplete') return !task.completed;
        return true;
    });

    useEffect(() => {
        localStorage.setItem('tapsyrma', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div className='box'>
            <form onSubmit={handleSubmit}>
                <input
                    value={task}
                    type="text"
                    placeholder="Жаңа тапсырма"
                    onChange={(e) => setTask(e.target.value)}
                />
                <button type="submit">Қосу</button>
            </form>

            <div className="filter-box">
                <button onClick={() => setFilter('all')}>Барлығы</button>
                <button onClick={() => setFilter('complete')}>Орындалған</button>
                <button onClick={() => setFilter('incomplete')}>Орындалмаған</button>
            </div>

            <ul className='task-list'>
                {filteredTasks.map((tapsyrma, index) => (
                    <li key={index} className='task-item'>
                        {editIndex === index ? (
                            <>
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                                <button onClick={() => handleEditSave(index)}>💾</button>
                                <button onClick={() => setEditIndex(null)}>❌</button>
                            </>
                        ) : (
                            <>
                                <div>{tapsyrma.taskName}</div>
                                <div className="btn-box">
                                    {tapsyrma.completed ? (
                                        <button className='completed' onClick={() => toggleComplete(index)}>✔️</button>
                                    ) : (
                                        <button className='incomplete' onClick={() => toggleComplete(index)}>❌</button>
                                    )}
                                    <button className='delete' onClick={() => handleRemove(index)}>🗑</button>
                                    <button 
                                        className='edit' 
                                        onClick={() => handleEdit(index, tapsyrma.taskName)}
                                    >
                                        🖊
                                    </button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
