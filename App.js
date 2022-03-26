import React, { useState } from "react";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";

import Header from "./components/header/index";
import StartGameScreen from "./screens/startGameScreen/index";
import GameScreen from "./screens/gameScreen/index";
import GameOverScreen from "./screens/gameOver/index";

const App = () => {
  const [userNumber,setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const [loaded] = useFonts({
    Megrim: require("./assets/fonts/Megrim-Regular.ttf"),
    Raleway: require("./assets/fonts/Raleway-Regular.ttf"),
  });
  
  if (!loaded) {
    return null;
  }

  const handlerStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  const handlerGameOver = (numRounds) => {
    setGuessRounds(numRounds);
  }

  const handlerRestart = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  let content = <StartGameScreen onStartGame={handlerStartGame}/>

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userOption={userNumber} onGameOver={handlerGameOver}/>
  } else if(guessRounds > 0){
    content = <GameOverScreen rounds={guessRounds} choice={userNumber} onRestart={handlerRestart}/>
  }
  
  return (
    <View style={{flex: 1}}>
      <Header 
      title="VAMOS A JUGAR"
       />
      {content}
    </View>
  );
}

export default App;