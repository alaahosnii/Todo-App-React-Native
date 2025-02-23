import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodosContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);

    return (
        <TodoContext.Provider value={{ tasks, setTasks, filteredTasks, setFilteredTasks }}>
            {children}
        </TodoContext.Provider>
    );
}
export default TodoContext;