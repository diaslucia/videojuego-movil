import { StyleSheet, Dimensions } from "react-native";
import { colors, margin } from "../../constants/theme";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.secondaryBackground,
        marginVertical: margin.medium,
        height: height * 0.25,
        maxHeight: height * 0.30,
        width: width * 0.8,
        elevation: 2,
        justifyContent: "center",
    },
})

export default styles;