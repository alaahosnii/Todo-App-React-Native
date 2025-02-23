import { View, Text } from 'react-native'
import React from 'react'
import Task from '../Task/Task';

const TaskDetails = ({ route }) => {
  const task = route.params.task;
  return (
    <View style={{
      padding: 10
    }}>
      <Task task={task} isDetails={true} />
    </View>
  )
}

export default TaskDetails;