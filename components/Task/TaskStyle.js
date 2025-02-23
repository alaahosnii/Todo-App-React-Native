import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        // width: "50%",
        flexDirection: "row",
        height: 100,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        borderColor: "black",
        borderWidth: 1,
        justifyContent: "space-between",
        alignItems: "center",
    },
    markedTask: {
        flexDirection: "row",
        height: 100,
        backgroundColor: "grey",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        borderColor: "black",
        borderWidth: 1,
        justifyContent: "space-between",
        alignItems: "center",
        opacity: 0.5
    },
    text: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold"
    },
    description: {
        color: "black",
        fontSize: 15
    }

});

export default style;