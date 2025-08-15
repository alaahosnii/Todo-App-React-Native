import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNav from "./StackNav";
import CompletedTasks from "../../screens/CompletedTasks/CompletedTasks";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

// Create a wrapper for CompletedTasks that includes its own stack navigator
const CompletedTasksStack = () => {
    const { createNativeStackNavigator } = require('@react-navigation/native-stack');
    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Completed Tasks List" 
                component={CompletedTasks} 
                options={{ 
                    headerShown: true,
                    title: "Completed Tasks",
                    headerStyle: {
                        backgroundColor: '#ffffff',
                    },
                    headerTintColor: '#212529',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <Stack.Screen 
                name="Task Details" 
                component={require('../../screens/TaskDetails/TaskDetails').default}
                options={({ route }) => ({
                    title: route.params.task.title,
                })}
            />
        </Stack.Navigator>
    );
};

const RouterComponent = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Main" component={StackNav} options={{
                    headerShown: false,
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <FontAwesome5 name="home" size={24} color={color} />
                    )
                }} />
                <Tab.Screen
                    name="Completed Tasks"
                    component={CompletedTasksStack}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="checkmark-done-circle" size={24} color= {color} />
                        )
                    }}
                />
            </Tab.Navigator>

        </NavigationContainer>
    )
};

export default RouterComponent;