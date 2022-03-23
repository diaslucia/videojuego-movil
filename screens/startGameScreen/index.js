import React, { useState } from "react";
import { View, Text, Button, TouchableWithoutFeedback, Keyboard } from "react-native";
import styles from "./styles";
import Card from "../../components/card/index";
import Input from "../../components/textInput/index";

const StartGameScreen = ( { onStartGame } ) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState("");

    const handleInputNumber = (value) => {
        setEnteredValue(value.replace(/[^0-9]/g), '')
    }

    const handleResetInput = () => {
        setEnteredValue("");
    }

    const handleConfirmInput = () => {
        const chosenNumber = parseInt(enteredValue);
        if(chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) return
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue("");
        Keyboard.dismiss();
    }

    const confirmedOutput = confirmed ? (
        <Card style={styles.newCard}>
            <Text style={styles.confirmTitle}>Elegiste el número{'\n'}{selectedNumber}</Text>
            <View>
                <Button
                title='Empezar Juego'
                color="#c2b2a7"
                onPress={() => onStartGame(selectedNumber)}/>
            </View>
        </Card>
    ) : null;

    return(
        <TouchableWithoutFeedback
        onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.mainScreenContainer}>
            <Card>
                <Text style={styles.mainScreenTitle}>Elegí un número</Text>
                <Input
                placeholder="Ejemplo: 17"
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                maxLength={2}
                onChangeText={handleInputNumber}
                returnKeyType="done"
                value={enteredValue}
                />
                <View style={styles.buttonContainer}>
                    <Button
                    title="Limpiar"
                    color="#c2b2a7"
                    onPress={handleResetInput}/>
                    <Button
                    title="Confirmar"
                    color="#c2b2a7"
                    onPress={handleConfirmInput}/>
                </View>
            </Card>
            {confirmedOutput}
        </View>

        </TouchableWithoutFeedback>
    );
}

export default StartGameScreen;