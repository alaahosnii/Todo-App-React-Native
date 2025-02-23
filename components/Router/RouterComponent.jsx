import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNav from "./StackNav";
import CompletedTasks from "../CompletedTasks/CompletedTasks";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
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
                    component={CompletedTasks}
                    options={{
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