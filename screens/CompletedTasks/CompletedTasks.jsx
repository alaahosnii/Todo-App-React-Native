import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React, { useContext, useMemo } from 'react'
import TodoContext from '../../contexts/TodosContext'
import Task from '../../components/Task/Task'
import styles from './CompletedTasksStyle'

const CompletedTasks = () => {
  const { tasks, deleteTask, toggleDoneTask } = useContext(TodoContext)
  
  // Filter only completed tasks
  const completedTasks = useMemo(() => {
    return tasks.filter(task => task.status === "Done")
  }, [tasks])
  // render completed task by task item
  const renderCompletedTask = ({ item }) => (
    <Task 
      task={item} 
      deleteTask={deleteTask} 
      toggleDoneTask={toggleDoneTask}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.taskCountContainer}>
          <Text style={styles.taskCountText}>
            {completedTasks.length} task{completedTasks.length !== 1 ? 's' : ''} completed
          </Text>
        </View>
        
        {completedTasks.length > 0 ? (
          <FlatList
            data={completedTasks}
            renderItem={renderCompletedTask}
            keyExtractor={(item) => item.id.toString()}
            style={styles.taskList}
            contentContainerStyle={styles.taskListContent}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>No completed tasks yet</Text>
            <Text style={styles.emptyStateSubtext}>
              Complete some tasks to see them here!
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  )
}

export default CompletedTasks