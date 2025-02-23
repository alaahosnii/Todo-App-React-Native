import { Pressable, Text, TouchableOpacity, View } from "react-native";
import style from "./TaskStyle";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const Task = ({ task, isDetails = false, deleteTask, toggleDoneTask }) => {
    const { navigate } = useNavigation();

    const gotoDetails = () => {
        navigate("Task Details", { task });
    }
    return (
        <Pressable onPress={gotoDetails}>

            <View style={task.status == "Done" ? style.markedTask : style.container}>
                <View style={{ flexDirection: "column", justifyContent: "space-evenly", height: "100%", alignSelf: "flex-start" }}>
                    <Text style={style.text}> {task.title} </Text>
                    <Text style={style.description}> {task.description} </Text>
                </View>
                {!isDetails &&
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                        <TouchableOpacity onPress={() => toggleDoneTask(task.id)} activeOpacity={0.5} style={{ backgroundColor: "black", padding: 5, borderRadius: 5, borderWidth: 1, borderColor: "black" }}>
                            <Text style={{ color: "white", fontSize: 15 }}>Done</Text>
                        </TouchableOpacity>
                        <MaterialIcons name="delete" size={30} color="red" onPress={() => deleteTask(task.id)} />
                    </View>
                }
            </View>
        </Pressable>
    );
}

export default Task;