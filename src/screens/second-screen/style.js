import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    mapView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60%',
    },
    bottomCardContainer: {
        flexDirection: 'row',
        width: '100%',
        height: '40%',
        backgroundColor: Colors.ui_white
    },
    city: {
        fontSize: 20,
        fontWeight: '700'
    },
    description: {
        fontSize: 16
    },
    temperature: {
        fontSize: 30,
        fontWeight: '600'
    },
    cloudImage: {
        width: '80%',
        height: '40%',
        resizeMode: 'contain'
    }
})