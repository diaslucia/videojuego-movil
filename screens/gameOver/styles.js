import { StyleSheet, Dimensions } from "react-native";
import { colors, fontSize, font, margin } from "../../constants/theme";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    gameOverContainer: {
        backgroundColor: colors.primaryBackground,
        flex: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    gameOverCard: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",  
    },
    title: {
        fontSize: fontSize.title,
        fontFamily: font.title,
        color: colors.primaryTitle,
        textAlign: "center",
        textTransform: "uppercase",
    },
    subtitle: {
        fontSize: fontSize.title,
        fontFamily: font.title,
        color: colors.primaryTitle,
        textAlign: "center",
        textTransform: "uppercase",
        marginBottom: margin.large,
    },
    buttonContainer: {
        alignItems: "center",
    },
    imageGameOver: {
        width: width,
        height: height * .2,
        marginBottom: margin.medium,
    }
});

export default styles;