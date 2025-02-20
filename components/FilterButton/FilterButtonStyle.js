import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    button: {
        width: 100,
        height: 40,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    selectedButton: {
        borderColor: "black",
        width: 100,
        height: 40,
        borderWidth: 1,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    }
});

export default style;