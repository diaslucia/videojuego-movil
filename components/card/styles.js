import { StyleSheet } from "react-native";
import { colors, margin } from "../../constants/theme";

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.secondaryBackground,
        marginVertical: margin.medium,
        height: 250,
        width: 300,
        elevation: 2,
        justifyContent: "center",
    },
})

export default styles;