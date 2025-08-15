import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useContext } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import TodoContext from '../../contexts/TodosContext';
import styles from './TaskDetailsStyle';

const TaskDetails = ({ route }) => {
  const taskId = route.params.task.id;
  const { toggleDoneTask, tasks } = useContext(TodoContext);
  // get the task by the task id
  const task = tasks.find((task) => task.id === taskId);

  // toggle done task status to done or in progress and update the task in the tasks array
  const handleToggleStatus = () => {
    toggleDoneTask(taskId);
  };

  // get the status color by the status
  const getStatusColor = (status) => {
    switch (status) {
      case 'Done':
        return '#4CAF50';
      case 'In Progress':
        return '#FF9800';
      default:
        return '#2196F3';
    }
  };

  // get the status icon by the status
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Done':
        return 'check-circle';
      case 'In Progress':
        return 'pending';
      default:
        return 'schedule';
    }
  };

  // format the date to the date string
  const formatDate = (dateString) => {
    if (!dateString) return 'Recently created';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // render the task details screen
  return (
    <ScrollView style={styles.container}>

      {/* Task Card */}
      <View style={styles.taskCard}>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(task.status) }]}>
          <MaterialIcons
            name={getStatusIcon(task.status)}
            size={16}
            color="white"
          />
          <Text style={styles.statusText}>{task.status}</Text>
        </View>

        <Text style={styles.taskTitle}>{task.title}</Text>
        <Text style={styles.taskDescription}>{task.description}</Text>

        <View style={styles.taskMeta}>
          <View style={styles.metaItem}>
            <MaterialIcons name="schedule" size={16} color="#666" />
            <Text style={styles.metaText}>Created: {formatDate(task.createdAt)}</Text>
          </View>
          <View style={styles.metaItem}>
            <MaterialIcons name="info" size={16} color="#666" />
            <Text style={styles.metaText}>Task ID: {task.id.slice(0, 8)}...</Text>
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionSection}>
        <TouchableOpacity
          style={[
            styles.primaryButton,
            { backgroundColor: getStatusColor(task.status) }
          ]}
          onPress={handleToggleStatus}
        >
          <MaterialIcons
            name={task.status === 'Done' ? 'refresh' : 'check'}
            size={20}
            color="white"
          />
          <Text style={styles.primaryButtonText}>
            {task.status === 'Done' ? 'Mark In Progress' : 'Mark Complete'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Progress Indicator */}
      <View style={styles.progressSection}>
        <Text style={styles.sectionTitle}>Progress</Text>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              {
                backgroundColor: getStatusColor(task.status),
                width: task.status === 'Done' ? '100%' : '50%'
              }
            ]}
          />
        </View>
        <Text style={styles.progressText}>
          {task.status === 'Done' ? 'Task completed!' : 'Task in progress...'}
        </Text>
      </View>

      {/* Additional Info Section */}
      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Task Information</Text>
        <View style={styles.infoGrid}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Priority</Text>
            <Text style={styles.infoValue}>Medium</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Category</Text>
            <Text style={styles.infoValue}>General</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Estimated Time</Text>
            <Text style={styles.infoValue}>30 min</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Due Date</Text>
            <Text style={styles.infoValue}>No due date</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default TaskDetails;