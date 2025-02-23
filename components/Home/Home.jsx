import { useContext, useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Divider from '../Divider/Divider';
import FilterButton from '../FilterButton/FilterButton';
import Task from '../Task/Task'; import React from 'react'
import styles from './HomeStyle';
import uuid from 'react-native-uuid';
import TodoContext from '../../contexts/TodosContext';

const Home = () => {
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    // const [tasks, setTasks] = useState([]);
    // const [filteredTasks, setFilteredTasks] = useState([]);
    const { tasks, setTasks, filteredTasks, setFilteredTasks } = useContext(TodoContext);
    const filtersList = [
        {
            id: 1,
            query: "All",
            selected: true,
        },
        {
            id: 2,
            query: "In Progress",
            selected: false,
        },
        {
            id: 3,
            query: "Done",
            selected: false,
        },
    ];
    const [filters, setFilters] = useState(filtersList);
    useEffect(() => {
        setFilteredTasks(tasks);
    }, [tasks])
    const onFilterPressed = (item) => {
        const newFilters = filters.map((filter) => filter.id == item.id ? {
            ...filter,
            selected: true
        } : filter.selected ? { ...filter, selected: false } : filter
        );
        setFilters(newFilters);
        item.query != "All" ? setFilteredTasks(tasks.filter((task) => task.status === item.query))
            : setFilteredTasks(tasks);
    }


    const addTask = () => {
        setTasks([...tasks, { id: uuid.v4(), title: taskName, description: taskDescription, status: "In Progress" }]);
        setTaskName("");
        setTaskDescription("");
    }

    const deleteTask = (taskId) => {
        const newTasks = tasks.filter((task) => task.id != taskId);
        setTasks(newTasks);
    }

    const toggleDoneTask = (taskId) => {
        const newTasks = tasks.map((task) => task.id == taskId ? { ...task, status: task.status != "Done" ? "Done" : "In Progress" } : task);
        setTasks(newTasks);
    }

    return (
        <SafeAreaView>
            <View style={styles.mainContent}>
                <Text style={styles.text}>ToDo App</Text>
                <TextInput
                    style={styles.textInput}
                    value={taskName}
                    onChangeText={(task) => setTaskName(task)}
                    placeholder='Enter your task'
                    placeholderTextColor={"black"}
                >
                </TextInput>
                <TextInput
                    style={styles.textInput}
                    value={taskDescription}
                    onChangeText={setTaskDescription}
                    placeholder='Enter your task description'
                    placeholderTextColor={"black"}
                >
                </TextInput>

                <TouchableOpacity disabled={taskName == "" || taskDescription == ""} style={styles.addBtn} activeOpacity={0.5} onPress={() => addTask()}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Add Task</Text>
                </TouchableOpacity>

                <Divider />

                <FlatList
                    style={{ width: "100%" }}
                    contentContainerStyle={{ width: "100%", padding: 5, justifyContent: "space-between", alignItems: "center" }}
                    data={filters}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <FilterButton filter={item} isSelected={item.selected} onPress={onFilterPressed} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

                {filteredTasks.length != 0 ? <FlatList
                    data={filteredTasks}
                    renderItem={({ item }) => <Task task={item} deleteTask={deleteTask} toggleDoneTask={toggleDoneTask} />}
                    keyExtractor={(_, index) => index.toString()}
                    style={{ width: "100%" }}
                    contentContainerStyle={{ padding: 5, width: "100%" }}
                /> : <Text style={{ fontSize: 20, marginTop: 20 }}>No tasks</Text>
                }
            </View>
        </SafeAreaView>
    )
}
export default Home;