import { Text, TouchableOpacity } from "react-native";
import style from "./FilterButtonStyle";

const FilterButton = ({ isSelected = false, filter, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress(filter)} style={isSelected ? style.selectedButton : style.button} activeOpacity={0.5}>
            <Text style={{ color: isSelected ? "white" : "black", fontSize: 15 }}> {filter.query} </Text>
        </TouchableOpacity>
    );
}

export default FilterButton;