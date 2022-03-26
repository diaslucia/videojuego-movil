import React from "react";
import { View, Image, Button, Text } from "react-native";
import styles from "./styles";
import gameOver from "../../assets/image/over.jpg";

import Card from "../../components/card/index";

const GameOverScreen = ( { rounds, choice, onRestart }) => {
    return(
        <View style={styles.gameOverContainer}>
            <Image style={styles.imageGameOver} source={gameOver}/>
            <Card styles={styles.gameOverCard}>
                <Text style={styles.title}>Intentos: {rounds}</Text>
                <Text style={styles.subtitle}>{choice}</Text>
                <View style={styles.buttonContainer}>
                    <Button
                    title="Reiniciar"
                    color="#c2b2a7"
                    onPress={onRestart}/>
                </View>
            </Card>
        </View>
    );
}

export default GameOverScreen;