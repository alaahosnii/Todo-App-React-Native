import { Text, View } from "react-native";
import style from "./TaskStyle";

const Task = ({ task }) => {
    return (
        <View style={style.container}>
            <Text style={style.text}> {task.title} </Text>
            <Text style={style.description}> {task.description} </Text>
        </View>
    );
}

export default Task;