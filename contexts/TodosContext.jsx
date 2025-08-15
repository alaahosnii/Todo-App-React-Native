import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodosContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);

    // delete task from the tasks array by task id and update the tasks array
    const deleteTask = (taskId) => {
        const newTasks = tasks.filter((task) => task.id != taskId);
        setTasks(newTasks);
    };
    // toggle done task status to done or in progress and update the task in the tasks array
    const toggleDoneTask = (taskId) => {
        const newTasks = tasks.map((task) =>
            task.id == taskId
                ? { ...task, status: task.status != "Done" ? "Done" : "In Progress" }
                : task
        );
        setTasks(newTasks);
    };

    return (
        <TodoContext.Provider value={{
            tasks,
            setTasks,
            filteredTasks,
            setFilteredTasks,
            deleteTask,
            toggleDoneTask
        }}>
            {children}
        </TodoContext.Provider>
    );
}
export default TodoContext;