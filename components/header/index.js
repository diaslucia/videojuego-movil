import React from "react";
import { View, Text, Dimensions } from "react-native";
import styles from "./styles";

const { width } = Dimensions.get("screen");

const Header = ({title}) => {
    
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
}


export default Header;

