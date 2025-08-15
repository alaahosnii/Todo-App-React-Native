import { useContext, useEffect, useState } from 'react';
import { Alert, FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Divider from '../../components/Divider/Divider';
import FilterButton from '../../components/FilterButton/FilterButton';
import Task from '../../components/Task/Task'; import React from 'react'
import styles from './HomeStyle';
import uuid from 'react-native-uuid';
import TodoContext from '../../contexts/TodosContext';

const Home = () => {
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    // get the tasks, setTasks, filteredTasks, setFilteredTasks, deleteTask, toggleDoneTask from the TodoContext
    const { tasks, setTasks, filteredTasks, setFilteredTasks, deleteTask, toggleDoneTask } = useContext(TodoContext);
    // create the filters list
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
    // create the filters state
    const [filters, setFilters] = useState(filtersList);
    // set filtered tasks to the tasks array when the tasks array is changed
    useEffect(() => {
        const selectedFilter = filters.find((filter) => filter.selected);
        selectedFilter.query != "All" ? setFilteredTasks(tasks.filter((task) => task.status === selectedFilter.query))
            : setFilteredTasks(tasks);
    }, [tasks])
    // on filter pressed change the filter and set the filtered tasks to the tasks array
    const onFilterPressed = (item) => {
        const newFilters = filters.map((filter) => filter.id == item.id ? {
            ...filter,
            selected: true
        } : filter.selected ? { ...filter, selected: false } : filter
        );
        setFilters(newFilters);
        // set the filtered tasks to the tasks array when the filter is changed
        item.query != "All" ? setFilteredTasks(tasks.filter((task) => task.status === item.query))
            : setFilteredTasks(tasks);
    }

    // add task to the tasks array
    const addTask = () => {
        setTasks([...tasks, {
            id: uuid.v4(),
            title: taskName,
            description: taskDescription,
            status: "In Progress",
            createdAt: new Date().toISOString()
        }]);
        // clear the task name and task description
        setTaskName("");
        setTaskDescription("");
    }

    // render the home screen
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 20, width: "100%" }}>
                {/* Header & Filter Section */}
                <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Text style={styles.text}>ToDo App</Text>

                    <TextInput
                        style={styles.textInput}
                        value={taskName}
                        onChangeText={setTaskName}
                        placeholder="Enter your task"
                        placeholderTextColor="black"
                    />
                    <TextInput
                        style={styles.textInput}
                        value={taskDescription}
                        onChangeText={setTaskDescription}
                        placeholder="Enter your task description"
                        placeholderTextColor="black"
                    />

                    <TouchableOpacity
                        disabled={!taskName || !taskDescription}
                        style={styles.addBtn}
                        activeOpacity={0.5}
                        onPress={addTask}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                            Add Task
                        </Text>
                    </TouchableOpacity>

                    <Divider />

                    {/* Horizontal Filters */}
                    <FlatList
                        style={{ width: "100%" }}
                        contentContainerStyle={{
                            width: "100%",
                            padding: 5,
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                        data={filters}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <FilterButton
                                filter={item}
                                isSelected={item.selected}
                                onPress={onFilterPressed}
                            />
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                {/* Vertical Task List fills remaining space */}
                <View style={{ flex: 1, width: "100%", justifyContent: "center", alignItems: "center" }}>
                    {filteredTasks.length !== 0 ? (
                        <FlatList
                            data={filteredTasks}
                            renderItem={({ item }) => (
                                <Task
                                    task={item}
                                    deleteTask={deleteTask}
                                    toggleDoneTask={toggleDoneTask}
                                />
                            )}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    ) : (
                        <Text style={{ fontSize: 20, marginTop: 20 }}>No tasks</Text>
                    )}
                </View>
            </View>
        </SafeAreaView>
    );

}
export default Home;