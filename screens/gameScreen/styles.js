import { StyleSheet } from "react-native";
import { colors, font, fontSize, margin } from "../../constants/theme";

const styles = StyleSheet.create({
    gameScreenContainer: {
        backgroundColor: colors.primaryBackground,
        flex: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    gameScreenTitle: {
        fontSize: fontSize.title,
        fontFamily: font.title,
        color: colors.primary,
        marginVertical: margin.large,
        textAlign: "center",
        textTransform: "uppercase",
        lineHeight: 20,
    },
    gameScreenCard: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
})

export default styles;