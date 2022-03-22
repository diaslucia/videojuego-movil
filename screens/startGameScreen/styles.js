import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme";

const styles = StyleSheet.create({
    mainScreenContainer: {
        flex: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    mainScreenTitle: {
        fontSize: 20,
        color: colors.primary,
        textAlign: "center",
        textTransform: "uppercase",
    },
    confirmTitle: {
        fontSize: 18,
        textAlign: "center",
        marginVertical: 15,
    }
})

export default styles;