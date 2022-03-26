import { StyleSheet } from "react-native";
import { colors, font, fontSize } from "../../constants/theme";

const styles = StyleSheet.create({
    mainScreenScroll: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    mainScreenTitle: {
        fontSize: fontSize.title,
        fontFamily: font.title,
        color: colors.primary,
        textAlign: "center",
        textTransform: "uppercase",
    },
    confirmTitle: {
        fontSize: fontSize.title,
        fontFamily: font.title,
        color: colors.primary,
        textAlign: "center",
        textTransform: "uppercase",
    },
    newCard: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
})

export default styles;