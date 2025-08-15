import { Pressable, Text, TouchableOpacity, View } from "react-native";
import style from "./TaskStyle";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Task = ({ task, isDetails = false, deleteTask, toggleDoneTask }) => {
    const { navigate } = useNavigation();

    // navigate to the task details screen
    const gotoDetails = () => {
        navigate("Task Details", { task });
    }

    // check if the task is completed
    const isCompleted = task.status === "Done";

    // Format date if it exists
    const formatDate = (dateString) => {
        if (!dateString) return null;
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            });
        } catch (e) {
            return null;
        }
    };

    // render the task item
    return (
        <Pressable onPress={gotoDetails} style={({ pressed }) => [
            { opacity: pressed ? 0.8 : 1 }
        ]}>
            <View style={isCompleted ? style.markedTask : style.container}>
                {/* Status Indicator */}
                <View style={[
                    style.statusIndicator,
                    isCompleted && style.statusIndicatorDone
                ]} />

                {/* Task Content */}
                <View style={style.textContainer}>
                    <Text style={[
                        style.text,
                        isCompleted && { textDecorationLine: 'line-through', color: '#6c757d' }
                    ]}>
                        {task.title}
                    </Text>
                    <Text style={[
                        style.description,
                        isCompleted && { color: '#adb5bd' }
                    ]}>
                        {task.description}
                    </Text>

                    {/* Date Display */}
                    {task.date && (
                        <Text style={style.dateText}>
                            {formatDate(task.date)}
                        </Text>
                    )}
                </View>

                {/* Priority Badge */}
                {task.priority && (
                    <View style={style.priorityBadge}>
                        <Text style={style.priorityText}>
                            {task.priority}
                        </Text>
                    </View>
                )}

                {/* Action Buttons */}
                {!isDetails && (
                    <View style={style.actionsContainer}>
                        <TouchableOpacity
                            onPress={() => toggleDoneTask(task.id)}
                            activeOpacity={0.7}
                            style={[
                                style.doneButton,
                                isCompleted && { backgroundColor: '#6c757d' }
                            ]}
                        >
                            <Text style={style.doneButtonText}>
                                {isCompleted ? 'Undo' : 'Done'}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => deleteTask(task.id)}
                            activeOpacity={0.7}
                            style={style.deleteButton}
                        >
                            <MaterialIcons
                                name="delete-outline"
                                size={24}
                                color="#e53e3e"
                            />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </Pressable>
    );
}

export default Task;