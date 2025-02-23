import React from 'react'
import Home from '../Home/Home';
import TaskDetails from '../TaskDetails/TaskDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

const StackNav = () => {
    return (
        <Navigator>
            <Screen name="Home" component={Home} options={{
                headerShown: false
            }} />
            <Screen name="Task Details" component={TaskDetails} options={({ route }) => ({
                title: route.params.task.title,
            })} />
        </Navigator>
    )
}

export default StackNav