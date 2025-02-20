import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Divider from './components/Divider/Divider';
import FilterButton from './components/FilterButton/FilterButton';
import Task from './components/Task/Task';

export default function App() {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState([]);
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
  const onFilterPressed = (item) => {
    const newFilters = filters.map((filter) => filter.id == item.id ? {
      ...filter,
      selected: true
    } : filter.selected ? { ...filter, selected: false } : filter
    );

    setFilters(newFilters);
  }

  const addTask = () => {
    setTasks([...tasks, { title: taskName, description: taskDescription }]);
    setTaskName("");
    setTaskDescription("");
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

        <TouchableOpacity disabled = {taskName == "" || taskDescription == ""} style={styles.addBtn} activeOpacity={0.5} onPress={() => addTask()}>
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

        {tasks.length != 0 ? <FlatList
          data={tasks}
          renderItem={({ item }) => <Task task={item} />}
          keyExtractor={(_, index) => index.toString()}
          style={{ width: "100%" }}
          contentContainerStyle={{ padding: 5, width: "100%" }}
        /> : <Text style={{ fontSize: 20, marginTop: 20 }}>No tasks</Text>
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  addBtn: {
    marginTop: 20,
    width: "50%",
    height: 55,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  mainContent: {
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  textInput: {
    marginTop: 20,
    width: "100%",
    height: 55,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 7,
    color: "black",
    padding: 10,
  }
});
