import { StyleSheet } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { colors } from "../../constants/theme";

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        backgroundColor: colors.primary,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        color: colors.secondary,
        textAlign: "center",
        fontSize: 25,
        textTransform: "uppercase",

    }
})

export default styles;