import React from "react";
import { View, TextInput } from "react-native";
import styles from "./styles";

const Input = ({placeholder, ...props}) => {
    return(
        <View>
            <TextInput style={styles.mainScreenInput}
            placeholder={placeholder}
            {...props}/>
        </View>
            
    );
}

export default Input;