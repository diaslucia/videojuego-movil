import { StyleSheet, Dimensions } from "react-native";
import { colors, font, fontSize } from "../../constants/theme";

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: colors.primary,
        height: height / 5,
        alignItems: "center",
        justifyContent: "center",
    },
    headerContainerLandscape: {
        backgroundColor: "red",
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