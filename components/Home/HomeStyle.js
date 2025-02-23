import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    addBtn: {
        marginTop: 20,
        width: "50%",
        height: 55,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },
    mainContent: {
        paddingLeft: 20,
        paddingRight: 20,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: '#000',
        fontSize: 25,
        fontWeight: 'bold',
    },
    textInput: {
        marginTop: 20,
        width: "100%",
        height: 55,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 7,
        color: "black",
        padding: 10,
    }
});

export default styles;