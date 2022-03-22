import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme";

const styles = StyleSheet.create({
    cardContainer: {
        height: 200,
        backgroundColor: colors.secondaryBackground,
        width: 300,
        elevation: 2,
        justifyContent: "center",
        marginVertical: 30,
    },
})

export default styles;