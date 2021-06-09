import { Platform, StyleSheet } from "react-native";
import { Colors } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    inputLabel: {
        fontSize: 12,
        color: Colors.ui_black,
        marginBottom: Platform.OS == 'ios' ? 0 : -10
    },
    errorText: {
        color: Colors.ui_error,
        fontSize: 12,
        textAlign: 'right'
    },
    inputContainer: {
        borderBottomWidth: 1,
        marginBottom: 5,
        paddingVertical: Platform.OS == 'ios' ? 10 : 0
    }
})