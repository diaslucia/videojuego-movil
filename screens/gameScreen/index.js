import React, { useState, useRef, useEffect } from "react";
import { View, Text, Button, Alert } from "react-native";
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

const GameScreen = ( { userOption, onGameOver } ) => {
    const [currentGuess,setCurrentGuess] = useState(generateRandomNumber(1, 100, userOption))
    const [rounds, setRounds] = useState(0);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if(currentGuess === userOption)onGameOver(rounds)
    }, [currentGuess, userOption, onGameOver])

    const handlerNextGuess = (direction) => {
        if(
            (direction === "lower" && currentGuess < userOption) ||
            (direction === "greater" && currentGuess > userOption)
        ){
            Alert.alert("No mientas...", " tu sabes que no es verdad", [{text: "¡Disculpe!"}, {text: "Cancelar"}]);
        }
        if(direction === "lower"){
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess
        }
        const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber);
        setRounds(current => current + 1);
        }

    return(
        <View style={styles.gameScreenContainer}>
            <Text style={styles.gameScreenTitle}>La suposición del{'\n'}oponente es {currentGuess}</Text>
            <Card style={styles.gameScreenCard}>
                <Button
                title="Mayor"
                color="#c2b2a7"
                onPress={() => handlerNextGuess("greater")}
                />
                <Button
                title="Menor"
                color="#c2b2a7"
                onPress={() => handlerNextGuess("lower")}
                />
            </Card>

        </View>
    );
}

export default GameScreen;