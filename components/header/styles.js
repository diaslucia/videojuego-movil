import { StyleSheet } from "react-native";
import { colors, font, fontSize } from "../../constants/theme";

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: colors.primary,
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        color: colors.secondary,
        fontFamily: font.mainTitle,
        fontSize: fontSize.large,
        textAlign: "center",
        textTransform: "uppercase",
    }
})

export default styles;