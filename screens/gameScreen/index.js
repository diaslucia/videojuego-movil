import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";
import Card from "../../components/card/index";

const generateRandomNumber = (min, max, exclude) => {
    min= Math.ceil(min);
    max= Math.floor(max);
    const randomNum = Math.floor(Math.random() * (max - min) + min);
    if(randomNum === exclude) {
        return generateRandomNumber(min, max, exclude)
    } else {
        return randomNum
    }
}

const GameScreen = ( {userOption} ) => {
    const [currentGuess,setCurrentGuess] = useState(generateRandomNumber(1, 100, userOption))

    return(
        <View style={styles.gameScreenContainer}>
            <Text style={styles.gameScreenTitle}>La suposición del{'\n'}oponente es {currentGuess}</Text>
            <Card style={styles.gameScreenCard}>
                <Button
                title="Mayor"
                color="#c2b2a7"
                onPress={() => null}
                />
                <Button
                title="Menor"
                color="#c2b2a7"
                onPress={() => null}
                />
            </Card>

        </View>
    );
}

export default GameScreen;