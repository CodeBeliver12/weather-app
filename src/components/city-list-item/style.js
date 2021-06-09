import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    title: {
        fontSize: 20
    },
    temperature: { fontSize: 30, fontWeight: '600' }

})